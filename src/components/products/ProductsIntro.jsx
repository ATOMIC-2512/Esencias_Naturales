import CotizarButton from "../common/CotizarButton.jsx";
import "./ProductsIntro.css";

const QUICK_HELP = [
  "Ansiedad",
  "Depresión",
  "Tristeza",
  "Miedo e inseguridad",
  "Insomnio",
  "Estrés",
];

export default function ProductsIntro() {
  return (
    <section className="products-intro">
      <div className="container products-intro__inner">
        <div className="products-intro__visual">
          <div className="products-intro__photo-wrap" aria-hidden="true">
            <div className="products-intro__blob" />
            <img
              src="/images/frasco-esencias.png"
              alt=""
              className="products-intro__photo"
            />
          </div>

          <CotizarButton className="products-intro__cta" />
        </div>

        <div className="products-intro__copy">
          <p className="eyebrow">Nuestro catálogo</p>
          <h1>Productos</h1>
          <p className="products-intro__lead">
            Flores de Bach y Elíxires Aztecas elaborados con cuidado, pensados
            para acompañarte en distintos momentos emocionales.
          </p>

          <p className="products-intro__help-label">¿Con qué puede ayudarte?</p>
          <ul className="products-intro__tags">
            {QUICK_HELP.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}