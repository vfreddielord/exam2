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
    <section className="relative h-screen w-full bg-black pt-16 pb-8 px-6 overflow-hidden flex flex-col items-center justify-center">
      
      
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] uppercase select-none pointer-events-none">
        SKILLS
      </h2>

      <div className="relative z-10 max-w-5xl w-full">
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-500 font-mono tracking-[0.5em] uppercase text-[10px] mb-2"
          >
            Technical Stack
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            My <span className="text-cyan-500">Arsenal</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-zinc-900/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl overflow-hidden transition-colors duration-500 hover:border-cyan-500/50"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
            
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-cyan-500/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`text-4xl mb-3 transition-all grayscale group-hover:grayscale-0 ${skill.color}`}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">
                  {skill.name}
                </h3>
                
                <div className="w-full bg-white/5 h-1 rounded-full mt-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level === 'Advanced' ? '90%' : '65%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"
                  />
                </div>
                
                <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-cyan-500/60 mt-2">
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