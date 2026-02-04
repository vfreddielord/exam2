import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center p-4 md:p-10">
      
     
      <div className="absolute inset-y-16 inset-x-6 md:inset-y-24 md:inset-x-20 z-0 flex gap-4 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="flex-1 h-full bg-[url('/fred1.png')] bg-cover bg-center rounded-3xl hidden md:block border border-white/5"></div>
        <div className="flex-[1.5] h-full bg-[url('/fred2.png')] bg-cover bg-center rounded-3xl border border-white/5"></div>
        <div className="flex-1 h-full bg-[url('/fred3.png')] bg-cover bg-center rounded-3xl hidden md:block border border-white/5"></div>
      </div>

     
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black/40"></div>

      <div className="relative z-20 max-w-4xl px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-500 font-mono tracking-[0.5em] uppercase mb-4 text-[10px]">
            AMA College Student
          </p>
          
       
         <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-5 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
  About <span className="text-cyan-500">Me</span>
</h2>
          
          <div className="bg-zinc-900/40 backdrop-blur-xl p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
              I am <span className="text-white font-bold uppercase tracking-tight">Freddie Lord Viernes</span>, 
              currently pursuing my studies at <span className="text-cyan-500 font-bold uppercase tracking-tight">AMA College</span>. 
              I am an Online Chat Specialist passionate about Frontend Development.
            </p>
            
            <p className="text-zinc-500 mt-6 text-xs md:text-sm font-mono uppercase tracking-widest italic opacity-70">
              "Turning lines of code into visual experiences."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}