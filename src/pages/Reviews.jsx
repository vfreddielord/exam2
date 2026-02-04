import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


const staticReviews = [
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
  const [userReviews, setUserReviews] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');


  useEffect(() => {
    const savedReviews = localStorage.getItem('portfolio_reviews');
    if (savedReviews) {
      setUserReviews(JSON.parse(savedReviews));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview = {
      id: Date.now(),
      name,
      comment,
      role: "Guest Reviewer",
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [newReview, ...userReviews];
    setUserReviews(updatedReviews);
    
    localStorage.setItem('portfolio_reviews', JSON.stringify(updatedReviews));

    setName('');
    setComment('');
  };

 
  const deleteReview = (id) => {
    const updated = userReviews.filter(rev => rev.id !== id);
    setUserReviews(updated);
    localStorage.setItem('portfolio_reviews', JSON.stringify(updated));
  };

  return (
    <section className="relative min-h-screen w-full bg-black py-24 px-6 overflow-hidden flex flex-col items-center">
      
      
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

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {staticReviews.map((rev, index) => (
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

        <hr className="border-white/5 mb-20" />

        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-black text-white uppercase italic mb-8 text-center">
            Leave a <span className="text-cyan-500">Review</span>
          </h3>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 mb-16"
          >
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="YOUR NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black/50 border border-white/10 p-4 rounded-xl text-white focus:border-cyan-500 outline-none transition-all font-mono uppercase text-sm"
              />
              <textarea
                placeholder="YOUR THOUGHTS..."
                rows="3"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="bg-black/50 border border-white/10 p-4 rounded-xl text-white focus:border-cyan-500 outline-none transition-all font-mono uppercase text-sm"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-cyan-500 text-black font-black uppercase py-4 rounded-xl tracking-widest hover:bg-cyan-400 transition-colors"
              >
                Submit Feedback
              </motion.button>
            </div>
          </motion.form>

          
          <div className="space-y-6">
            <AnimatePresence>
              {userReviews.map((rev) => (
                <motion.div
                  key={rev.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-zinc-900/30 p-6 rounded-2xl border-l-4 border-cyan-500 relative"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-white font-black uppercase tracking-tight">{rev.name}</h4>
                      <span className="text-zinc-600 text-[10px] font-mono">{rev.date}</span>
                    </div>
                    
                  
                    <button
                      onClick={() => deleteReview(rev.id)}
                      className="opacity-0 group-hover:opacity-100 transition-all text-red-500 text-[10px] font-black uppercase border border-red-500/20 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="text-zinc-400 text-sm italic">"{rev.comment}"</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


