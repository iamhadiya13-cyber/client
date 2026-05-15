import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn, viewport } from '@/animations';

export default function ServiceCard({ icon: Icon, title, short, features }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -6, boxShadow: '0 12px 48px rgba(249,115,22,0.15)' }}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        transition: 'border-color 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor='rgba(249,115,22,0.4)'}
      onMouseLeave={e => e.currentTarget.style.borderColor='var(--color-border)'}
    >
      <div style={{
        width:'52px', height:'52px',
        borderRadius:'14px',
        background:'rgba(249,115,22,0.12)',
        display:'flex', alignItems:'center', justifyContent:'center',
        marginBottom:'1.25rem',
        border:'1px solid rgba(249,115,22,0.2)',
      }}>
        {Icon && <Icon size={24} color="var(--color-primary)" />}
      </div>
      <h3 style={{ fontSize:'1.15rem', fontWeight:700, marginBottom:'0.6rem' }}>{title}</h3>
      <p style={{ color:'var(--color-muted)', fontSize:'0.9rem', lineHeight:1.7, marginBottom:'1.25rem' }}>{short}</p>
      <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.5rem' }}>
        {features.map(f => (
          <li key={f} style={{ display:'flex', alignItems:'center', gap:'0.5rem', color:'var(--color-muted)', fontSize:'0.85rem' }}>
            <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--color-primary)', flexShrink:0 }} />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
