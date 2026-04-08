import React from 'react';
import { motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';
import { Cpu, Zap, Target } from 'lucide-react';

export const Approach = () => {
  const { t } = useAppContext();

  const features = [
    { icon: <Zap size={24} />, title: 'Accelerated Development' },
    { icon: <Cpu size={24} />, title: 'Clean Architecture' },
    { icon: <Target size={24} />, title: 'Real-world Problem Solving' },
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className={`p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.03] flex flex-col gap-4 ${i === 2 ? 'sm:col-span-2' : ''}`}>
                <div className="text-accent">{f.icon}</div>
                <h3 className="text-xl font-bold">{f.title}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            {t.approach.title}
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            {t.approach.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
