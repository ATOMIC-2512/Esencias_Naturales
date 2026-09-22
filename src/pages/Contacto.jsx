import PageHero from "../components/common/PageHero.jsx";
import "../styles/pages.css";

export default function Contacto() {
  function handleSubmit(e) {
    e.preventDefault();
    // Punto de integración: conectar con un servicio de envío de correo
    // (p. ej. Formspree, un endpoint propio, etc.) al desplegar en producción.
    alert("Gracias por escribirnos. Te responderemos pronto.");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Hablemos"
        title="Contacto"
        lead="¿Tienes dudas sobre qué esencia elegir? Escríbenos, con gusto te orientamos."
      />
      <section className="page-section container contact-grid">
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" required />
          </div>
          <button type="submit" className="btn btn-primary form-submit">
            Enviar mensaje
          </button>
        </form>

        <ul className="contact-info">
          <li>
            <div>
              <strong>Correo</strong>
              hola@esenciasnaturales.mx
            </div>
          </li>
          <li>
            <div>
              <strong>Teléfono</strong>
              +52 55 0000 0000
            </div>
          </li>
          <li>
            <div>
              <strong>Horario</strong>
              Lunes a viernes, 9:00–18:00
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
