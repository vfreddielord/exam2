import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-6 flex justify-between items-center bg-gradient-to-b from-black to-transparent">
      <div className="text-white font-black text-xl italic tracking-tighter">
        FV<span className="text-cyan-500">.</span>
      </div>
      
      <div className="flex gap-8">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => 
              `text-[10px] font-mono uppercase tracking-[0.3em] transition-all duration-300 ${
                isActive ? 'text-cyan-500 underline underline-offset-8' : 'text-white/40 hover:text-white'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
} 