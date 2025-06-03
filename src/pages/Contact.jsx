// src/pages/Contact.jsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';  // Adjust path if needed

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: new Date()
      });
      setStatus("Message sent successfully!");
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus("Failed to send message: " + error.message);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Get in Touch</h1>
      <p className="mb-4 max-w-2xl">Have a question, partnership idea, or need personalized guidance? We’d love to hear from you.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="bg-white shadow-md rounded-xl p-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border p-3 rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Send Message
          </button>
          {status && <p className="mt-2 text-center">{status}</p>}
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
};

export default Contact;
