import { NavLink } from "react-router-dom";
import Logo from "../common/Logo.jsx";
import { IconInstagram, IconFacebook, IconYoutube } from "../common/Icons.jsx";
import "./Footer.css";

// TODO: reemplazar por los datos reales de contacto del negocio.
const CONTACT = {
  email: "esenciasnaturales@gmail.com",
  phoneDisplay: "+52 332 125 6756",
  phoneTel: "+523321256756",
  schedule: "Lunes a viernes, 9:00–18:00",
};

const NAV_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Productos", to: "/productos" },
  { label: "Nosotros", to: "/nosotros" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Logo variant="light" />

        <nav aria-label="Navegación de pie de página">
          <ul className="site-footer__links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__social">
          <a href="#" aria-label="Instagram" className="icon-btn">
            <IconInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="icon-btn">
            <IconFacebook />
          </a>
          <a href="#" aria-label="YouTube" className="icon-btn">
            <IconYoutube />
          </a>
        </div>
      </div>

      <div className="container site-footer__contact">
        <div>
          <strong>Correo</strong>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
        <div>
          <strong>Teléfono</strong>
          <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
        </div>
        <div>
          <strong>Horario</strong>
          <span>{CONTACT.schedule}</span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Esencias Naturales. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}