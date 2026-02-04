

import { motion } from 'framer-motion';


export default function About() {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center py-20">
      
     
      <div className="absolute inset-0 z-0 flex gap-4 p-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
       
        <div className="flex-1 h-full bg-[url('/fred1.png')] bg-cover bg-center rounded-2xl hidden md:block"></div>
        <div className="flex-[1.5] h-full bg-[url('/fred2.png')] bg-cover bg-center rounded-2xl"></div>
        <div className="flex-1 h-full bg-[url('/fred3.png')] bg-cover bg-center rounded-2xl hidden md:block"></div>
      </div>


      
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black/40"></div>


      <div className="relative z-20 max-w-5xl px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-500 font-mono tracking-[0.5em] uppercase mb-4 text-sm">
            AMA College Student
          </p>
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 italic">
            About <span className="text-cyan-500">Me</span>
          </h2>
          
          <div className="bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl">
              I am <span className="text-white font-bold">Freddie Lord Viernes</span>, currently pursuing 
              my studies at <span className="text-cyan-500 font-bold">AMA College</span>. I am an Online Chat Specialist 
              passionate about Frontend Development.
            </p>
            <p className="text-slate-400 mt-6 text-md md:text-lg italic">
              "Turning lines of code into visual experiences is what drives me."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


