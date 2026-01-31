import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Master of Science',
      field: 'Information Technology and Management',
      school: 'University of Texas at Dallas',
      location: 'Dallas, TX',
      period: 'Aug 2022 – May 2024',
      logo: '/logos/utdallas.png',
    },
    {
      degree: 'Bachelor of Science',
      field: 'Computer Science and Engineering',
      school: 'Easwari Engineering College',
      location: 'Chennai, India',
      period: 'Aug 2018 – Jul 2022',
      logo: '/logos/easwari.png',
    },
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      icon: '☁️',
      badge: '/logos/aws-solutions-architect.png',
    },
    {
      title: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      icon: '🤖',
      badge: '/logos/aws-ai-practitioner.png',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      icon: '🔧',
      badge: '/logos/aws-cloud-practitioner.png',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {edu.logo && (
                      <div className="bg-white rounded-lg p-2 shadow-md border border-gray-200 flex-shrink-0">
                        <img 
                          src={edu.logo} 
                          alt={`${edu.school} logo`}
                          className="h-16 w-auto object-contain max-w-[80px]"
                          onError={(e) => {
                            e.currentTarget.parentElement.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-lg text-blue-600 mb-3">{edu.field}</p>
                      <p className="text-gray-700 font-semibold mb-1">{edu.school}</p>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-6">
                    {cert.badge ? (
                      <div className="flex-shrink-0">
                        <img 
                          src={cert.badge} 
                          alt={`${cert.title} badge`}
                          className="h-28 w-auto object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <span className="text-4xl">{cert.icon}</span>
                    )}
                    <div className="pt-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h4>
                      <p className="text-gray-600 text-base">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
