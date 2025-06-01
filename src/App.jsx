// Root structure of Anmolxlabs multi-page website using React + Tailwind
// Pages: Home, Workshop, Resources, About, Contact

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

// Fallback components until actual pages are implemented


const Workshop = () => <div className="p-8 text-center text-xl">Workshop page under construction.</div>;
const Resources = () => <div className="p-8 text-center text-xl">Resources page coming soon.</div>;

const About = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold text-purple-700 mb-6">About AnmolxLabs</h1>
    <p className="mb-4">
      Welcome to AnmolxLabs – a knowledge-driven platform built to empower students, innovators, and aspiring leaders with world-class resources and actionable insights.
    </p>
    <p className="mb-4">
      Founded by Anmol Middha, a researcher, speaker, and mentor, AnmolxLabs is a hub for those who dream big and act bold. From crafting impactful pitch decks and publishing standout research papers, to mastering the art of event strategy and delivering high-converting workshops – we provide the exact blueprints you need to accelerate your journey.
    </p>
    <p className="mb-4 font-semibold">Our mission is simple: <span className="italic font-normal">To transform raw ambition into refined execution.</span></p>
    <p className="mb-4">
      Whether you're a college student preparing for your next tech event, a young innovator needing research guidance, or a creator looking to build a powerful narrative – AnmolxLabs gives you the tools, templates, and mentorship to stand out and scale up.
    </p>
    <h2 className="text-2xl font-semibold text-purple-600 mb-2">What We Offer:</h2>
    <ul className="list-disc list-inside mb-4 space-y-2">
      <li><strong>Master Webinars & Workshops</strong> – Learn directly from real-world strategies that work.</li>
      <li><strong>Pitch Deck Toolkits</strong> – Investor-ready templates and guides for founders and startups.</li>
      <li><strong>Research Paper Roadmaps</strong> – Step-by-step guidance to get published and cited.</li>
      <li><strong>Event Strategy Kits</strong> – Curated assets to help you plan, execute, and promote events that leave an impact.</li>
    </ul>
    <p>Built on experience, led by insight, and powered by purpose – AnmolxLabs is your launchpad to leadership.</p>
  </div>
);

const Contact = () => (
  <div className="p-8 max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold text-purple-700 mb-6">Get in Touch</h1>
    <p className="mb-4 max-w-2xl">
      Have a question, partnership idea, or need personalized guidance? We’d love to hear from you.
      Whether you're a student, educator, startup founder, or curious learner – we’re here to help you take your next big leap with the right tools and support.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-lg" required />
        <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-lg" required />
        <textarea placeholder="Your Message" rows="5" className="w-full border p-3 rounded-lg" required></textarea>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Send Message</button>
      </form>
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-xl border">
          <h2 className="font-semibold text-lg mb-2">📬 Contact Information</h2>
          <p><strong>📧 Email:</strong> <a href="mailto:anmolxlabs@gmail.com" className="text-purple-700 underline">anmolxlabs@gmail.com</a></p>
          <p><strong>🌐 Website:</strong> <a href="https://anmolxlabs.netlify.app" className="text-purple-700 underline">anmolxlabs.netlify.app</a></p>
          <p><strong>📍 Location:</strong> Noida, India</p>
          <p><strong>🕒 Available:</strong> Mon–Sat, 10 AM – 6 PM IST</p>
        </div>
        <div className="bg-white border shadow p-4 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">🎯 Book a Consultation</h3>
          <p className="mb-3">Want 1:1 help or project collaboration?</p>
          <a 
            href="mailto:anmolxlabs@gmail.com?subject=Booking%20Request%20from%20AnmolxLabs%20Website" 
            className="block text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            Book via Email
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-2">🔗 Socials</h4>
          <div className="space-x-4">
            <a href="https://www.linkedin.com/in/anmolmiddha" className="text-purple-600 underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
