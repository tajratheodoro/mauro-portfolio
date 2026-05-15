import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import secao11 from '@/images/secao1.1.webp';
import secao12 from '@/images/secao1.2.webp';
import secao13 from '@/images/secao1.3.webp';
import secao14 from '@/images/secao1.4.webp';
import secao15 from '@/images/secao1.5.webp';

const images = [
  {
    url: secao14,
    title: 'Narrativa Visual',
    subtitle: 'Capturando momentos com um olhar cinematográfico'
  },
  {
    url: secao11,
    title: 'Fotografia & Filme',
    subtitle: 'Mídia profissional para marcas e pessoas'
  },
  {
    url: secao15,
    title: 'Serviço Profissional',
    subtitle: 'Produção de alta qualidade para todos os formatos'
  },
  {
    url: secao13,
    title: 'Retratos Cinematográficos',
    subtitle: 'Imagens com presença, ritmo e intenção'
  },
  {
    url: secao12,
    title: 'Direção Criativa',
    subtitle: 'Narrativas visuais criadas para emoção e desejo'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    images.forEach((image) => {
      const preload = new Image();
      preload.src = image.url;
    });
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => window.clearTimeout(timer);
  }, [current]);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {images.map((image, i) => (
        <motion.div
          key={image.url}
          initial={false}
          animate={{
            opacity: i === current ? 1 : 0,
            scale: i === current ? 1 : 1.04,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{ zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={image.url} 
            alt={image.title}
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      ))}

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.p
          key={`sub-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm mb-4"
        >
          {images[current].subtitle}
        </motion.p>
        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white text-5xl md:text-8xl font-display font-medium mb-8 leading-none"
        >
          {images[current].title}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="#portfolio"
            className="px-10 py-4 bg-white text-brand-dark uppercase tracking-widest text-xs font-semibold hover:bg-brand-accent transition-colors"
          >
            Ver Portfolio
          </a>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-24 right-6 z-30 flex space-x-4 md:bottom-10 md:right-10">
        <button onClick={prev} className="rounded-full border border-white/45 bg-black/35 p-3 text-white/85 backdrop-blur-sm transition-colors hover:text-white">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="rounded-full border border-white/45 bg-black/35 p-3 text-white/85 backdrop-blur-sm transition-colors hover:text-white">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 space-x-2 md:left-10 md:translate-x-0">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`w-12 h-1 transition-all duration-500 ${i === current ? 'bg-white' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
