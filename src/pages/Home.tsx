import React from 'react';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { About } from '../components/About';
import { Approach } from '../components/Approach';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/Footer';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ProjectGrid />
      <Approach />
      <About />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};
