import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './aesthetic.module.scss';

export const metadata: Metadata = {
  title: '医美AI落地训练营（培训 + 共创交付）｜带着问题来，带着产品走｜鹏哥',
  description: '面向医美医生、机构老板与咨询团队的医美+AI主题培训：围绕私域、公域、素材、沟通、直播等场景，2-3天技能训练+共创交付一个可用的AI工具/流程。',
};

export default function AestheticAITrainingPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>医美 + AI 主题培训 · 培训 + 共创交付</div>
          <h1 className={styles.title}>医美AI落地训练营</h1>
          <p className={styles.subtitle}>
            这不仅是培训，更是共创交付营：带着你的场景和问题来，2天或3天后带着可落地的产品/流程回去。
            我们会在训练过程中补齐你真正需要的AI技能（提示词、工作流、评测与风控、落地方法），
            并由一线、拥有成功落地经验的医美AI导师陪你把方案做出来、跑通、交付。
          </p>

          <div className={styles.heroActions}>
            <a className={styles.primaryBtn} href="#contact">咨询报名</a>
            <Link className={styles.secondaryBtn} href="/training-aesthetic-ai-brief">先看简约版（600字）</Link>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCard}><div className={styles.heroVal}>2-3天</div><div className={styles.heroLabel}>短周期共创交付</div></div>
            <div className={styles.heroCard}><div className={styles.heroVal}>1个+</div><div className={styles.heroLabel}>可跑原型/可复用流程</div></div>
            <div className={styles.heroCard}><div className={styles.heroVal}>全链路</div><div className={styles.heroLabel}>私域/公域/素材/沟通/直播</div></div>
            <div className={styles.heroCard}><div className={styles.heroVal}>可复制</div><div className={styles.heroLabel}>SOP + 模板 + 风控</div></div>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>典型场景（你提一个，我们做一个）</h2>
          <p className={styles.sectionSubtitle}>围绕真实业务场景，把“想提效”变成“可交付工具/流程”。</p>

          <div className={styles.sloganBox}>
            <div className={styles.sloganTitle}>口号：AI≠假案例，AI在医美的应用远不止“讲案例/造素材”</div>
            <div className={styles.sloganText}>
              很多人把“医美+AI”直观理解成“假案例/假素材”，这是最浅显、也最容易误解的一种形式。
              我们强调：AI在医美的应用是多元、正规、可审计的——比如3D人脸建模与“看脸”类产品（如脸觉），
              也比如把咨询录音做结构化分析，找出话术、节奏、异议处理的提升点，从而提高成单率。
              还包括：AI生成患者康复过程图用于医患沟通；AI做术后效果模拟/术前术后对比图，用于沟通与预期管理（不用于非法宣传）。
              这些都是合法合规的AI落地方式。
            </div>
          </div>
          <div className={styles.grid}>
            {[
              {
                t: 'AI + 私域管理',
                items: ['客户分层与标签体系（新客/复购/沉默/高客单）', '咨询跟进任务清单（自动生成+提醒）', '复购/转介绍SOP（可控口径）'],
              },
              {
                t: 'AI + 公域获客',
                items: ['内容选题与脚本流水线（短视频/图文/直播预热）', '线索收集与分发（表单/CRM对接）', '竞品拆解与账号策略'],
              },
              {
                t: 'AI + 素材管理',
                items: ['案例素材归档（按项目/人群/痛点/话术）', '一键检索复用（脚本/封面/标题）', '素材合规清单与风险提示'],
              },
              {
                t: 'AI + 医患沟通',
                items: ['咨询SOP：问诊要点→方案解释→注意事项', '风险提示与边界表达（避免踩线）', '术后随访话术与提醒（可接表单）'],
              },
              {
                t: 'AI + 直播（医美直播）',
                items: ['直播脚本：开场→价值→案例→互动→转化', '控场提示卡：节奏、问题应对、引导下单', '直播复盘：提取高转化片段与优化清单'],
              },
              {
                t: 'AI + 团队协作',
                items: ['把个人能力变成团队SOP（可交接）', '新人培训材料自动化（知识库+问答）', '版本管理与留痕（便于复盘）'],
              },
            ].map((b) => (
              <div key={b.t} className={styles.card}>
                <div className={styles.cardTitle}>{b.t}</div>
                <ul className={styles.list}>
                  {b.items.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>讲师介绍：鹏哥（医生流量合伙人）</h2>
          <p className={styles.sectionSubtitle}>不讲“AI 概念”，只讲“能拿去赚钱的落地系统”。</p>

          <div className={styles.profileRow}>
            <div className={styles.profileCard}>
              <div className={styles.profileKicker}>你来是为了增长，我来是为了让你增长得更快、更稳、更可复制</div>
              <div className={styles.profileTitle}>10年医疗行业深耕，从医药销售到AI创业，再到医生IP流量运营</div>
              <div className={styles.profileText}>
                我做过销售、做过产品、做过增长，也踩过坑。
                这次训练营的目标很明确：把“医美获客、内容生产、咨询转化、复购转介绍”这些关键链路，
                用 AI 做成可交付、可复用、可复制的 SOP 和工具。
              </div>
              <ul className={styles.bullets}>
                <li>不是教你“写提示词”，而是把你的真实场景做成一套跑得动的系统</li>
                <li>不是交付 PPT，而是交付：模板库 + SOP + 复盘方法 + 风控边界</li>
                <li>目标是：团队能用、新人能学、门店能复制、数据能复盘</li>
              </ul>
            </div>

            <div className={styles.profileCard}>
              <div className={styles.profileKicker}>你会看到的作品（本站 + 脸诀美学）</div>
              <div className={styles.profileTitle}>我做的不只是培训，我还做产品</div>
              <div className={styles.profileText}>
                你可以先看我已经上线跑通的工具与项目：一部分在 pengip.com，另一部分在脸诀美学（lianjue.net）。
                训练营里我们会用同样的方法，把你的“业务问题”变成“可用的工具/流程”。
              </div>
              <div className={styles.heroActions} style={{ marginTop: 12 }}>
                <a className={styles.primaryBtn} href="#works">先看作品</a>
                <a className={styles.secondaryBtn} href="#contact">直接咨询报名</a>
              </div>
            </div>
          </div>

          <h2 className={styles.sectionTitle} style={{ marginTop: 26 }}>交付与验收（什么叫“可运行/可用”）</h2>
          <div className={styles.kpiGrid}>
            {[
              { k: '输入/输出清晰', v: '明确输入与输出格式，稳定产出可用内容/话术/任务清单/表格。' },
              { k: 'SOP 可交接', v: '谁来用、怎么用、注意事项、必须人工审核点，都写清楚。' },
              { k: '可复现', v: '现场演示跑通，并交付录屏/交付包（链接/脚本/模板/流程图）。' },
              { k: '可迭代', v: '给到评测方法、失败样本记录方式与下一步迭代清单。' },
            ].map((x) => (
              <div key={x.k} className={styles.kpiItem}>
                <div className={styles.kpiKey}>{x.k}</div>
                <div className={styles.kpiVal}>{x.v}</div>
              </div>
            ))}
          </div>
          <div className={styles.noteBox}>
            承诺“强但有边界”：在满足基本前提（素材/权限/时间投入）的情况下，至少交付1个可跑原型或可复用流程；
            如遇客观限制无法当场上线，也会兜底交付：需求文档 + 原型/流程图 + 模板库 + 下一步清单。
          </div>
        </div>
      </section>

      <section className={styles.section} id="works">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>我的作品（可点击体验）</h2>
          <p className={styles.sectionSubtitle}>这些不是“展示”，是线上在跑的产品与工具。你看完会更清楚：我们在训练营里交付的到底是什么。</p>

          <div className={styles.workGrid}>
            <a className={styles.workCard} href="https://www.lianjue.net" target="_blank" rel="noopener noreferrer">
              <div className={styles.workTag}>外部作品 · 脸诀美学</div>
              <div className={styles.workTitle}>脸诀美学（lianjue.net）</div>
              <p className={styles.workDesc}>高端 3D 数字化面部美学分析系统，用“看脸”的方式把审美与方案沟通结构化。</p>
              <div className={styles.workMeta}>
                <span className={`${styles.pill} ${styles.pillTeal}`}>3D</span>
                <span className={`${styles.pill} ${styles.pillTeal}`}>数字化面部分析</span>
                <span className={`${styles.pill} ${styles.pillTeal}`}>方案沟通</span>
              </div>
            </a>

            <a className={styles.workCard} href="https://pengip.com/xhs-doctor" target="_blank" rel="noopener noreferrer">
              <div className={styles.workTag}>本站作品 · 工具</div>
              <div className={styles.workTitle}>医生海报科普图文生成器</div>
              <p className={styles.workDesc}>一键生成可直接发布的小红书科普图文，支持对标笔记与多版式生成。</p>
              <div className={styles.workMeta}>
                <span className={`${styles.pill} ${styles.pillPink}`}>内容增长</span>
                <span className={`${styles.pill} ${styles.pillPink}`}>图文海报</span>
                <span className={`${styles.pill} ${styles.pillPink}`}>小红书</span>
              </div>
            </a>

            <a className={styles.workCard} href="https://pengip.com/prevsim/" target="_blank" rel="noopener noreferrer">
              <div className={styles.workTag}>本站作品 · 工具</div>
              <div className={styles.workTitle}>PreVSim 术前模拟助手</div>
              <p className={styles.workDesc}>用于医患沟通的术前效果模拟与方案对比（强调预期管理，不用于虚假宣传）。</p>
              <div className={styles.workMeta}>
                <span className={`${styles.pill} ${styles.pillOrange}`}>沟通转化</span>
                <span className={`${styles.pill} ${styles.pillOrange}`}>方案对比</span>
                <span className={`${styles.pill} ${styles.pillOrange}`}>预期管理</span>
              </div>
            </a>

            <a className={styles.workCard} href="https://pengip.com/healvision/" target="_blank" rel="noopener noreferrer">
              <div className={styles.workTag}>本站作品 · 工具</div>
              <div className={styles.workTitle}>healvision 康复历程可视化</div>
              <p className={styles.workDesc}>生成分阶段康复历程说明与对比图，辅助医患沟通（禁止虚假宣传）。</p>
              <div className={styles.workMeta}>
                <span className={`${styles.pill} ${styles.pillOrange}`}>术后沟通</span>
                <span className={`${styles.pill} ${styles.pillOrange}`}>阶段可视化</span>
                <span className={`${styles.pill} ${styles.pillOrange}`}>风险边界</span>
              </div>
            </a>

            <a className={styles.workCard} href="https://pengip.com/motionx" target="_blank" rel="noopener noreferrer">
              <div className={styles.workTag}>本站作品 · 工具</div>
              <div className={styles.workTitle}>MicroMotion 肖像动态化</div>
              <p className={styles.workDesc}>把静态照片生成逼真微动作视频，适合短视频素材、动态封面与展示。</p>
              <div className={styles.workMeta}>
                <span className={`${styles.pill} ${styles.pillPink}`}>素材生产</span>
                <span className={`${styles.pill} ${styles.pillPink}`}>视频</span>
                <span className={`${styles.pill} ${styles.pillPink}`}>动态封面</span>
              </div>
            </a>

            <a className={styles.workCard} href="https://pengip.com/wechat-writer" target="_blank" rel="noopener noreferrer">
              <div className={styles.workTag}>本站作品 · 工具</div>
              <div className={styles.workTitle}>公众号长文生成器</div>
              <p className={styles.workDesc}>URL 仿写 / 文献解读 / 主题生成，快速产出可发布的公众号长文内容。</p>
              <div className={styles.workMeta}>
                <span className={`${styles.pill} ${styles.pillPink}`}>内容生产</span>
                <span className={`${styles.pill} ${styles.pillPink}`}>公众号</span>
                <span className={`${styles.pill} ${styles.pillPink}`}>长文</span>
              </div>
            </a>
          </div>

          <div className={styles.noteBox} style={{ marginTop: 16 }}>
            说明：作品页外链默认新窗口打开。想把某个作品换成更重点的页面（比如脸诀内页/案例页），你给我链接我再替换。
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>2天版 / 3天版（按需选择）</h2>
          <p className={styles.sectionSubtitle}>2天：问题明确，冲刺交付。3天：需要补底层能力、评测方法与落地路径。</p>

          <div className={styles.dual}>
            <div className={styles.dualCol}>
              <div className={styles.dualHeader}>2天版（交付冲刺）</div>
              <div className={styles.dualBody}>
                <div className={styles.day}><div className={styles.dayTitle}>Day 1 · 需求定义 + 原型</div><ul><li>需求澄清：输入/输出/约束/验收</li><li>素材准备：案例/话术/表单/标签口径</li><li>原型搭建：先跑通，再优化</li></ul></div>
                <div className={styles.day}><div className={styles.dayTitle}>Day 2 · 验证评测 + 交付</div><ul><li>用真实数据验证，记录失败模式</li><li>SOP固化：复核点、风控、留痕</li><li>交付：原型/流程 + 录屏 + 模板 + 迭代清单</li></ul></div>
              </div>
            </div>
            <div className={styles.dualCol}>
              <div className={styles.dualHeader}>3天版（打地基 + 交付）</div>
              <div className={styles.dualBody}>
                <div className={styles.day}><div className={styles.dayTitle}>Day 1 · 能力地基</div><ul><li>提示词与工作流：可控、可复用</li><li>评测方法：质量指标、失败样本</li><li>合规与风控边界（表达、素材、承诺）</li></ul></div>
                <div className={styles.day}><div className={styles.dayTitle}>Day 2 · 原型共创</div><ul><li>原型开发：私域/公域/素材/直播模块</li><li>流程化：关键节点固化</li><li>对齐团队角色与分工</li></ul></div>
                <div className={styles.day}><div className={styles.dayTitle}>Day 3 · 部署复制</div><ul><li>质量打磨：风险点与人工复核闸门</li><li>上线交付：文档、录屏、版本管理</li><li>复制路径：推广到团队/门店/项目组</li></ul></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div>
              <h2 className={styles.ctaTitle}>准备好把你的场景做成产品了吗？</h2>
              <p className={styles.ctaText}>添加微信 <strong>peng_ip</strong>，备注“医美AI落地训练营”。</p>
              <div className={styles.copyBox}>
                <div className={styles.copyTitle}>咨询模板（建议复制）</div>
                <pre className={styles.copyPre}>{`备注：医美AI落地训练营
角色（医生/老板/运营/咨询）：___
城市/机构：___
我想解决的场景问题（越具体越好）：___
我能提供的素材/数据：___
希望做2天还是3天：___`}</pre>
              </div>
            </div>
            <div className={styles.side}>
              <div className={styles.sideTitle}>你的目标</div>
              <div className={styles.sideText}>技能训练 + 共创交付：把AI真正落到私域、公域、素材、沟通、直播这些关键场景。</div>
              <Link className={styles.sideLink} href="/training-aesthetic-ai-brief">先看简约版 →</Link>
              <Link className={styles.sideLink} href="/training">返回培训列表 →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
