import { Code, Database, BarChart3 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming & Data',
      skills: [
        'Python (Pandas, NumPy, Scikit-learn, PySpark)',
        'SQL (PostgreSQL, MySQL, Redshift, Snowflake)',
        'JavaScript/TypeScript',
        'FastAPI',
        'LangChain',
      ],
    },
    {
      icon: BarChart3,
      title: 'Machine Learning',
      skills: [
        'Feature Engineering',
        'Model Training & Evaluation',
        'Fine-tuning',
        'SMOTE',
        'LLMs (GPT-4, Claude)',
        'A/B Testing',
      ],
    },
    {
      icon: Database,
      title: 'Databases & Cloud',
      skills: [
        'PostgreSQL',
        'MySQL',
        'Supabase',
        'MongoDB',
        'Azure SQL',
        'Databricks',
        'Apache Spark',
        'AWS (S3, Lambda, Glue, Step Functions)',
        'Azure (Data Factory, Databricks)',
      ],
    },
  ];

  const additionalSkills = [
    {
      category: 'Data Analysis & Visualization',
      items: ['Power BI', 'QuickSight', 'Tableau', 'Cube.js', 'DAX', 'M-Code'],
    },
    {
      category: 'Version Control & Tools',
      items: ['Git', 'Postman', 'Swagger', 'API Documentation'],
    },
    {
      category: 'Model Operations',
      items: [
        'Model monitoring',
        'Drift detection',
        'Cost optimization',
        'Production scoring',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <category.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-700 flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalSkills.map((skillSet, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
