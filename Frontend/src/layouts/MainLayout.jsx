import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const MainLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si la URL principal se carga sin hash, vamos hacia arriba
    if (pathname === '/' && !hash) {
      window.scrollTo(0, 0);
    }
    // Si la URL tiene un hash, implementamos un polling para esperar que React Lazy cargue los chunks y dibuje el DOM
    else if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;
      
      const scrollInterval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          clearInterval(scrollInterval);
          // Un mínimo margen extra post-render
          setTimeout(() => {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }, 100);
        } else if (attempts >= 40) { // Timeout de 2 segundos (40 intentos * 50ms)
          clearInterval(scrollInterval);
        }
        attempts++;
      }, 50);

      return () => clearInterval(scrollInterval);
    }
  }, [pathname, hash]);
  return (
    <div className="w-full min-h-screen bg-background text-text-main font-body flex flex-col selection:bg-primary/30 selection:text-primary overflow-x-hidden relative">
      <Navbar />
      <main className="flex-1 w-full flex flex-col relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
