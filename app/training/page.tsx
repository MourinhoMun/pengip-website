import Link from 'next/link';
import styles from './training.module.scss';

const trainings = [
  {
    tag: '线下集训',
    title: 'AI实战训练营',
    subtitle: '3天2夜，手把手教你用AI重构业务',
    price: '¥9,800',
    note: '5人成团 · 20人封顶 · 小班精讲',
    accent: '#6366f1',
    href: '/ai-training',
    isExternal: false,
    highlights: ['面向老板/团队负责人', '从业务拆解到落地执行', 'AI工作流与工具链搭建'],
  },
  {
    tag: '青少年专项',
    title: 'AI微创业工作坊',
    subtitle: '面向青少年的AI创业启蒙课程',
    price: '¥16,800',
    note: '小班教学 · 实战项目',
    accent: '#f59e0b',
    href: '/ai-workshop',
    isExternal: false,
    highlights: ['兴趣驱动 + 项目制', 'AI基础素养与实践', '成果可展示可复盘'],
  },
  {
    tag: '医生专属',
    title: '医生IP打造实战培训',
    subtitle: '从0到1打造医生个人品牌完整手册',
    price: '面议',
    note: '定制化培训方案',
    accent: '#10b981',
    href: '/training-doctor-ip',
    isExternal: false,
    highlights: ['定位与内容体系', '门诊高频问题选题库', '短视频与图文SOP'],
  },
  {
    tag: '医生专属 · 三甲版',
    title: '严肃医学科普与合规运营训练营',
    subtitle: '手术 / 门诊 / 口播三场景 SOP（更严谨、更克制）',
    price: '查看',
    note: '适合三甲/公立体系医生',
    accent: '#0ea5e9',
    href: '/training-doctor-ip-senior',
    isExternal: false,
    highlights: ['合规边界与风控清单', '三场景拍摄SOP', '口播结构化写作模板'],
  },
  {
    tag: '医生专属 · 共创',
    title: '医生AI能力训练营',
    subtitle: '带着问题来，带着产品走（2-3天共创一个可用工具）',
    price: '面议',
    note: '2天/3天 · 围绕临床与科研真实场景',
    accent: '#0f766e',
    href: '/training-doctor-ai',
    isExternal: false,
    highlights: ['临床/科研真实问题拆解', '共创1个可运行工具/流程', '方法论 + SOP + 风控清单'],
  },
];

export default function TrainingIndexPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>培训</div>
          <h1 className={styles.title}>培训课程与内容</h1>
          <p className={styles.subtitle}>集中查看各类培训课程，点击进入详情页。</p>
          <div className={styles.heroActions}>
            <Link className={styles.backLink} href="/">返回首页</Link>
            <a className={styles.primaryLink} href="#list">查看课程</a>
          </div>
        </div>
      </header>

      <section id="list" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {trainings.map((t) => (
              <div key={t.title} className={styles.card} style={{ ['--accent' as any]: t.accent }}>
                <div className={styles.cardTag}>{t.tag}</div>
                <div className={styles.cardTitle}>{t.title}</div>
                <div className={styles.cardSubtitle}>{t.subtitle}</div>

                <div className={styles.cardMeta}>
                  <div className={styles.price}>{t.price}</div>
                  <div className={styles.note}>{t.note}</div>
                </div>

                <ul className={styles.highlights}>
                  {t.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                {t.isExternal ? (
                  <a className={styles.cta} href={t.href} target="_blank" rel="noopener noreferrer">
                    查看详情 →
                  </a>
                ) : (
                  <Link className={styles.cta} href={t.href}>
                    查看详情 →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
