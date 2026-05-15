import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrolled';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import logo from "../../assets/windowlogo.png";
import mobileLogo from "../../assets/gsrlogo.png";

const NAV_LINKS = [
  { label: 'Home',     path: '/' },
  { label: 'Projects', path: '/projects' },
  // { label: 'Services', path: '/services' },
  // { label: 'About',    path: '/about' },
  { label: 'Contact',  path: '/contact' },
];

export default function Navbar() {
  const scrolled = useScrolled(20);
  const scrollDirection = useScrollDirection();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white'
      } ${
        scrollDirection === 'down' && scrolled && !open ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="GSR Infra"
            className="h-12 w-auto object-contain"
            onError={e => { e.currentTarget.style.display='none'; }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink key={path} to={path}>
              {({ isActive }) => (
                <div className={`relative group py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-orange-500' : 'text-gray-600 hover:text-gray-900'}`}>
                  {label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-300 ease-out ${isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`} />
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(p => !p)}
            className="md:hidden text-gray-900 p-1.5"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold transition-colors ${
                      isActive ? 'text-orange-500' : 'text-gray-700'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
