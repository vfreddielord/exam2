import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTailwindcss, 
  SiJavascript, 
  SiVite, 
  SiFramer, 
  SiGithub 
} from 'react-icons/si';


const skills = [
  { name: 'React.js', level: 'Advanced', icon: <SiReact />, color: 'text-[#61DAFB]' },
  { name: 'Tailwind CSS', level: 'Intermediate', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
  { name: 'JavaScript', level: 'Advanced', icon: <SiJavascript />, color: 'text-[#F7DF1E]' },
  { name: 'Vite', level: 'Intermediate', icon: <SiVite />, color: 'text-[#646CFF]' },
  { name: 'Framer Motion', level: 'Intermediate', icon: <SiFramer />, color: 'text-[#0055FF]' },
  { name: 'GitHub', level: 'Advanced', icon: <SiGithub />, color: 'text-white' },
];


export default function Skills() {
  return (
    <section className="relative min-h-screen w-full bg-black py-24 px-6 overflow-hidden flex flex-col items-center justify-center">
      
      
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-white/[0.02] uppercase select-none pointer-events-none">
        SKILLS
      </h2>


      <div className="relative z-10 max-w-6xl w-full">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-500 font-mono tracking-[0.5em] uppercase text-sm mb-4"
          >
            Technical Stack
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter">
            My <span className="text-cyan-500">Arsenal</span>
          </h2>
        </div>


        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-zinc-900/30 backdrop-blur-sm border border-white/10 p-10 rounded-3xl overflow-hidden"
            >
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col items-center">
           
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className={`text-6xl mb-6 transition-all duration-500 grayscale group-hover:grayscale-0 ${skill.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                >
                  {skill.icon}
                </motion.div>


                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  {skill.name}
                </h3>
                
              
                <div className="w-full bg-white/5 h-1.5 rounded-full mt-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level === 'Advanced' ? '90%' : '65%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
                  />
                </div>
                
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-500/60 mt-4">
                  {skill.level}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




