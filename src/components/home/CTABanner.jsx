import { Link } from "react-router-dom";
import { IconArrowRight, IconSprout, IconShield, IconTruck } from "../common/Icons.jsx";
import "./CTABanner.css";

const BADGES = [
  { icon: IconSprout, label: "Productos naturales y de alta calidad" },
  { icon: IconShield, label: "Compra segura" },
  { icon: IconTruck, label: "Envíos a todo México" },
];

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div className="cta-banner__copy">
          <h2>
            Tu bienestar
            <br />
            natural comienza aquí
          </h2>
          <p>
            Descubre el poder de las Flores de Bach y los Elíxires Aztecas y
            encuentra la esencia que te acompaña.
          </p>
          <Link to="/productos" className="btn btn-primary">
            Ver productos
            <IconArrowRight size={16} />
          </Link>
        </div>

        <ul className="cta-banner__badges">
          {BADGES.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon size={22} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
