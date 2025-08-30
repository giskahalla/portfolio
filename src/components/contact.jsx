import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
            Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card">
                <div className="card-body">
                  <ul className="list bg-base-100 rounded-box shadow-md">
                    
                    <li className="list-row">
                      <div><Mail className="row-span-2 size-8" /></div>
                      <div>
                        <div>Email</div>
                        <div className="font-semibold opacity-60">giskahalla123@gmail.com</div>
                      </div>
                    </li>
                    
                    <li className="list-row">
                      <div><Phone className="row-span-2 size-8" /></div>
                      <div>
                        <div>Phone</div>
                        <div className="font-semibold opacity-60">+62-895365282314</div>
                      </div>
                    </li>
                    
                    <li className="list-row">
                      <div><MapPin className="row-span-2 size-8" /></div>
                      <div>
                        <div>Address</div>
                        <div className="font-semibold opacity-60">Bogor, Indonesia</div>
                      </div>
                    </li>
                    
                  </ul>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card" >
                <div className="card-body">
                    <h2 className="card-title">Follow me</h2>
                    <div className="space-x-4">
                        <button className="btn btn-outline" size="sm">
                            <a href="https://github.com/giskahalla/" target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                            </a>
                            GitHub
                        </button>
                        <button className="btn btn-outline" size="sm">
                            <a href="https://www.linkedin.com/in/giska-halla-643253188/" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4 mr-2" />
                            </a>
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>

            <div className="card" >
                <div className="card-body">
                    <h2 className="card-title">Availability</h2>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-muted-foreground">Available for new projects</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}