import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// No renderiza nada: solo escucha los cambios de ruta y lleva el scroll
// hasta arriba de la página cada vez que se navega a una nueva sección.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}