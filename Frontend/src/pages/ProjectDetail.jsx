import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, User, ShoppingCart, CreditCard, Keyboard, Building2, Server, Wifi } from 'lucide-react';
import { projects } from '../data/projects';
import { fadeUp, staggerContainer } from '../utils/animations';
import { Button } from '../components/ui/Button';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-display font-bold mb-4">Proyecto no encontrado</h2>
        <Button asChild><Link to="/">Volver al inicio</Link></Button>
      </div>
    );
  }

  return (
    <div className="py-24 pt-32 min-h-screen">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-8">
            <Link to="/#projects" className="inline-flex items-center text-text-muted hover:text-primary transition-colors mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-display font-bold">{project.title}</h1>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-primary">
                {project.client || 'Personal'}
              </span>

              {/* Web URL */}
              <motion.div variants={fadeUp} className="prose prose-invert max-w-none">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-text-muted hover:text-primary transition-colors">
                  <Link to={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-hover hover:text-primary transition-colors">
                    Visitar página web - holanet.com.ve
                  </Link>
                </a>
              </motion.div>
            </div>
            <p className="text-xl text-text-muted leading-relaxed">{project.description}</p>
          </motion.div>

          {/* Project Details */}
          <motion.div variants={fadeUp} className="prose prose-invert max-w-none mb-12">
            <p className="leading-relaxed text-text-main text-lg">
              {project.longDescription || project.description}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-12">
            <h3 className="text-2xl font-display font-bold mb-6">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-surface border border-white/5 rounded-full text-sm flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-primary" /> {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.div variants={fadeUp} className="mb-16">
              <h3 className="text-2xl font-display font-bold mb-6">Galería del Proyecto</h3>
              <div className="grid grid-cols-1 space-y-8">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 glass-card">
                    <img src={img} alt={`Captura ${idx + 1}`} className="w-full h-auto object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
