
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who Am I?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I'm a full-stack web developer with 5+ years of experience building scalable SaaS platforms for startups and enterprises. My passion lies in creating digital solutions that not only look beautiful but also drive real business results.
              </p>
              
              <p>
                Specializing in React, Node.js, and cloud technologies, I've helped over 50+ businesses transform their digital presence and streamline their operations. From e-commerce platforms to complex enterprise applications, I bring ideas to life with clean, efficient code.
              </p>
              
              <p>
                My mission is simple: to bridge the gap between innovative ideas and exceptional digital experiences that users love and businesses depend on.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              {['React', 'Angular', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'PostgreSQL'].map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium border border-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:order-first">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <img
                  src="https://static.readdy.ai/image/a3bcb157f69402c8cecd01c9b311b1c2/bb05b908411959adc1249c298bd9883f.png"
                  alt="Ajit Dhavale - Professional Developer"
                  className="w-full h-96 object-cover object-top rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
