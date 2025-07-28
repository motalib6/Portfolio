import { db } from "./db";
import { projects, skills } from "@shared/schema";

const seedProjects = [
  {
    title: "Google Cloud Skills Arcade - 29 Badges Achievement",
    description: "Completed Google Cloud Skills Boost Arcade Program with 29 badges, demonstrating proficiency in cloud AI services, machine learning implementations, and advanced Python development.",
    image: "/attached_assets/Screenshot 2025-06-28 170135_1751110306902.png",
    technologies: ["Google Cloud", "Python", "AI/ML APIs", "Cloud Functions", "BigQuery"],
    demoLink: "https://www.linkedin.com/in/sk-motalib/",
    githubLink: "https://www.linkedin.com/in/sk-motalib/",
    color: "from-blue-600 to-purple-600",
    featured: 1
  },
  {
    title: "AI-Powered Healthcare Diagnosis System",
    description: "Advanced machine learning system for medical image analysis and diagnosis assistance using Python, TensorFlow, and computer vision algorithms with real-world implementation.",
    image: "/attached_assets/WhatsApp Image 2025-06-28 at 16.45.42_07554713_1751109363112.jpg",
    technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "Pandas"],
    demoLink: "https://www.linkedin.com/in/sk-motalib/",
    githubLink: "https://www.linkedin.com/in/sk-motalib/",
    color: "from-green-600 to-blue-600",
    featured: 1
  },
  {
    title: "Natural Language Processing Chat Assistant",
    description: "Intelligent conversational AI built with Python, utilizing NLTK, spaCy, and transformer models for natural language understanding and context-aware responses.",
    image: "/attached_assets/aifaceswap-output_1751110329992.png",
    technologies: ["Python", "NLTK", "spaCy", "Transformers", "Flask"],
    demoLink: "https://www.linkedin.com/in/sk-motalib/",
    githubLink: "https://www.linkedin.com/in/sk-motalib/",
    color: "from-purple-600 to-pink-600",
    featured: 1
  },
  {
    title: "Computer Vision Object Detection",
    description: "Real-time object detection system using Python, YOLO, and OpenCV for automated surveillance and security applications with high accuracy performance.",
    image: "/attached_assets/WhatsApp Image 2025-06-28 at 16.45.42_626f3256_1751109375980.jpg",
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "NumPy"],
    demoLink: "https://www.linkedin.com/in/sk-motalib/",
    githubLink: "https://www.linkedin.com/in/sk-motalib/",
    color: "from-red-600 to-orange-600",
    featured: 0
  }
];

const seedSkills = [
  // Python & Programming
  { name: "Python", category: "Programming", icon: "🐍", color: "#3776ab", proficiency: 95 },
  { name: "NumPy", category: "Programming", icon: "🔢", color: "#013243", proficiency: 90 },
  { name: "Pandas", category: "Programming", icon: "🐼", color: "#150458", proficiency: 88 },
  { name: "Scikit-learn", category: "Programming", icon: "🤖", color: "#f7931e", proficiency: 85 },
  
  // AI & Machine Learning
  { name: "TensorFlow", category: "AI/ML", icon: "🧠", color: "#ff6f00", proficiency: 90 },
  { name: "PyTorch", category: "AI/ML", icon: "🔥", color: "#ee4c2c", proficiency: 85 },
  { name: "Keras", category: "AI/ML", icon: "⚡", color: "#d00000", proficiency: 88 },
  { name: "OpenCV", category: "AI/ML", icon: "👁️", color: "#5c3ee8", proficiency: 82 },
  
  // NLP & Text Processing
  { name: "NLTK", category: "NLP", icon: "📝", color: "#2e8b57", proficiency: 90 },
  { name: "spaCy", category: "NLP", icon: "🔤", color: "#09a3d5", proficiency: 88 },
  { name: "Transformers", category: "NLP", icon: "🔄", color: "#ff9900", proficiency: 85 },
  { name: "BERT", category: "NLP", icon: "📚", color: "#4285f4", proficiency: 80 },
  
  // Cloud & Platforms
  { name: "Google Cloud", category: "Cloud", icon: "☁️", color: "#4285f4", proficiency: 85 },
  { name: "Microsoft Azure", category: "Cloud", icon: "🌐", color: "#0078d4", proficiency: 78 },
  { name: "AWS", category: "Cloud", icon: "📡", color: "#ff9900", proficiency: 75 },
  { name: "Docker", category: "Cloud", icon: "🐳", color: "#2496ed", proficiency: 80 }
];

export async function seedDatabase() {
  try {
    // Clear existing data
    await db.delete(projects);
    await db.delete(skills);
    
    // Insert projects
    await db.insert(projects).values(seedProjects);
    console.log("✓ Projects seeded successfully");
    
    // Insert skills
    await db.insert(skills).values(seedSkills);
    console.log("✓ Skills seeded successfully");
    
    console.log("🎉 Database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

// Run seed if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase().then(() => {
    process.exit(0);
  }).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}