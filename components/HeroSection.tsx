
'use client';

import Link from 'next/link';

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20abstract%20technology%20background%20with%20flowing%20digital%20patterns%2C%20geometric%20shapes%2C%20and%20gradient%20lighting%20effects%20in%20dark%20blue%20and%20cyan%20colors%2C%20futuristic%20tech%20atmosphere%2C%20minimal%20and%20professional%20design%2C%20high%20contrast%20and%20sharp%20details&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-slate-900/80"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ajit Dhavale
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-medium text-gray-200">
              Full-Stack Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Helping startups and businesses achieve seamless digital transformation through innovative web solutions and scalable applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 whitespace-nowrap cursor-pointer"
            >
              Get Started
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
            
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-cyan-400/10 whitespace-nowrap cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-gray-400"></i>
      </div>
    </section>
  );
}
