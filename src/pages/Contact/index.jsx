import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

/* ── Animation Variants ────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden selection:bg-orange-500 selection:text-white pt-[40px]">
      
      {/* ════════════════════════════════════════════════
          1. CONTACT HERO / INQUIRE SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center mb-16"
          >
            <motion.h1 variants={fadeUp} className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-orange-500 text-sm font-bold tracking-[0.15em] uppercase">
              Find Here The Answers You Are Looking For
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            {/* LEFT: Headquarters Info (Dark Cards) */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <h2 className="font-['Outfit'] text-2xl font-bold text-gray-900 mb-2">
                GSR INFRA <span className="text-orange-500">Headquarters</span>
              </h2>

              <div className="bg-[#1e2330] rounded-xl p-6 flex items-start gap-4 shadow-lg">
                <MapPin className="text-orange-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-bold text-base mb-2">Registered Office:</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Plot No. 45, Industrial Area<br />
                    Sector-4, Bokaro Steel City<br />
                    Bokaro, Jharkhand 827004<br />
                    India
                  </p>
                </div>
              </div>

              <div className="bg-[#1e2330] rounded-xl p-6 flex items-start gap-4 shadow-lg">
                <Phone className="text-orange-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-bold text-base mb-2">Phone:</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    +91 6542 256789<br />
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="bg-[#1e2330] rounded-xl p-6 flex items-start gap-4 shadow-lg">
                <Mail className="text-orange-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-bold text-base mb-2">Email:</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    info@gsrinfra.com<br />
                    projects@gsrinfra.com
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Inquire Form */}
            <motion.form
              variants={fadeUp}
              onSubmit={e => e.preventDefault()}
              className="bg-white border border-gray-200 shadow-md p-8 md:p-12 w-full rounded-xl"
            >
              <h2 className="font-['Outfit'] text-2xl font-bold text-gray-900 mb-8 uppercase tracking-tight">
                Send an Inquiry
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none transition-colors resize-none rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold tracking-[0.1em] uppercase py-4 rounded-lg transition-colors duration-200 mt-4"
                >
                  Submit Inquiry
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          2. MAP SECTION
      ════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="flex flex-col items-center text-center mb-12"
          >
            <h2 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight mb-3">
              REGISTERED OFFICE
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Plot No. 45, Industrial Area, Sector-4, Bokaro Steel City, Bokaro, Jharkhand 827004, India<br/>
              Phone: +91 6542 256789
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="w-full h-[400px] md:h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-200"
          >
            <iframe
              title="GSR Infra Headquarters"
              src="https://maps.google.com/maps?q=Plot%20No.%2045,%20Industrial%20Area,%20Sector-4,%20Bokaro%20Steel%20City,%20Jharkhand%20827004&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
