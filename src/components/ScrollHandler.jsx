import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollHandler() {
  const { hash, pathname } = useLocation();


  useEffect(() => {
    if (hash) {
      
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);


  return null;
}




