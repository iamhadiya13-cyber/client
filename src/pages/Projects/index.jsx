import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  { title: 'NH-23 Highway Expansion', category: 'Highway', desc: '43 km four-lane highway project in Jharkhand completed ahead of schedule with zero safety incidents.', img: 'https://images.unsplash.com/photo-1545459724-a78b5e523fbb?w=1600&q=80' },
  { title: 'Bokaro Steel Plant Expansion', category: 'Industrial', desc: 'Complete Phase-II expansion including new rolling mill and material handling systems.', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1600&q=80' },
  { title: 'Industrial Township Development', category: 'Urban Development', desc: 'Complete township infrastructure for 5000+ workforce with all modern amenities.', img: 'https://images.unsplash.com/photo-1541888081622-6b9f27ea6e7e?w=1600&q=80' },
  { title: 'Damanganga Bridge Project', category: 'Bridge', desc: '120m span prestressed concrete bridge connecting industrial zones.', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1600&q=80' },
];

/* ── Animation Variants ────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

export default function Projects() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden selection:bg-orange-500 selection:text-white pt-[76px]">
      
      {/* ════════════════════════════════════════════════
          1. HEADER SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp} className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Our Portfolio
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Excellence in Execution
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-base md:text-lg leading-relaxed">
              We deliver massive-scale infrastructural deployments with uncompromising precision. Explore our showcase of transformative engineering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          2. PROJECTS FEED
      ════════════════════════════════════════════════ */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.title}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="flex flex-col justify-center min-h-[calc(100vh-76px)] gap-8 py-12 border-b border-gray-100 last:border-0"
            >
              {/* Project Details (Top) */}
              <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex flex-col items-start max-w-2xl">
                  <span className="text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                    {String(index + 1).padStart(2, '0')} // {project.category}
                  </span>
                  <h2 className="font-['Outfit'] text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>

              {/* Project Image (Bottom Horizontal) */}
              <motion.div 
                variants={fadeUp} 
                className="w-full h-[400px] md:h-[60vh] rounded-xl overflow-hidden shadow-lg relative group cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${project.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
