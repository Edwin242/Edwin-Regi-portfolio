import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Star, Linkedin, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Coursework = () => {
  const highlightedTopics = [
    { code: 'COMP7701', title: 'Advanced Enterprise Security' },
    { code: 'ENGR2872', title: 'Routing and Switching' },
    { code: 'COMP3721', title: 'Information Security' },
    { code: 'COMP3781', title: 'Cybersecurity' },
    { code: 'ENGR2871', title: 'Networking Fundamentals' },
    { code: 'COMP3033', title: 'Cloud and Distributed Computing' },
    { code: 'COMP2031', title: 'Data Engineering' },
    { code: 'COMP2812', title: 'Systems Software' },
    { code: 'ENGR3791', title: 'Software Testing and Quality Assurance' },
    { code: 'COMP1711', title: 'Database Modelling and Information Management' },
    { code: 'ENGR1762', title: 'Networks and Cybersecurity' },
  ];

  const yearlyCoursework = {
    2025: [
      { period: 'Jan to Jun Non-Semester', code: 'STEM7003', title: 'Research Methods for Engineering and ICT Honours' },
      { period: 'Jan to Jun Non-Semester', code: 'STEM7004A', title: 'Honours Research Project' },
      { period: 'Semester 1', code: 'ENGR7791', title: 'Software Engineering; People, Process and DevOps' },
      { period: 'Current study', code: '', title: 'Rehabilitation and Assistive Technology' },
      { period: 'Current study', code: '', title: 'Systems Engineering' },
      { period: 'Current study', code: '', title: 'Advanced Data Mining and Knowledge Discovery' },
    ],
    2024: [
      { period: 'Jul to Dec Non-Semester', code: 'STEM3005', title: '20-week Industry-based Practicum' },
      { period: 'Jan to Jun Non-Semester', code: 'ENGR3750', title: 'Workplace Preparation' },
      { period: 'Semester 2', code: 'COMP7701', title: 'Advanced Enterprise Security' },
      { period: 'Semester 2', code: 'ENGR2872', title: 'Routing and Switching' },
      { period: 'Semester 1', code: 'COMP3033', title: 'Cloud and Distributed Computing' },
      { period: 'Semester 1', code: 'COMP3721', title: 'Information Security' },
      { period: 'Semester 1', code: 'ENGR3791', title: 'Software Testing and Quality Assurance' },
    ],
    2023: [
      { period: 'Semester 2', code: 'COMP2030', title: 'Human Factors for Interactive and Web-Based Systems' },
      { period: 'Semester 2', code: 'COMP2711', title: 'Computer Programming 2' },
      { period: 'Semester 2', code: 'COMP9035', title: 'ICT Management and Professional Standards' },
      { period: 'Semester 2', code: 'ENGR2792', title: 'Software System Requirements and Design' },
      { period: 'Semester 1', code: 'COMP2031', title: 'Data Engineering' },
      { period: 'Semester 1', code: 'COMP2812', title: 'Systems Software' },
      { period: 'Semester 1', code: 'COMP3781', title: 'Cybersecurity' },
      { period: 'Semester 1', code: 'ENGR2871', title: 'Networking Fundamentals' },
    ],
    2022: [
      { period: 'Semester 2', code: 'COMP1711', title: 'Database Modelling and Information Management' },
      { period: 'Semester 2', code: 'ENGR1762', title: 'Networks and Cybersecurity' },
      { period: 'Semester 2', code: 'MATH1701', title: 'Mathematics Fundamentals A' },
      { period: 'Semester 2', code: 'STAT1122', title: 'Biostatistics' },
      { period: 'Semester 1', code: 'COMP1002', title: 'Fundamentals of Computational Intelligence' },
      { period: 'Semester 1', code: 'COMP1102', title: 'Computer Programming 1' },
      { period: 'Semester 1', code: 'ENGR1401', title: 'Professional Skills' },
      { period: 'Semester 1', code: 'PSYC1101', title: 'Psychology 1A' },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Coursework - Edwin Regi</title>
        <meta name="description" content="Edwin Regi's academic coursework in Information Technology, specializing in Networks and Cybersecurity." />
      </Helmet>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
              Academic Coursework
            </h1>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Below is the coursework I completed as part of my Honours of Information Technology, specializing in Networks and Cybersecurity. I am graduating in December 2025.
            </p>
          </motion.div>

          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-purple-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-3 text-white">
                    <Star className="w-6 h-6 text-purple-400" />
                    <span className="text-2xl">Highlighted Topics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
                    {highlightedTopics.map((topic) => (
                      <div key={topic.code} className="flex items-center gap-2 p-2 rounded-md bg-white/5">
                        <span className="text-purple-400 font-mono text-sm">{topic.code}</span>
                        <span className="text-gray-300">{topic.title}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                <BookOpen className="inline-block mr-3 text-blue-400" />
                Yearly Breakdown
              </h2>
              <Card className="glass-effect border-white/10">
                <CardContent className="p-4 sm:p-6">
                  <Accordion type="single" collapsible defaultValue="item-2025">
                    {Object.keys(yearlyCoursework).sort((a, b) => b - a).map(year => (
                      <AccordionItem key={year} value={`item-${year}`}>
                        <AccordionTrigger className="text-xl sm:text-2xl text-white font-bold hover:no-underline hover:text-blue-400 transition-colors">
                          {year}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-4">
                            {yearlyCoursework[year].map((course, index) => (
                              <div key={index} className="grid grid-cols-1 sm:grid-cols-12 gap-x-4 gap-y-1 p-3 rounded-lg bg-white/5 border border-white/10">
                                <div className="sm:col-span-4 text-gray-400">{course.period}</div>
                                <div className="sm:col-span-2 text-blue-400 font-mono">{course.code}</div>
                                <div className="sm:col-span-6 text-gray-200">{course.title}</div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          <section className="mt-20">
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-white/10">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
                  <a href="https://www.linkedin.com/in/edwin-regi-b49ab1268/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5"/>
                    <span className="truncate">LinkedIn: https://www.linkedin.com/in/edwin-regi-b49ab1268/</span>
                  </a>
                   <a href="https://github.com/Edwin242" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Github className="w-5 h-5"/>
                    <span>GitHub: https://github.com/Edwin242</span>
                  </a>
                </CardContent>
              </Card>
             </motion.div>
          </section>

        </div>
      </div>
    </>
  );
};

export default Coursework;