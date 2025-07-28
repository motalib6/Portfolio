import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center neural-bg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-0"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-3000"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-blue-400 rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 border-2 border-purple-400 rounded-full animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-12 bg-cyan-400 opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 border-2 border-pink-400 clip-path-triangle animate-pulse-slow animation-delay-3000"></div>
      </div>
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="animate-float"
        >
          <img 
            src="/attached_assets/aifaceswap-output_1751110329992.png" 
            alt="SK Motalib - AI & NLP Engineer" 
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-primary shadow-2xl animate-glow object-cover" 
          />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-orbitron"
        >
          <span className="gradient-text-enhanced glow-text">SK MOTALIB</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl mb-6 text-muted-foreground"
        >
          Artificial Intelligence & NLP Engineer
        </motion.h2>
        
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground"
        >
          Microsoft Certified Azure AI Engineer | IBM AI Engineer | Deep Learning Specialist
          <br />Transforming ideas into intelligent solutions
        </motion.p>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <a 
            href="https://www.linkedin.com/in/sk-motalib/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="futuristic-btn flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
            <span>View LinkedIn</span>
          </a>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            View Projects
          </Button>
        </motion.div>
        
        {/* Floating Tech Icons */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 text-4xl text-primary opacity-30"
        >
          🐍
        </motion.div>
        <motion.div 
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-40 right-20 text-4xl text-purple-400 opacity-30"
        >
          🧠
        </motion.div>
        <motion.div 
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-40 left-20 text-4xl text-cyan-400 opacity-30"
        >
          🤖
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
