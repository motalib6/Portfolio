import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'IBM',
    role: 'Artificial Intelligence Engineer',
    type: 'Internship',
    period: 'Jun 2025 - Present',
    location: 'Remote',
    description: 'Working on advanced AI solutions, machine learning model development, and prompt engineering. Contributing to cutting-edge AI research and development projects.',
    skills: ['AI Prompt Engineering', 'Machine Learning', 'Python'],
    logo: '🔷',
    color: 'text-blue-600'
  },
  {
    company: 'Microsoft',
    role: 'Artificial Intelligence Engineer',
    type: 'Internship',
    period: 'Mar 2025 - Jun 2025',
    location: 'Remote',
    description: 'Specialized in Large Language Models (LLM), Generative AI, and Azure AI services. Developed AI applications and gained expertise in Microsoft\'s AI ecosystem.',
    skills: ['Generative AI', 'Azure AI', 'LLM', 'Microsoft Azure ML'],
    logo: '🔷',
    color: 'text-cyan-400'
  },
  {
    company: 'Codec Technologies India',
    role: 'Artificial Intelligence Intern',
    type: 'Internship',
    period: 'Apr 2025 - May 2025',
    location: 'Remote',
    description: 'Gained hands-on experience in AI prompt engineering, Natural Language Processing (NLP), and machine learning applications. Contributed to innovative AI projects.',
    skills: ['Python', 'AI Prompt Engineering', 'NLP', 'mLearning'],
    logo: '🚀',
    color: 'text-cyan-400'
  },
  {
    company: 'Government Engineering College',
    role: 'BTech in Computer Science (AI & ML)',
    type: 'Education',
    period: 'Expected 2028',
    location: 'Bhubaneswar',
    description: 'Pursuing specialized education in Artificial Intelligence and Machine Learning with focus on practical applications and research projects.',
    skills: ['Computer Science', 'Artificial Intelligence', 'Machine Learning'],
    logo: '🎓',
    color: 'text-green-400'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Professional Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect p-8 hover:border-primary/50 transition-all">
                <div className="flex items-start space-x-6">
                  <div className={`text-4xl ${exp.color} font-bold`}>
                    {exp.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-foreground mb-1">{exp.company}</h4>
                    <p className="text-muted-foreground mb-2">
                      {exp.type} • {exp.period} • {exp.location}
                    </p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-primary/20 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
