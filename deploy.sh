#!/bin/bash
# 零停机蓝绿部署脚本 - peng-ip-website
# 用法: bash deploy.sh

set -e

APP_DIR="/var/www/peng-ip-website"
APP_NAME="peng-ip-website"
NGINX_CONF="/etc/nginx/sites-enabled/peng-website"
HEALTH_TIMEOUT=30  # 健康检查最多等待秒数

# 检测当前活跃端口
CURRENT_PORT=$(pm2 jlist 2>/dev/null | python3 -c "
import sys, json
procs = json.load(sys.stdin)
for p in procs:
    if p.get('name') == '${APP_NAME}':
        env = p.get('pm2_env', {})
        port = env.get('PORT') or env.get('env', {}).get('PORT', '3000')
        print(port)
        break
" 2>/dev/null || echo "3000")

# 蓝绿切换
if [ "$CURRENT_PORT" = "3000" ]; then
    NEW_PORT=3100
    OLD_PM2_NAME="${APP_NAME}"
    NEW_PM2_NAME="${APP_NAME}-new"
else
    NEW_PORT=3000
    OLD_PM2_NAME="${APP_NAME}"
    NEW_PM2_NAME="${APP_NAME}-new"
fi

echo "▶ 当前端口: $CURRENT_PORT → 新端口: $NEW_PORT"

# 1. 拉取最新代码
echo "▶ 拉取代码..."
cd "$APP_DIR"
git pull

# 2. 安装依赖（只在 package-lock.json 变化时才装）
if git diff HEAD@{1} HEAD --name-only 2>/dev/null | grep -q "package-lock.json"; then
    echo "▶ 安装依赖..."
    npm ci --production=false
fi

# 3. Build（在后台，不影响当前服务）
echo "▶ 开始 build（当前服务不中断）..."
npm run build

# 4. 启动新实例
echo "▶ 启动新实例 (端口 $NEW_PORT)..."
PORT=$NEW_PORT pm2 start npm --name "$NEW_PM2_NAME" -- start
pm2 save

# 5. 健康检查
echo "▶ 健康检查..."
ELAPSED=0
until curl -sf "http://127.0.0.1:$NEW_PORT" > /dev/null 2>&1; do
    if [ $ELAPSED -ge $HEALTH_TIMEOUT ]; then
        echo "✗ 健康检查超时，回滚！"
        pm2 delete "$NEW_PM2_NAME" 2>/dev/null || true
        exit 1
    fi
    sleep 2
    ELAPSED=$((ELAPSED + 2))
done
echo "✓ 新实例健康"

# 6. 切换 Nginx upstream
echo "▶ 切换 Nginx 流量到端口 $NEW_PORT..."
# 替换 nginx 配置中的端口（3000 ↔ 3100）
sed -i "s/proxy_pass http:\/\/127\.0\.0\.1:$CURRENT_PORT/proxy_pass http:\/\/127.0.0.1:$NEW_PORT/g" "$NGINX_CONF"
nginx -t && nginx -s reload
echo "✓ Nginx 已切换"

# 7. 停掉旧实例，重命名新实例
echo "▶ 停止旧实例..."
pm2 delete "$OLD_PM2_NAME" 2>/dev/null || true
pm2 rename "$NEW_PM2_NAME" "$APP_NAME" 2>/dev/null || true
pm2 save

echo ""
echo "✅ 部署完成！当前服务端口: $NEW_PORT"
