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
          <h2 className="mt-16 md:mt-20 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#c2c2c2] to-white leading-tight">
            About Me 🚀
          </h2>
          

          <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl">
            <p className="text-[#a0a0a0] leading-relaxed">
            I'm <span className="text-white font-semibold">Mahil</span> — a passionate full-stack developer crafting modern web experiences 🧙‍♂️
            </p>

            <p className="text-[#a0a0a0] leading-relaxed">
            I've evolved from basic web development to building <span className="text-white">scalable, production-ready applications</span> using cutting-edge technologies. My journey has taken me from static websites to dynamic, interactive web applications that solve real-world problems! ✨
            </p>

            <p className="text-[#a0a0a0] leading-relaxed">
              As a <span className="text-white">React specialist</span>, I've mastered modern React patterns including hooks, context, and functional components. I build responsive, accessible UIs that provide exceptional user experiences across all devices and platforms.
            </p>

            <p className="text-[#a0a0a0] leading-relaxed">
            My backend expertise includes <span className="text-white">Supabase</span> for real-time databases, authentication, and serverless functions. I've built full-stack applications with real-time features, user management systems, and scalable data architectures.
            </p>

            <p className="text-[#a0a0a0] leading-relaxed">
            I'm constantly <span className="text-white">expanding my tech stack</span> with modern tools like TypeScript, Next.js, Tailwind CSS, and state management solutions. I believe in writing clean, maintainable code that follows industry best practices and design patterns.
            </p>

            <p className="text-[#a0a0a0] leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm passionate about creating solutions that make a difference! 🔥
            </p>

            <p className="text-[#a0a0a0] leading-relaxed">
              Ready to collaborate on something amazing? Let's build the next big thing together! 🚀
            </p>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4">
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #ReactJS
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #Supabase
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #FullStack
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #TypeScript
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #ModernWeb
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
