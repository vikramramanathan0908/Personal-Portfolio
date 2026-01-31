import { ArrowDown, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiMxZTQwYWYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8 inline-block">
            <img
              src="/vikram_ramanathan.jpg"
              alt="Vikram Ramanathan"
              className="w-48 h-48 rounded-full border-4 border-white shadow-2xl object-cover mx-auto"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Vikram Ramanathan
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-6 font-light">
            Data Scientist | ML & LLM Systems | Analytics & Decisioning
          </p>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            AWS Certified Solutions Architect specializing in building production-grade ML,
            LLM, and analytics systems that drive intelligent decision-making
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://linkedin.com/in/vikram-ramanathan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
            <a
              href="mailto:vikramramanathan190@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg transition-colors shadow-lg"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1MCAtPMuTCH2d_b8KYtLA4mTVUEk40Xvl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors shadow-lg"
            >
              <FileText size={20} />
              View Resume
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <a
              href="mailto:vikramramanathan190@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={16} />
              vikramramanathan190@gmail.com
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ArrowDown size={32} className="text-white opacity-70 hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </section>
  );
}
