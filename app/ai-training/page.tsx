import { Metadata } from 'next';
import styles from './training.module.scss';

export const metadata: Metadata = {
  title: 'AI实战训练营 — 招生简章 | 鹏哥',
  description: '3天2夜线下集训，手把手教你用AI重构业务。¥9,800/人，5人成团，20人封顶，小班精讲。',
};

export default function AITrainingPage() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>2025 线下实战集训</div>
          <h1 className={styles.heroTitle}>AI实战训练营</h1>
          <p className={styles.heroSubtitle}>3天2夜，手把手教你用AI重构业务</p>
          <div className={styles.heroMeta}>
            {[['¥9,800', '/人'], ['3天2夜', '线下集训'], ['20人', '封顶小班']].map(([val, label]) => (
              <div key={label} className={styles.metaItem}>
                <div className={styles.metaVal}>{val}</div>
                <div className={styles.metaLabel}>{label}</div>
              </div>
            ))}
          </div>
          <a href="#contact" className={styles.heroBtn}>立即咨询报名 →</a>
        </div>
      </section>

      <div className={styles.container}>

        {/* 痛点 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🤔 你是不是也有这样的困惑？</h2>
          <div className={styles.painGrid}>
            <div className={`${styles.painCard} ${styles.bad}`}>
              <h3>❌ 工具都下了，不会用</h3>
              <ul>
                <li>ChatGPT、Claude、Cursor都注册了</li>
                <li>但只会简单问答，发挥不出10%的能力</li>
                <li>看了一堆教程，还是不知道怎么落地</li>
              </ul>
            </div>
            <div className={`${styles.painCard} ${styles.bad}`}>
              <h3>❌ 想用AI做事，无从下手</h3>
              <ul>
                <li>知道AI能提效，但不知道从哪切入</li>
                <li>想做自动化，但技术门槛太高</li>
                <li>线上课看了很多，实操还是不会</li>
              </ul>
            </div>
            <div className={`${styles.painCard} ${styles.good}`}>
              <h3>✅ 你需要的不是更多工具</h3>
              <ul>
                <li>你需要的是方法论</li>
                <li>有人手把手带你走一遍完整流程</li>
                <li>3天时间，从小白到能独立用AI做事</li>
              </ul>
            </div>
            <div className={`${styles.painCard} ${styles.good}`}>
              <h3>✅ 线下才能真正学会</h3>
              <ul>
                <li>线上1小时 ≈ 线下10分钟的效果</li>
                <li>遇到问题当场解决，不用自己死磕</li>
                <li>学员之间互相交流，碰撞出新思路</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 往期数据 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📊 往期数据</h2>
          <div className={styles.statsRow}>
            <div className={styles.statCard}><div className={styles.statNum}>100%</div><div className={styles.statLabel}>学员满意度</div></div>
            <div className={styles.statCard}><div className={styles.statNum}>3天</div><div className={styles.statLabel}>从零到独立实操</div></div>
            <div className={styles.statCard}><div className={styles.statNum}>4位</div><div className={styles.statLabel}>实战导师全程带教</div></div>
          </div>
          <div className={styles.testimonial}>
            "第一天还觉得AI离我很远，第二天就已经自己搭出了一个能用的工具。第三天走的时候，脑子里全是想法。"
          </div>
        </section>

        {/* 课程日程 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📅 课程日程</h2>
          <p className={styles.sectionSubtitle}>3天2夜，实际授课2个完整工作日</p>

          <div className={styles.dayBlock}>
            <div className={styles.dayTitle}>Day 1 · 下午 — AI认知重塑 + 工具入门</div>
            <div className={styles.scheduleList}>
              {[
                ['14:30 - 15:30', '开营破冰 · AI时代的机会与思维转变'],
                ['15:30 - 17:00', 'AI工具全景：ChatGPT / Claude / Cursor 实操演练'],
                ['17:00 - 18:00', 'Prompt工程：让AI听懂你的需求，输出你要的结果'],
                ['18:30', '晚餐 · 学员交流（主办方招待）'],
              ].map(([time, content]) => (
                <div key={time} className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>{time}</span>
                  <span className={styles.scheduleContent}>{content}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.dayBlock}>
            <div className={styles.dayTitle}>Day 2 · 全天 — AI实战落地</div>
            <div className={styles.scheduleList}>
              {[
                ['09:00 - 10:30', 'AI编程入门：用Cursor从零搭建一个真实项目'],
                ['10:30 - 12:00', 'AI自动化：让AI帮你处理重复性工作'],
                ['12:00 - 14:00', '午餐 · 自由交流'],
                ['14:00 - 16:00', 'AI内容生产：文案、视频脚本、图片一条龙'],
                ['16:00 - 18:00', 'AI商业应用：获客、运营、私域全链路实操'],
                ['18:30', '晚餐 · 深度交流 · 1v1答疑'],
              ].map(([time, content]) => (
                <div key={time} className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>{time}</span>
                  <span className={styles.scheduleContent}>{content}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.dayBlock}>
            <div className={styles.dayTitle}>Day 3 · 上午 — 进阶部署 + 结营</div>
            <div className={styles.scheduleList}>
              {[
                ['09:00 - 10:30', 'AI Agent：搭建你自己的AI助手，7×24小时工作'],
                ['10:30 - 11:30', '学员项目路演 · 导师点评 · 后续规划'],
                ['11:30 - 12:00', '结营仪式 · 加入校友社群'],
                ['12:00', '午餐后自由离开'],
              ].map(([time, content]) => (
                <div key={time} className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>{time}</span>
                  <span className={styles.scheduleContent}>{content}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3天收获 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🎯 3天你将收获</h2>
          <div className={styles.gainGrid}>
            <div className={styles.gainCard}>
              <h3>🛠️ 实操能力</h3>
              <ul>
                <li>独立使用AI工具完成实际工作</li>
                <li>用Cursor写代码、搭工具、做自动化</li>
                <li>用AI生产内容（文案/视频/图片）</li>
              </ul>
            </div>
            <div className={styles.gainCard}>
              <h3>🧠 思维升级</h3>
              <ul>
                <li>理解AI的能力边界和最佳使用场景</li>
                <li>学会拆解业务需求，用AI逐步实现</li>
                <li>建立"AI优先"的工作思维</li>
              </ul>
            </div>
            <div className={styles.gainCard}>
              <h3>📦 带走成果</h3>
              <ul>
                <li>至少1个可运行的AI项目/工具</li>
                <li>一套完整的Prompt模板库</li>
                <li>AI工具使用手册和操作SOP</li>
              </ul>
            </div>
            <div className={styles.gainCard}>
              <h3>🤝 人脉资源</h3>
              <ul>
                <li>加入AI实战校友社群</li>
                <li>结识同频的创业者和从业者</li>
                <li>持续获取AI最新动态和玩法</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 适合谁 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>👥 适合谁来？</h2>
          <div className={styles.audienceGrid}>
            {[
              { icon: '🏢', title: '企业老板/管理者', desc: '想用AI提升团队效率，但不知道从哪开始' },
              { icon: '💼', title: '创业者/个体户', desc: '想用AI降本增效，一个人干出一个团队的活' },
              { icon: '📱', title: '运营/市场人员', desc: '想用AI批量生产内容，提升获客效率' },
              { icon: '🏥', title: '医疗/医美从业者', desc: '想用AI做个人IP、患者管理、内容运营' },
              { icon: '🔄', title: '转型期职场人', desc: '焦虑被AI替代，想掌握AI技能保持竞争力' },
              { icon: '🎓', title: 'AI爱好者', desc: '自学遇到瓶颈，需要系统化的实操训练' },
            ].map((item) => (
              <div key={item.title} className={styles.audienceItem}>
                <span className={styles.audienceIcon}>{item.icon}</span>
                <div>
                  <div className={styles.audienceTitle}>{item.title}</div>
                  <div className={styles.audienceDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 导师团队 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>👨‍🏫 导师团队</h2>
          <p className={styles.sectionSubtitle}>4位实战导师全程带教，不讲理论只讲实操。师生比 ≤ 1:5，确保每人都能得到指导。</p>
          <div className={styles.teacherCard}>
            <div className={styles.teacherName}>鹏哥 · 主讲</div>
            <ul>
              <li>10+年医疗行业深耕</li>
              <li>AI医疗创业，获数千万融资</li>
              <li>100+位医生IP孵化经验</li>
              <li>AI工具产品化实战专家</li>
            </ul>
          </div>
          <div className={styles.teacherTeam}>
            {['AI编程与自动化专家', 'AI内容生产与运营专家', 'AI商业应用与获客专家'].map((t) => (
              <div key={t} className={styles.teamItem}>{t}</div>
            ))}
          </div>
        </section>

        {/* 报名须知 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📋 报名须知</h2>
          <div className={styles.feeBox}>
            <div className={styles.feeRow}>
              <span className={styles.feeLabel}>培训费用</span>
              <span className={styles.feePrice}>¥9,800 / 人</span>
            </div>
            <div className={styles.feeRow}>
              <span className={styles.feeLabel}>含</span>
              <span className={styles.feeVal}>3天课程、教材、工具账号、社群、第一天晚餐</span>
            </div>
            <div className={styles.feeRow}>
              <span className={styles.feeLabel}>不含</span>
              <span className={styles.feeVal}>交通、住宿（可协助推荐附近酒店）</span>
            </div>
          </div>
          <div className={styles.infoGrid}>
            {[
              { label: '时长', val: '3天2夜（实际授课2个完整工作日）' },
              { label: '人数', val: '5人成团，20人封顶' },
              { label: '自备', val: '笔记本电脑（Windows/Mac均可）' },
              { label: '开课', val: '报名满5人即开班，提前7天通知' },
            ].map((item) => (
              <div key={item.label} className={styles.infoItem}>
                <div className={styles.infoLabel}>{item.label}</div>
                <div className={styles.infoVal}>{item.val}</div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CTA */}
      <section className={styles.ctaSection} id="contact">
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>名额有限，报满即止</h2>
            <p className={styles.ctaSubtitle}>每期仅收20人，确保每位学员都能得到充分指导</p>
            <a href="https://pengip.com#contact" className={styles.ctaBtn}>立即咨询报名 →</a>
            <p className={styles.ctaNote}>添加微信咨询详情，备注"AI培训"：peng_ip</p>
          </div>
        </div>
      </section>

    </main>
  );
}
