import React from "react";

export default function App() {
  return (
    <main className="bg-gradient-to-b from-indigo-50 to-white min-h-screen font-sans text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-28 px-6 md:px-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Master Webinar Series
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Unlock your potential with exclusive insights on growth, branding, mindset, and productivity.
          Curated by <strong>Anmol Middha</strong>, designed for students, creators & hustlers aiming to 10x their impact.
        </p>
        <button
          className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          onClick={() => alert("Registration coming soon!")}
          aria-label="Register for Master Webinar Series"
        >
          Register Now
        </button>
      </section>

      {/* Why Join Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Why Join Master Webinar?</h2>
        <div className="grid gap-10 md:grid-cols-3 text-center">
          <BenefitCard
            emoji="⚡"
            title="Boost Productivity"
            description="Master actionable techniques to stay focused, plan smart, and avoid burnout."
          />
          <BenefitCard
            emoji="🚀"
            title="Build Your Brand"
            description="Learn to grow your online presence and stand out in any field."
          />
          <BenefitCard
            emoji="🧠"
            title="Transform Mindset"
            description="Break limiting beliefs and unlock a high-performance attitude."
          />
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-indigo-700 text-white text-center py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Growth Journey Today</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg">
          Secure your spot in the next Master Webinar. It’s time to rise, reinvent, and lead your path to success.
        </p>
        <button
          className="bg-white text-indigo-700 font-bold px-10 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          onClick={() => alert("Seat reservation coming soon!")}
          aria-label="Reserve my seat in Master Webinar"
        >
          Reserve My Seat
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-8 text-sm">
        <p>© 2025 AnmolXLabs. All rights reserved.</p>
        <p className="mt-2">
          {/* Add social media links here */}
        </p>
      </footer>
    </main>
  );
}

// Benefit Card Component
function BenefitCard({ emoji, title, description }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition cursor-default select-none">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
