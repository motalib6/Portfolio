import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";
import { insertContactSchema, insertProjectSchema, insertSkillSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Save contact to database
      const contact = await storage.createContact(validatedData);
      console.log('Contact form submission saved:', contact);
      
      res.json({ 
        success: true, 
        message: 'Message received successfully! I\'ll get back to you soon.' 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      });
    }
  });

  // API route for projects
  app.get('/api/projects', async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      console.error('Projects API error:', error);
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  });

  // API route for creating projects
  app.post('/api/projects', async (req, res) => {
    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(validatedData);
      res.json(project);
    } catch (error) {
      console.error('Create project error:', error);
      res.status(500).json({ error: 'Failed to create project' });
    }
  });

  // API route for skills
  app.get('/api/skills', async (req, res) => {
    try {
      const skills = await storage.getSkills();
      res.json(skills);
    } catch (error) {
      console.error('Skills API error:', error);
      res.status(500).json({ error: 'Failed to fetch skills' });
    }
  });

  // API route for creating skills
  app.post('/api/skills', async (req, res) => {
    try {
      const validatedData = insertSkillSchema.parse(req.body);
      const skill = await storage.createSkill(validatedData);
      res.json(skill);
    } catch (error) {
      console.error('Create skill error:', error);
      res.status(500).json({ error: 'Failed to create skill' });
    }
  });

  // Serve static assets
  app.get('/attached_assets/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(process.cwd(), 'attached_assets', filename);
    res.sendFile(filepath);
  });

  const httpServer = createServer(app);
  return httpServer;
}
