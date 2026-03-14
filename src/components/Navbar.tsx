import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Globe, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Magnetic } from './Magnetic';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, theme, toggleTheme, t } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: t.nav.about, href: '/about' },
    { name: t.nav.projects, href: '/#projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" onClick={() => handleNavClick('/')} className="text-xl font-bold tracking-tighter hover:text-accent transition-colors">
          sewari.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <button 
              onClick={toggleTheme}
              className="p-2 hover:text-accent transition-colors"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
              className="p-2 hover:text-accent transition-colors flex items-center gap-1 text-sm font-medium"
              title="Switch Language"
            >
              <Globe size={18} />
              <span className="uppercase">{language}</span>
            </button>
          </div>

          <Magnetic>
            <a 
              href="/cv.pdf" 
              download
              className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
            >
              <Download size={16} />
              {t.nav.cv}
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="p-2">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-white/5 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-lg font-medium text-foreground/70 hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex justify-between items-center border-t border-white/10 pt-6">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
                className="flex items-center gap-2 text-lg font-medium"
              >
                <Globe size={20} />
                <span className="uppercase">{language === 'en' ? 'Nederlands' : 'English'}</span>
              </button>
            </div>

            <a 
              href="/cv.pdf" 
              download
              className="bg-accent text-background px-6 py-3 rounded-full text-center font-semibold flex items-center justify-center gap-2"
            >
              <Download size={20} />
              {t.nav.cv}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
