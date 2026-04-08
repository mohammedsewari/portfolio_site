import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Monitor } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface ProjectScreenshotsProps {
  screenshots?: string[];
  projectTitle?: string;
}

const PLACEHOLDER_COLORS = [
  'from-accent/10 to-accent/5',
  'from-foreground/10 to-foreground/5',
  'from-accent/15 to-foreground/5',
  'from-foreground/8 to-accent/8',
];

export const ProjectScreenshots = ({ screenshots, projectTitle }: ProjectScreenshotsProps) => {
  const [current, setCurrent] = useState(0);
  const { language } = useAppContext();

  const images = screenshots && screenshots.length > 0 ? screenshots : [];
  const count = images.length > 0 ? images.length : 4;

  const prev = () => setCurrent((c) => (c - 1 + count) % count);
  const next = () => setCurrent((c) => (c + 1) % count);

  const ArrowButton = ({
    onClick,
    label,
    children,
    className = '',
  }: {
    onClick: () => void;
    label: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <button
      onClick={onClick}
      aria-label={label}
      className={`w-9 h-9 rounded-full border border-foreground/15 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:border-foreground/35 transition-colors ${className}`}
    >
      {children}
    </button>
  );

  return (
    <section>
      <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6 flex items-center gap-2">
        <Monitor size={18} />
        {language === 'en' ? 'Project Screenshots' : 'Project Screenshots'}
      </h2>

      <div className="border border-foreground/10 rounded-3xl overflow-hidden bg-foreground/[0.02]">
        {/* Image track + desktop arrows */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {Array.from({ length: count }).map((_, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0"
                  style={{ aspectRatio: '16 / 9' }}
                >
                  {images[i] ? (
                    <img
                      src={images[i]}
                      alt={`${projectTitle ?? 'Project'} — screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length]} flex flex-col items-center justify-center gap-3`}
                    >
                      <Monitor size={36} className="text-foreground/20" />
                      <span className="text-xs font-mono text-foreground/25 uppercase tracking-widest">
                        Screenshot {i + 1}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop / tablet arrows — visible sm and above */}
          <ArrowButton
            onClick={prev}
            label={language === 'en' ? 'Previous screenshot' : 'Vorige screenshot'}
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 sm:w-9 sm:h-9"
          >
            <ChevronLeft size={16} />
          </ArrowButton>
          <ArrowButton
            onClick={next}
            label={language === 'en' ? 'Next screenshot' : 'Volgende screenshot'}
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 sm:w-9 sm:h-9"
          >
            <ChevronRight size={16} />
          </ArrowButton>
        </div>

        {/* Bottom bar: dots always, mobile arrows flanking */}
        <div className="flex items-center justify-center gap-3 py-4 px-6">
          {/* Mobile-only left arrow */}
          <ArrowButton
            onClick={prev}
            label={language === 'en' ? 'Previous screenshot' : 'Vorige screenshot'}
            className="sm:hidden"
          >
            <ChevronLeft size={16} />
          </ArrowButton>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                style={{ transition: 'width 0.2s ease, background-color 0.2s ease' }}
                className={`h-2 rounded-full ${
                  i === current
                    ? 'bg-accent w-5'
                    : 'bg-foreground/20 w-2 hover:bg-foreground/35'
                }`}
              />
            ))}
          </div>

          {/* Mobile-only right arrow */}
          <ArrowButton
            onClick={next}
            label={language === 'en' ? 'Next screenshot' : 'Volgende screenshot'}
            className="sm:hidden"
          >
            <ChevronRight size={16} />
          </ArrowButton>
        </div>
      </div>
    </section>
  );
};
