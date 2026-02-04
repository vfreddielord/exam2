import { Link } from 'react-router-dom';


export default function Navbar() {
  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/#contact' },
  ];


  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-lg border-b border-white/5">
      
      <Link 
        to="/" 
        className="text-xl font-black tracking-tighter hover:text-cyan-500 transition-colors cursor-pointer"
      >
        FLV.
      </Link>


      <div className="space-x-8 text-xs font-bold uppercase tracking-widest">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="text-zinc-400 hover:text-cyan-500 transition-all duration-300 relative group"
          >
            {link.name}
           
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}


