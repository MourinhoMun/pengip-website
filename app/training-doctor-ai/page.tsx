import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './doctor-ai.module.scss';

export const metadata: Metadata = {
  title: '医生AI能力训练营｜带着问题来，带着产品走｜鹏哥',
  description:
    '面向医生的AI实战培训：围绕临床与科研真实问题，2-3天完成一个可用的AI工具/工作流，并建立长期AI实践能力。',
};

export default function DoctorAITrainingPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>医生专属 · 实战</div>
          <h1 className={styles.title}>医生AI能力训练营</h1>
          <p className={styles.subtitle}>
            带着问题来，带着产品走。我们以“交付”为目标：在满足基本前提（素材/权限/时间投入）的情况下，
            2天或3天内至少交付1个可运行原型或可复用流程，并给到可继续迭代的模板与SOP。
          </p>
          <p className={styles.subtleNote}>
            如果遇到客观限制导致无法当场上线，我们也会交付：需求文档 + 原型/流程图 + 模板库 + 下一步迭代清单（兜底交付）。
          </p>

          <div className={styles.heroGrid}>
            <div className={styles.heroCard}>
              <div className={styles.heroVal}>2-3天</div>
              <div className={styles.heroLabel}>短周期高强度共创</div>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.heroVal}>1个+</div>
              <div className={styles.heroLabel}>可落地产品/工具</div>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.heroVal}>可复用</div>
              <div className={styles.heroLabel}>方法论 + 模板 + SOP</div>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.heroVal}>长期能力</div>
              <div className={styles.heroLabel}>之后能独立迭代更多工具</div>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a className={styles.primaryBtn} href="#contact">咨询报名</a>
            <Link className={styles.secondaryBtn} href="/training">查看全部培训</Link>
          </div>

          <p className={styles.heroNote}>
            适合：临床一线医生 / 科研型医生 / 科室骨干 / 研究生与住培医生。
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>你会遇到的典型问题（也是我们最常做的）</h2>
          <p className={styles.sectionSubtitle}>
            不是“听课”，是“解决问题”。把你的问题拆到足够具体，我们就能把它做成工具。
          </p>

          <div className={styles.problemGrid}>
            {[
              {
                title: '科研：选题与文献',
                items: [
                  '快速建立某一领域的结构化知识图谱（概念-证据-争议点）',
                  '文献筛选与提取：把PDF批量转成结构化表格（研究设计、样本、结局、统计）',
                  '形成可复用的检索策略、纳排标准、PRISMA工作流',
                ],
              },
              {
                title: '科研：写作与投稿',
                items: [
                  '把你的数据分析结果，转成IMRaD逻辑的写作大纲',
                  '方法学、统计学措辞的“标准段落库”与可替换模板',
                  '审稿意见回复：逐条拆解、对齐证据、给出可执行修改清单',
                ],
              },
              {
                title: '临床：门诊与沟通',
                items: [
                  '门诊高频问题：一键生成患者宣教卡/随访要点（合规口径）',
                  '患者沟通脚本：按不同教育程度/依从性，输出分层解释',
                  '随访表单自动整理：把患者反馈变成可统计的结构化数据',
                ],
              },
              {
                title: '临床：病例与术前术后',
                items: [
                  '病例摘要：把病历信息整理成“交班版/MDT版/汇报版”',
                  '术前风险告知与注意事项：自动生成清单 + 追踪执行',
                  '术后随访：按时间轴生成任务与提醒（可接企业微信/表单）',
                ],
              },
              {
                title: '科普：严肃医学内容生产',
                items: [
                  '把指南/共识，转成“门诊可讲”的科普结构（不夸大）',
                  '图文与短视频脚本：同一主题做多版本（3分钟/1分钟/30秒）',
                  '合规风控清单：避免违规表达、避免暗示疗效与对比营销',
                ],
              },
              {
                title: '工具：把流程做成产品',
                items: [
                  '用AI把一个工作流做成网页小工具（输入-输出-留痕-版本）',
                  '把“个人技能”变成“科室SOP”：可交接、可复制、可审计',
                  '权限与数据安全：分清哪些数据不能上云，如何脱敏与本地化',
                ],
              },
            ].map((block) => (
              <div key={block.title} className={styles.problemCard}>
                <div className={styles.problemTitle}>{block.title}</div>
                <ul className={styles.problemList}>
                  {block.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>我们的承诺：带着产品走（强承诺 + 边界 + 兜底）</h2>
          <div className={styles.promiseGrid}>
            {[
              {
                k: '明确交付物',
                v: '至少1个可运行的工具/工作流（网页工具、表单系统、文档模板库或自动化脚本）。',
              },
              {
                k: '可复用方法论',
                v: '从问题拆解 → 数据准备 → 提示词与流程设计 → 验证 → 迭代 → 部署的完整路径。',
              },
              {
                k: '可持续迭代',
                v: '交付不仅是“能用一次”，而是你回去后还能继续做第2个、第3个工具。',
              },
              {
                k: '安全与合规',
                v: '明确哪些数据不能外发；提供脱敏与本地化方案；内容输出遵循医学科普合规边界。',
              },
            ].map((x) => (
              <div key={x.k} className={styles.promiseItem}>
                <div className={styles.promiseKey}>{x.k}</div>
                <div className={styles.promiseVal}>{x.v}</div>
              </div>
            ))}
          </div>

          <div className={styles.highlightBox}>
            <div className={styles.highlightTitle}>“可运行/可用”的定义（验收标准）</div>
            <p className={styles.highlightText}>
              1) 有明确输入与输出：例如输入“患者随访要点 + 风险提示”，输出“可直接发给患者的宣教卡 + 医生复核清单”。
              2) 有使用说明：谁来用、怎么用、注意什么、哪些内容必须人工复核。
              3) 能在约定环境里复现：现场演示跑通，并交付录屏/交付包（链接/代码/模板/流程图）便于你回院复用。
            </p>
          </div>

          <div className={styles.highlightBox}>
            <div className={styles.highlightTitle}>你带来一个场景问题，我们把它做成产品</div>
            <p className={styles.highlightText}>
              “场景问题”不是泛泛的“我想用AI”。它来自真实工作：门诊沟通、随访、病例整理、科研写作、
              会议汇报、学生带教、科普内容生产……只要有输入与输出，就能产品化。
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>训练营结构：2天版 / 3天版（清晰分开，按需选择）</h2>
          <p className={styles.sectionSubtitle}>
            2天：适合问题已经足够明确、目标是“交付冲刺”。3天：适合问题还不够清晰/需要补底层能力与评测方法。
          </p>
          <details className={styles.agendaDetails} open>
            <summary className={styles.agendaSummary}>
              <span>2天版（交付冲刺）</span>
              <span className={styles.agendaHint}>适合：问题明确、希望快速做出能用的原型/流程</span>
            </summary>
            <div className={styles.agendaSingle}>
              <div className={styles.agendaHeader}>2天 · 交付冲刺</div>
              <div className={styles.agendaBody}>
                <div className={styles.agendaDay}>
                  <div className={styles.agendaDayTitle}>Day 1 · 定义问题 + 原型搭建</div>
                  <ul>
                    <li>问题澄清：把“想要”变成可交付需求（输入/输出/约束/验收标准）</li>
                    <li>提示词与工作流：可控、可复用、可迭代（适合医学场景）</li>
                    <li>素材准备：脱敏、结构化（表格/字段/标签/输出格式）</li>
                    <li>原型搭建：做出第一版可跑的工具/流程（先跑通，再优化）</li>
                  </ul>
                </div>
                <div className={styles.agendaDay}>
                  <div className={styles.agendaDayTitle}>Day 2 · 验证评测 + 上线交付</div>
                  <ul>
                    <li>用真实样本验证：记录失败模式，形成复核点与风控清单</li>
                    <li>流程固化：把关键步骤写成SOP（谁做、何时做、做什么）</li>
                    <li>产品化：交互、权限、留痕、版本管理与使用说明</li>
                    <li>结营交付：可运行原型/流程 + 录屏 + 使用手册 + 迭代清单</li>
                  </ul>
                </div>
              </div>
            </div>
          </details>

          <details className={styles.agendaDetails}>
            <summary className={styles.agendaSummary}>
              <span>3天版（打地基 + 交付）</span>
              <span className={styles.agendaHint}>适合：问题不够清晰/需要补底层能力与评测方法</span>
            </summary>
            <div className={styles.agendaSingle}>
              <div className={styles.agendaHeader}>3天 · 更稳更完整</div>
              <div className={styles.agendaBody}>
                <div className={styles.agendaDay}>
                  <div className={styles.agendaDayTitle}>Day 1 · 能力地基</div>
                  <ul>
                    <li>AI能力边界：哪些适合AI，哪些必须人审</li>
                    <li>提示词与工作流：从“会问”到“会控”</li>
                    <li>医生常见场景模板库：科研/临床/科普三类</li>
                  </ul>
                </div>
                <div className={styles.agendaDay}>
                  <div className={styles.agendaDayTitle}>Day 2 · 原型共创</div>
                  <ul>
                    <li>把你的场景问题落到“可交付需求”</li>
                    <li>原型开发：网页工具 / 表单系统 / 文档自动化 / 小型Agent</li>
                    <li>数据安全与脱敏实践</li>
                  </ul>
                </div>
                <div className={styles.agendaDay}>
                  <div className={styles.agendaDayTitle}>Day 3 · 质量评测 + 部署复制</div>
                  <ul>
                    <li>质量评测：错误类型、风险点、如何规避</li>
                    <li>部署与交付：从“能用”到“能交接”</li>
                    <li>路演与复盘：每人带走一套可复制打法</li>
                  </ul>
                </div>
              </div>
            </div>
          </details>

          <div className={styles.deliverables}>
            <h3 className={styles.deliverablesTitle}>结营交付清单</h3>
            <div className={styles.deliverablesGrid}>
              {[
                { t: '可运行工具/流程', d: '网页版小工具、表单自动化、模板系统或Agent，满足验收标准。' },
                { t: 'SOP 与提示词模板', d: '关键步骤固定化，降低“换个人就不会用”的风险。' },
                { t: '使用说明与风控清单', d: '医学场景的边界、免责声明、哪些内容必须人工复核。' },
                { t: '迭代路线图', d: '回去后如何继续做第二个工具：优先级、数据准备、验证方式。' },
              ].map((x) => (
                <div key={x.t} className={styles.deliverableCard}>
                  <div className={styles.deliverableTitle}>{x.t}</div>
                  <div className={styles.deliverableDesc}>{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>我们怎么“带着产品走”：共创方法</h2>
          <div className={styles.methodSteps}>
            {[
              {
                idx: '01',
                title: '问题变需求',
                desc: '把“我想提升效率”拆成明确输入/输出/约束/验收标准。需求足够清晰，工具才能做出来。',
              },
              {
                idx: '02',
                title: '流程变模块',
                desc: '把你的经验固化成模块：采集 → 结构化 → 生成 → 复核 → 留痕 → 导出。每个模块都可替换与升级。',
              },
              {
                idx: '03',
                title: '模板变系统',
                desc: '把提示词模板、表格字段、输出格式统一，形成“系统化的稳定产出”。',
              },
              {
                idx: '04',
                title: '验证与风控',
                desc: '用真实数据跑通，记录失败样本；形成风险清单与复核点，保证“可用且可控”。',
              },
              {
                idx: '05',
                title: '上线与交接',
                desc: '交付可运行版本 + 使用说明 + 迭代路线，让你回去能继续自己做更多工具。',
              },
            ].map((s) => (
              <div key={s.idx} className={styles.step}>
                <div className={styles.stepIdx}>{s.idx}</div>
                <div>
                  <div className={styles.stepTitle}>{s.title}</div>
                  <div className={styles.stepDesc}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.safetyBox}>
            <h3 className={styles.safetyTitle}>数据安全与合规（我们会明确边界）</h3>
            <div className={styles.safetyGrid}>
              <div className={styles.safetyItem}>
                <div className={styles.safetyKey}>隐私与脱敏</div>
                <div className={styles.safetyVal}>病例/影像/检验等敏感信息：先脱敏再训练；必要时做本地化方案。</div>
              </div>
              <div className={styles.safetyItem}>
                <div className={styles.safetyKey}>内容合规</div>
                <div className={styles.safetyVal}>科普内容不夸大、不对比、不承诺疗效；输出必须经医生审核后发布。</div>
              </div>
              <div className={styles.safetyItem}>
                <div className={styles.safetyKey}>可控输出</div>
                <div className={styles.safetyVal}>关键环节设置“必须人工确认”的闸门，避免自动化带来风险。</div>
              </div>
              <div className={styles.safetyItem}>
                <div className={styles.safetyKey}>留痕与版本</div>
                <div className={styles.safetyVal}>重要输出留存版本与来源，便于追溯与复盘（尤其科研与科普）。</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>适合谁来？（医生真实画像）</h2>
          <div className={styles.audienceGrid}>
            {[
              {
                icon: '🏥',
                title: '临床一线：门诊/病房忙到爆',
                desc: '需要把“重复解释、重复整理、重复写作”变成自动化流程。',
              },
              {
                icon: '📚',
                title: '科研型：选题、写作、投稿压力大',
                desc: '需要结构化文献、写作模板、审稿回复清单与质量评测。',
              },
              {
                icon: '🎥',
                title: '科普型：想做严肃科普但怕踩坑',
                desc: '需要合规边界、结构化脚本、以及能稳定输出的SOP。',
              },
              {
                icon: '🧑‍🏫',
                title: '科室骨干：要带团队、带学生',
                desc: '需要把个人经验标准化，让团队协作效率变高、可交接。',
              },
              {
                icon: '🧰',
                title: '有“工具脑”的医生',
                desc: '想把自己的方法做成工具，形成科室资产甚至产品化。',
              },
              {
                icon: '🚀',
                title: '愿意动手的人',
                desc: '我们以共创为主：要上手、要改、要迭代，才能“带着产品走”。',
              },
            ].map((a) => (
              <div key={a.title} className={styles.audienceItem}>
                <div className={styles.audienceIcon}>{a.icon}</div>
                <div className={styles.audienceTitle}>{a.title}</div>
                <div className={styles.audienceDesc}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>交流/授课/共创过的部分单位（节选）</h2>
          <p className={styles.sectionSubtitle}>
            以下为部分单位展示（持续更新）。展示仅代表交流记录，不代表医院官方背书或商业合作。
          </p>

          <div className={styles.partnerWrap}>
            {[
              '北京协和医院',
              '复旦大学附属华山医院',
              '复旦大学附属中山医院',
              '中南大学湘雅医院',
              '武汉同济医院',
            ].map((name) => (
              <div key={name} className={styles.partnerChip}>{name}</div>
            ))}
          </div>

          <div className={styles.partnerNote}>
            说明：如你的医院/科室希望加入合作名单，可在咨询时说明，我们会在确认后更新展示。
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaLeft}>
              <h2 className={styles.ctaTitle}>准备好把你的问题做成工具了吗？</h2>
              <p className={styles.ctaSubtitle}>
                报名方式：添加微信 `peng_ip`，备注“医生AI训练营”，按下面模板发我（复制粘贴即可）。
              </p>

              <div className={styles.copyBox}>
                <div className={styles.copyTitle}>咨询模板（建议直接复制）</div>
                <pre className={styles.copyPre}>{`备注：医生AI训练营
科室/方向：___
城市/医院：___
我想解决的场景问题（越具体越好）：___
我能提供的素材（可脱敏）：___
想做2天还是3天：___`}</pre>
              </div>

              <p className={styles.ctaSub2}>
                我们会在开营前把问题梳理成需求清单，确保现场两天/三天真的做出可用成果。
                如为住培/研究生，建议提前与导师/科室沟通时间安排；无需提供纸质证明，确保能全程参与即可。
              </p>
              <div className={styles.ctaActions}>
                <a className={styles.ctaBtn} href="https://pengip.com#contact">立即咨询</a>
                <Link className={styles.ctaLink} href="/training">返回培训列表</Link>
              </div>
            </div>
            <div className={styles.ctaRight}>
              <div className={styles.qrStub}>
                <div className={styles.qrTitle}>微信咨询</div>
                <div className={styles.qrBox}>
                  <div className={styles.qrText}>peng_ip</div>
                  <div className={styles.qrHint}>（如需可替换为二维码图）</div>
                </div>
              </div>
              <div className={styles.ctaFootnote}>
                提醒：医学场景输出仅作辅助，最终由医生复核与决策。
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
