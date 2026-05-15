import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center">
      <p className="text-gray-400 text-sm font-medium tracking-wide">
        All Right Reserved GSR Infra. © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
