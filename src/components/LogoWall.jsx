import React from 'react';

const logoImgs = [
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", altText: "React" },
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", altText: "Node.js" },
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", altText: "JavaScript" },
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", altText: "HTML5" },
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", altText: "CSS3" },
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", altText: "Python" },
];

const LogoWall = () => {
  return (
    <section className="py-10 md:py-16 relative bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          {logoImgs.map((logo, index) => (
            <div 
              key={index} 
              className="text-center transform transition-all duration-300 hover:scale-110 hover:rotate-3"
            >
              <img 
                src={logo.imgUrl} 
                alt={logo.altText} 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;

