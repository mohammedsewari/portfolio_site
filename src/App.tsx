import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { AboutPage } from './pages/AboutPage';
import { AppProvider, useAppContext } from './context/AppContext';

const AnimatedRoutes = () => {
  const location = useLocation();
  const { language } = useAppContext();

  // Update document title based on route and language
  React.useEffect(() => {
    const path = location.pathname;
    let title = 'Mohammed Al Sewari | Portfolio';
    if (path === '/about') {
      title = language === 'en' ? 'About Me | Mohammed Al Sewari' : 'Over Mij | Mohammed Al Sewari';
    } else if (path.startsWith('/projects')) {
      title = language === 'en' ? 'Projects | Mohammed Al Sewari' : 'Projecten | Mohammed Al Sewari';
    } else if (path === '/contact') {
      title = language === 'en' ? 'Contact | Mohammed Al Sewari' : 'Contact | Mohammed Al Sewari';
    }
    document.title = title;
  }, [location, language]);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground flex flex-col cursor-none">
          <CursorTrail />
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}
