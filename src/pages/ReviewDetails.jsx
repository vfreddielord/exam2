import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ReviewDetails() {
  const { id } = useParams();
  const userReviews = JSON.parse(localStorage.getItem('portfolio_reviews')) || [];
  const review = userReviews.find(r => r.id.toString() === id);

  if (!review) return (
    <div className="h-screen flex flex-col items-center justify-center text-white">
      <p>Review not found.</p>
      <Link to="/reviews" className="text-cyan-500 mt-4 underline italic">Back to Reviews</Link>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen bg-black text-white p-20 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-zinc-900/50 p-10 rounded-3xl border border-white/10 text-center">
        <Link to="/reviews" className="text-cyan-500 text-xs font-mono mb-6 inline-block">← BACK</Link>
        <h1 className="text-5xl font-black uppercase italic mb-4">{review.name}</h1>
        <div className="h-0.5 w-16 bg-cyan-500 mx-auto mb-6"></div>
        <p className="text-xl text-zinc-300 leading-relaxed italic">"{review.comment}"</p>
        <p className="mt-8 text-zinc-600 text-[10px] font-mono uppercase">Submitted on {review.date}</p>
      </div>
    </motion.div>
  );
}