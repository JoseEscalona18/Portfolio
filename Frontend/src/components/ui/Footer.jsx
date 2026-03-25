const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-surface/50 py-12">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-display font-bold text-white mb-2">Portfolio<span className="text-primary">.</span></p>
          <p className="text-sm text-text-muted">Desarrollado con React, Vite y Tailwind CSS.</p>
        </div>
        <div className="text-sm text-text-muted flex items-center gap-1">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
