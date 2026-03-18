import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './brief.module.scss';
import { DOCTOR_AI_BRIEF_TEXT } from '../training-doctor-ai/brief';

export const metadata: Metadata = {
  title: '医生AI能力训练营（简约版）｜鹏哥',
  description: '医生AI能力训练营简约版（500-600字），快速了解：带着问题来，带着产品走。',
};

export default function DoctorAITrainingBriefPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>简约版 · 500-600字</div>
          <h1 className={styles.title}>医生AI能力训练营</h1>
          <p className={styles.subtitle}>给医生/科室负责人快速扫一眼的版本。</p>
          <div className={styles.actions}>
            <Link className={styles.primaryBtn} href="/training-doctor-ai">查看详细版 →</Link>
            <Link className={styles.secondaryBtn} href="/training">返回培训列表</Link>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.container}>
          <pre className={styles.briefPre}>{DOCTOR_AI_BRIEF_TEXT}</pre>
          <div className={styles.footerActions}>
            <Link className={styles.footerLink} href="/training-doctor-ai">去详细版（含案例、结构、交付、合规）</Link>
            <a className={styles.footerLink} href="#contact">立即咨询报名</a>
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div>
              <h2 className={styles.ctaTitle}>咨询报名</h2>
              <p className={styles.ctaText}>添加微信 <strong>peng_ip</strong>，备注“医生AI训练营”。</p>
              <p className={styles.ctaText}>建议直接发：科室/方向、城市/医院、场景问题、可提供素材（可脱敏）、想做2天还是3天。</p>
            </div>
            <div className={styles.qrStub}>
              <div className={styles.qrTitle}>微信</div>
              <div className={styles.qrBox}>peng_ip</div>
              <div className={styles.qrHint}>（如需可替换为二维码图）</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
