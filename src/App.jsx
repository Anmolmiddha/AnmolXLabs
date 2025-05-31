import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Launch Your Career with the Master Webinar Series
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Live workshops, expert insights, and toolkits for ambitious students and early-stage founders.
        </p>
        <Button className="text-lg px-6 py-3" onClick={() => window.location.href = "https://forms.gle/your-form-link"}>
          Register for the Next Webinar
        </Button>
      </section>

      {/* What You’ll Learn */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">What You’ll Learn</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "How to turn ideas into startups",
            "AI tools & automation secrets",
            "Resume + LinkedIn breakdown",
            "Funding & pitching insights",
          ].map((item, i) => (
            <Card key={i} className="bg-gray-800 text-white">
              <CardContent className="p-6 text-lg">✅ {item}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="text-center max-w-xl mx-auto">
          <img src="/your-photo.jpg" alt="Anmol Middha" className="rounded-full w-32 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Anmol Middha</h3>
          <p className="mt-2 text-gray-300">Author, Builder & Community Leader</p>
          <p className="mt-4 text-gray-400 text-sm">
            I help students and founders build real-world skills through tech, community, and mentorship.
          </p>
        </div>
      </section>

      {/* Freebies / Toolkit */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Freebies You’ll Get</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Notion Resume Template",
            "Startup Idea Validator",
            "AI Productivity Stack",
          ].map((tool, i) => (
            <Card key={i} className="bg-gray-800 text-white">
              <CardContent className="p-6 text-center text-lg">🎁 {tool}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Register CTA Again */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Next Master Webinar</h2>
        <p className="mb-4">📅 Date & time will be announced soon</p>
        <Button className="text-lg px-6 py-3" onClick={() => window.location.href = "https://forms.gle/your-form-link"}>
          Register Now
        </Button>
      </section>

      {/* Footer with Email Capture */}
      <footer className="bg-gray-900 py-10 px-4 text-center">
        <p className="text-gray-400 mb-4">Want reminders and bonus tools? Drop your email.</p>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="px-4 py-2 rounded-lg text-black w-64"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </footer>
    </div>
  );
}
