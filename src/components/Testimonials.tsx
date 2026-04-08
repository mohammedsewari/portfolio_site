import React from 'react';
import { motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const { t } = useAppContext();

  return (
    <section className="py-32 px-6 md:px-12 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-center">
          {t.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {t.testimonials.list.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 border border-foreground/10 rounded-3xl bg-background relative overflow-hidden"
            >
              <div className="absolute top-6 right-8 text-accent/10">
                <Quote size={80} />
              </div>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-foreground/40 uppercase tracking-widest">Verified Client</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
