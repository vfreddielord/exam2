import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import HomeSection from './pages/HomeSection';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeSection />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);