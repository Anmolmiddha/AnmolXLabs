import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setStatus("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="..." />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="..." />
      <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Your Message" required className="..." />
      <button type="submit" className="...">Send Message</button>
      {status && <p className="text-sm text-green-600">{status}</p>}
    </form>
  );
};  