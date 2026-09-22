import { Link } from "react-router-dom";
import { IconArrowRight, IconLeaf, IconEye, IconSprout, IconShield } from "../common/Icons.jsx";
import "./SymptomsGrid.css";

const PILLARS = [
  {
    icon: IconLeaf,
    title: "Mente y emociones",
    text: "Calma, claridad y estabilidad en momentos de ansiedad, tristeza o miedo.",
    tone: "forest",
  },
  {
    icon: IconShield,
    title: "Descanso y energía",
    text: "Apoyo para dormir mejor y recuperar la energía cuando te sientes agotado.",
    tone: "plum",
  },
  {
    icon: IconEye,
    title: "Relaciones y confianza",
    text: "Herramientas para fortalecer tu autoestima y comunicarte con más empatía.",
    tone: "plum",
  },
  {
    icon: IconSprout,
    title: "Enfoque y transiciones",
    text: "Acompañamiento para mantenerte en calma frente a cambios y falta de concentración.",
    tone: "forest",
  },
];

export default function SymptomsGrid() {
  return (
    <section className="symptoms">
      <div className="container">
        <div className="symptoms__header">
          <p className="eyebrow">Apoyo emocional natural</p>
          <h2>Te ayudamos a equilibrar lo que sientes</h2>
          <p className="symptoms__lead">
            Nuestras esencias florales pueden ser un gran apoyo en momentos de
            cambio, estrés o desequilibrio emocional. Cada persona vive sus
            propios desafíos, y en nuestro catálogo puedes conocer a fondo
            cómo cada esencia puede acompañarte en el tuyo.
          </p>
        </div>

        <ul className="symptoms__grid">
          {PILLARS.map(({ icon: Icon, title, text, tone }) => (
            <li className="symptom-card" key={title}>
              <span className={`symptom-card__icon symptom-card__icon--${tone}`}>
                <Icon size={20} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="symptoms__cta">
          <Link to="/productos" className="btn btn-primary">
            Descubre cómo podemos ayudarte
            <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}