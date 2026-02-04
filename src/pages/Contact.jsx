import { motion } from 'framer-motion';
import { SiGithub, SiGmail } from 'react-icons/si';
import { useState } from 'react';

export default function Contact() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full bg-black pt-16 pb-8 px-6 overflow-hidden flex flex-col items-center justify-center"
    >
      
      <motion.h2 
        animate={{ 
          x: (mousePos.x - window.innerWidth / 2) * 0.02,
          y: (mousePos.y - window.innerHeight / 2) * 0.02 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-white/[0.02] uppercase select-none pointer-events-none"
      >
        CONNECT
      </motion.h2>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-500 font-mono tracking-[0.5em] uppercase text-[10px] mb-4">
            Let's build something together
          </p>
          
          
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-10">
            Let's <span className="text-cyan-500">Talk</span>
          </h2>

          <div className="flex flex-col items-center gap-6">
          
            <motion.a
              href="mailto:vfreddielord@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-3 text-xl md:text-4xl font-bold text-white transition-all duration-300"
            >
              <SiGmail className="text-cyan-500 group-hover:rotate-12 transition-transform" />
              <span className="group-hover:text-cyan-400">vfreddielord@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://github.com/vfreddielord" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-all group"
            >
              <SiGithub className="text-3xl group-hover:text-cyan-500 transition-colors" />
              <span className="text-[8px] font-mono uppercase tracking-[0.3em]">View Github Profile</span>
            </motion.a>
          </div>

          
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-zinc-600 text-[9px] uppercase tracking-[0.6em]">
              © AMA College · Cabanatuan City
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[30%] h-[30%] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}