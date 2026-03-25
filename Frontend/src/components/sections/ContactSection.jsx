import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FaWhatsapp } from "react-icons/fa";
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { teamMembers } from '../../data/team';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un correo válido'),
  subject: z.string().min(5, 'El asunto debe ser más descriptivo'),
  message: z.string().min(10, 'El mensaje es demasiado corto'),
});

const socialLinks = [
  { icon: FaWhatsapp, url: 'https://wa.me/584122836714', label: 'WhatsApp' }
];

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setFormStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data submitted:', data);
      setFormStatus('success');
      reset();

      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (err) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <div className="absolute bg-primary/20 w-[600px] h-[600px] rounded-full blur-[150px] bottom-0 translate-y-1/2 opacity-40 mix-blend-screen" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Side: Info & Socials */}
          <motion.div variants={fadeUp} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">¿Hablamos?</h2>
              <p className="text-lg text-text-muted leading-relaxed max-w-md">
                Estamos a tu entera disposición para el desarrollo de proyectos a medida, soporte corporativo o analizar el diseño tecnológico de tu producto tecnológico.
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full max-w-sm">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold font-display text-white mb-6">El Equipo</h3>
                <div className="flex flex-col gap-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-xl transition-colors">
                      <img src={member.imageUrl} alt={member.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/50" />
                      <div>
                        <h4 className="font-bold text-white text-sm">{member.name}</h4>
                        <p className="text-xs text-text-muted">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-bold font-display text-white mb-6">Conecta con nosotros</h3>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group p-2 rounded-lg hover:bg-white/5"
                      >
                        <div className="p-2 rounded-lg bg-surface border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all">
                          <Icon size={20} />
                        </div>
                        <span className="font-medium">{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div variants={fadeUp} className="glass-card p-8 md:p-10 rounded-3xl relative h-fit">
            <h3 className="text-2xl font-bold font-display text-white mb-6">Envíame un mensaje</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-text-main ml-1">Nombre</label>
                  <Input
                    id="name"
                    placeholder="Tu nombre completo"
                    {...register('name')}
                    error={errors.name}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-text-main ml-1">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    {...register('email')}
                    error={errors.email}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-sm font-medium text-text-main ml-1">Asunto</label>
                <Input
                  id="subject"
                  placeholder="¿De qué trata tu mensaje?"
                  {...register('subject')}
                  error={errors.subject}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1 ml-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-text-main ml-1">Mensaje</label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  {...register('message')}
                  error={errors.message}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1 ml-1">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-4"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Enviar Mensaje
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl flex items-start gap-3 mt-4">
                  <CheckCircle2 className="text-secondary shrink-0" />
                  <p className="text-sm text-secondary font-medium">¡Mensaje enviado con éxito! Te responderé lo más pronto posible.</p>
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 mt-4">
                  <AlertCircle className="text-red-500 shrink-0" />
                  <p className="text-sm text-red-500 font-medium">Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
