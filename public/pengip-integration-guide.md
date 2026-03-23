# PengIP 积分系统对接文档

## 概述

本文档说明如何将第三方应用对接到 PengIP 的激活码和积分系统。对接后，用户在 pengip.com 登录后可以无缝使用你的应用，每次生成图片消耗 10 积分。

---

## 一、系统架构

### 主站信息
- 域名：`https://pengip.com`
- 数据库：SQLite (Prisma ORM)
- 认证方式：JWT Token

### 核心表结构
- `User`：用户表（id, points, subscriptionExpiry）
- `ActivationCode`：激活码表（code, type, points, maxUses, usedCount, status）
- `Tool`：工具表（nameEn, points, tutorialUrl）

---

## 二、对接流程

### 1. 静默登录（autoLogin）

用户在 pengip.com 登录后，你的应用可以通过以下方式自动获取 token：

```javascript
// 页面加载时调用
async function autoLogin() {
  try {
    const response = await fetch("https://pengip.com/api/v1/user/token", {
      credentials: "include"  // 必须携带 cookie
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("user_token", data.token);
        // 隐藏手动输入 token 的界面
        document.getElementById("tokenSection").style.display = "none";
      }
    }
  } catch (error) {
    console.error("Auto login failed:", error);
  }
}

// 在页面加载时执行
window.addEventListener("DOMContentLoaded", autoLogin);
```

**关键点：**
- 必须使用 `credentials: "include"` 才能携带跨域 cookie
- 成功后将 token 存入 localStorage
- 建议隐藏手动输入 token 的界面

---

### 2. 积分消耗接口

每次生成图片时，调用以下接口扣除积分：

**接口：** `POST https://pengip.com/api/v1/proxy/use`

**请求头：**
```
Authorization: Bearer <user_token>
Content-Type: application/json
```

**请求体：**
```json
{
  "software": "your_tool_name"
}
```

**响应示例：**
```json
{
  "success": true,
  "balance": 990
}
```

**错误响应：**
```json
{
  "error": "积分不足"
}
```

---

### 3. 完整示例代码

```javascript
// 生成图片前检查并扣除积分
async function generateImage() {
  const token = localStorage.getItem("user_token");
  
  if (!token) {
    alert("请先登录 pengip.com");
    return;
  }
  
  try {
    // 扣除积分
    const response = await fetch("https://pengip.com/api/v1/proxy/use", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        software: "your_tool_name"  // 替换为你的工具名称
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      alert(data.error || "积分扣除失败");
      return;
    }
    
    console.log(`积分扣除成功，剩余积分：${data.balance}`);
    
    // 继续执行图片生成逻辑
    // ...
    
  } catch (error) {
    console.error("积分扣除失败:", error);
    alert("网络错误，请稍后重试");
  }
}
```

---

## 三、工具注册

### 在主站注册你的工具

联系 Adrian（微信：peng_ip）提供以下信息：

1. **工具英文名**（nameEn）：用于 API 调用，如 `your_tool_name`
2. **工具中文名**（nameCn）：显示名称
3. **消耗积分**：每次生成消耗的积分数（你的情况是 10）
4. **教程链接**（可选）：用户使用指南

Adrian 会在主站后台添加你的工具配置。

---

## 四、查询余额（可选）

如果需要在界面显示用户剩余积分：

**接口：** `GET https://pengip.com/api/v1/user/balance`

**请求头：**
```
Authorization: Bearer <user_token>
```

**响应：**
```json
{
  "balance": 990
}
```

---

## 五、测试流程

### 1. 本地测试
1. 在 pengip.com 注册并登录
2. 获取激活码并激活（联系 Adrian）
3. 访问你的应用，检查是否自动登录
4. 测试生成图片，查看积分是否正确扣除

### 2. 跨域配置
确保你的应用允许来自 pengip.com 的跨域请求：

```javascript
// 如果你有后端，需要设置 CORS
app.use(cors({
  origin: "https://pengip.com",
  credentials: true
}));
```

---

## 六、常见问题

### Q1: autoLogin 失败怎么办？
- 检查是否使用了 `credentials: "include"`
- 确认用户已在 pengip.com 登录
- 检查浏览器控制台是否有跨域错误

### Q2: 积分扣除失败？
- 检查 token 是否有效（可能过期）
- 确认工具名称（software）是否正确
- 检查用户积分是否充足

### Q3: 如何处理 token 过期？
```javascript
// 如果接口返回 401，重新获取 token
if (response.status === 401) {
  await autoLogin();
  // 重试请求
}
```

---

## 七、联系方式

- **技术支持**：微信 peng_ip
- **主站地址**：https://pengip.com
- **管理后台**：https://pengip.com/admin

---

## 附录：完整前端模板

```html
<!DOCTYPE html>
<html>
<head>
  <title>Your App</title>
</head>
<body>
  <div id="tokenSection" style="display: none;">
    <input type="text" id="tokenInput" placeholder="请输入 Token">
    <button onclick="manualLogin()">登录</button>
  </div>
  
  <div id="app">
    <p>剩余积分：<span id="balance">--</span></p>
    <button onclick="generateImage()">生成图片（消耗 10 积分）</button>
  </div>

  <script>
    // 自动登录
    async function autoLogin() {
      try {
        const r = await fetch("https://pengip.com/api/v1/user/token", {
          credentials: "include"
        });
        if (r.ok) {
          const data = await r.json();
          if (data.token) {
            localStorage.setItem("user_token", data.token);
            await updateBalance();
            return;
          }
        }
      } catch(e) {}
      
      // 自动登录失败，显示手动输入
      document.getElementById("tokenSection").style.display = "block";
    }
    
    // 手动登录
    function manualLogin() {
      const token = document.getElementById("tokenInput").value;
      if (token) {
        localStorage.setItem("user_token", token);
        document.getElementById("tokenSection").style.display = "none";
        updateBalance();
      }
    }
    
    // 更新余额显示
    async function updateBalance() {
      const token = localStorage.getItem("user_token");
      if (!token) return;
      
      try {
        const r = await fetch("https://pengip.com/api/v1/user/balance", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        if (r.ok) {
          const data = await r.json();
          document.getElementById("balance").textContent = data.balance;
        }
      } catch(e) {}
    }
    
    // 生成图片
    async function generateImage() {
      const token = localStorage.getItem("user_token");
      if (!token) {
        alert("请先登录");
        return;
      }
      
      try {
        const r = await fetch("https://pengip.com/api/v1/proxy/use", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ software: "your_tool_name" })
        });
        
        const data = await r.json();
        if (!r.ok) {
          alert(data.error || "积分扣除失败");
          return;
        }
        
        alert(`生成成功！剩余积分：${data.balance}`);
        await updateBalance();
        
        // 这里执行实际的图片生成逻辑
        
      } catch(e) {
        alert("网络错误");
      }
    }
    
    // 页面加载时自动登录
    window.addEventListener("DOMContentLoaded", autoLogin);
  </script>
</body>
</html>
```

---

**文档版本：** v1.0  
**更新日期：** 2026-03-06
