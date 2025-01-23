import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Acerca de</h2>
        <p className="text-lg text-gray-700 mb-6">
          Mi nombre es Enzo, soy estudiante de Analista en Sistemas.
          Tengo experiencia en Testing QA y Desarrollador en JAVA.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mis habilidades incluyen:</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Java</li>
          <li>Spring Boot</li>
          <li>Microservicios</li>
          <li>MySQL</li>
          <li>Test QA Manual</li>
          <li>Front-end React/NextJs</li>
        </ul>
        <p className="text-lg text-gray-700 mb-6">
          Actualmente, estoy en busca de nuevas oportunidades que me permitan seguir creciendo como profesional en el área de desarrollo de software y QA, donde pueda aplicar mis conocimientos y habilidades en proyectos desafiantes y dinámicos.
        </p>
        <Link
          href="https://www.linkedin.com/in/enzobertolusso/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mt-4 text-blue-900 hover:text-indigo-800 transition-colors duration-300"
        >
          <FaLinkedin className="text-2xl mr-2" />
          Conéctate conmigo en LinkedIn
        </Link>
      </div>
    </div>
  );
}

export default About;
