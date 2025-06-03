

// Home Page based on Google Docs content
/*

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


const Home = () => (
  <div className="p-8 max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-purple-700 mb-6">AnmolxLabs</h1>
    <p className="mb-6 text-lg">
      Your go-to toolkit for building pitch decks, getting research published, designing high-impact workshops, and organizing unforgettable tech events – all in one place.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <div className="bg-white shadow-md rounded-xl p-6 border">
        <h2 className="text-xl font-semibold text-purple-600 mb-2">🎤 Master Webinars</h2>
        <p>Learn how to build and sell knowledge-based workshops that convert like crazy.</p>
      </div>
      <div className="bg-white shadow-md rounded-xl p-6 border">
        <h2 className="text-xl font-semibold text-purple-600 mb-2">📊 Pitch Deck Toolkits</h2>
        <p>Access investor-ready templates + guides that help you pitch, fund, and scale.</p>
      </div>
      <div className="bg-white shadow-md rounded-xl p-6 border">
        <h2 className="text-xl font-semibold text-purple-600 mb-2">📚 Research Paper Roadmaps</h2>
        <p>From zero to published – a step-by-step framework to build and publish papers that matter.</p>
      </div>
      <div className="bg-white shadow-md rounded-xl p-6 border">
        <h2 className="text-xl font-semibold text-purple-600 mb-2">🎯 Event Strategy Kits</h2>
        <p>Proven blueprints to plan, promote, and execute events that drive attention + impact.</p>
      </div>
    </div>
    <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-xl shadow-md mb-10">
      <h3 className="text-2xl font-semibold text-purple-700 mb-2">⚡ Why AnmolxLabs?</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Actionable Templates:</strong> No fluff. Just plug-and-play files, plans, and flows.</li>
        <li><strong>Built by a Practitioner:</strong> Created by Anmol Middha, a researcher, speaker, and student mentor.</li>
        <li><strong>For Doers:</strong> Whether you’re in college or building your first startup – we got you.</li>
      </ul>
    </div>
    <div className="text-center">
      <a href="/resources" className="bg-purple-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-800 transition">
        🚀 Explore Toolkits
      </a>
    </div>
  </div>
);
*/
// Other pages
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'; 

// Workshop component
const Workshop = () => (
  <div className="p-8 text-center text-xl">Workshop page under construction.</div>
);

// Resources component
const Resources = () => (
  <div className="p-8 text-center text-xl">Resources page coming soon.</div>
);

// About component
const About = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold text-purple-700 mb-6">About AnmolxLabs</h1>
    <p className="mb-4">
      Welcome to AnmolxLabs – a knowledge-driven platform built to empower students, innovators, and aspiring leaders with world-class resources and actionable insights.
    </p>
    <p className="mb-4">
      Founded by Anmol Middha, a researcher, speaker, and mentor, AnmolxLabs is a hub for those who dream big and act bold...
    </p>
    <p className="mb-4 font-semibold">
      Our mission is simple: <span className="italic font-normal">To transform raw ambition into refined execution.</span>
    </p>
    <h2 className="text-2xl font-semibold text-purple-600 mb-2">What We Offer:</h2>
    <ul className="list-disc list-inside mb-4 space-y-2">
      <li><strong>Master Webinars & Workshops</strong></li>
      <li><strong>Pitch Deck Toolkits</strong></li>
      <li><strong>Research Paper Roadmaps</strong></li>
      <li><strong>Event Strategy Kits</strong></li>
    </ul>
    <p>Built on experience, led by insight, and powered by purpose – AnmolxLabs is your launchpad to leadership.</p>
  </div>
);

// Navbar component
const Navbar = () => (
  <nav className="bg-purple-700 text-white px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Anmolxlabs</h1>
    <div className="space-x-4">
      <a href="/" className="hover:underline">Home</a>
      <a href="/workshop" className="hover:underline">Workshop</a>
      <a href="/resources" className="hover:underline">Resources</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/contact" className="hover:underline">Contact</a>
    </div>
  </nav>
);

// Footer component
const Footer = () => (
  <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
    © {new Date().getFullYear()} Anmolxlabs. All rights reserved.
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />  {/* Contact component */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// NOTE: You need to import Contact below after creating the Contact component file with Firebase logic!

