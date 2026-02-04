import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { id: 1, title: "Unsplash Gallery", category: "React / Tailwind", img: "/project1.png" },
  { id: 2, title: "Product Dashboard", category: "UI/UX Design", img: "/project2.png" },
  { id: 3, title: "Task Maker", category: "React / Tailwind", img: "/project3.jpg" }
];

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="relative h-screen w-full bg-black pt-20 px-6 overflow-hidden flex flex-col items-center">
      {/* Background Text */}
      <h2 className="absolute top-10 right-[-5%] text-[12vw] font-black text-white/[0.02] uppercase select-none pointer-events-none">
        WORKS
      </h2>

      <div className="max-w-6xl w-full relative z-10">
        <div className="mb-10 text-center md:text-left">
          <p className="text-cyan-500 font-mono tracking-[0.5em] uppercase text-[10px] mb-2">Featured Projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Selected <span className="text-cyan-500">Cases</span>
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.1 }} 
              onClick={() => setSelectedImg(project.img)}
              className="group relative aspect-video overflow-hidden rounded-xl bg-zinc-900 border border-white/10 cursor-zoom-in"
            >
              
              <motion.img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100 group-hover:scale-110" 
              />
              
             
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <p className="text-cyan-500 font-mono text-[8px] uppercase mb-1">{project.category}</p>
                <h3 className="text-xl font-black text-white uppercase">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-20 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              src={selectedImg} 
              className="max-w-full max-h-full rounded-lg shadow-2xl border border-white/10"
            />
            <button className="absolute top-10 right-10 text-white text-xs font-mono uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition-all">
              Close [×]
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}