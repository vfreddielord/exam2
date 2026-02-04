import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <section className="relative h-screen w-full bg-black pt-20 pb-6 px-6 overflow-hidden flex flex-col items-center">
      {/* Background Text with floating animation */}
      <motion.h2 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 0.02 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-white uppercase select-none pointer-events-none"
      >
        VOICES
      </motion.h2>

      <div className="relative z-10 max-w-2xl w-full flex flex-col h-full overflow-hidden">
        <div className="text-center mb-6">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-cyan-500 font-mono uppercase text-[10px] mb-2"
          >
            Community
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            User <span className="text-cyan-500">Reviews</span>
          </h2>
        </div>

        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-zinc-900/40 backdrop-blur-xl p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors duration-500 mb-6 shrink-0 shadow-2xl"
        >
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="YOUR NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black/40 border border-white/5 p-3 rounded-lg text-white focus:border-cyan-500/50 outline-none transition-all font-mono uppercase text-xs"
            />
            <textarea
              placeholder="YOUR THOUGHTS..."
              rows="2"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="bg-black/40 border border-white/5 p-3 rounded-lg text-white focus:border-cyan-500/50 outline-none transition-all font-mono uppercase text-xs resize-none"
            ></textarea>
            
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#22d3ee" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-cyan-500 text-black font-black uppercase py-3 rounded-lg text-xs tracking-widest transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              Post Review
            </motion.button>
          </div>
        </motion.form>

       
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3 pb-10">
          <AnimatePresence mode='popLayout'>
            {userReviews.length > 0 ? (
              userReviews.map((rev) => (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  whileHover={{ x: 5 }}
                  className="group bg-zinc-900/20 backdrop-blur-sm p-4 rounded-xl border-l-2 border-cyan-500/50 hover:border-cyan-500 flex justify-between items-start transition-all duration-300"
                >
                  <div className="flex-1 mr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white text-xs font-black uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{rev.name}</h4>
                      <span className="text-zinc-600 text-[8px] font-mono">{rev.date}</span>
                    </div>
                    <p className="text-zinc-400 text-xs italic line-clamp-2 leading-relaxed">"{rev.comment}"</p>
                  </div>
                  
                  <div className="flex flex-col gap-2 items-end">
                    <button
                      onClick={() => deleteReview(rev.id)}
                      className="opacity-0 group-hover:opacity-100 transition-all text-red-500 text-[8px] font-black uppercase border border-red-500/20 px-2 py-0.5 rounded-full hover:bg-red-500 hover:text-white"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/reviews/${rev.id}`}
                      className="text-[8px] font-black uppercase tracking-widest text-cyan-500 border border-cyan-500/20 px-2 py-0.5 rounded-full hover:bg-cyan-500 hover:text-black transition-all"
                    >
                      Details
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="text-center text-zinc-600 text-xs font-mono uppercase tracking-widest mt-10 italic"
              >
                No reviews yet. Be the first!
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}