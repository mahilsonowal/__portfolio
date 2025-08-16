import React from 'react';
import { FaCode, FaLaptopCode, FaReact, FaDatabase } from 'react-icons/fa';
import { SiSupabase, SiTypescript, SiTailwindcss } from 'react-icons/si';

const projects = [
    {
        name: 'Mukuba Economic Research and Consulting Firm',
        image: '/projects/project1.png',
        description: 'A website for a consulting firm that provides economic research and consulting services. Built with React, TypeScript, and Supabase. Features include real-time inventory management, user authentication, payment processing, and responsive design.',
        technologies: ['React', 'JavaScript', 'Supabase', 'Tailwind CSS', 'Payment Gateway'],
        github: '#',
        live: 'https://mukubaecon.io/'
    },
    {
        name: 'LevelUp Gaming Hosting Platform',
        image: '/projects/project 2.png',
        description: 'A comprehensive gaming hosting website that provides server hosting services for gamers. Features include server management, user dashboards, payment integration, and real-time server monitoring.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        github: '#',
        live: 'https://levelupgame.in/'
    },
    {
        name: 'Genesis Press Printing Services',
        image: '/projects/project3.png',
        description: 'A professional printing press website showcasing printing services, order management, and customer portal. Built with modern web technologies for optimal user experience.',
        technologies: ['React', 'Express.js', 'Tailwind CSS'],
        github: '#',
        live: 'https://www.genesispress.in/'
    },
    {
        name: 'Biggex Creators Carnival 2025',
        image: '/projects/project4.png',
        description: "Assam's premier digital creator competition website designed to discover, nurture, and promote the region's most talented content creators. Features include registration, submissions, voting, and live updates.",
        technologies: ['React', 'Tailwind CSS'],
        github: '#',
        live: 'https://www.biggex.in/'
    },
    {
        name: 'Bondhu Food Delivery App',
        image: '/projects/project5.png',
        description: 'A food delivery application for a restaurant in Dibrugarh. Currently in development with features including menu management, order tracking, payment processing, and delivery management. Expected completion: August 2025.',
        technologies: ['React Native', 'Supabase', 'Payment API', 'Real-time Updates'],
        github: '#',
        live: '#',
        status: 'In Development - August 2025'
    }
];

const ProjectShowcase = () => {
    return (
        <div className="project-showcase bg-black text-white py-8 md:py-16">
            <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
                <FaCode className="text-2xl md:text-3xl text-[#808080]" />
                <h2 className="text-3xl md:text-4xl font-bold text-center">My Projects</h2>
                <FaLaptopCode className="text-2xl md:text-3xl text-[#808080]" />
            </div>
            
            <div className="flex flex-col space-y-8 md:space-y-16 w-full max-w-6xl mx-auto px-4 md:px-6">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="project-item flex flex-col lg:flex-row items-start gap-6 md:gap-8 p-4 md:p-8 rounded-xl 
                                 hover:bg-gray-900 transition-all duration-300 border border-gray-800 hover:border-gray-600"
                    >
                        <div className="flex-1 space-y-4 md:space-y-6 order-2 lg:order-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                <h3 className="text-lg md:text-2xl font-semibold text-white leading-tight">{project.name}</h3>
                                {project.status && (
                                    <span className="bg-yellow-600 text-black px-2 py-1 rounded-full text-xs font-medium w-fit">
                                        {project.status}
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-lg">{project.description}</p>
                            
                            {/* Technology Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="bg-[#1a1a1a] px-3 py-1 rounded-full text-xs text-[#808080] border border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Project Links */}
                            <div className="flex gap-4 pt-2">
                                <a 
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#808080] hover:text-white transition-colors duration-300 text-sm flex items-center gap-2"
                                >
                                    <FaLaptopCode className="text-sm" />
                                    Live 
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex-1 w-full lg:w-auto order-1 lg:order-2">
                            <img 
                                src={project.image} 
                                alt={project.name} 
                                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-2xl 
                                         hover:transform hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Tech Stack Section */}
            <div className="mt-16 md:mt-20 text-center px-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Technologies I Work With</h3>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    <div className="flex flex-col items-center gap-2 text-[#808080] hover:text-white transition-colors duration-300">
                        <FaReact className="text-4xl md:text-5xl" />
                        <span className="text-sm">React</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-[#808080] hover:text-white transition-colors duration-300">
                        <SiSupabase className="text-4xl md:text-5xl" />
                        <span className="text-sm">Supabase</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-[#808080] hover:text-white transition-colors duration-300">
                        <SiTypescript className="text-4xl md:text-5xl" />
                        <span className="text-sm">TypeScript</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-[#808080] hover:text-white transition-colors duration-300">
                        <SiTailwindcss className="text-4xl md:text-5xl" />
                        <span className="text-sm">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-[#808080] hover:text-white transition-colors duration-300">
                        <FaDatabase className="text-4xl md:text-5xl" />
                        <span className="text-sm">Databases</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;
