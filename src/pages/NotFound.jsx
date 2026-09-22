import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero.jsx";
import "../styles/pages.css";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Error 404"
        title="Página no encontrada"
        lead="La página que buscas no existe o fue movida."
      />
      <section className="page-section container text-center">
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </section>
    </>
  );
}
