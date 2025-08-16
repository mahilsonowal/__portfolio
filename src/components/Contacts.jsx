import React, { useState } from 'react';

const Contact = ({ onClose }) => {
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

  const goToHome = () => {
    // Scroll to top of the page (home section)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contacts" className="bg-black text-white py-16 md:py-32 relative min-h-[80vh] flex items-center">


      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#c2c2c2] to-white leading-tight py-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#808080] mb-8">
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
      </div>
    </section>
  );
};

export default Contact;