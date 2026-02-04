

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const reviews = [
  {
    id: 1,
    name: "Ralph Flores",
    role: "Classmate Buddy",
    comment: "Freddie's attention to detail in frontend development is top-notch. A true professional.",
    rating: 5
  },
  {
    id: 2,
    name: "Herodutos Custodio",
    role: "Classmate Buddy",
    comment: "The UI transition and animations he implemented made our project stand out.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Peralta",
    role: "Supportive GF",
    comment: "Fast learner and very dedicated to mastering React and Tailwind CSS.",
    rating: 4
  }
];


export default function Reviews() {
  return (
    <section className="relative min-h-screen w-full bg-black py-24 px-6 overflow-hidden flex items-center justify-center">
      
    
      <h2 className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase select-none pointer-events-none">
        VOICES
      </h2>


      <div className="relative z-10 max-w-6xl w-full">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-500 font-mono tracking-[0.5em] uppercase text-sm mb-4"
          >
            Testimonials
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter">
            Client <span className="text-cyan-500">Feedback</span>
          </h2>
        </div>


        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="text-cyan-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-lg italic leading-relaxed mb-8">
                  "{rev.comment}"
                </p>
              </div>


              <div>
                <h4 className="text-white font-bold uppercase tracking-wide">{rev.name}</h4>
                <p className="text-cyan-500/60 text-xs font-mono uppercase mb-4">{rev.role}</p>
                
                
                <Link 
                  to={`/reviews/${rev.id}`}
                  className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  Read Full Story
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


