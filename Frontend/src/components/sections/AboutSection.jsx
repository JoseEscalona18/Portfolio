import { motion } from 'framer-motion';
import { User, Code2, Sparkles, Coffee } from 'lucide-react';
import { staggerContainer, fadeUp } from '../../utils/animations';

const values = [
  { icon: Code2, title: 'Clean Code', description: 'Escribimos código estructurado, mantenible y escalable pensando a futuro.' },
  { icon: Sparkles, title: 'Pixel Perfect', description: 'Atención obsesiva a los detalles de UI y transiciones fluidas.' },
  { icon: User, title: 'Accesibilidad', description: 'Construimos interfaces inclusivas para todos los usuarios (a11y).' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Nosotros</h2>
            <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Bio & Stats */}
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-lg text-text-muted leading-relaxed">
                Somos un grupo multidisciplinario de Ingenieros. Nuestra pasión es tender el puente perfecto entre un diseño sofisticado y la ingeniería pura, transformando conceptos en productos digitales robustos.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Creemos firmemente que el código es diseño. No se trata solo de hacer que los sistemas funcionen, sino de construir infraestructuras que respiren y se sientan premium para el usuario, manteniendo arquitecturas impecables.
              </p>
              
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-4xl font-display font-bold text-white">8+</h4>
                  <p className="text-sm text-text-muted mt-1">Años experiencia</p>
                </div>
                <div>
                  <h4 className="text-4xl font-display font-bold text-white">50+</h4>
                  <p className="text-sm text-text-muted mt-1">Proyectos finales</p>
                </div>
                <div>
                  <h4 className="text-4xl font-display font-bold text-primary flex items-center">
                    <Coffee className="h-8 w-8 mr-2" />
                  </h4>
                  <p className="text-sm text-text-muted mt-1">Cafés tomados</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Values */}
            <motion.div variants={staggerContainer} className="space-y-6">
              {values.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx} 
                    variants={fadeUp}
                    className="glass-card p-6 rounded-2xl flex gap-4 hover:-translate-y-1 transition-transform"
                  >
                    <div className="mt-1 bg-surface p-3 rounded-xl border border-white/5 h-fit text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display mb-2">{item.title}</h3>
                      <p className="text-text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
