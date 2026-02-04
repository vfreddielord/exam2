import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const projects = [
  { id: 1, title: "Unsplash Gallery", category: "React / Tailwind", img: "/project1.png" },
  { id: 2, title: "Product Dashboard", category: "UI/UX Design", img: "/project2.png" },
  { id: 3, title: "Task Maker", category: "React / Tailwind", img: "/project3.jpg" }
];


export default function Projects() {
  return (
    <section className="relative min-h-screen w-full bg-black py-24 px-6 overflow-hidden">
      <h2 className="absolute top-20 right-[-10%] text-[20vw] font-black text-white/[0.02] uppercase select-none pointer-events-none">WORKS</h2>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <p className="text-cyan-500 font-mono tracking-[0.5em] uppercase text-sm mb-4">Featured Projects</p>
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter">
            Selected <span className="text-cyan-500">Cases</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-white/10">
              <img src={project.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <p className="text-cyan-500 font-mono text-xs uppercase mb-2">{project.category}</p>
                <h3 className="text-3xl font-black text-white uppercase mb-4">{project.title}</h3>
                <Link to={`/reviews/${project.id}`} className="inline-block w-fit text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 hover:text-cyan-500 hover:border-cyan-500 transition-all">
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




