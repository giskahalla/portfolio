import { motion } from 'motion/react';
import { CalendarDays, MapPin, Building2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Company',
      location: 'Remote / On-site',
      duration: '2022 - Present',
      description: 'Developed and maintained multiple web applications using React, TypeScript, and modern frontend technologies. Collaborated with cross-functional teams to deliver high-quality user experiences and improved application performance by 40%.',
      achievements: [
        'Built responsive web applications serving 10,000+ daily users',
        'Implemented modern UI/UX designs with React and TypeScript',
        'Collaborated with backend teams to integrate RESTful APIs',
        'Optimized application performance and loading times',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Git', 'Agile']
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
                            <h4 className="font-semibold mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                                <div className="badge badge-ghost badge-md font-semibold">{tech}</div>
                            ))}
                            </div>
                        </div>

                    </div>
                </div>
              {/* <Card className="overflow-hidden">
                <CardContent className="pt-0">
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
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          {/* <Card className="bg-muted/50">
            <CardContent className="p-8">
              <h3 className="font-semibold mb-2">Professional Development</h3>
              <p className="text-muted-foreground mb-4">
                Continuously learning and staying updated with the latest frontend technologies and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Continuous Learning</Badge>
                <Badge variant="outline">Team Collaboration</Badge>
                <Badge variant="outline">Code Reviews</Badge>
                <Badge variant="outline">Agile Methodology</Badge>
              </div>
            </CardContent>
          </Card> */}
        </motion.div>
      </div>
    </section>
  );
}