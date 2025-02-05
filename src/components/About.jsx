import React from 'react';

const About = ({ onClose }) => {
  return (
    <section className="bg-black text-white py-8 md:py-16 relative min-h-screen overflow-y-auto">
      {/* Mobile Close Button */}
      <button
        onClick={onClose}
        className="md:hidden fixed top-4 right-4 text-white hover:text-gray-300 z-50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1a1a1a] transition-all duration-300"
      >
        <span className="text-xl">✕</span>
      </button>

      {/* Desktop Close Button */}
      <button
        onClick={onClose}
        className="hidden md:flex fixed top-8 right-8 text-white hover:text-gray-300 z-50 w-12 h-12 items-center justify-center rounded-full hover:bg-[#1a1a1a] transition-all duration-300"
      >
        <span className="text-2xl">✕</span>
      </button>

      <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="mt-70 md:mt-40 text-3xl md:text-6xl font-extrabold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#c2c2c2] to-white leading-[1.2]">
          About Me 🚀
          </h2>
          


          <div className="space-y-4 md:space-y-6 text-base md:text-xl">
            <p className="text-[#a0a0a0]">
            I'm <span className="text-white font-semibold">Mahil</span> — your friendly neighborhood web wizard 🧙‍♂️
            </p>

            <p className="text-[#a0a0a0]">
            I'm not just another dev who codes; I'm all about creating <span className="text-white">digital experiences that slap</span>! From pixel-perfect frontends to rock-solid backends, I'm here to make the web a cooler place, one project at a time. ✨
            </p>

            <p className="text-[#a0a0a0]">
              Chasing my dream of creating next-level web experiences, I specialize in <span className="text-white">full-stack development</span>, turning complex ideas into user-friendly applications. From sleek frontends to robust backends, I make sure every project is a certified banger! ✨
            </p>

            <p className="text-[#a0a0a0]">
            When I'm not in my code cave, you'll find me <span className="text-white">leveling up my tech stack</span>, vibing with the latest web trends, or turning coffee into code. No cap, I'm obsessed with making things look and work better! 💯
            </p>

            <p className="text-[#a0a0a0]">
            Tech Stack? I'm fluent in the holy trinity of <span className="text-white">HTML, CSS, and JavaScript</span>, plus I've got mad skills in <span className="text-white">React, Node.js, and more</span>. Fr fr, if it's web-related, I'm probably already learning it! 🔥
            </p>

            <p className="text-[#a0a0a0]">
              Let's collab and build something that makes people go "sheesh!" Ready to turn your ideas into reality? Hit me up and let's make it happen! 🚀
            </p>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4">
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #WebDevelopment
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #FullStack
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #ReactJS
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #NodeJS
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #CleanCode
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
