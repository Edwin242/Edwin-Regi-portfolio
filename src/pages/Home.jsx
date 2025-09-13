import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Code, Shield, Database, Globe, Brain, Users, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import resumePDF from "@/assets/Edwin-Regi-Resume.pdf";


const Home = () => {
  const skills = [{
    category: 'Languages',
    icon: <Code className="w-5 h-5" />,
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C++'],
    description: 'Strong foundation in multiple programming languages'
  }, {
    category: 'Web & Frameworks',
    icon: <Globe className="w-5 h-5" />,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Laravel', 'Vite'],
    description: 'Modern web development technologies'
  }, {
    category: 'Development Stack & DevOps',
    icon: <Server className="w-5 h-5" />,
    items: ['Supabase', 'Netlify', 'Azure Pipelines', 'CI/CD', 'Git', 'GitHub', 'Docker'],
    description: 'Full-stack development and deployment pipeline'
  }, {
    category: 'ML & Data',
    icon: <Brain className="w-5 h-5" />,
    items: ['TensorFlow', 'Model Training', 'Data Evaluation'],
    description: 'Machine learning and data analysis'
  }, {
    category: 'Security',
    icon: <Shield className="w-5 h-5" />,
    items: ['Network Security', 'Encryption', 'Secure Auth', 'IDS Concepts'],
    description: 'Cybersecurity principles and practices'
  }, {
    category: 'Soft Skills',
    icon: <Users className="w-5 h-5" />,
    items: ['Teamwork', 'Leadership', 'Problem Solving', 'Communication', 'Agile Methodology'],
    description: 'Essential professional and interpersonal skills'
  }];
  return <>
      <Helmet>
        <title>Edwin Regi - IT Student & Software Developer</title>
        <meta name="description" content="Edwin Regi's portfolio - IT student focused on software engineering, web development, and cybersecurity. Graduating 2024 from Flinders University." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Edwin Regi</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">IT student focused on Software Engineering, Web Development, and Cybersecurity</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
<Button asChild variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
  <a href={resumePDF} download="Edwin_Regi_Resume.pdf">
    <Download className="mr-2 w-4 h-4" />
    Download Resume
  </a>
</Button>

              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
                About Me
              </h2>
              <Card className="glass-effect border-white/10">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-blue-400">Education</h3>
                      <p className="text-gray-300 mb-6">Bachelor of Information Technology, specialisation in Networks and Cybersecurity, Flinders University, graduating 2025.</p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-blue-400">Career Goals</h3>
                      <p className="text-gray-300">
                        Seeking employment in Software Engineering or Cyber Security, 
                        open to graduate and junior roles.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-blue-400">Recent Experience</h3>
                      <p className="text-gray-300 mb-6">
                        Software Development Internship, 2024. Worked on integrating voice and hand gesture 
                        systems into web apps and 3D environments, improved security and authentication, 
                        coordinated a small team through agile sprints, delivered milestones on time.
                      </p>
                      
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-400 mb-2">Coming Soon</h4>
                        <p className="text-gray-300 text-sm">
                          Building a creative Gamified CV / Resume-as-a-Game - an interactive way to explore my skills and experience!
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
                Skills & Expertise
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => <motion.div key={skillGroup.category} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true
              }}>
                    <Card className="glass-effect border-white/10 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="text-blue-400 mr-3">
                            {skillGroup.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-white">
                            {skillGroup.category}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                          {skillGroup.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map(skill => <span key={skill} className="skill-chip px-3 py-1 rounded-full text-sm text-blue-300">
                              {skill}
                            </span>)}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default Home;