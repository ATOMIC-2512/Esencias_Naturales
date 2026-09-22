import { IconLeaf, IconEye } from "../common/Icons.jsx";
import "./MissionVision.css";

export default function MissionVision() {
  return (
    <section className="mv">
      <div className="container mv__inner">
        <article className="mv__item">
          <span className="mv__icon mv__icon--forest">
            <IconLeaf />
          </span>
          <h2>Nuestra Misión</h2>
          <p>
            Brindar herramientas naturales para el equilibrio emocional y el
            bienestar integral, a través de la calidad y pureza de nuestras
            esencias florales.
          </p>
        </article>

        <div className="mv__divider" aria-hidden="true" />

        <article className="mv__item">
          <span className="mv__icon mv__icon--plum">
            <IconEye />
          </span>
          <h2>Nuestra Visión</h2>
          <p>
            Ser un referente en terapias florales en México, llevando el poder
            de la naturaleza a más personas y contribuyendo a una vida más
            consciente y en armonía.
          </p>
        </article>
      </div>
    </section>
  );
}
