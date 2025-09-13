import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import resumePDF from "@/assets/Edwin-Regi-Resume.pdf"; // adjust path if no @ alias


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact - Edwin Regi</title>
        <meta name="description" content="Get in touch with Edwin Regi. Contact information, resume download, and message form for collaboration opportunities." />
      </Helmet>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat 
              about technology and software development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-effect border-white/10 h-full">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.a
                      href="mailto:edwinregi15@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="text-blue-400 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white font-medium">edwinregi15@gmail.com</p>
                      </div>
                    </motion.a>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <Button asChild className="w-full justify-start h-auto p-4 bg-white/5 border border-white/10 hover:bg-white/10">
                      <a href="https://www.linkedin.com/in/edwin-regi-b49ab1268/" target="_blank" rel="noopener noreferrer">
                         <Linkedin className="w-5 h-5 mr-4 text-blue-600" />
                         <div>
                            <p className="text-sm text-gray-400 text-left">LinkedIn</p>
                            <p className="font-medium text-white">Connect with me</p>
                         </div>
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                    <Button asChild className="w-full justify-start h-auto p-4 bg-white/5 border border-white/10 hover:bg-white/10">
                      <a href="https://github.com/Edwin242" target="_blank" rel="noopener noreferrer">
                         <Github className="w-5 h-5 mr-4 text-gray-400" />
                         <div>
                            <p className="text-sm text-gray-400 text-left">GitHub</p>
                            <p className="font-medium text-white">View my code</p>
                         </div>
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="pt-4"
                  >
<Button asChild className="w-full bg-green-600 hover:bg-green-700">
  <a href={resumePDF} download="Edwin_Regi_Resume.pdf">
    <Download className="mr-2 w-4 h-4" />
    Download Resume
  </a>
</Button>

                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass-effect border-white/10 h-full">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-300">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-white">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-white">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                          placeholder="Tell me about your project or opportunity..."
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;