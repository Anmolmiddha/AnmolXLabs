import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RECAPTCHA_SITE_KEY = '6LdAn1MrAAAAAOM12g7lzqErTtWmNUtXVBUxeupO';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.body.appendChild(script);
    };
    loadRecaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });
      const response = await fetch('https://YOUR_CLOUD_FUNCTION_URL/submitContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Error verifying reCAPTCHA or saving to Firestore');
      }
    } catch (err) {
      console.error('Submission failed', err);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="text-gray-800 scroll-smooth">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-purple-100 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-700">AnmolxLabs</h1>
          <nav className="hidden md:flex space-x-6 text-sm md:text-base">
            <ScrollLink to="hero" smooth duration={500} className="cursor-pointer text-purple-700 hover:underline">Home</ScrollLink>
            <ScrollLink to="workshop" smooth duration={500} className="cursor-pointer text-purple-700 hover:underline">Workshop</ScrollLink>
            <ScrollLink to="resources" smooth duration={500} className="cursor-pointer text-purple-700 hover:underline">Resources</ScrollLink>
            <ScrollLink to="about" smooth duration={500} className="cursor-pointer text-purple-700 hover:underline">About</ScrollLink>
            <ScrollLink to="contact" smooth duration={500} className="cursor-pointer text-purple-700 hover:underline">Contact</ScrollLink>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6 text-purple-700" /> : <Menu className="w-6 h-6 text-purple-700" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 bg-purple-100 space-y-2">
            {[{ id: 'hero', label: 'Home' }, { id: 'workshop', label: 'Workshop' }, { id: 'resources', label: 'Resources' }, { id: 'about', label: 'About' }, { id: 'contact', label: 'Contact' }].map(({ id, label }) => (
              <ScrollLink key={id} to={id} smooth duration={500} className="block text-purple-700 hover:underline cursor-pointer" onClick={() => setMenuOpen(false)}>{label}</ScrollLink>
            ))}
          </div>
        )}
      </header>

      {/* Final CTA with Firebase Contact Form */}
      <section id="contact" className="py-20 text-center px-6 bg-purple-50">
        <h2 className="text-3xl font-bold text-purple-700 mb-4" data-aos="fade-up">Ready to Level Up?</h2>
        <p className="text-lg mb-6 text-gray-700" data-aos="fade-up" data-aos-delay="200">Access exclusive toolkits and book personalized mentoring.</p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-xl p-6 space-y-4" data-aos="fade-up" data-aos-delay="300">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <textarea name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <button type="submit" disabled={isSubmitting} className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitted && <p className="text-green-600 text-sm mt-2">Thanks! We'll get back to you soon.</p>}
        </form>
      </section>
    </div>
  );
}
