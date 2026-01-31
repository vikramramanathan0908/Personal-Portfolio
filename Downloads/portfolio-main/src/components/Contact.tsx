import { Mail, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or
            challenging data science projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:vikramramanathan190@gmail.com"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300 text-sm break-all">vikramramanathan190@gmail.com</p>
          </a>

          <a
            href="https://linkedin.com/in/vikram-ramanathan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Linkedin size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-300 text-sm">linkedin.com/in/vikram-ramanathan</p>
          </a>

          <a
            href="https://drive.google.com/file/d/1MCAtPMuTCH2d_b8KYtLA4mTVUEk40Xvl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <FileText size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Resume</h3>
            <p className="text-gray-300 text-sm">View my resume</p>
          </a>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Great</h3>
            <p className="text-gray-300 mb-8">
              Whether it's fraud detection, LLM applications, data pipelines, or analytics platforms,
              I'm excited to bring technical expertise and creative problem-solving to your next project.
            </p>
            <a
              href="mailto:vikramramanathan190@gmail.com"
              className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold shadow-lg text-lg"
            >
              Start a Conversation
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>© 2026 Vikram Ramanathan. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
