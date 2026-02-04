import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const projectData = [
  { id: 1, title: "Unsplash Gallery", context: "A professional image gallery using Unsplash API. Features high-performance loading and a clean grid UI.", img: "/project1.png" },
  { id: 2, title: "Chat Specialist Dashboard", context: "A real-time monitoring dashboard designed for Online Chat Specialists to track metrics.", img: "/project2.png" },
  { id: 3, title: "Task Maker", context: "A minimalist task management app built with React, focusing on user productivity and smooth UX.", img: "/project3.jpg" }
];


export default function ReviewDetails() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));


  if (!project) return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <p>Project not found.</p>
      <Link to="/#projects" className="text-cyan-500 mt-4 underline italic">Return to Projects</Link>
    </div>
  );


  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-black text-white p-10 md:p-24"
    >
    
      <Link 
        to="/#projects" 
        className="group inline-flex items-center gap-2 text-cyan-400 font-mono text-sm uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-cyan-500 hover:text-black transition-all"
      >
        <span className="transition-transform group-hover:-translate-x-2">←</span>
        <span>Back To Projects</span>
      </Link>


      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full rounded-2xl border border-white/10 shadow-2xl" 
          />
        </motion.div>


        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-6 leading-none tracking-tighter italic">
            {project.title}
          </h1>
          <div className="h-1 w-20 bg-cyan-500 mb-8"></div>
          <p className="text-slate-400 text-xl leading-relaxed">
            {project.context}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}




