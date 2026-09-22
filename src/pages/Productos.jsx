import ProductsIntro from "../components/products/ProductsIntro.jsx";
import "../styles/pages.css";

const SYMPTOMS = [
  {
    title: "Ansiedad y estrés",
    text: "Si sientes que la mente no para, que el cuerpo está en alerta constante o que cualquier imprevisto te desborda, esta es una de las áreas donde más acompañamos. Buscamos ayudarte a bajar la intensidad de esa tensión y recuperar la calma en el día a día.",
  },
  {
    title: "Miedo e inseguridad",
    text: "Cuando dudas de ti antes de decidir, evitas situaciones por temor a fallar o sientes que la inseguridad te frena, trabajamos contigo para fortalecer la confianza y enfrentar esos momentos con más firmeza.",
  },
  {
    title: "Tristeza y depresión",
    text: "Si te cuesta encontrarle sentido a las cosas, sientes el ánimo apagado por temporadas largas o simplemente no tienes ganas de nada, este es un espacio donde muchas personas se identifican. El objetivo es acompañarte a recuperar la motivación y la alegría, paso a paso.",
  },
  {
    title: "Dificultades en relaciones",
    text: "Discusiones que se repiten, sentir que no te entienden o que cuesta expresar lo que sientes — si esto te resulta familiar, trabajamos para mejorar la comunicación y la empatía con quienes te rodean.",
  },
  {
    title: "Problemas de sueño",
    text: "Despertar varias veces en la noche, dar vueltas en la cama sin poder relajarte o levantarte tan cansado como te acostaste son señales comunes. Ayudamos a favorecer un descanso más profundo y reparador.",
  },
  {
    title: "Falta de concentración",
    text: "Si empiezas tareas y las dejas a medias, te cuesta mantener el foco o sientes la mente dispersa todo el día, trabajamos en ayudarte a recuperar claridad y enfoque mental.",
  },
  {
    title: "Cambios emocionales",
    text: "Duelos, mudanzas, cambios de etapa o crisis personales pueden desestabilizarte emocionalmente. Brindamos apoyo para transitar esos procesos con mayor estabilidad y menos desgaste.",
  },
  {
    title: "Cansancio emocional",
    text: "Sentir que ya no tienes energía ni para lo cotidiano, aunque descanses, es una señal que tomamos en serio. Buscamos ayudarte a renovar tu energía interior y recuperar el bienestar.",
  },
];

export default function Productos() {
  return (
    <>
      <ProductsIntro />

      <section className="page-section container">
        <h2 className="section-title">¿Qué puedes trabajar con nuestras esencias?</h2>
        <p className="prose">
          Cada persona vive sus propios desafíos, y cada esencia puede ser un
          apoyo distinto en su camino. Estas son algunas de las situaciones
          emocionales con las que trabajamos — quizás te sientas identificado
          con alguna de ellas:
        </p>

        <ul className="card-grid mt-lg">
          {SYMPTOMS.map((item) => (
            <li className="simple-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="diagnosis-note mt-lg">
          <h3>Una combinación pensada solo para ti</h3>
          <p>
            Ningún frasco está diseñado para "cubrir todo". Cada persona
            atraviesa sus emociones de forma distinta, por eso el primer paso
            siempre es un diagnóstico personalizado: conversamos contigo sobre
            lo que estás viviendo y, a partir de ahí, armamos una combinación
            de esencias exclusiva para tu caso — no un producto genérico.
          </p>
        </div>
      </section>
    </>
  );
}