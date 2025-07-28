import { motion } from 'framer-motion';

interface SkillOrbProps {
  skill: {
    name: string;
    icon: string;
    color: string;
  };
  delay?: number;
}

export default function SkillOrb({ skill, delay = 0 }: SkillOrbProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="skill-orb p-3 rounded-lg cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
        <span className="text-foreground">{skill.name}</span>
      </div>
    </motion.div>
  );
}
