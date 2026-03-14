import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Magnetic } from './Magnetic';

export const Hero = () => {
  const { scrollY } = useScroll();
  const { t } = useAppContext();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20 relative overflow-hidden gap-12 lg:gap-24">
      <motion.div
        style={{ y: y1 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 text-center lg:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-6">
          {t.hero.hi} <span className="text-accent">{t.hero.name}</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-medium text-foreground/80 leading-tight tracking-tight mb-8">
          {t.hero.statement.split(t.hero.highlight).map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && <span className="text-accent">{t.hero.highlight}</span>}
            </React.Fragment>
          ))}
        </h2>

        <div className="space-y-2 mb-10">
          <p className="text-sm md:text-base text-foreground/60 font-medium">
            {t.hero.credibility}
          </p>
          <p className="text-xs md:text-sm text-foreground/40 font-mono">
            {t.hero.languages}
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <Magnetic>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-background px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              {t.hero.viewWork}
              <ArrowRight size={18} />
            </button>
          </Magnetic>
          
          <Magnetic>
            <a 
              href="/cv.pdf" 
              download
              className="border border-foreground/10 hover:border-accent/50 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              {t.hero.downloadCV}
              <Download size={18} />
            </a>
          </Magnetic>

          <Magnetic>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground/60 hover:text-accent px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
            >
              {t.nav.contact}
            </button>
          </Magnetic>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex gap-6 items-center justify-center lg:justify-start"
        >
          <div className="w-12 h-[1px] bg-foreground/30"></div>
          <p className="text-sm font-mono uppercase tracking-widest text-foreground/50">
            {t.hero.explore}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 relative group"
      >
        <div className="relative z-10 rounded-[32px] overflow-hidden border border-white/10 aspect-square max-w-[500px] mx-auto shadow-2xl">
          <img 
            src="/mohammed.jpg" 
            alt="Mohammed Al Sewari" 
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Solar Yellow Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 blur-[100px] -z-10 rounded-full animate-pulse"></div>
        
        {/* Floating Animation Elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 backdrop-blur-xl rounded-2xl border border-white/10 -z-10"
        ></motion.div>
      </motion.div>

      {/* Background Accent */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 blur-[120px] -z-20 rounded-full"
      ></motion.div>
    </section>
  );
};
