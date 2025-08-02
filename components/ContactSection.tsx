
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Collaborate!
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">iamajdhavale94@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">7767986465</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Pune</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer">
                  <i className="ri-linkedin-fill text-xl text-gray-600 group-hover:text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer">
                  <i className="ri-twitter-fill text-xl text-gray-600 group-hover:text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer">
                  <i className="ri-github-fill text-xl text-gray-600 group-hover:text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer">
                  <i className="ri-dribbble-fill text-xl text-gray-600 group-hover:text-white"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none text-sm"
                  placeholder="Tell me about your project requirements..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>

              <button
                type="submit"
                disabled={!formData.name || !formData.email || !formData.message || formData.message.length > 500}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap cursor-pointer"
              >
                {isSubmitted ? (
                  <>
                    <i className="ri-check-line mr-2"></i>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="ri-send-plane-line ml-2"></i>
                  </>
                )}
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 text-sm">
                  <i className="ri-check-circle-line mr-2"></i>
                  Thank you for your message! I'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
