import { motion } from 'motion/react';
import { ExternalLink, Github, Building2 } from 'lucide-react';

export default function Projects() {
  const personalProjects = [
    {
      title: 'FlowDash - Dashboard Management',
      description: 'A web application built to provide an interactive dashboard for visualizing customer data through dynamic charts and reports. The platform also supports core CRUD operations, enabling users to manage customer records efficiently while ensuring data accuracy and accessibility.',
      image: 'modern dashboard',
      technologies: ['React', 'Node.js', 'Next.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
  ];

   const professionalProjects = [
    {
      title: 'Parcel Management Platform (IPick)',
      description: 'A web application designed to streamline parcel shipment management and tracking with separate portals for Admins, Customers, Hub Staff, and Public Tracking. The app allows each user role to access tailored features like real-time shipment tracking, inventory management, and operational reports.',
      impact: 'Reduced page load times by 40% and improved user satisfaction scores by 25%',
      technologies: ['React', 'Ant-Design', 'Redux'],
    },
    {
      title: 'Employee & Payroll Management Platform (Bolt)',
      description: 'A web application built to simplify employee and employer workflows with integrated payroll management. The app features multiple portals tailored for Employees, Employers, and Admins, offering tools for attendance tracking, payroll automation, and role-based access to organizational data. The dashboard provides visual insights with interactive charts, enabling users to monitor workforce performance, salary distributions, and key HR metrics in real time.',
      impact: 'Increased sales team productivity by 35% and improved lead conversion rates',
      technologies: ['React', 'Ant-Design', 'Redux', 'Antv G2'],
    },
    {
      title: 'Durian Plantation Management Platform (KHK)',
      description: 'A web-based platform that streamlines durian plantation operations by digitizing tree inventories, fruit records, and harvest schedules, while mapping tree locations with geospatial tracking for precise monitoring. It manages workforce activities such as task assignments, work schedules, along with vehicle and equipment access control to ensure accountability. A dedicated treatment plan and program module tracks tree health, fertilizer application, and pest control. Interactive dashboards provide insights into yield performance, asset utilization, and operational efficiency. Beyond these core functions, the platform also supports broader plantation needs',
      impact: 'Enabled data-driven decision making for 50+ client organizations',
      technologies: ['React', 'Ant-Design', 'Redux', 'Antv G2', 'React-gogle-maps'],
    },
    {
      title: 'Vehicle & Card Assignment Management Platform (BayaFleet',
      description: 'A platform that streamlines the management of drivers, vehicles, and usage cards within an organization. Managers can assign drivers to vehicles with real-time tracking, while card usage is controlled through restrictions and monitoring to prevent misuse and ensure accountability',
      impact: 'Enabled data-driven decision making for 50+ client organizations',
      technologies: ['React', 'Ant-Design', 'Redux', 'Antv G2'],
    },
    {
      title: 'GPS Fleet Monitoring & Fuel Analysis Platform (GPS Fleet)',
      description: 'A web-based GPS tracking platform for managing and analyzing vehicle operations. The system provides real-time monitoring of vehicle routes, fuel consumption analytics, and detailed trip records. It also includes vehicle maintenance tracking to ensure fleet readiness and efficiency.',
      impact: 'Enabled data-driven decision making for 50+ client organizations',
      technologies: ['React', 'Ant-Design', 'Redux', 'React-gogle-maps'],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of both professional work experience and personal projects, 
            demonstrating expertise in modern web development technologies and problem-solving approaches.
          </p>
        </motion.div>

         <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              Professional Work
            </h3>
            <p className="text-muted-foreground">
              Projects developed during my professional experience at the company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {professionalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div class="card card-border bg-base-100 border-gray-200 max-w-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 h-150">
                  <div className="card-body">
                      <span className="inline-flex items-center w-29 rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">Work Experience</span>
                      <h2 className="card-title">{project.title}</h2>
                      <p>{project.description}</p>
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {/* 📈 {project.impact} */}
                      </p>
                      <div className="pt-4 pb-2">
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-500 inset-ring inset-ring-gray-400/20">{tech}</span>
                            ))}
                        </div>
                      </div>

                    <div className="pt-2 border-t border-gray-400">
                      <p className="text-xs text-gray-400">
                        * Proprietary application - demo unavailable
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div class="card card-border bg-base-100 border-gray-200 overflow-hidden bg-blue-50 border-blue-600">
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-blue-800">
                      <strong>Professional Work:</strong> Projects shown are from my 2+ years experience at the company. 
                      Details shared are within approved guidelines while respecting confidentiality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Personal Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <Github className="h-6 w-6" />
              Personal Projects
            </h3>
            <p className="text-muted-foreground">
              Side projects and personal work with publicly available source code and live demos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                   <div class="card card-border bg-base-100 border-gray-200 max-w-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <figure>
                        <img
                          src='https://img.icons8.com/?size=100&id=wS8OCNb2Fe4L&format=png&color=000000'
                          alt="project image" 
                          onerror="this.onerror=null; this.src='no-image.png';"
                          style={{ margin: '20px 0'}}
                        />
                    </figure>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </button>
                    <button>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </button>
                  </div>
                    <div className="card-body">
                        <h2 className="card-title">{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-500 inset-ring inset-ring-gray-400/20">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}