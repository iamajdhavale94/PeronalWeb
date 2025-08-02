
'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ajit Dhavale
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full-stack developer passionate about creating innovative digital solutions that drive business growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                <i className="ri-github-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Consulting</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('.py-20.bg-gray-50')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ajit Dhavale. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
