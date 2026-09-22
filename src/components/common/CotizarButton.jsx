import { useState } from "react";
import { IconPhone, IconWhatsapp, IconClose } from "./Icons.jsx";
import "./CotizarButton.css";

// TODO: reemplazar por los datos reales de contacto del negocio.
const PHONE_DISPLAY = "+52 332 125 6756";
const PHONE_TEL = "+523321256756";
const WHATSAPP_NUMBER = "+523321256756";
const WHATSAPP_MESSAGE =
  "Hola, me gustaría cotizar una combinación personalizada de esencias.";

export default function CotizarButton({
  label = "Contactar para cotizar",
  className = "",
}) {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  function handleOverlayKeyDown(e) {
    if (e.key === "Escape") close();
  }

  return (
    <>
      <button
        type="button"
        className={`btn btn-primary cotizar-btn ${className}`}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>

      {open && (
        <div
          className="cotizar-modal__overlay"
          role="presentation"
          onClick={close}
          onKeyDown={handleOverlayKeyDown}
        >
          <div
            className="cotizar-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cotizar-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cotizar-modal__close"
              onClick={close}
              aria-label="Cerrar"
            >
              <IconClose size={20} />
            </button>

            <h3 id="cotizar-modal-title">¿Cómo prefieres contactarnos?</h3>
            <p>
              Elige una opción y con gusto te orientamos para armar tu
              combinación de esencias.
            </p>

            <div className="cotizar-modal__options">
              <a
                href={`tel:${PHONE_TEL}`}
                className="btn btn-primary cotizar-modal__option"
              >
                <IconPhone size={18} />
                Llamar ahora
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  WHATSAPP_MESSAGE
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp cotizar-modal__option"
              >
                <IconWhatsapp size={18} />
                Abrir WhatsApp
              </a>
            </div>

            <p className="cotizar-modal__phone">{PHONE_DISPLAY}</p>
          </div>
        </div>
      )}
    </>
  );
}