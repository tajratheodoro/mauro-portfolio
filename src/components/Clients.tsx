import { motion } from 'motion/react';
import logo1 from '@/images/logo1.webp';
import logo2 from '@/images/logo2.webp';
import logo4 from '@/images/logo4.webp';
import logo3 from '@/images/logo3.webp';
import logo5 from '@/images/logo5.webp';
import logo6 from '@/images/logo6.webp';

const brands = [
  { src: logo1, alt: 'Logo 1' },
  { src: logo2, alt: 'Logo 2', sizeClass: 'h-24 md:h-36' },
  { src: logo4, alt: 'Logo 4', sizeClass: 'h-20 md:h-28' },
  { src: logo3, alt: 'Logo 3', sizeClass: 'h-24 md:h-36' },
  { src: logo5, alt: 'Logo 5' },
  { src: logo6, alt: 'Logo 6', sizeClass: 'h-28 md:h-44' },
];

const Clients = () => {
  return (
    <section className="py-20 bg-white dark:bg-brand-grey transition-colors duration-500 overflow-hidden border-y border-gray-100 dark:border-gray-900">
      <div className="mb-12 text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] text-gray-400">Marcas & Projetos</h2>
      </div>
      
      <div className="relative flex">
        <motion.div 
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex w-max whitespace-nowrap gap-20 items-center"
        >
          {[...brands, ...brands].map((brand, i) => (
            <img
              key={i} 
              src={brand.src}
              alt={brand.alt}
              className={`${brand.sizeClass ?? 'h-14 md:h-20'} w-auto max-w-none object-contain opacity-45 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0`}
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
