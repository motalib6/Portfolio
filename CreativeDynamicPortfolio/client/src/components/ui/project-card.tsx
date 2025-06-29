import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoLink: string;
    githubLink: string;
    color: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, rotateX: 5 }}
      className="project-card"
    >
      <Card className="enhanced-card p-6 hover:border-primary/50 transition-all overflow-hidden group">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <h3 className={`text-xl font-semibold mb-2 ${project.color}`}>
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <Button 
            asChild 
            size="sm" 
            className={`flex-1 ${project.color.includes('blue') ? 'bg-blue-600 hover:bg-blue-700' : 
              project.color.includes('purple') ? 'bg-purple-600 hover:bg-purple-700' : 
              'bg-cyan-600 hover:bg-cyan-700'}`}
          >
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Demo
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="flex-1 border-border hover:border-primary"
          >
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              Code
            </a>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
