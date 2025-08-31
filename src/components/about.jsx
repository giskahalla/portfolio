import { motion } from 'motion/react';

export const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Ant Design', 'Tailwind CSS', 'Redux', 'AntV (G2, Ant Design Plots)', 'Deck.gl'] },
    { category: 'Tools', items: ['Git', 'Vite'] },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a Frontend Developer with over two years of experience building reliable and maintainable web applications. 
            I enjoy turning complex ideas into intuitive interfaces and strive to write clean, scalable code that performs 
            well and is easy to maintain
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
            <div className="card card-border bg-base-100 border-gray-200 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="card-body">
                  <h2 className="card-title mb-4">{skillGroup.category}</h2>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                        <div className="badge badge-ghost badge-lg font-semibold">{skill}</div>
                    ))}
                  </div>
                </div>
            </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-8 shadow-sm bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">3</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">6</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;