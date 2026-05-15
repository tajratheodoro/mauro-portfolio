/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="dark min-h-screen bg-brand-dark overflow-x-hidden selection:bg-gray-800 transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Clients />
        <Portfolio />
      </main>
      <ContactFooter />
    </div>
  );
}
