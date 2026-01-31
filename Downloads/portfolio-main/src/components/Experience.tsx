import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Xforia Inc',
      location: 'Dallas, TX',
      role: 'Data Scientist',
      period: 'Oct 2025 – Present',
      logo: '/logos/xforia.png', // Will be added when logos are provided
      achievements: [
        'Built production-grade LLM-driven fraud detection platform achieving 95%+ accuracy with XGBoost and LLM ensemble models',
        'Engineered GPT-4 orchestration system delivering 0.6 AUC-ROC improvement and 70% cost reduction through optimization',
        'Implemented real-time fraud detection at scale, reducing manual review time by 40% with sub-second latency',
        'Built scalable PostgreSQL schemas with JSONB and audit logging for compliant AI decision-making',
      ],
    },
    {
      company: 'Perma Technologies',
      location: 'Dallas, TX',
      role: 'Data Engineer Intern',
      period: 'May 2025 – Oct 2025',
      logo: '/logos/perma.png', // Will be added when logos are provided
      achievements: [
        'Migrated healthcare data strategy to Azure, achieving 99.9% data integrity and HIPAA compliance',
        'Built Azure Data Factory–triggered Databricks pipelines for automated data ingestion and transformation',
        'Developed data quality monitoring using Delta Live Tables ensuring clean, compliant data for analytics',
      ],
    },
    {
      company: 'Kena Inc',
      location: 'Dallas, TX',
      role: 'Data Analyst Intern',
      period: 'Jan 2025 – May 2025',
      logo: '/logos/kena.png', // Will be added when logos are provided
      achievements: [
        'Designed serverless AWS pipelines (S3, Glue, Lambda) for SAP data ingestion, reducing processing time by 63%',
        'Built collaborative workflows in Apache Airflow to coordinate scalable data handling',
        'Delivered cross-team Power BI dashboards with data integrity and normalization',
      ],
    },
    {
      company: 'Prancer',
      location: 'Dallas, TX',
      role: 'Data Analyst Intern',
      period: 'July 2024 – Jan 2025',
      logo: '/logos/prancer.png', // Will be added when logos are provided
      achievements: [
        'Set up Power BI dashboards on Redshift data, reducing manual analysis time by 30%',
        'Built dbt pipelines for data transformation, achieving 15% improvement in processing speed',
        'Optimized Redshift tables and collaborated with engineering teams to standardize schemas',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-gray-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'
              } md:w-1/2`}
            >
              {/* Date badge above experience card */}
              <div className={`mb-3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                  <div className="text-sm font-bold">{exp.period}</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ml-8 md:ml-0 border border-gray-100">
                <div className={`flex items-center gap-4 mb-4 justify-start ${index % 2 === 0 ? 'md:justify-end md:flex-row-reverse' : 'md:justify-start'}`}>
                  {exp.logo && (
                    <div className="bg-white rounded-lg p-3 shadow-md border border-gray-200 flex-shrink-0">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="h-12 w-auto object-contain max-w-[120px]"
                        onError={(e) => {
                          e.currentTarget.parentElement.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-blue-600">
                    <Briefcase size={18} />
                    <span className="font-semibold text-lg">{exp.company}</span>
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <div className="text-gray-600 text-base">{exp.location}</div>
                </div>

                <ul className="space-y-2.5 text-gray-700 text-left">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0 font-bold">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
