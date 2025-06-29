import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ui/project-card';
import { useQuery } from '@tanstack/react-query';
import type { Project } from '@shared/schema';

export default function Projects() {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['/api/projects'],
    queryFn: () => fetch('/api/projects').then(res => res.json()) as Promise<Project[]>
  });

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Featured Projects
        </motion.h2>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card rounded-xl p-6 animate-pulse">
                <div className="bg-muted h-48 rounded-lg mb-4"></div>
                <div className="bg-muted h-6 rounded mb-2"></div>
                <div className="bg-muted h-4 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="bg-muted h-6 w-16 rounded"></div>
                  <div className="bg-muted h-6 w-20 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={{
                title: project.title,
                description: project.description,
                image: project.image,
                technologies: project.technologies,
                demoLink: project.demoLink || '',
                githubLink: project.githubLink || '',
                color: project.color
              }} index={index} />
            ))}
          </div>
        )}
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild className="bg-gradient-to-r from-primary to-purple-600">
            <a 
              href="https://www.linkedin.com/in/sk-motalib/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
