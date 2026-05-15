import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

function Counter({ from = 0, to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
}
import {
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Route,
  Zap,
} from 'lucide-react';

/* ── Animation Variants ────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const vp = { once: true, margin: '-60px' };

/* ── Data ──────────────────────────────────────────────────── */
const STATS = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 25, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Happy Clients' },
];

const CAPABILITIES = [
  {
    Icon: Route,
    title: 'ROAD CONSTRUCTION',
    desc: 'Complete road infrastructure solutions including highways, expressways, rural roads, and urban development projects with cutting-edge technology.',
    bullets: ['Highways & Expressways', 'Urban Development'],
  },
  {
    Icon: Building2,
    title: 'STEEL PLANT CONSTRUCTION',
    desc: 'Specialized industrial construction for steel plants including blast furnaces, rolling mills, material handling systems, and plant infrastructure.',
    bullets: ['Blast Furnaces', 'Rolling Mills'],
  },
  {
    Icon: Zap,
    title: 'CIVIL ENGINEERING',
    desc: 'Comprehensive civil engineering solutions for foundations, structural steelwork, precast concrete, and heavy industrial foundations.',
    bullets: ['Foundations', 'Precast Concrete'],
  },
];

const PROJECTS = [
  { title: 'NH-23 Highway Expansion', category: 'Highway', desc: '43 km four-lane highway project in Jharkhand completed ahead of schedule with zero safety incidents.', img: 'https://images.unsplash.com/photo-1545459724-a78b5e523fbb?w=800&q=80' },
  { title: 'Bokaro Steel Plant Expansion', category: 'Industrial', desc: 'Complete Phase-II expansion including new rolling mill and material handling systems.', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80' },
  { title: 'Industrial Township Development', category: 'Urban Development', desc: 'Complete township infrastructure for 5000+ workforce with all modern amenities.', img: 'https://images.unsplash.com/photo-1541888081622-6b9f27ea6e7e?w=800&q=80' },
  { title: 'Damanganga Bridge Project', category: 'Bridge', desc: '120m span prestressed concrete bridge connecting industrial zones.', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80' },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden selection:bg-orange-500 selection:text-white pt-[76px]">

      {/* ════════════════════════════════════════════════
          1. HERO SECTION (Centered Full Width)
      ════════════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-76px)] flex items-center justify-center py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-black/60" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
                Trusted Since 2005
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="font-['Outfit'] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6"
            >
              BUILDING THE<br />
              <span className="text-orange-500">UNTHINKABLE</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="space-y-3 mb-10 max-w-lg mx-auto">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                Delivering world-class infrastructure with precision and trust.
              </p>
              <p className="text-white text-base md:text-lg font-medium tracking-wide">
                "We Value Your Investment"
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════
          2. STATS SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200"
          >
            {STATS.map(({ value, suffix, label }) => (
              <motion.div key={label} variants={fadeUp} className="flex flex-col items-start md:items-center text-left md:text-center pt-8 md:pt-0 first:pt-0">
                <p className="font-['Outfit'] text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
                  <Counter to={value} suffix={suffix} />
                </p>
                <p className="text-xs font-bold text-gray-500 tracking-[0.15em] uppercase">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          3. ABOUT US SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Text */}
            <motion.div variants={fadeUp} className="flex flex-col items-start text-left">
              <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                ABOUT US
              </span>
              <h2 className="font-['Outfit'] text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                About GSR INFRA
              </h2>
              <h3 className="text-lg md:text-xl text-gray-500 font-medium mt-2">
                Leading Construction Excellence Since 2005
              </h3>
              <div className="text-gray-600 text-base md:text-lg mt-6 leading-relaxed space-y-4">
                <p>
                  GSR INFRA is a premier construction company specializing in high-quality road projects and industrial construction for steel plants. With our headquarters in Bokaro, Jharkhand, we bring decades of expertise to every project.
                </p>
                <p>
                  Our commitment to safety, innovation, and timely delivery has made us the preferred partner for major infrastructure developments across India.
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div 
              variants={fadeUp}
              className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
            >
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={vp}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1541888081622-6b9f27ea6e7e?w=800&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4. CAPABILITIES SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="flex flex-col gap-10"
          >
            {/* Title Area */}
            <motion.div variants={fadeUp} className="flex flex-col items-start">
              <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight mb-3">
                CAPABILITIES
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
                A technical breakdown of our operational divisions. We execute massive-scale infrastructural deployments with uncompromising precision.
              </p>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {CAPABILITIES.map(({ Icon, title, desc, bullets }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-gray-900 text-white rounded-xl p-6 flex flex-col justify-between group transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)] hover:border-orange-500/50 border border-transparent"
                >
                  <div className="flex flex-col h-full">
                    <div className="text-orange-500 mb-6">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-lg tracking-wide mb-3">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                      {desc}
                    </p>
                    <ul className="space-y-2 mt-auto pt-5 border-t border-gray-800">
                      {bullets.map(b => (
                        <li key={b} className="text-sm text-gray-400 flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4. PROJECTS SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-white py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <motion.div variants={fadeUp} className="flex flex-col items-start">
              <h2 className="font-['Outfit'] text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight mb-6">
                Select Projects
              </h2>
              <div className="w-12 h-1 bg-orange-500"></div>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <Link to="/projects" className="text-xs font-bold tracking-[0.15em] text-orange-500 uppercase hover:text-orange-600 transition-colors duration-200 flex items-center gap-2">
                View All Works <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {PROJECTS.slice(0, 2).map(({ title, category, desc, img }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative h-[400px] overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <div 
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="block text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                    {category}
                  </span>
                  <h3 className="font-['Outfit'] text-xl font-bold text-white leading-snug">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}
