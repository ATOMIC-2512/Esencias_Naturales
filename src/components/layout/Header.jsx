import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../common/Logo.jsx";
import { IconMenu, IconClose } from "../common/Icons.jsx";
import "./Header.css";

const NAV_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Productos", to: "/productos" },
  { label: "Nosotros", to: "/nosotros" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo variant="light" />

        <nav className="site-nav site-nav--desktop" aria-label="Navegación principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => (isActive ? "is-active" : undefined)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <button
            className="icon-btn site-nav__toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="site-nav--mobile" aria-label="Navegación móvil">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "is-active" : undefined)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}