'use client';

import { motion } from 'framer-motion';

const technologies = ['Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'React', 'Vercel'];

const TechStackSlider = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' }}
      >
        {technologies.concat(technologies).map((tech, idx) => (
          <span key={idx} className="text-xl font-semibold text-[#5BD124]">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackSlider;
