import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Magnetic } from './Magnetic';

export const CTA = () => {
  const { t } = useAppContext();

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-none">
          {t.contact.title.split('extraordinary').map((part: string, i: number, arr: any[]) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && <span className="text-accent">extraordinary</span>}
            </React.Fragment>
          ))}
        </h2>
        
        <div className="flex justify-center">
          <Magnetic>
            <button className="bg-accent hover:bg-accent/90 text-background px-12 py-6 rounded-full text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(225,177,44,0.3)]">
              {t.nav.contact}
            </button>
          </Magnetic>
        </div>

        <div className="mt-24 flex flex-wrap justify-center gap-12">
          <a href="mailto:hello@sewar.dev" className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors group">
            <Mail size={20} className="group-hover:text-accent" />
            <span className="font-medium">hello@sewar.dev</span>
          </a>
          <div className="flex gap-8">
            <a href="https://github.com/MohammedSewari" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors"><Github size={24} /></a>
            <a href="https://linkedin.com/in/mohammed-al-sewari" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  const { t } = useAppContext();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm font-mono text-foreground/40">
          {t.footer.madeWith}
        </div>
        <div className="text-sm font-mono text-foreground/40">
          © {new Date().getFullYear()} sewar.dev
        </div>
      </div>
    </footer>
  );
};
