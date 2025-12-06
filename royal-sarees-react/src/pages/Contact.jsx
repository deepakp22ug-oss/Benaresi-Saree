import React, { useState, useEffect } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-hero text-white py-12">
        <div className="container-max">
          <h1 className="text-4xl font-serif font-bold">Contact Us</h1>
          <p className="text-gray-200 mt-2">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container-max py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-gray-600">
                    VINARM BANARSI RITHEE Workshop<br />
                    Varanasi, Uttar Pradesh<br />
                    India - 221002
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-600">
                    +91 7355018138<br />
                    +91 9235473347
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-600">
                    vinarmbnarashirithee@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiClock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="font-serif font-bold text-xl mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-primary-800 text-white rounded-full flex items-center justify-center hover:bg-primary-900 transition">
                  f
                </a>
                <a href="#" className="w-12 h-12 bg-primary-800 text-white rounded-full flex items-center justify-center hover:bg-primary-900 transition">
                  ig
                </a>
                <a href="#" className="w-12 h-12 bg-primary-800 text-white rounded-full flex items-center justify-center hover:bg-primary-900 transition">
                  𝕏
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg mb-6">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-800"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-800"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-800"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-800"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-800 resize-none"
              ></textarea>

              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://www.luxurionworld.com/cdn/shop/articles/Banarasi-Sarees-Slider.jpg?v=1726739373"
            alt="Location Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

