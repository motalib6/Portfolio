import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import SkillOrb from '@/components/ui/skill-orb';
import { useQuery } from '@tanstack/react-query';
import type { Skill } from '@shared/schema';

const certifications = [
  { name: 'Google Cloud Skills', subtitle: 'Arcade Program - 29 Badges', icon: '🌐', color: 'text-blue-400' },
  { name: 'Microsoft Certified', subtitle: 'Azure AI Engineer', icon: '🔷', color: 'text-blue-600' },
  { name: 'AI Skills Fest', subtitle: 'Multiple Challenges Completed', icon: '🏆', color: 'text-yellow-400' },
  { name: 'IBM AI Fundamentals', subtitle: 'Machine Learning Certified', icon: '🧠', color: 'text-green-400' }
];

export default function Skills() {
  const { data: skills = [], isLoading } = useQuery({
    queryKey: ['/api/skills'],
    queryFn: () => fetch('/api/skills').then(res => res.json()) as Promise<Skill[]>
  });

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categories = [
    { key: 'Programming', title: 'Core Expertise', color: 'text-primary' },
    { key: 'AI/ML', title: 'AI/ML Frameworks', color: 'text-purple-400' },
    { key: 'NLP', title: 'NLP & Text Processing', color: 'text-green-400' },
    { key: 'Cloud', title: 'Cloud & Platforms', color: 'text-cyan-400' }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Technical Expertise
        </motion.h2>
        
        {isLoading ? (
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-xl p-6 animate-pulse">
                <div className="bg-muted h-6 rounded mb-4"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="bg-muted h-10 rounded"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {categories.map((category, categoryIndex) => {
              const categorySkills = groupedSkills[category.key] || [];
              return (
                <motion.div
                  key={category.key}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="enhanced-card p-6 h-full">
                    <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>
                      {category.title}
                    </h3>
                    <div className="space-y-3">
                      {categorySkills.map((skill, index) => (
                        <SkillOrb 
                          key={skill.id} 
                          skill={{
                            name: skill.name,
                            icon: skill.icon,
                            color: skill.color
                          }} 
                          delay={index * 0.1 + categoryIndex * 0.1} 
                        />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
        
        {/* Certifications Showcase */}
        <div className="text-center">
          <motion.h3 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8 gradient-text"
          >
            Certifications & Achievements
          </motion.h3>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-effect p-4 hover:border-primary/50 transition-all cursor-pointer">
                  <div className={`text-4xl mb-2 ${cert.color}`}>{cert.icon}</div>
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
