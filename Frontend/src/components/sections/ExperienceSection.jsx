import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../../data/experience';
import { staggerContainer, fadeUp } from '../../utils/animations';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-surface/30 border-y border-white/5 relative">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Experiencia</h2>
            <div className="h-1 w-20 bg-primary mt-4 rounded-full mb-8"></div>
          </motion.div>

          <div className="flex flex-col gap-6 lg:gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                className="glass-card p-6 lg:p-8 rounded-3xl hover:border-primary/50 transition-all group flex flex-col md:flex-row gap-6 md:gap-12 relative overflow-hidden items-start"
              >
                {/* Number Background */}
                <div className="hidden md:block absolute -right-4 -bottom-6 text-9xl font-display font-black text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none select-none z-0">
                  0{idx + 1}
                </div>

                <div className="relative z-10 w-full md:w-1/3 shrink-0 gap-2 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    {exp.companyLogo ? (
                      <img
                        src={exp.companyLogo}
                        alt={exp.company}
                        className="w-14 h-14 shrink-0 rounded-2xl object-cover border border-white/10 group-hover:scale-105 transition-transform shadow-lg bg-white/5"
                      />
                    ) : (
                      <div className="p-4 bg-surface rounded-xl border border-white/5 text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                        <Briefcase size={22} />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold font-display text-white leading-tight">{exp.role}</h3>
                      <div className="text-sm font-mono text-primary mt-2">{exp.period}</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-text-muted/80">{exp.company}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-text-muted/80">{exp.identify}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-text-muted/80">{exp.contact}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-text-muted/80"><a href={exp.web} target="_blank" rel="noopener noreferrer">{exp.web}</a></div>
                  <div className="text-xs font-bold uppercase tracking-wider text-text-muted/80">{exp.address}</div>
                </div>

                <div className="relative z-10 w-full md:w-2/3 flex flex-col flex-1 h-full">
                  <p className="text-text-muted leading-relaxed mb-8 text-lg">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {exp.technologies.map((tech, i) => {
                      const isString = typeof tech === 'string';
                      const name = isString ? tech : tech.name;
                      const Icon = !isString && tech.icon ? tech.icon : null;
                      const colorClass = !isString && tech.color ? tech.color : "text-text-muted";

                      return (
                        <span key={i} className="px-3 py-1.5 text-xs font-medium text-text-main bg-white/5 rounded-full border border-white/5 flex items-center gap-2">
                          {Icon && <Icon size={14} className={colorClass} />}
                          {name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
