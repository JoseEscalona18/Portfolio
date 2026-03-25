import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../../data/projects';
import { cn } from '../../utils/cn';
import { staggerContainer, fadeUp } from '../../utils/animations';

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold">Proyectos Destacados</motion.h2>
          <motion.div variants={fadeUp} className="h-1 w-20 bg-primary mt-4 rounded-full mb-8"></motion.div>
          
          {/* Filters */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === tag 
                    ? "bg-primary text-white" 
                    : "bg-surface border border-white/10 text-text-muted hover:text-white"
                )}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden glass-card flex flex-col hover:-translate-y-1"
              >
                {/* Image Container with Hover Reveal */}
                <div className="relative h-64 w-full overflow-hidden bg-surface">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 opacity-60"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Hover Links Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                    <Link to={`/proyecto/${project.id}`} className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform shadow-lg shadow-primary/25">
                      <Eye size={20} />
                    </Link>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface text-white rounded-full hover:scale-110 transition-transform border border-white/10 shadow-lg">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface text-white rounded-full hover:scale-110 transition-transform border border-white/10 shadow-lg">
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2.5 py-1 text-xs font-semibold bg-secondary/10 text-secondary rounded-full border border-secondary/20 shrink-0">
                        Destacado
                      </span>
                    )}
                  </div>
                  
                  <p className="text-text-muted mb-6 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-mono text-text-muted bg-background rounded-md border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
