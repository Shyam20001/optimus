import React, { useState } from 'react';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contact', formData);
      alert('Message sent successfully');
    } catch (error) {
      alert('Failed to send message');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
    </form>
  );
};

export default ContactForm;
