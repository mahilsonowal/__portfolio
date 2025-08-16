import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    const mailtoLink = `mailto:mahilsonowalpro5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.open(mailtoLink);
    
    // Show success message
    setStatus({ type: 'success', message: 'Email client opened! Please send the email to complete your message.' });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#333333]">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#c2c2c2] to-white hover:scale-105 transition-transform duration-300">
              Portfolio
            </Link>
            <Link 
              to="/"
              className="text-white hover:text-gray-300 px-4 py-2 rounded-full border border-[#333333] hover:bg-[#1a1a1a] transition-all duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#c2c2c2] to-white leading-tight py-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-[#808080] mb-8">
            Have a question or want to work together? Drop me a message! ✨
          </p>
          <p className="text-sm text-[#666666] mb-4">
            Your message will be sent directly to: <span className="text-white font-semibold">mahilsonowalpro5@gmail.com</span>
          </p>
        </div>

        {status.message && (
          <div className={`max-w-lg mx-auto mb-8 p-4 rounded-lg ${
            status.type === 'success' 
              ? 'bg-[#1a332a] text-green-400 border border-green-900' 
              : 'bg-[#331a1a] text-red-400 border border-red-900'
          }`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white placeholder-gray-400 focus:outline-none focus:border-[#4a4a4a] transition-colors"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white placeholder-gray-400 focus:outline-none focus:border-[#4a4a4a] transition-colors"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#333333] text-white placeholder-gray-400 focus:outline-none focus:border-[#4a4a4a] transition-colors resize-none"
              rows="5"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full p-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#333333]"
          >
            Send Message
          </button>
        </form>
        
        {/* Alternative Contact Methods */}
        <div className="max-w-lg mx-auto mt-8 text-center">
          <p className="text-sm text-[#666666] mb-4">Or contact me directly:</p>
          <a 
            href="mailto:mahilsonowalpro5@gmail.com"
            className="inline-flex items-center gap-2 text-white hover:text-[#4a4a4a] transition-colors duration-300"
          >
            <span>📧</span>
            <span className="text-sm md:text-base">mahilsonowalpro5@gmail.com</span>
          </a>
        </div>

        {/* Additional Info */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#333333]">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-[#808080]">I typically respond within 24 hours</p>
            </div>
            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#333333]">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="text-lg font-semibold mb-2">Project Ready</h3>
              <p className="text-sm text-[#808080]">Available for new projects and collaborations</p>
            </div>
            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#333333]">
              <div className="text-3xl mb-2">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Remote Work</h3>
              <p className="text-sm text-[#808080]">Comfortable working with clients worldwide</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
