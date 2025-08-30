import { motion } from 'motion/react';
import { CalendarDays, MapPin, Building2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Pinetop',
      location: 'Remote',
      duration: 'March 2023 - Present',
      description: 'Developed and maintained multiple web applications using React, and modern frontend technologies. Collaborated with cross-functional teams to deliver high-quality user experiences and improved application performance',
      achievements: [
        'Lead the frontend team in developing and maintaining a high-performance web application',
        'Built and maintained reusable UI components to support scalable development',
        'Experienced in developing advanced map-based modules with interactive geospatial features',
        'Optimized application performance and loading times',
        'Wrote clear technical documentation to support future maintenance and team collaboration'
      ],
      technologies: ['Agile & Collaborative', 'Detail-Oriented']
    },
    {
      title: 'Frontend Developer',
      company: 'Bayafleet',
      location: 'On-site',
      duration: 'October 2023 - July 2025',
      description: 'Developed and maintained multiple web applications using React, and modern frontend technologies. Collaborated with cross-functional teams to deliver high-quality user experiences and improved application performance',
      achievements: [
        'Lead the frontend team in maintaining a high-performance web application',
        'Optimized frontend performance to deliver a more engaging user experience',
        'Refactored codebase to enhance maintainability, scalability, and readability',
      ],
      technologies: ['Agile & Collaborative', 'Detail-Oriented']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over 2 years of professional experience building modern web applications 
            and working with cross-functional teams to deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
                <div className="card card-border bg-base-100 border-gray-200 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="card-body">
                        <h2 className="card-title">{experience.title}</h2>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Building2 className="h-4 w-4" />
                                    <span>{experience.company}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>{experience.location}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                            <CalendarDays className="h-4 w-4" />
                            <span className="whitespace-nowrap">{experience.duration}</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground mb-6">{experience.description}</p>
                        <div className="mb-6">
                            <h4 className="font-semibold mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                            {experience.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{achievement}</span>
                                </li>
                            ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Skills & Competencies:</h4>
                            <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                                <div className="badge badge-ghost badge-md font-semibold">{tech}</div>
                            ))}
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}