import { Brain, Rocket, Cloud } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'Data Science & AI',
      description: 'Developed AI-powered fraud detection systems, built intelligent analytics solutions using modern AI tools, and created data-driven applications that deliver actionable business insights',
    },
    {
      icon: Rocket,
      title: 'Analytics Platforms',
      description: 'Designed and deployed scalable analytics platforms and data pipelines processing millions of records daily, enabling real-time insights and business intelligence',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'AWS Certified Solutions Architect with expertise in designing scalable cloud infrastructure, optimizing costs, and deploying analytics solutions on AWS and Azure platforms',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl font-semibold text-gray-800 leading-relaxed mb-6">
            I'm a Data Scientist passionate about turning data into actionable insights and building intelligent systems that solve real-world business problems. I specialize in developing analytics platforms, AI-powered solutions, and data-driven applications that drive meaningful business decisions.
          </p>
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            With expertise in Python, AWS, Azure, and modern analytics tools, I've successfully delivered
            impactful projects ranging from fraud detection systems to automated reporting dashboards, consistently
            achieving significant improvements in accuracy, efficiency, and cost optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <highlight.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
