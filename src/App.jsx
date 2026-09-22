import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Productos from "./pages/Productos.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}