import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/skills';
import { cn } from '../../utils/cn';
import { staggerContainer, fadeUp } from '../../utils/animations';

const categories = ['Todos', 'Frontend', 'Backend', 'Tooling', 'Design'];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredSkills = activeCategory === 'Todos' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-surface/30 border-y border-white/5 relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="flex flex-col items-center text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold">Tecnologías</motion.h2>
          <motion.div variants={fadeUp} className="h-1 w-20 bg-primary mt-4 rounded-full mb-8"></motion.div>
          <motion.p variants={fadeUp} className="text-text-muted max-w-2xl text-lg">
            Mi stack de herramientas favorito, elegido rigurosamente para construir productos estables, rápidos y escalables.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/25" 
                  : "bg-surface border border-white/10 text-text-muted hover:text-white hover:border-white/20 hover:-translate-y-0.5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-3 group border border-white/5 hover:border-white/20 transition-all hover:bg-white/[0.02]"
              >
                {skill.icon && (() => {
                  const Icon = skill.icon;
                  return (
                    <div className={`p-4 rounded-xl bg-surface/30 mb-1 group-hover:scale-110 transition-transform shadow-lg ${skill.color}`}>
                      <Icon size={36} />
                    </div>
                  );
                })()}
                
                <h3 className="font-bold text-text-main group-hover:text-primary transition-colors">{skill.name}</h3>
                <span className="text-xs uppercase tracking-wider text-text-muted font-mono">{skill.category}</span>
                
                {/* Level Indicator (3 dots) */}
                <div className="flex gap-1.5 mt-2">
                  {[1, 2, 3].map((dot) => (
                    <div 
                      key={dot} 
                      className={cn(
                        "h-2 w-2 rounded-full transition-colors duration-300", 
                        dot <= skill.level ? "bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-surface border border-white/10"
                      )}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
