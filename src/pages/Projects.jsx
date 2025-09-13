import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import trafficImg from "@/assets/projects/sydney-traffic.png";
import volunteerImg from "@/assets/projects/volunteer-app.png";
import fringeImg from "@/assets/projects/adelaide-fringe.png";

const FALLBACK_IMG = "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1200&auto=format";

const Projects = () => {
  const projects = [
    {
      title: "Sydney City Traffic Dashboard",
      summary: "Real-time traffic visualisation with interactive map and performance-aware data rendering",
      tech: ["JavaScript", "Web APIs", "Mapping Libraries"],
      contribution: "Data fetching, state handling, UI polish, performance tuning",
      learning: "Clean async patterns, caching strategy, UX for live data",
      liveLink: "https://sydney-map-au.netlify.app/",
      image: trafficImg,
      imageAlt: "Sydney traffic dashboard with Leaflet map and overlays"
    },
    {
      title: "Volunteer Database App",
      summary: "Simple CRUD-style volunteer records with search, filters, and responsive forms",
      tech: ["JavaScript", "HTML", "CSS", "Netlify"],
      contribution: "Full front end development, validation, deployment pipeline",
      learning: "Form UX, input sanitisation, component structure",
      liveLink: "https://volunteer-database.netlify.app/",
      image: volunteerImg,
      imageAlt: "Volunteer management dashboard with cards and stats"
    },
    {
      title: "Adelaide Fringe Booking System",
      summary: "Team-built web app prototype for event listings and bookings, following agile methodology with sprints, stand-ups, retros, and shared backlog",
      tech: ["React", "TypeScript", "Tailwind", "shadcn/ui", "CI/CD"],
      contribution: "Database schema design input, admin dashboard UI, component refactors, code reviews, sprint demos",
      learning: "Agile teamwork, Git workflows, pull request etiquette, component composition, stakeholder presentations",
      isGroupProject: true,
      image: fringeImg,
      imageAlt: "Adelaide Fringe booking UI preview"
    },
    {
      title: "Gamified CV Project",
      summary: "Play through my skills and projects in an interactive game format",
      tech: ["Coming Soon"],
      contribution: "Full development, game design, interactive elements, skill showcases",
      learning: "Game development, interactive storytelling, creative portfolio presentation",
      isComingSoon: true,
      // image omitted so FALLBACK_IMG is used
      imageAlt: "Gamified CV preview"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Projects - Edwin Regi</title>
        <meta
          name="description"
          content="Explore Edwin Regi's software development projects including web applications, dashboards, and interactive systems."
        />
      </Helmet>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">My Projects</h1>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              A collection of web applications, dashboards, and systems I have built, showcasing my skills in modern development
              technologies and practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`project-card h-full ${project.isComingSoon ? 'border-purple-500/30' : ''}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      className="w-full aspect-[16/9] object-cover"
                      alt={project.imageAlt || `${project.title} preview`}
                      src={project.image || FALLBACK_IMG}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
                    />

                    {project.isComingSoon && (
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-center justify-center">
                        <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Coming Soon</span>
                      </div>
                    )}

                    {project.isGroupProject && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Group Project</span>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-300">{project.summary}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="skill-chip px-2 py-1 rounded text-xs text-blue-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">My Contribution</h4>
                      <p className="text-gray-400 text-sm">{project.contribution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Learning</h4>
                      <p className="text-gray-400 text-sm">{project.learning}</p>
                    </div>

                    {project.liveLink && (
                      <div className="pt-4">
                        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 w-4 h-4" />
                            View Live Project
                          </a>
                        </Button>
                      </div>
                    )}

                    {project.isComingSoon && (
                      <div className="pt-4">
                        <Button disabled className="w-full">
                          <Play className="mr-2 w-4 h-4" />
                          Coming Soon
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
