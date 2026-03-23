import { Metadata } from 'next';
import styles from './doctor.module.scss';

export const metadata: Metadata = {
  title: '医生IP打造实战培训 — 鹏哥',
  description: '从零开始，护士辅助医生做IP的全流程方法论。10+年医疗行业深耕，100+位医生IP孵化经验。',
};

export default function TrainingDoctorIPPage() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>2025 实战培训课程</div>
          <h1 className={styles.heroTitle}>医生IP打造实战培训</h1>
          <p className={styles.heroSubtitle}>从零开始，护士辅助医生做IP的全流程方法论</p>
          <div className={styles.statsRow}>
            {[['10+年', '医疗行业深耕'], ['100+位', '医生IP孵化'], ['千万级', '创业融资经验']].map(([num, label]) => (
              <div key={label} className={styles.statItem}>
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.container}>

        {/* 课程大纲 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📚 课程大纲</h2>
          <p className={styles.sectionSubtitle}>五大板块，从认知到实操</p>
          <div className={styles.outlineList}>
            {[
              { num: '01', title: '核心认知', desc: '为什么医生必须做IP？完成>完美的底层逻辑' },
              { num: '02', title: '场景记录', desc: '把日常工作变成内容金矿，护士拍摄全攻略' },
              { num: '03', title: '口播方法论', desc: '热点追踪、选题公式、录制技巧、发布策略' },
              { num: '04', title: '平台规则', desc: '抖音&小红书红线详解，避坑指南' },
              { num: '05', title: 'AI工具赋能', desc: '声记、AutoClip实操教学' },
            ].map((item) => (
              <div key={item.num} className={styles.outlineItem}>
                <div className={styles.outlineNum}>{item.num}</div>
                <div>
                  <div className={styles.outlineTitle}>{item.title}</div>
                  <div className={styles.outlineDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Part 01 核心认知 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Part 01 · 核心认知</h2>
          <p className={styles.sectionSubtitle}>为什么医生必须做IP？不做IP的代价是什么？</p>

          <div className={styles.infoBox}>
            <p>患者找医生的方式已经从"熟人推荐"变成了"刷手机搜索"。没有线上存在感的医生，正在被患者遗忘。</p>
            <div className={styles.dataGrid}>
              <div className={styles.dataCard}><div className={styles.dataNum}>73%</div><div className={styles.dataLabel}>患者就诊前会在网上搜索医生信息</div></div>
              <div className={styles.dataCard}><div className={styles.dataNum}>10亿+</div><div className={styles.dataLabel}>抖音医疗类内容日均播放量</div></div>
              <div className={styles.dataCard}><div className={styles.dataNum}>翻倍</div><div className={styles.dataLabel}>有IP医生的门诊量增长</div></div>
            </div>
          </div>

          <div className={styles.twoCol}>
            <div className={styles.listCard}>
              <h3>🏥 行业趋势</h3>
              <ul>
                <li>公立医院鼓励医生做科普</li>
                <li>民营机构把医生IP作为核心获客渠道</li>
                <li>不做IP = 放弃增量患者</li>
              </ul>
            </div>
            <div className={styles.listCard}>
              <h3>💰 收入天花板</h3>
              <ul>
                <li>有IP的医生：门诊量翻倍、手术排期满</li>
                <li>副业收入可观</li>
                <li>没IP的医生：只能等医院分配患者</li>
              </ul>
            </div>
          </div>

          <div className={styles.tip}>
            💡 <strong>第一法则：完成 &gt; 完美</strong><br />
            我见过太多医生花3个月"准备"，结果一条都没发。而那些第一天就开始发的医生，3个月后已经有几万粉丝了。差距就是这么拉开的。
          </div>

          <div style={{marginTop: '1.5rem'}}>
            <h3 style={{fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)'}}>医生IP的三个层次</h3>
            <div className={styles.levelList}>
              {[
                { icon: '🌱', level: 'Level 1', title: '存在感', period: '1-3个月', desc: '每周发2-3条，内容以科普为主', effect: '搜索你的名字能找到内容，患者觉得你"靠谱"' },
                { icon: '🚀', level: 'Level 2', title: '影响力', period: '3-6个月', desc: '每天发1-2条，追热点+深度科普', effect: '粉丝过万，开始有患者慕名而来' },
                { icon: '👑', level: 'Level 3', title: '品牌化', period: '6-12个月', desc: '矩阵运营，多平台+私域+线下', effect: '门诊爆满，副业收入超过主业' },
              ].map((item) => (
                <div key={item.level} className={styles.levelItem}>
                  <span className={styles.levelIcon}>{item.icon}</span>
                  <div style={{flex: 1}}>
                    <div className={styles.levelHeader}>
                      <span className={styles.levelBadge}>{item.level}</span>
                      <span className={styles.levelTitle}>{item.title}</span>
                      <span className={styles.levelPeriod}>{item.period}</span>
                    </div>
                    <div className={styles.levelDesc}>{item.desc}</div>
                    <div className={styles.levelEffect}>效果：{item.effect}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 02 场景记录 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Part 02 · 场景记录</h2>
          <p className={styles.sectionSubtitle}>把你的日常工作变成内容金矿</p>

          <div className={styles.twoCol}>
            <div className={styles.listCard}>
              <h3>📹 高价值场景清单</h3>
              <ul>
                {['门诊接诊 — 与患者沟通的真实过程（脱敏）', '查房巡视 — 讲解病情、与患者互动', '手术准备 — 术前讨论、器械准备', '术后复查 — 恢复情况、医嘱交代', '科室讨论 — 疑难病例分析', '学术会议 — 培训、讲座现场', '日常碎片 — 换白大褂、喝咖啡、写病历'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className={styles.listCard}>
              <h3>⭐ 内容价值排序</h3>
              <ul>
                {['S级：真实门诊/手术场景（最稀缺）', 'A级：患者沟通、术后回访', 'B级：科普讲解、热点解读', 'C级：日常vlog、医院环境'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>

          <div style={{marginTop: '1.5rem'}}>
            <h3 style={{fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)'}}>护士/助理拍摄全攻略</h3>
            <div className={styles.twoCol}>
              <div className={styles.listCard}>
                <h3>📱 拍摄设备</h3>
                <ul>
                  {['手机就够了（iPhone/华为/小米均可）', '领夹麦克风（50-100元，收音质量翻倍）', '手机支架/三脚架（固定机位用）', '不需要专业相机、灯光、稳定器'].map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div className={styles.listCard}>
                <h3>🎬 拍摄技巧</h3>
                <ul>
                  {['横屏拍摄（适合抖音/B站）', '竖屏拍摄（适合小红书/视频号）', '固定机位 + 手持跟拍结合', '多角度拍，后期选最好的', '每段素材控制在1-5分钟'].map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
            <div style={{marginTop: '1rem'}}>
              <div className={styles.warningCard}>
                <h3>⚠️ 拍摄必须注意</h3>
                <ul>
                  {['患者面部必须打码或获得书面授权', '病历信息不能入镜', '手术场景避免血腥画面', '不拍摄其他医护人员（除非同意）', '注意医院规定，部分区域禁止拍摄'].map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
          </div>

          <div style={{marginTop: '1.5rem'}}>
            <h3 style={{fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)'}}>素材 → 内容的转化流程</h3>
            <div className={styles.flowRow}>
              {['📱 拍摄素材', '🗂️ 筛选标记', '✂️ 剪辑加工', '📝 配文案字幕', '📤 多平台发布'].map((s, i, arr) => (
                <>
                  <div key={s} className={styles.flowStep}>{s}</div>
                  {i < arr.length - 1 && <span key={`arrow-${i}`} className={styles.flowArrow}>→</span>}
                </>
              ))}
            </div>
            <div className={styles.tip}>
              💡 <strong>一鱼多吃原则：</strong>30分钟门诊录像 → 剪出3-5条短视频；同一段素材 → 抖音版（横屏60秒）+ 小红书版（竖屏+图文）；录音转文字 → 口播脚本 / 图文笔记 / 公众号文章。
            </div>
          </div>
        </section>

        {/* Part 03 口播方法论 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Part 03 · 口播方法论</h2>
          <p className={styles.sectionSubtitle}>紧随热点，快速涨粉的核心技能</p>

          <div className={styles.infoBox}>
            <p><strong>热点 + 专业视角 = 爆款口播</strong><br />口播是医生涨粉最快的方式。不需要专业设备，手机前置摄像头+自然光就够了。</p>
            <div className={styles.dataGrid}>
              <div className={styles.dataCard}><div className={styles.dataNum}>60-90秒</div><div className={styles.dataLabel}>最佳时长，说清一个点</div></div>
              <div className={styles.dataCard}><div className={styles.dataNum}>30分钟</div><div className={styles.dataLabel}>录+发全流程时间</div></div>
              <div className={styles.dataCard}><div className={styles.dataNum}>3秒</div><div className={styles.dataLabel}>开头必须抓住观众</div></div>
            </div>
          </div>

          <h3 style={{fontWeight: 700, margin: '1.5rem 0 1rem', color: 'var(--text-primary)'}}>📋 万能选题公式</h3>
          <div className={styles.formulaList}>
            {[
              '"很多人不知道的是……"',
              '"今天门诊遇到一个……"',
              '"关于XX，90%的人都搞错了"',
              '"作为XX科医生，我必须说……"',
              '"这个手术到底值不值得做？"',
            ].map(f => <div key={f} className={styles.formulaItem}>{f}</div>)}
          </div>

          <h3 style={{fontWeight: 700, margin: '1.5rem 0 1rem', color: 'var(--text-primary)'}}>🎬 开头模板（前3秒）</h3>
          <div className={styles.twoCol}>
            <div className={styles.listCard}>
              <h3>高效开头示例</h3>
              <ul>
                {[
                  '故事开头："今天门诊来了一个患者，她问我……"',
                  '问题开头："双眼皮手术最大的坑是什么？"',
                  '悬念开头："我做了15年整形，最后悔推荐的一个项目是……"',
                ].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className={styles.listCard}>
              <h3>⏰ 最佳发布时间</h3>
              <ul>
                {[
                  '抖音：12:00-13:00 / 18:00-20:00 / 21:00-22:00',
                  '小红书：7:00-9:00 / 12:00-14:00 / 20:00-22:00',
                  '视频号：19:00-21:00（微信生态活跃时段）',
                ].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>

          <h3 style={{fontWeight: 700, margin: '1.5rem 0 1rem', color: 'var(--text-primary)'}}>📅 一周内容日历模板</h3>
          <div className={styles.scheduleGrid}>
            {[
              { day: '周一', content: '口播：周末热点解读\n素材：门诊场景拍摄' },
              { day: '周二', content: '科普：一个常见误区\n素材：查房/手术准备' },
              { day: '周三', content: '案例：患者故事（脱敏）\n素材：术后复查场景' },
              { day: '周四', content: '口播：门诊高频问题\n素材：科室日常vlog' },
              { day: '周五', content: '深度：专业知识讲解\n素材：学术/培训场景' },
              { day: '周末', content: '轻松：医生日常/幕后\n整理下周选题+素材库' },
            ].map(item => (
              <div key={item.day} className={styles.scheduleCard}>
                <div className={styles.scheduleDay}>{item.day}</div>
                <div className={styles.scheduleItems} style={{whiteSpace: 'pre-line'}}>{item.content}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Part 04 平台规则 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Part 04 · 平台规则</h2>
          <p className={styles.sectionSubtitle}>抖音 & 小红书的红线，踩了就凉</p>

          <div className={styles.twoCol}>
            <div className={styles.warningCard}>
              <h3>🚫 抖音绝对不能碰</h3>
              <ul>
                {['伪造/挂靠执业资质', '术前术后对比图（直接展示）', '承诺治疗效果、夸大疗效', '展示手术过程血腥画面', '引导私信/加微信导流', '低俗擦边、不当蹭热点', '推荐具体药品/器械品牌', '代替患者做医疗决策'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className={styles.warningCard}>
              <h3>🚫 小红书严格禁止</h3>
              <ul>
                {['私立医美机构不能做专业认证', '仅公立三甲整形/皮肤科主治及以上可认证', '矩阵号、挂靠账号一律封禁', '违规导流导诊（引导加微信）', '不合规机构推广医美项目', '非法上门服务（代打水光针等）', '未经授权使用患者照片'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>

          <div className={styles.tip} style={{marginTop: '1rem'}}>
            ✅ <strong>安全做法：</strong>用真实资质认证，纯科普不带货，案例充分脱敏，不承诺效果，不引导私信。评论区不留联系方式，内容原创拒绝搬运洗稿。
          </div>
        </section>

        {/* Part 05 AI工具 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Part 05 · AI工具赋能</h2>
          <p className={styles.sectionSubtitle}>声记 & AutoClip — 让效率翻倍的秘密武器</p>

          <div className={styles.twoCol}>
            <div className={styles.listCard}>
              <h3>🎙️ 声记 ShengJi</h3>
              <ul>
                {['门诊时打开手机录音，AI自动转成文字', '自动识别医生/患者角色', '查房讲解、与患者沟通要点', '灵感闪现时随口说两句，AI帮你整理', '录音转写 → 提取金句 → 口播脚本', '录音转写 → 整理要点 → 小红书图文'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className={styles.listCard}>
              <h3>✂️ AutoClip</h3>
              <ul>
                {['30分钟门诊录像 → 自动切出精彩片段', '2小时培训回放 → 提取精华短视频', '语音识别，找到有价值的内容段落', '去掉停顿、空白、无意义片段', '自动添加字幕', '1小时素材只需15分钟处理，产出3-5条短视频'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* 新手10个错误 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>⚠️ 新手最常犯的10个错误</h2>
          <div className={styles.twoCol}>
            <div className={styles.warningCard}>
              <h3>内容层面</h3>
              <ul>
                {['追求完美，迟迟不发第一条', '内容太专业，患者看不懂', '没有固定风格，今天搞笑明天严肃', '一条视频塞太多信息', '标题不吸引人，封面不讲究'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className={styles.warningCard}>
              <h3>运营层面</h3>
              <ul>
                {['三天打鱼两天晒网，没有持续性', '不看数据，不知道什么内容受欢迎', '不回复评论，错失互动机会', '急于变现，过早接广告', '只发一个平台，不做多平台分发'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles.tip} style={{marginTop: '1rem'}}>
            最致命的错误：<strong>不开始</strong>。其他错误都可以改，唯独"不开始"无药可救。今天发第一条，就已经超过了90%的医生。
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>❓ 常见问题</h2>
          <div className={styles.faqList}>
            {[
              { q: '我不上镜怎么办？', a: '没有人天生上镜。录10条你就习惯了。患者要的是专业感，不是颜值。穿上白大褂，你就是最上镜的人。' },
              { q: '我怕同行笑话怎么办？', a: '等你粉丝过万、门诊爆满的时候，同行只会后悔没早点开始。先行者永远被质疑，但也永远吃到最大的红利。' },
              { q: '医院不让拍怎么办？', a: '先跟科主任沟通，强调是科普教育。很多医院现在鼓励医生做科普。实在不行，在家录口播也可以。' },
              { q: '没时间怎么办？', a: '录一条口播只要10分钟。护士帮你拍素材、剪辑、发布，你只需要出镜。时间不是问题，优先级才是。' },
              { q: '发了没人看怎么办？', a: '前10条没人看是正常的。坚持发30条，算法会开始推荐你。关键是持续输出，让算法认识你。' },
              { q: '会不会有医疗纠纷风险？', a: '做科普不做诊断，不承诺效果，不暴露患者信息，加免责声明。做到这四点，风险极低。' },
            ].map(item => (
              <div key={item.q} className={styles.faqItem}>
                <div className={styles.faqQ}>Q: {item.q}</div>
                <div className={styles.faqA}>A: {item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 行动清单 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>✅ 今天回去就能开始做的事</h2>
          <div className={styles.actionList}>
            {[
              '注册抖音+小红书账号，完善资料，申请医生认证',
              '下载声记，明天门诊时打开录音',
              '让护士/助理明天拍3段工作场景视频',
              '今晚录一条60秒口播，讲今天最有感触的一个病例',
              '把第一条视频发出去。不完美没关系，发了就是胜利',
              '建一个素材文件夹，开始积累日常素材',
              '加入鹏哥的医美AI交流群，持续学习和交流',
            ].map(item => (
              <div key={item} className={styles.actionItem}>
                <span className={styles.actionCheck}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className={styles.tip} style={{marginTop: '1rem'}}>
            💡 <strong>30天挑战：</strong>给自己定一个30天挑战，连续30天每天发一条内容。30天后你会发现，做IP没有想象中那么难，而你已经超过了99%的同行。
          </div>
        </section>

      </div>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>开始行动吧</h2>
            <p className={styles.ctaSubtitle}>完成比完美重要。今天发第一条，就是最大的胜利。</p>
            <a href="https://pengip.com#contact" className={styles.ctaBtn}>联系鹏哥咨询 →</a>
            <p className={styles.ctaNote}>微信：peng_ip，备注"医生IP培训"</p>
          </div>
        </div>
      </section>

    </main>
  );
}
