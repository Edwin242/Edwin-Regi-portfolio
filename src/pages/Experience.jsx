import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Internship',
      company: 'UING',
      period: '2024',
      location: 'Adelaide, SA',
      type: 'Internship',
      points: [
        'Integrated TensorFlow.js prototypes into web applications',
        'Improved authentication and encryption systems for game web app',
        'Led a small team to meet project milestones on schedule',
        'Wrote comprehensive documentation and demo scripts',
        'Coordinated agile sprints and delivered presentations to stakeholders'
      ],
      color: 'border-blue-500/30 bg-blue-500/5'
    },
    {
      title: 'Sales Assistant',
      company: 'The Good Guys',
      period: 'Since 2024',
      location: 'Adelaide, SA',
      type: 'Part-time',
      points: [
        'Enhanced customer engagement through product knowledge and consultation',
        'Consistently exceeded sales targets through effective communication',
        'Collaborated with team members to optimize store operations',
        'Developed strong interpersonal and communication skills'
      ],
      color: 'border-green-500/30 bg-green-500/5'
    },
    {
      title: 'Manager and Team Leader',
      company: "Domino's",
      period: 'Since 2021',
      location: 'Adelaide, SA',
      type: 'Part-time',
      points: [
        'Demonstrated excellent time management and route optimization',
        'Provided leadership and mentorship to new staff members',
        'Maintained high customer satisfaction ratings',
        'Trained new team members on delivery procedures and customer service'
      ],
      color: 'border-purple-500/30 bg-purple-500/5'
    },
    {
      title: 'Administration Officer & Ward Clerk',
      company: 'Flinders Medical Center',
      period: '2023',
      location: 'Adelaide, SA',
      type: 'Contract',
      points: [
        'Coordinated administrative tasks and patient information management',
        'Maintained attention to detail in sensitive healthcare environments',
        'Facilitated communication between stakeholders and departments',
        'Managed documentation and record-keeping systems'
      ],
      color: 'border-orange-500/30 bg-orange-500/5'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Experience - Edwin Regi</title>
        <meta name="description" content="Edwin Regi's professional experience including software development internship, sales, leadership, and administrative roles." />
      </Helmet>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              My journey through various roles, from software development to customer service, 
              building diverse skills and experience across different industries.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.title}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="timeline-item"
              >
                <Card className={`glass-effect border ${experience.color}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-blue-400 mb-2">
                          {experience.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {experience.type}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {experience.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;