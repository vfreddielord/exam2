

import { motion } from 'framer-motion';


export default function HomeSection() {
  const rows = [1, 2, 3, 4, 5, 6];


  return (
    <section className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center">
     
      
      <div className="absolute inset-0 flex flex-col justify-center space-y-[-1rem] opacity-40 select-none">
        {rows.map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? "0%" : "-50%" }}
            animate={{ x: i % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className={`text-[15vw] font-black whitespace-nowrap leading-none tracking-tighter uppercase ${
              i % 2 === 0 ? "text-white" : "text-cyan-900"
            }`}
          >
            FRONTEND DEVELOPER FRONTEND DEVELOPER FRONTEND DEVELOPER
          </motion.div>
        ))}
      </div>


      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          
          initial={{ 
            opacity: 0, 
            scale: 2,           
            filter: "blur(20px)", 
            rotateY: 45         
          }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            filter: "blur(0px)", 
            rotateY: 0 
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 10,
            filter: "brightness(1.2)"
          }}
          className="relative group"
        >
          
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3 
            }}
            className="absolute inset-0 bg-cyan-500 blur-[120px] rounded-full"
          ></motion.div>
         
          <img
            src="/lol.png.png"
            className="relative w-[90vw] md:w-[45rem] drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-700 object-contain z-20"
            alt="Freddie Lord Viernes"
          />


          
          <motion.div
            initial={{ x: "-150%", skewX: -45 }}
            animate={{ x: "150%" }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent z-30 pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}


