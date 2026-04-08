import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';
import { projects } from '../data/content';
import { useAppContext } from '../context/AppContext';

export const ProjectGrid = () => {
  const { language, t } = useAppContext();

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            {t.nav.projects}
          </h2>
        </div>
        <div className="text-sm font-mono uppercase tracking-widest text-foreground/40 pb-2">
          [ {projects.length.toString().padStart(2, '0')} Selected Works ]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="group block h-full p-8 bg-foreground/[0.05] border border-foreground/15 rounded-3xl transition-all hover:bg-foreground/[0.08] hover:border-accent/50 hover:shadow-[0_0_30px_rgba(225,177,44,0.1)] relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <Code size={24} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                  project.status.en.includes('Development') ? 'border-accent/30 text-accent' : 'border-emerald-500/30 text-emerald-500'
                }`}>
                  {project.status[language]}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {project.title[language]}
              </h3>
              <p className="text-foreground/60 mb-8 line-clamp-3 leading-relaxed">
                {project.description[language]}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-[10px] font-mono text-foreground/40 bg-foreground/[0.05] px-2 py-1 rounded border border-foreground/10">
                    {tech}
                  </span>
                ))}
              </div>

              <Link 
                to={`/projects/${project.slug}`}
                className="flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-4 transition-all"
              >
                {language === 'en' ? 'Read Case Study' : 'Bekijk Case Study'} <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
