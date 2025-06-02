/*const Home = () => {
  return (
    <div className="text-center px-6 py-12 bg-gradient-to-b from-white via-purple-50 to-white">
      <section className="mb-12 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4 leading-tight">
          Empowering Students to Lead, Build & Publish
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Learn how to go from a student to a standout leader, founder, or researcher. Get hands-on with our premium toolkits, workshops, and strategy kits.
        </p>
        <a
          href="/workshop"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-md transition"
        >
          Join the June 7 Workshop →
        </a>
      </section>

      <section className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-600 mb-8">Explore Our Toolkits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border shadow-md p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Pitch Deck Kit</h3>
            <p className="text-gray-700">
              Craft winning startup decks with our ready-to-use templates and pitch guidance. Ideal for founders and early-stage entrepreneurs.
            </p>
          </div>
          <div className="bg-white border shadow-md p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">📄 Research Paper Toolkit</h3>
            <p className="text-gray-700">
              Learn how to write, structure, and publish impactful research papers. Perfect for students and aspiring scholars.
            </p>
          </div>
          <div className="bg-white border shadow-md p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">🎯 Event Strategy Guide</h3>
            <p className="text-gray-700">
              Organize campus events like a pro with our complete planner and promotional strategy kit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; */

// pages/Home.jsx


/*
import React from 'react';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-purple-50 to-purple-100 min-h-screen text-gray-800">
      // Hero Section 
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-6 drop-shadow-lg">
          Empowering Visionaries with the Right Tools
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-6">
          Welcome to <strong>AnmolxLabs</strong> — your launchpad to leadership. Explore ready-to-use strategies for pitch decks, research papers, workshops, and impactful events.
        </p>
        <a
          href="/workshop"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition"
        >
          Join a Master Webinar
        </a>
      </section>

      // Features Section 
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Pitch Deck Toolkits',
            desc: 'Investor-ready templates and storytelling frameworks.',
          },
          {
            title: 'Research Paper Roadmaps',
            desc: 'Step-by-step guides to help you publish & stand out.',
          },
          {
            title: 'Event Strategy Kits',
            desc: 'Plan, execute, and scale your college events with impact.',
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      // Testimonials 
      <section className="py-16 px-6 bg-purple-50">
        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-10">What Our Community Says</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Riya, BITS Pilani',
              feedback: 'AnmolxLabs gave me the clarity to publish my first paper with confidence. Game-changing!',
            },
            {
              name: 'Aarav, SRM',
              feedback: 'Their event strategy kit helped us triple our hackathon engagement. Highly recommended!',
            },
            {
              name: 'Sneha, DTU',
              feedback: 'The pitch deck resources are gold. Helped me close my first round of campus funding.',
            },
          ].map(({ name, feedback }) => (
            <div key={name} className="bg-white p-6 rounded-xl shadow-md">
              <p className="italic text-gray-700 mb-4">“{feedback}”</p>
              <h4 className="font-semibold text-purple-700 text-sm">{name}</h4>
            </div>
          ))}
        </div>
      </section>

      // Final CTA 
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          Ready to Level Up?
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          Access exclusive toolkits and book personalized mentoring.
        </p>
        <a
          href="/contact"
          className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}*/




import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-gray-800 scroll-smooth">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-purple-100 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-700">AnmolxLabs</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-sm md:text-base">
            <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer text-purple-700 hover:underline">Home</ScrollLink>
            <ScrollLink to="workshop" smooth={true} duration={500} className="cursor-pointer text-purple-700 hover:underline">Workshop</ScrollLink>
            <ScrollLink to="resources" smooth={true} duration={500} className="cursor-pointer text-purple-700 hover:underline">Resources</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer text-purple-700 hover:underline">About</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer text-purple-700 hover:underline">Contact</ScrollLink>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6 text-purple-700" /> : <Menu className="w-6 h-6 text-purple-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 bg-purple-100 space-y-2">
            {[{ id: 'hero', label: 'Home' }, { id: 'workshop', label: 'Workshop' }, { id: 'resources', label: 'Resources' }, { id: 'about', label: 'About' }, { id: 'contact', label: 'Contact' }].map(({ id, label }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth={true}
                duration={500}
                className="block text-purple-700 hover:underline cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </ScrollLink>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section with Parallax Background */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fit=crop&w=1950&q=80)' }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-60" />
        <div className="relative z-10 text-white p-10 max-w-3xl" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Empowering Visionaries with the Right Tools
          </h1>
          <p className="text-lg mb-6">
            Welcome to <strong>AnmolxLabs</strong> — your launchpad to leadership. Explore strategies for pitch decks, research papers, workshops, and impactful events.
          </p>
          <a
            href="/workshop"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Join a Master Webinar
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="resources" className="py-16 px-6 bg-purple-50 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[{
          title: 'Pitch Deck Toolkits',
          desc: 'Investor-ready templates and storytelling frameworks.',
        }, {
          title: 'Research Paper Roadmaps',
          desc: 'Step-by-step guides to help you publish & stand out.',
        }, {
          title: 'Event Strategy Kits',
          desc: 'Plan, execute, and scale your college events with impact.',
        }].map(({ title, desc }, index) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section id="about" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-10" data-aos="fade-up">What Our Community Says</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{
            name: 'Riya, BITS Pilani',
            feedback: 'AnmolxLabs gave me the clarity to publish my first paper with confidence. Game-changing!',
          }, {
            name: 'Aarav, SRM',
            feedback: 'Their event strategy kit helped us triple our hackathon engagement. Highly recommended!',
          }, {
            name: 'Sneha, DTU',
            feedback: 'The pitch deck resources are gold. Helped me close my first round of campus funding.',
          }].map(({ name, feedback }, index) => (
            <div key={name} className="bg-purple-50 p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay={index * 100}>
              <p className="italic text-gray-700 mb-4">“{feedback}”</p>
              <h4 className="font-semibold text-purple-700 text-sm">{name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 text-center px-6 bg-purple-50">
        <h2 className="text-3xl font-bold text-purple-700 mb-4" data-aos="fade-up">
          Ready to Level Up?
        </h2>
        <p className="text-lg mb-6 text-gray-700" data-aos="fade-up" data-aos-delay="200">
          Access exclusive toolkits and book personalized mentoring.
        </p>
        <ul className="mb-6 text-gray-700 text-left max-w-md mx-auto" data-aos="fade-up" data-aos-delay="300">
          <li className="flex items-center mb-2"><span className="text-purple-600 mr-2">✔</span> Proven pitch strategies</li>
          <li className="flex items-center mb-2"><span className="text-purple-600 mr-2">✔</span> Publication-ready research guidance</li>
          <li className="flex items-center"><span className="text-purple-600 mr-2">✔</span> Event growth blueprints</li>
        </ul>
        <a
          href="/contact"
          className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
          data-aos="fade-up" data-aos-delay="400"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
