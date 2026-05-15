import { motion } from 'motion/react';
import secao2 from '@/images/secao2.webp';

const About = () => {
  return (
    <section
      id="sobre"
      className="py-24 px-6 bg-brand-light dark:bg-brand-dark transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700 animate-spin-slow" />
          <img
            src={secao2}
            alt="Mauro Junior"
            className="w-full h-full object-cover rounded-full p-4 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 mb-4">
            Sobre mim
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-brand-dark dark:text-white mb-6 leading-tight">
            Transmitindo{" "}
            <span className="italic text-gray-400 dark:text-gray-500">
              emoção e desejo
            </span>{" "}
            através de vídeos e fotos.
          </h3>
          <p className="text-brand-dark/70 dark:text-white/60 text-lg leading-relaxed mb-8">
            Sou fotógrafo e filmmaker apaixonado por transformar ideias,
            momentos e marcas em experiências visuais com emoção e
            personalidade. Meu trabalho une direção estética, sensibilidade e
            atenção aos detalhes para criar fotos e Vídeos que despertam
            desejo, conexão e memória. Cada projeto é pensado para transmitir a
            essência de quem está diante da câmera, seja uma pessoa, uma
            história ou uma marca.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 dark:border-gray-800 pt-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Especialidade
              </p>
              <p className="font-display text-brand-dark dark:text-white">
                Filmmaker
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Localização
              </p>
              <p className="font-display text-brand-dark dark:text-white">
                Brasil / Teresina - PI
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
