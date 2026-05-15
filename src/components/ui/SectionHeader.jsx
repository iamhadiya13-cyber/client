import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport } from '@/animations';

export default function SectionHeader({ badge, title, highlight, subtitle, center = true }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      style={{ textAlign: center ? 'center' : 'left', marginBottom:'3.5rem' }}
    >
      {badge && (
        <motion.span variants={fadeUp} style={{
          display:'inline-block',
          background:'rgba(249,115,22,0.12)',
          border:'1px solid rgba(249,115,22,0.3)',
          color:'var(--color-primary)',
          fontSize:'0.78rem',
          fontWeight:600,
          letterSpacing:'0.1em',
          textTransform:'uppercase',
          padding:'0.35rem 1rem',
          borderRadius:'99px',
          marginBottom:'1rem',
        }}>
          {badge}
        </motion.span>
      )}
      <motion.h2 variants={fadeUp} style={{ fontSize:'clamp(2rem, 4vw, 3rem)', marginBottom:'1rem', color:'var(--color-text)' }}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} style={{ color:'var(--color-muted)', fontSize:'1.05rem', maxWidth:'580px', margin: center ? '0 auto' : undefined, lineHeight:1.8 }}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
