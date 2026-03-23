import { Metadata } from 'next';
import styles from './doctor.module.scss';

export const metadata: Metadata = {
  title: '医生IP与科普合规运营训练营（严肃医学/三甲版）',
  description:
    '面向三甲医院医生的严肃医学科普与个人品牌建设训练营：选题、写作、短视频口播、门诊场景记录、合规边界、风险控制与团队协作的可落地方法。',
};

export default function TrainingDoctorIPSeniorPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>严肃医学 · 三甲医生版</div>
          <h1 className={styles.heroTitle}>医生IP与科普合规运营训练营</h1>
          <p className={styles.heroSubtitle}>更严谨、更克制、更长期：用专业建立信任，用合规降低风险</p>
          <div className={styles.statsRow}>
            {[
              ['体系化', '从定位到复盘的完整闭环'],
              ['合规先行', '平台红线 + 医疗广告法边界'],
              ['可执行', '模板、清单、SOP 可直接落地'],
            ].map(([num, label]) => (
              <div key={label} className={styles.statItem}>
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>课程定位（你将获得什么）</h2>
          <p className={styles.sectionSubtitle}>
            本版本面向三甲/公立体系医生，强调“学术严谨、表达克制、风险可控、长期可信”。
          </p>

          <div className={styles.infoBox}>
            <p>
              目标不是“靠爆款快速涨粉”，而是建立可持续的<strong>专业信任资产</strong>：
              让患者在搜索你时看到的是结构化科普与规范表达，形成“可信、可问、可托付”的第一印象。
            </p>
            <div className={styles.dataGrid}>
              <div className={styles.dataCard}>
                <div className={styles.dataNum}>三层结构</div>
                <div className={styles.dataLabel}>定位 → 内容体系 → 运营闭环</div>
              </div>
              <div className={styles.dataCard}>
                <div className={styles.dataNum}>两条主线</div>
                <div className={styles.dataLabel}>患者教育 + 专业影响力（同行/科室）</div>
              </div>
              <div className={styles.dataCard}>
                <div className={styles.dataNum}>一套SOP</div>
                <div className={styles.dataLabel}>选题、写作、拍摄、发布、复盘、迭代</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>课程大纲（严肃医学/三甲版）</h2>
          <p className={styles.sectionSubtitle}>仍然是“认知 → 场景 → 表达 → 规则 → 工具”，但更细、更严谨</p>
          <div className={styles.outlineList}>
            {[
              {
                num: '01',
                title: '定位与边界',
                desc: '学科定位、门诊人群画像、内容边界与风险清单（什么能说/不能说）',
              },
              {
                num: '02',
                title: '内容体系搭建',
                desc: '三层内容金字塔：基础科普/就医决策/误区澄清；建立可复用选题库',
              },
              {
                num: '03',
                title: '严谨表达与口播',
                desc: '医学表述的“证据感”与“可理解性”平衡；结构化口播模板与常见错误',
              },
              {
                num: '04',
                title: '合规与风控',
                desc: '平台规则、广告法敏感点、诊疗替代风险、患者隐私与授权流程、评论区风险应对',
              },
              {
                num: '05',
                title: '团队协作与效率工具',
                desc: '护士/助理分工、素材流转SOP、AI 辅助写作/剪辑/校对/复盘的工作流',
              },
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

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Part 01 · 定位与边界（严肃医学的第一课）</h2>
          <p className={styles.sectionSubtitle}>先把“我是谁、我解决谁的问题、我不解决什么问题”说清楚</p>

          <div className={styles.twoCol}>
            <div className={styles.listCard}>
              <h3>定位三问（写成一句话）</h3>
              <ul>
                <li>我服务的人群是谁？（年龄段/疾病谱/就诊阶段/常见诉求）</li>
                <li>我擅长解决什么问题？（强项方向，尽量可验证）</li>
                <li>我提供什么价值？（患者教育/就医决策/术后管理/长期随访）</li>
              </ul>
            </div>
            <div className={styles.warningCard}>
              <h3>必须明确的边界（否则必踩雷）</h3>
              <ul>
                <li>不做线上诊断与处方替代（只做一般性科普）</li>
                <li>不承诺疗效、不对比“最好/唯一/保证”等绝对化表达</li>
                <li>不展示患者可识别信息（面容、姓名、住院号、病历、腕带）</li>
                <li>不发布未经授权的病例细节（即使打码也要谨慎）</li>
              </ul>
            </div>
          </div>

          <div className={styles.tip} style={{ marginTop: '1rem' }}>
            建议你把“边界声明”写成固定模板，放在主页简介、置顶内容、以及视频结尾口播中。
            不是为了推卸责任，而是帮助用户建立正确预期，减少纠纷风险。
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>示例：三甲医生主页定位模板（可直接改）</h3>
            <div className={styles.infoBox}>
              <p style={{ whiteSpace: 'pre-line' }}>
                【身份】XXX医院 XXX科 主治/副主任医师\n
                【方向】聚焦：XXXX（3-5个高频问题）\n
                【内容】门诊高频问题科普、就医决策建议、术后/慢病管理\n
                【边界】内容仅供健康科普参考，不替代线下就诊；个体情况请线下评估。
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Part 02 · 内容体系（用“体系”替代“灵感”）</h2>
          <p className={styles.sectionSubtitle}>严肃医学要建立“可复用结构”，而不是靠临场发挥</p>

          <div className={styles.levelList}>
            {[
              {
                icon: '①',
                level: '基础科普层',
                title: '患者教育',
                period: '长期常青内容',
                desc: '疾病/检查/用药/手术/恢复的基础解释，目标是降低信息差。',
                effect: '患者看懂、减少无效问诊、提升信任。',
              },
              {
                icon: '②',
                level: '决策辅助层',
                title: '就医决策',
                period: '门诊转化相关',
                desc: '什么时候需要就医、如何选择科室/检查、哪些情况必须线下评估。',
                effect: '减少拖延、减少过度焦虑与过度检查。',
              },
              {
                icon: '③',
                level: '误区澄清层',
                title: '风险纠偏',
                period: '高传播内容',
                desc: '纠正常见谣言/误用/过度治疗倾向，用证据与逻辑解释。',
                effect: '易传播但必须克制表达，避免夸大。',
              },
            ].map((item) => (
              <div key={item.level} className={styles.levelItem}>
                <span className={styles.levelIcon}>{item.icon}</span>
                <div style={{ flex: 1 }}>
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

          <h3 style={{ fontWeight: 700, margin: '1.5rem 0 1rem', color: 'var(--text-primary)' }}>选题库怎么建（可落地流程）</h3>
          <div className={styles.twoCol}>
            <div className={styles.listCard}>
              <h3>选题来源（按稳定性排序）</h3>
              <ul>
                <li>门诊高频问题（每周统计Top20）</li>
                <li>检查/报告单解读（常见指标、常见误读）</li>
                <li>术前/术后/随访节点的注意事项（时间轴内容）</li>
                <li>常见谣言与误区（以纠偏为主，不做对立情绪）</li>
                <li>政策/指南更新（只做解读，不做“站队”）</li>
              </ul>
            </div>
            <div className={styles.listCard}>
              <h3>选题筛选标准（四个维度）</h3>
              <ul>
                <li>是否高频：一周至少被问3次</li>
                <li>是否可说清：90秒/800字能讲明白</li>
                <li>是否可验证：有指南/共识/教材支撑</li>
                <li>是否低风险：不引发误导、不替代诊疗</li>
              </ul>
            </div>
          </div>

          <div className={styles.tip} style={{ marginTop: '1rem' }}>
            你只要把“门诊Top20问题”持续做成系列，三个月后就会形成非常强的“专业资产库”。
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>三大核心场景：手术 / 门诊 / 口播（拍摄只用这三类就够）</h3>
            <p className={styles.sectionSubtitle}>
              下面每个场景都给三套执行方案：<strong>医生一人</strong>、<strong>医生 + 助理</strong>、<strong>医生 + 专业摄影师</strong>。
              你按资源条件选一套照着做即可。
            </p>

            <div className={styles.twoCol}>
              <div className={styles.listCard}>
                <h3>场景A：手术（强调规范、团队、流程）</h3>
                <ul>
                  <li><strong>核心目标：</strong>展示“专业与规范”，而不是展示“刺激与血腥”。</li>
                  <li><strong>推荐拍摄镜头（无血腥）：</strong>术前讨论（只拍医生手势/白板）、器械与无菌准备、团队配合、术后宣教要点（脱敏）。</li>
                  <li><strong>可复用选题：</strong>术前准备清单、麻醉常见疑问、术后恢复时间轴、并发症红旗信号。</li>
                  <li><strong>必须避免：</strong>患者可识别信息（脸/姓名/腕带/住院号/病历）、明显血腥过程、手术台名牌与条码。</li>
                </ul>

                <div className={styles.tip} style={{ marginTop: '0.75rem' }}>
                  <strong>手术场景怎么拍（第一人称视角，稳且合规）：</strong>
                  1) 机位建议：优先“医生第一人称/胸前视角”或“肩后视角”，只拍手部操作、器械与流程，不拍患者脸。
                  2) 拍摄内容：无菌铺单、器械准备、关键步骤的“讲解式口播”（避开血腥画面），术后宣教要点。
                  3) 画面原则：宁可少拍，也不要拍到身份信息；宁可拍流程，也不要拍伤口细节。
                  4) 成片策略：做“流程科普/术前术后注意点/红旗信号”，不要做“猎奇展示”。
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <div className={styles.twoCol}>
                    <div className={styles.listCard}>
                      <h3>医生一个人怎么做（最小可行）</h3>
                      <ul>
                        <li>术后/术间空档录口播：只讲“原则 + 注意事项 + 红旗信号”，不讲个体细节。</li>
                        <li>补拍B-roll：洗手池/无菌帽口罩/器械台远景（不拍患者）。</li>
                        <li>素材归档：每台手术结束把素材按“术前/术中/术后”三段存到同一文件夹，方便剪辑。</li>
                      </ul>
                    </div>
                    <div className={styles.listCard}>
                      <h3>有一个助理怎么做（推荐）</h3>
                      <ul>
                        <li>助理负责第一人称机位：胸前夹/肩后机位，开拍前先确认镜头里没有患者脸与身份信息。</li>
                        <li>助理补拍3段固定素材：术前准备（10-15秒）、团队配合（10-15秒）、术后宣教要点（20-30秒）。</li>
                        <li>医生只做“关键点讲解”：每段录完停2秒，方便剪辑。</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <div className={styles.listCard}>
                    <h3>有专业摄影师怎么做（高质量但更要合规）</h3>
                    <ul>
                      <li>拍摄以“流程纪录片”思路：固定机位 + 走位跟拍，但始终避开患者脸与身份信息区域。</li>
                      <li>声音方案：医生口播用领夹麦；环境声单独录一条做氛围（避免录到患者交流）。</li>
                      <li>镜头脚本提前写：每台手术只拍 6-8 个镜头（每镜头10-20秒），宁少勿杂。</li>
                      <li>交付要求：摄影师必须按“隐私遮挡清单”交付（任何可识别信息一律不交付/先裁切打码）。</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.warningCard} style={{ marginTop: '0.75rem' }}>
                  <h3>手术素材合规要点（必须执行）</h3>
                  <ul>
                    <li>绝不出现患者可识别信息（脸/姓名/腕带/住院号/病历/手术通知单）。</li>
                    <li>避免血腥特写；避免让观众产生不适或被平台判定为“血腥暴力”。</li>
                    <li>涉及病例讲解建议采用“抽象化病例”，不展示原始影像/原始资料。</li>
                  </ul>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <div className={styles.twoCol}>
                    <div className={styles.listCard}>
                      <h3>手术内容选题（更适合三甲医生）</h3>
                      <ul>
                        <li>“术前需要做哪些检查？各自意义是什么？”</li>
                        <li>“麻醉方式怎么选？常见疑问一次说清”</li>
                        <li>“术后恢复时间轴：第1天/第1周/第1月重点”</li>
                        <li>“哪些症状需要立即复诊/急诊？”</li>
                      </ul>
                    </div>
                    <div className={styles.listCard}>
                      <h3>第一人称拍摄清单（助理只需照着做）</h3>
                      <ul>
                        <li>只拍手和器械，不拍脸</li>
                        <li>遇到名牌/腕带/条码，立刻移开镜头</li>
                        <li>每段15-30秒，留空镜便于剪辑</li>
                        <li>关键步骤只“讲原则”，不讲个体细节</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.listCard}>
                <h3>场景B：门诊（强调沟通与决策）</h3>
                <ul>
                  <li><strong>核心目标：</strong>把“门诊高频问题”做成系列，长期稳定涨信任。</li>
                  <li><strong>推荐拍摄镜头：</strong>医生正面口播 + 门诊环境B-roll（不拍患者脸）；或仅录音转文字做图文。</li>
                  <li><strong>典型内容：</strong>检查单解读、何时需要就医、如何选择检查、常见误区澄清、术后复诊要点。</li>
                  <li><strong>合规关键：</strong>不做个体诊断；不引导私信看报告；评论区固定用“线下评估”模板回复。</li>
                </ul>

                <div className={styles.tip} style={{ marginTop: '0.75rem' }}>
                  <strong>门诊怎么拍（固定机位 + 助理补特写，最稳的拍法）：</strong>
                  1) 固定机位拍医生（半身/胸像）：手机竖屏，放在桌侧或三脚架，画面只包含医生与背景墙。
                  2) 助理补特写：只拍“手写要点/示意图/检查单打码后的局部”（不拍患者脸，不拍条码/姓名）。
                  3) 拍摄节奏：每次门诊结束用5-8分钟录3个问题（每个问题60-90秒）。
                  4) 后期拆条：一问一条；同一问题再拆“结论版/误区版/红旗版”。
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <div className={styles.twoCol}>
                    <div className={styles.listCard}>
                      <h3>医生一个人怎么做（最小动作）</h3>
                      <ul>
                        <li>门诊结束后录口播：对着固定机位回答“今天被问最多的3个问题”。</li>
                        <li>不拍患者：用“手写板/白纸”写要点当画面，不用任何患者资料入镜。</li>
                        <li>每条60秒：结论一句 + 3条建议 + 1条红旗信号 + 边界声明。</li>
                      </ul>
                    </div>
                    <div className={styles.listCard}>
                      <h3>有一个助理怎么做（推荐）</h3>
                      <ul>
                        <li>助理负责固定机位与收音：三脚架 + 领夹麦，医生只负责讲。</li>
                        <li>助理补3类特写：手写要点、示意图、打码后的“报告单局部”（不含条码/姓名）。</li>
                        <li>助理剪辑拆条：同一问题拆成“结论/误区/红旗”三条，提高复用率。</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <div className={styles.listCard}>
                    <h3>有专业摄影师怎么做（门诊高质但更敏感）</h3>
                    <ul>
                      <li>机位设计：固定机位只拍医生；跟拍机位只拍背影/手势/环境，不拍患者正脸。</li>
                      <li>镜头脚本：每次门诊只拍 8-12 个镜头（每镜头8-15秒），重点拍“沟通与解释”。</li>
                      <li>隐私处理：摄影师必须现场实时监看，任何患者/资料入镜立刻废片；后期二次审片再发布。</li>
                      <li>声音：医生领夹麦单独录；环境声降噪，避免录到患者说话内容。</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.warningCard} style={{ marginTop: '0.75rem' }}>
                  <h3>患者隐私与授权（门诊场景必须执行）</h3>
                  <ul>
                    <li>镜头里绝对不要出现：患者脸、姓名、住院号、腕带、病历、检查单条码/二维码。</li>
                    <li>如需出现病例信息：建议只讲“抽象化病例”，不展示原始资料；必要时走书面授权流程。</li>
                    <li>建议固定一句口播：内容为一般性科普，不针对个体诊疗；如有不适请线下就医。</li>
                  </ul>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <div className={styles.twoCol}>
                    <div className={styles.listCard}>
                      <h3>门诊内容三件套（最容易做成系列）</h3>
                      <ul>
                        <li>“这个检查到底看什么？”（报告单解读）</li>
                        <li>“什么情况必须就医？”（红旗信号）</li>
                        <li>“90%的人会误解的点”（误区澄清）</li>
                      </ul>
                    </div>
                    <div className={styles.listCard}>
                      <h3>助理拍摄检查清单（每次开机前30秒）</h3>
                      <ul>
                        <li>画面：只拍医生/白板/手写，不拍患者</li>
                        <li>声音：尽量用领夹麦（否则关门减少噪音）</li>
                        <li>构图：眼睛在上1/3，留字幕空间</li>
                        <li>素材：每条留3秒空镜用于剪辑衔接</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <div className={styles.listCard}>
                <h3>场景C：口播（严肃医学表达主阵地）</h3>
                <ul>
                  <li><strong>核心目标：</strong>用结构化表达把复杂医学讲清楚，形成“可信赖”印象。</li>
                  <li><strong>推荐机位：</strong>固定机位、自然光、白墙/诊室背景；白大褂即可，不追求花哨。</li>
                  <li><strong>内容结构：</strong>结论 → 原因 → 3条建议 → 红旗信号 → 边界声明。</li>
                  <li><strong>发布节奏：</strong>每周固定2-3条系列化内容（同一主题拆成上下集）。</li>
                </ul>

                <div className={styles.tip} style={{ marginTop: '0.75rem' }}>
                  <strong>口播稿怎么写（严肃医学版，直接照抄结构）：</strong>
                  开头10秒：一句话结论 + 适用人群（“如果你是……，先记住这句话……”）
                  → 中段40-60秒：原因解释（只讲2个关键机制/逻辑）
                  → 建议30秒：给3条可执行建议（时间/频率/注意事项）
                  → 安全5-10秒：红旗信号（出现哪些情况必须线下就医）
                  → 结尾：边界声明（科普不替代面诊）。
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <div className={styles.twoCol}>
                    <div className={styles.listCard}>
                      <h3>医生一个人怎么做（最稳）</h3>
                      <ul>
                        <li>固定机位：手机 + 三脚架，固定一个背景（诊室/白墙），永远不换。</li>
                        <li>固定结构：每条都用同一模板（结论/原因/建议/红旗/边界），降低发挥压力。</li>
                        <li>固定节奏：一次录 3 条（每条60-90秒），每条之间停 3 秒。</li>
                      </ul>
                    </div>
                    <div className={styles.listCard}>
                      <h3>有一个助理怎么做（效率最高）</h3>
                      <ul>
                        <li>助理准备提词卡：把“结论一句 + 3条建议 + 3个红旗信号”写在纸上贴镜头旁。</li>
                        <li>助理负责复述提问：镜头外问一句“医生，XX要不要紧？”增强口播真实感。</li>
                        <li>助理负责字幕与封面：标题用“检查单/恢复/红旗信号”这类中性词。</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <div className={styles.listCard}>
                    <h3>有专业摄影师怎么做（质感更好）</h3>
                    <ul>
                      <li>灯光与构图：柔光 + 眼神光，背景干净，镜头略高于眼睛一点，保证可信的精神面貌。</li>
                      <li>双机位：A机固定正面；B机拍手势/白板/道具（避免任何患者信息）。</li>
                      <li>收音：领夹麦 + 备份录音；拍摄后让摄影师输出“可直接发布版本 + 备份原素材”。</li>
                    </ul>
                  </div>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <div className={styles.twoCol}>
                    <div className={styles.listCard}>
                      <h3>口播开头模板（不夸张）</h3>
                      <ul>
                        <li>“门诊里很多人担心XX。先说结论：……”</li>
                        <li>“如果你最近出现XX，先别慌，先看这3个判断点……”</li>
                        <li>“这张检查单里，最容易被误读的是XX。你只要记住……”</li>
                      </ul>
                    </div>
                    <div className={styles.listCard}>
                      <h3>口播“建议句式”（可复用）</h3>
                      <ul>
                        <li>“一般情况下可以……；但如果……建议尽快就医。”</li>
                        <li>“多数人……是正常的；持续加重/伴随……需要警惕。”</li>
                        <li>“我更建议你关注……而不是只盯着……”</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.warningCard} style={{ marginTop: '0.75rem' }}>
                  <h3>口播常见踩雷点（必须避免）</h3>
                  <ul>
                    <li>把科普说成“个体诊疗建议”（例如：你这个就是XX，需要XX）</li>
                    <li>承诺效果/绝对化（保证、根治、百分百、最好的）</li>
                    <li>情绪对立（吓唬式、贬低式、站队式），容易引战与投诉</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.tip} style={{ marginTop: '1rem' }}>
              <strong>一段素材如何拆解：</strong>10-20分钟门诊讲解素材 → 3-5条短内容：
              结论版（30-45秒）+ 误区澄清（60秒）+ 红旗信号（45秒）+ 行动清单图文（5条要点）。
            </div>

            <div style={{ marginTop: '1rem' }}>
              <div className={styles.warningCard}>
                <h3>发布前合规自检（适用于三场景）</h3>
                <ul>
                  <li>是否出现患者可识别信息（脸/姓名/号/病历/腕带/检查单条码）？</li>
                  <li>是否包含绝对化承诺（保证/根治/百分百/最好的）？</li>
                  <li>是否可能被理解为个体诊断与处方建议？</li>
                  <li>是否存在导流（联系方式、私信看报告、加好友）？</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Part 03 · 严谨表达与口播（把医学讲清楚）</h2>
          <p className={styles.sectionSubtitle}>三甲医生的优势在专业，但表达必须“可理解、可执行、可复用”</p>

          <div className={styles.infoBox}>
            <p>
              严肃医学口播的核心不是“话术”，而是<strong>结构</strong>：
              先给结论，再给依据，再给行动建议，最后明确边界。
            </p>
          </div>

          <h3 style={{ fontWeight: 700, margin: '1.5rem 0 1rem', color: 'var(--text-primary)' }}>90秒口播通用结构（严肃医学版）</h3>
          <div className={styles.formulaList}>
            {[
              '1) 一句话结论：明确你要解决的问题',
              '2) 背后原因：用1-2个关键机制/逻辑解释（避免堆术语）',
              '3) 具体建议：给3条可执行建议（时间/频率/注意事项）',
              '4) 必须就医信号：列出红旗信号（提升安全感）',
              '5) 边界声明：科普不替代面诊，个体情况需评估',
            ].map((f) => (
              <div key={f} className={styles.formulaItem}>
                {f}
              </div>
            ))}
          </div>

          <h3 style={{ fontWeight: 700, margin: '1.5rem 0 1rem', color: 'var(--text-primary)' }}>标题与封面（严肃但要清晰）</h3>
          <div className={styles.twoCol}>
            <div className={styles.listCard}>
              <h3>推荐标题模板（不夸张）</h3>
              <ul>
                <li>“XX检查单这3个指标，很多人会误读”</li>
                <li>“术后第1周出现这些表现，多数属于正常”</li>
                <li>“出现这3种情况，建议尽快线下就医”</li>
                <li>“XX药物常见误用：这2点尤其要注意（一般科普）”</li>
              </ul>
            </div>
            <div className={styles.warningCard}>
              <h3>不建议的表达（高风险）</h3>
              <ul>
                <li>“包治/根治/保证不复发”</li>
                <li>“最好的医生/唯一方案/全国第一”</li>
                <li>“不做就后悔/马上就能好”</li>
                <li>“私信我给你看报告/线上给你开方案”</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Part 04 · 合规与风控（把风险降到可控）</h2>
          <p className={styles.sectionSubtitle}>合规不是“束缚”，而是让你持续输出的护城河</p>

          <div className={styles.twoCol}>
            <div className={styles.warningCard}>
              <h3>内容合规清单（发布前自检）</h3>
              <ul>
                <li>是否出现绝对化承诺、疗效保证？</li>
                <li>是否包含患者可识别信息/病历信息？</li>
                <li>是否可能被理解为具体诊疗建议/处方？</li>
                <li>是否存在导流行为（联系方式、私信引导）？</li>
                <li>是否引用了不可靠来源（非共识/非指南）？</li>
              </ul>
            </div>
            <div className={styles.listCard}>
              <h3>评论区风险应对（模板）</h3>
              <ul>
                <li>“建议线下就医评估，我这里无法做个体诊断。”</li>
                <li>“这是一般性科普，不一定适用于每个人。”</li>
                <li>“如有红旗症状/不适加重，请尽快就医。”</li>
                <li>“避免自行用药/停药，需遵医嘱。”</li>
              </ul>
            </div>
          </div>

          <div className={styles.tip} style={{ marginTop: '1rem' }}>
            强烈建议建立“合规词库”：把高风险词（保证、根治、最、立刻、无副作用等）列出来，写作/口播/字幕统一替换成更稳妥的表达。
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Part 05 · 团队协作与效率（让内容可持续）</h2>
          <p className={styles.sectionSubtitle}>三甲医生时间稀缺，必须用“分工 + 模板 + 复盘”把内容做成体系</p>

          <div className={styles.twoCol}>
            <div className={styles.listCard}>
              <h3>分工建议（最小可行团队）</h3>
              <ul>
                <li>医生：给观点、审核合规、最终把关</li>
                <li>助理/护士：记录素材、整理问题、做初稿</li>
                <li>剪辑：剪视频、上字幕、做封面</li>
                <li>运营：发布、置顶、评论区维护、数据复盘</li>
              </ul>
            </div>
            <div className={styles.listCard}>
              <h3>每周复盘（15分钟够用）</h3>
              <ul>
                <li>看3项数据：完播率、收藏率、私信/咨询转化</li>
                <li>找3条表现最好内容：为什么好？标题/结构/场景？</li>
                <li>确定下周Top10选题：从门诊问题出发</li>
                <li>把有效模板写进SOP，变成团队共识</li>
              </ul>
            </div>
          </div>

          <div className={styles.tip} style={{ marginTop: '1rem' }}>
            建议把内容输出当成科室的“患者教育工程”：越规范、越长期，越能形成口碑与信任。
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>附录：详实模板与清单（可直接复制）</h2>
          <div className={styles.faqList}>
            {[
              {
                q: '模板1：检查单解读（短视频/图文通用）',
                a:
                  '标题：XX检查单这3个指标你要重点看\n\n正文结构：\n1) 这张检查单是干什么的（一句话）\n2) 指标A：正常范围 + 常见异常含义 + 什么时候需要就医\n3) 指标B：同上\n4) 指标C：同上\n5) 常见误区：哪些情况不代表严重问题\n6) 边界：个体差异大，最终以面诊/复查为准',
              },
              {
                q: '模板2：术后时间轴科普（严肃医学版）',
                a:
                  '标题：术后1-7天常见表现与注意事项\n\n时间轴：\nDay1-2：可能出现……（正常/异常信号）\nDay3-5：可能出现……\nDay6-7：可能出现……\n\n建议：\n- 3条可以做的护理\n- 3条不要做的事\n- 3条必须就医信号',
              },
              {
                q: '模板3：门诊高频问题（90秒口播）',
                a:
                  '开头：门诊里很多人问我：XXXX\n结论：一句话告诉你答案\n原因：用1-2个关键点解释\n建议：给3条可执行建议\n红旗：出现这些情况尽快就医\n结尾：科普不替代面诊，按医生建议为准',
              },
            ].map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <div className={styles.faqQ}>{item.q}</div>
                <div className={styles.faqA} style={{ whiteSpace: 'pre-line' }}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
