import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo({ variant = "light" }) {
  return (
    <Link
      to="/"
      className={`logo logo--${variant}`}
      aria-label="Esencias Naturales, ir al inicio"
    >
      <span className="logo__mark" role="img" aria-hidden="true" />
      <span className="logo__text">
        <span className="logo__name">Esencias Naturales</span>
        <span className="logo__tagline">Equilibrio en cada esencia</span>
      </span>
    </Link>
  );
}