import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
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
      className="relative min-h-screen w-full bg-black py-24 px-6 overflow-hidden flex flex-col items-center justify-center"
    >
      
      
      <motion.h2 
        animate={{ 
          x: (mousePos.x - window.innerWidth / 2) * 0.03,
          y: (mousePos.y - window.innerHeight / 2) * 0.03 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-black text-white/[0.02] uppercase select-none pointer-events-none"
      >
        CONNECT
      </motion.h2>


      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-500 font-mono tracking-[0.6em] uppercase text-xs mb-8">
            Let's build something together
          </p>
          
          <h2 className="text-7xl md:text-[10rem] font-black text-white uppercase italic tracking-tighter leading-none mb-16">
            Let's <span className="text-cyan-500">Talk</span>
          </h2>


          
          <div className="flex flex-col items-center gap-10">
            <motion.a
              href="mailto:vfreddielord@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-4 text-2xl md:text-6xl font-bold text-white transition-all duration-300"
            >
              <SiGmail className="text-cyan-500 group-hover:rotate-12 transition-transform" />
              <span className="group-hover:text-cyan-400">vfreddielord@gmail.com</span>
            </motion.a>


            
            <motion.a
              href="https://github.com/vfreddielord" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10 }}
              className="flex flex-col items-center gap-3 text-zinc-500 hover:text-white transition-all group"
            >
              <SiGithub className="text-5xl group-hover:text-cyan-500 transition-colors" />
              <span className="text-xs font-mono uppercase tracking-[0.4em]">View Github Profile</span>
            </motion.a>
          </div>


          
          <div className="mt-32 pt-12 border-t border-white/5">
            <div className="text-zinc-900 font-black text-8xl md:text-[12rem] select-none pointer-events-none leading-none opacity-40 mb-8">
              FV<span className="text-cyan-900">2026</span>
            </div>
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.8em]">
              © AMA College · Cabanatuan City
            </p>
          </div>
        </motion.div>
      </div>


  
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}




