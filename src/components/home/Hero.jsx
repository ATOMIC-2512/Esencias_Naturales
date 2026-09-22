import { Link } from "react-router-dom";
import { IconArrowRight } from "../common/Icons.jsx";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Flores de Bach · Elíxires Aztecas</p>
          <h1>
            Equilibrio natural
            <br />
            para tu bienestar
          </h1>
          <p className="hero__lead">
            En Esencias Naturales ofrecemos Flores de Bach y Elíxires Aztecas, dos
            sistemas florales que trabajan en armonía con tus emociones,
            ayudándote a recuperar el equilibrio y reconectar con tu bienestar.
          </p>
          <Link to="/productos" className="btn btn-primary">
            Conoce nuestros productos
            <IconArrowRight size={16} />
          </Link>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__blob" />
          <img
            src="/images/frasco-esencias.png"
            alt=""
            className="hero__bottle-photo"
          />
          <p className="hero__scribble">
            Naturaleza
            <br />
            en equilibrio
          </p>
        </div>
      </div>
    </section>
  );
}