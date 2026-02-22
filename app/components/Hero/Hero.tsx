'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Bot } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/app/i18n';
import styles from './Hero.module.scss';

export default function Hero() {
  const { t, lang } = useLanguage();
  const hero = t.hero as any;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { value: '10+', label: hero.stats.years },
    { value: lang === 'zh' ? '百万级' : 'Million+', label: hero.stats.value },
    { value: lang === 'zh' ? '数千万' : 'Tens of M', label: hero.stats.startup },
  ];

  return (
    <section className={styles.hero} id="about" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* 头像 */}
          <motion.div
            key="avatar"
            className={styles.avatarWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Image
              src="/avatar.png"
              alt={hero.name}
              width={120}
              height={120}
              className={styles.avatar}
            />
          </motion.div>

          {/* 标签 */}
          <motion.div
            key="badge"
            className={styles.badge}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span>{hero.badge}</span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            key="title"
            className={styles.title}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {hero.greeting} <span className={styles.highlight}>{hero.name}</span>
          </motion.h1>

          <motion.h2
            key="subtitle"
            className={styles.subtitle}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {hero.title}
          </motion.h2>

          {/* 描述 */}
          <motion.p
            key="description"
            className={styles.description}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {hero.description}
            <br />
            {hero.description2}
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            key="cta"
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="#contact" className={styles.primaryBtn}>
              {hero.contactMe}
              <ArrowRight size={16} />
            </a>

            <a href="#tools" className={styles.highlightBtn}>
              <Bot size={18} />
              {hero.tryAI}
            </a>

            <a href="#experience" className={styles.secondaryBtn}>
              {hero.myStory}
            </a>
          </motion.div>
        </motion.div>

        {/* 统计数据 */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span>{hero.scrollDown}</span>
      </motion.div>
    </section>
  );
}
