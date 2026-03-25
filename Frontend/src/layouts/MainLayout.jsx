import { Outlet } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const MainLayout = () => {
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
