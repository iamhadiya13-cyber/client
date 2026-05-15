import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Maximize2 } from 'lucide-react';
import { scaleIn } from '@/animations';

export default function ProjectCard({ title, category, location, year, area, description, tags }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -6 }}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor='rgba(249,115,22,0.4)'}
      onMouseLeave={e => e.currentTarget.style.borderColor='var(--color-border)'}
    >
      {/* Category Banner */}
      <div style={{
        background:'linear-gradient(135deg,rgba(249,115,22,0.18),rgba(234,88,12,0.08))',
        borderBottom:'1px solid var(--color-border)',
        padding:'0.6rem 1.25rem',
        display:'flex', justifyContent:'space-between', alignItems:'center',
      }}>
        <span style={{ fontSize:'0.75rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--color-primary)' }}>
          {category}
        </span>
        <span style={{ fontSize:'0.75rem', color:'var(--color-muted)' }}>{year}</span>
      </div>

      <div style={{ padding:'1.5rem' }}>
        <h3 style={{ fontSize:'1.05rem', fontWeight:700, marginBottom:'0.75rem' }}>{title}</h3>
        <p style={{ color:'var(--color-muted)', fontSize:'0.875rem', lineHeight:1.7, marginBottom:'1.25rem' }}>{description}</p>

        <div style={{ display:'flex', flexWrap:'wrap', gap:'0.75rem', marginBottom:'1.25rem' }}>
          {[
            { Icon: MapPin,    text: location },
            { Icon: Calendar,  text: year },
            { Icon: Maximize2, text: area },
          ].map(({ Icon, text }, i) => (
            <span key={i} style={{ display:'flex', alignItems:'center', gap:'0.35rem', color:'var(--color-muted)', fontSize:'0.8rem' }}>
              <Icon size={12} color="var(--color-primary)" />{text}
            </span>
          ))}
        </div>

        <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
          {tags.map(t => (
            <span key={t} style={{
              fontSize:'0.72rem', fontWeight:500,
              background:'rgba(249,115,22,0.1)', border:'1px solid rgba(249,115,22,0.2)',
              color:'var(--color-primary)', padding:'0.25rem 0.65rem', borderRadius:'99px',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
