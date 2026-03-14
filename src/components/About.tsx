import React from 'react';
import { motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';
import { MapPin, GraduationCap, Languages, User } from 'lucide-react';

export const About = () => {
  const { t } = useAppContext();

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            {t.about.title}
          </h2>
          <div className="space-y-6 text-lg text-foreground/70 leading-relaxed max-w-xl">
            <p>{t.about.content}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent"><User size={20} /></div>
                <span className="text-sm font-medium">{t.about.age}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent"><MapPin size={20} /></div>
                <span className="text-sm font-medium">{t.about.origin}</span>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <div className="p-2 bg-accent/10 rounded-lg text-accent"><GraduationCap size={20} /></div>
                <span className="text-sm font-medium">{t.about.study}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square bg-accent/20 rounded-3xl overflow-hidden flex items-center justify-center border border-white/10"
        >
          <div className="text-9xl font-black text-accent/10 select-none">M</div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12">
            <div className="flex items-center gap-2 text-accent mb-4">
              <Languages size={20} />
              <span className="text-sm font-mono uppercase tracking-widest">{t.about.languagesTitle}</span>
            </div>
            <div className="text-xl font-bold">{t.hero.languages}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
