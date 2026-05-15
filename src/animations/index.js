// Shared Framer Motion variants

export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.5, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const staggerFast = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// viewport trigger helper – pass to motion components
export const viewport = { once: true, margin: '-80px' };
