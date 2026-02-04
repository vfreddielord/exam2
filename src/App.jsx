import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-black text-white selection:bg-cyan-500 min-h-screen overflow-hidden">
      <motion.div 
        key={`bar-${location.pathname}`}
        initial={{ width: "0%", opacity: 1 }}
        animate={{ width: "100%", opacity: 0 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className="fixed top-0 left-0 h-[2px] bg-cyan-500 z-[200] pointer-events-none"
      />

      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}