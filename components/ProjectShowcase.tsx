
'use client';

export default function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      title: 'Local Restaurant Chain Management',
      description: 'Complete POS and inventory management system for restaurant chain',
      image: 'https://readdy.ai/api/search-image?query=restaurant%20point%20of%20sale%20system%20interface%20with%20order%20management%2C%20inventory%20tracking%2C%20and%20billing%20features%2C%20modern%20restaurant%20management%20software%20design%2C%20warm%20orange%20and%20blue%20color%20scheme&width=600&height=400&seq=project-001&orientation=landscape',
      logo: 'https://readdy.ai/api/search-image?query=local%20restaurant%20logo%20with%20chef%20hat%20and%20fork%20symbol%2C%20warm%20colors%20orange%20and%20red%2C%20friendly%20neighborhood%20restaurant%20branding%2C%20cozy%20dining%20establishment&width=120&height=120&seq=logo-001&orientation=squarish',
      tags: ['Angular', 'Node.js', 'MySQL'],
      metrics: '40% Cost Reduction'
    },
    {
      id: 2,
      title: 'Dental Clinic Patient Portal',
      description: 'Appointment booking and patient management for small dental practice',
      image: 'https://readdy.ai/api/search-image?query=dental%20clinic%20patient%20portal%20with%20appointment%20booking%2C%20patient%20records%2C%20and%20treatment%20history%2C%20clean%20medical%20interface%20design%2C%20light%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=project-002&orientation=landscape',
      logo: 'https://readdy.ai/api/search-image?query=dental%20clinic%20logo%20with%20tooth%20symbol%2C%20professional%20medical%20branding%2C%20blue%20and%20white%20colors%2C%20clean%20healthcare%20design%20for%20small%20dental%20practice&width=120&height=120&seq=logo-002&orientation=squarish',
      tags: ['React', 'Express', 'PostgreSQL'],
      metrics: '60% Fewer No-Shows'
    },
    {
      id: 3,
      title: 'Local Retail Store E-commerce',
      description: 'Online store with inventory sync for neighborhood electronics shop',
      image: 'https://readdy.ai/api/search-image?query=small%20electronics%20store%20e-commerce%20website%20with%20product%20catalog%2C%20shopping%20cart%2C%20and%20local%20delivery%20options%2C%20modern%20retail%20interface%20design%2C%20blue%20and%20green%20color%20scheme&width=600&height=400&seq=project-003&orientation=landscape',
      logo: 'https://readdy.ai/api/search-image?query=electronics%20store%20logo%20with%20circuit%20or%20tech%20symbol%2C%20modern%20retail%20branding%2C%20blue%20and%20green%20colors%2C%20friendly%20neighborhood%20electronics%20shop%20design&width=120&height=120&seq=logo-003&orientation=squarish',
      tags: ['React', 'Node.js', 'Stripe'],
      metrics: '200% Online Sales'
    },
    {
      id: 4,
      title: 'Fitness Studio Booking App',
      description: 'Class scheduling and membership management for yoga studio',
      image: 'https://readdy.ai/api/search-image?query=fitness%20studio%20class%20booking%20app%20interface%20with%20schedule%2C%20membership%20plans%2C%20and%20instructor%20profiles%2C%20modern%20wellness%20app%20design%2C%20purple%20and%20green%20color%20scheme&width=600&height=400&seq=project-004&orientation=landscape',
      logo: 'https://readdy.ai/api/search-image?query=yoga%20fitness%20studio%20logo%20with%20lotus%20or%20meditation%20symbol%2C%20wellness%20branding%2C%20purple%20and%20green%20colors%2C%20peaceful%20zen%20studio%20design&width=120&height=120&seq=logo-004&orientation=squarish',
      tags: ['Angular', 'PHP', 'MySQL'],
      metrics: '80% Booking Efficiency'
    },
    {
      id: 5,
      title: 'Auto Repair Shop System',
      description: 'Service tracking and customer communication for local garage',
      image: 'https://readdy.ai/api/search-image?query=auto%20repair%20shop%20management%20system%20with%20service%20tracking%2C%20customer%20communication%2C%20and%20parts%20inventory%2C%20practical%20automotive%20software%20design%2C%20red%20and%20blue%20color%20scheme&width=600&height=400&seq=project-005&orientation=landscape',
      logo: 'https://readdy.ai/api/search-image?query=auto%20repair%20garage%20logo%20with%20wrench%20and%20gear%20symbol%2C%20automotive%20service%20branding%2C%20red%20and%20blue%20colors%2C%20trusted%20local%20mechanic%20shop%20design&width=120&height=120&seq=logo-005&orientation=squarish',
      tags: ['React', 'Node.js', 'MongoDB'],
      metrics: '50% Faster Service'
    },
    {
      id: 6,
      title: 'Bakery Order Management',
      description: 'Custom cake orders and delivery tracking for family bakery',
      image: 'https://readdy.ai/api/search-image?query=bakery%20order%20management%20system%20with%20custom%20cake%20designer%2C%20delivery%20tracking%2C%20and%20customer%20orders%2C%20warm%20bakery%20software%20design%2C%20pink%20and%20brown%20color%20scheme&width=600&height=400&seq=project-006&orientation=landscape',
      logo: 'https://readdy.ai/api/search-image?query=family%20bakery%20logo%20with%20cake%20or%20cupcake%20symbol%2C%20warm%20bakery%20branding%2C%20pink%20and%20brown%20colors%2C%20cozy%20neighborhood%20bakery%20design&width=120&height=120&seq=logo-006&orientation=squarish',
      tags: ['Angular', 'Laravel', 'MySQL'],
      metrics: '90% Order Accuracy'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of the successful projects I've delivered for small businesses across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-cyan-600 font-semibold text-sm">
                      {project.metrics}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-3 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg whitespace-nowrap cursor-pointer">
                  View Case Study
                  <i className="ri-external-link-line ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
