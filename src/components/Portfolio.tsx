import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import secao31 from '@/images/secao3.1.webp';
import secao32 from '@/images/secao3.2.webp';
import secao33 from '@/images/secao3.3.mp4';
import secao34 from '@/images/secao3.4.mp4';
import secao35 from '@/images/secao3.5.webp';
import secao36 from '@/images/secao3.6.mp4';
import secao361 from '@/images/secao3.61.webp';
import secao37 from '@/images/secao3.7.webp';
import secao38 from '@/images/secao3.8.webp';
import secao39 from '@/images/secao3.9.mp4';
import secao310 from '@/images/secao3.10.mp4';
import secao33Poster from '@/images/secao3.3-poster.webp';
import secao34Poster from '@/images/secao3.4-poster.webp';
import secao36Poster from '@/images/secao3.6-poster.webp';
import secao39Poster from '@/images/secao3.9-poster.webp';
import secao310Poster from '@/images/secao3.10-poster.webp';

type Project = {
  id: number;
  type: 'photo' | 'video';
  title: string;
  category: string;
  url: string;
  poster?: string;
  muted?: boolean;
};

const projects: Project[] = [
  { id: 1, type: 'photo', title: 'Projeto 01', category: 'Photography', url: secao31 },
  { id: 2, type: 'photo', title: 'Projeto 02', category: 'Photography', url: secao32 },
  { id: 3, type: 'video', title: 'Projeto 03', category: 'Cinematography', url: secao33, poster: secao33Poster },
  { id: 4, type: 'video', title: 'Projeto 04', category: 'Cinematography', url: secao34, poster: secao34Poster, muted: true },
  { id: 5, type: 'photo', title: 'Projeto 05', category: 'Photography', url: secao35 },
  { id: 6, type: 'video', title: 'Projeto 06', category: 'Cinematography', url: secao36, poster: secao36Poster },
  { id: 7, type: 'photo', title: 'Projeto 07', category: 'Photography', url: secao361 },
  { id: 8, type: 'photo', title: 'Projeto 08', category: 'Photography', url: secao37 },
  { id: 9, type: 'photo', title: 'Projeto 09', category: 'Photography', url: secao38 },
  { id: 10, type: 'video', title: 'Projeto 10', category: 'Cinematography', url: secao39, poster: secao39Poster },
  { id: 11, type: 'video', title: 'Projeto 11', category: 'Cinematography', url: secao310, poster: secao310Poster },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-brand-light dark:bg-brand-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:items-end md:text-left mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 mb-4">Portfólio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-dark dark:text-white leading-tight">
              Fotografia e Vídeos
            </h3>
          </div>
          
          <div className="flex justify-center space-x-8">
            {['all', 'photo', 'video'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs uppercase tracking-widest font-semibold pb-2 border-b-2 transition-all ${filter === f ? 'border-brand-dark dark:border-white text-brand-dark dark:text-white' : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
              >
                {f === 'all' ? 'Ver Tudo' : f === 'photo' ? 'Fotografia' : 'Filmes'}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden bg-gray-200 dark:bg-gray-800"
              >
                {project.type === 'video' ? (
                  <div className="relative h-full w-full transition-transform duration-700 group-hover:scale-110">
                    <img
                      src={project.poster}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full border border-white/40 bg-black/35 p-5 backdrop-blur-sm">
                        <Play fill="white" size={30} className="text-white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.url} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8">
                  {project.type === 'video' && (
                    <div className="mb-4 p-4 border border-white/30 rounded-full">
                      <Play fill="white" size={24} className="text-white" />
                    </div>
                  )}
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-2">{project.category}</p>
                  <h4 className="text-white text-2xl font-display font-medium">{project.title}</h4>
                  
                  <motion.button 
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-6 py-2 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    Ver Projeto
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 rounded-full border border-white/20 p-3 text-white/70 transition-colors hover:text-white"
              aria-label="Fechar projeto"
            >
              <X size={24} />
            </button>

            <motion.div
              className="w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              {selectedProject.type === 'video' ? (
                <video
                  src={selectedProject.url}
                  poster={selectedProject.poster}
                  className="max-h-[82vh] w-full bg-black object-contain"
                  controls
                  autoPlay
                  muted={selectedProject.muted === true}
                  playsInline
                />
              ) : (
                <img
                  src={selectedProject.url}
                  alt={selectedProject.title}
                  className="mx-auto max-h-[82vh] w-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
