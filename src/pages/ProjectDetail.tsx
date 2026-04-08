import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Code, CheckCircle } from 'lucide-react';
import { projects } from '../data/content';
import { CTA } from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { ProjectScreenshots } from '../components/ProjectScreenshots';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const { language, t } = useAppContext();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-accent hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground mb-12 transition-colors"
        >
          <ArrowLeft size={16} /> {language === 'en' ? 'Back to Projects' : 'Terug naar Projecten'}
        </Link>

        <header className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
              project.status.en.includes('Development') ? 'border-accent/30 text-accent' : 'border-emerald-500/30 text-emerald-500'
            }`}>
              {project.status[language]}
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            {project.title[language]}
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/70 max-w-4xl leading-relaxed">
            {project.description[language]}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6 flex items-center gap-2">
                <Code size={18} />
                {language === 'en' ? 'Technologies Used' : 'Gebruikte Technologieën'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-foreground/[0.05] border border-foreground/15 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6 flex items-center gap-2">
                <CheckCircle size={18} />
                {language === 'en' ? 'Project Overview' : 'Project Overzicht'}
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed">
                {project.description[language]}
              </p>
            </section>

            <ProjectScreenshots
              screenshots={project.screenshots}
              projectTitle={project.title[language]}
            />
          </div>

          <aside className="space-y-12">
            <div className="p-8 bg-accent/5 border border-accent/20 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Interested in this project?' : 'Geïnteresseerd in dit project?'}</h3>
              <p className="text-foreground/60 mb-6">
                {language === 'en' 
                  ? 'I can build a similar solution tailored to your business needs. Let\'s discuss how we can work together.'
                  : 'Ik kan een vergelijkbare oplossing bouwen die is afgestemd op uw zakelijke behoeften. Laten we bespreken hoe we kunnen samenwerken.'}
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-accent text-background py-4 rounded-xl font-bold hover:bg-accent/90 transition-all"
              >
                {t.nav.contact}
              </button>
            </div>
          </aside>
        </div>

        {/* Next Project Navigation */}
        <div className="border-t border-white/5 py-24">
          <Link 
            to={`/projects/${nextProject.slug}`}
            className="group flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div>
              <div className="text-sm font-mono text-foreground/40 mb-2">{language === 'en' ? 'NEXT PROJECT' : 'VOLGEND PROJECT'}</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter group-hover:text-accent transition-colors">
                {nextProject.title[language]}
              </h2>
            </div>
            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
              <ArrowRight size={32} />
            </div>
          </Link>
        </div>
      </div>
      <CTA />
    </motion.div>
  );
};
