import React from 'react';
import { motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';
import { CTA } from '../components/Footer';
import { MapPin, GraduationCap, Languages, User, Briefcase } from 'lucide-react';

export const AboutPage = () => {
  const { t } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-start">
          <div className="lg:col-span-7 space-y-12">
            <header>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight lg:leading-none">
                {t.about.title.split('/').map((part: string, i: number, arr: any[]) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
            </header>

            <div className="space-y-8 text-xl text-foreground/70 leading-relaxed">
              <p>{t.about.content}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div className="flex items-center gap-4 p-6 bg-foreground/[0.03] border border-foreground/10 rounded-2xl">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent"><User size={24} /></div>
                  <div>
                    <div className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-1">Age</div>
                    <div className="font-bold">{t.about.age}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-foreground/[0.03] border border-foreground/10 rounded-2xl">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent"><MapPin size={24} /></div>
                  <div>
                    <div className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-1">Origin</div>
                    <div className="font-bold">{t.about.origin}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-foreground/[0.03] border border-foreground/10 rounded-2xl sm:col-span-2">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent"><GraduationCap size={24} /></div>
                  <div>
                    <div className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-1">Education</div>
                    <div className="font-bold">{t.about.study}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="relative w-80 aspect-[3/3.7] rounded-[2rem] overflow-hidden border border-foreground/15 bg-foreground/[0.03] group"
            >
              <img
                src="/Photo.png"
                alt="Mohammed Alsewari"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <section>
              <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6 flex items-center gap-2">
                <Briefcase size={18} />
                Focus & Passion
              </h2>
              <div className="p-8 bg-accent/5 border border-accent/10 rounded-3xl">
                <p className="text-xl font-medium leading-relaxed">
                  {t.about.focus}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6 flex items-center gap-2">
                <Languages size={18} />
                {t.about.languagesTitle}
              </h2>
              <div className="space-y-4">
                {[
                  { lang: 'Arabic', level: 'Native / Fluent' },
                  { lang: 'English', level: 'C1 Advanced' },
                  { lang: 'Dutch', level: 'B1 Intermediate' },
                ].map((l) => (
                  <div key={l.lang} className="flex justify-between items-center p-4 bg-foreground/[0.03] border border-foreground/10 rounded-xl">
                    <span className="font-bold">{l.lang}</span>
                    <span className="text-sm text-foreground/40 font-mono">{l.level}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <CTA />
    </motion.div>
  );
};
