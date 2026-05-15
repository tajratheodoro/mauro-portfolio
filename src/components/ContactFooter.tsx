import { Instagram, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const ContactFooter = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={24} />, url: 'https://www.instagram.com/mauro.fmmkr/', color: 'hover:text-pink-500' },
    { name: 'Behance', icon: <ExternalLink size={24} />, url: 'https://www.behance.net/maurojnior11', color: 'hover:text-blue-500' },
    { name: 'WhatsApp', icon: <MessageCircle size={24} />, url: 'https://wa.me/5586998278177', color: 'hover:text-green-500' },
    { name: 'E-mail', icon: <Mail size={24} />, url: 'mailto:maurojrmedia@gmail.com', color: 'hover:text-amber-500' },
  ];

  return (
    <footer id="contato" className="bg-white dark:bg-brand-grey pt-24 pb-12 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 mb-8"
        >
          Vamos trabalhar juntos?
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-medium text-brand-dark dark:text-white mb-12 leading-none"
        >
          Inicie um <span className="italic">novo capítulo</span> visual na sua vida comigo.
        </motion.h3>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500 transition-colors ${link.color}`}
            >
              <div className="w-16 h-16 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                {link.icon}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-gray-400 font-medium">
        <p>© {currentYear} MAURO JUNIOR. Todos os direitos reservados.</p>
        <p>
          Feito por{' '}
          <a 
            href="https://www.linkedin.com/in/theodoro-tajra/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-dark dark:text-white hover:underline transition-all"
          >
            Theodoro Tajra
          </a>
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;
