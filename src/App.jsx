import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 1. ADD THIS IMPORT BELOW
import ScrollHandler from './components/ScrollHandler'; 


import Navbar from './components/Navbar';
import HomeSection from './pages/HomeSection';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import ReviewDetails from './pages/ReviewDetails';


export default function App() {
  return (
    <Router>
     
      <ScrollHandler /> 
      
      <div className="bg-black text-white selection:bg-cyan-500 overflow-x-hidden scroll-smooth min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="flex flex-col w-full">
              <HomeSection />
              <div id="about" className="w-full overflow-hidden"><About /></div>
              <div id="skills" className="w-full overflow-hidden"><Skills /></div>
              <div id="projects" className="w-full overflow-hidden"><Projects /></div>
              <div id="reviews" className="w-full overflow-hidden"><Reviews /></div>
              <div id="contact" className="w-full overflow-hidden"><Contact /></div>
            </main>
          } />
          <Route path="/reviews/:id" element={<ReviewDetails />} />
        </Routes>
      </div>
    </Router>
  );
}




