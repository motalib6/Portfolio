import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Hi, I'm SK Motalib, a passionate B.Tech student specializing in Artificial Intelligence and Machine Learning (AI/ML) and full-stack development. My academic journey has been fueled by a curiosity for cutting-edge technologies and a drive to solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With a strong foundation in data structures, algorithms, and cloud computing, I've earned recognition in national coding competitions, securing top ranks in hackathons and contributing to open-source AI projects on GitHub.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card className="glass-effect p-4">
                <h3 className="font-semibold text-primary">Location</h3>
                <p className="text-muted-foreground">Bhubaneswar, Odisha</p>
              </Card>
              <Card className="glass-effect p-4">
                <h3 className="font-semibold text-primary">Experience</h3>
                <p className="text-muted-foreground">IBM & Microsoft</p>
              </Card>
            </div>
            
            <Button asChild className="bg-gradient-to-r from-primary to-purple-600">
              <a href="mailto:skmotalib16@gmail.com">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/attached_assets/Screenshot 2025-06-28 170135_1751110306902.png" 
              alt="Google Cloud Skills Arcade Progress - 29 Badges Earned" 
              className="rounded-xl shadow-2xl w-full" 
            />
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass-effect p-4 rounded-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">267</div>
                <div className="text-sm text-muted-foreground">LinkedIn Connections</div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">29</div>
                <div className="text-sm text-muted-foreground">Google Cloud Badges</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
