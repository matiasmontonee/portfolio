import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaFilePdf } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/Language'; 
import ProfileImage from '../assets/imgs/profile.png'; 

const AboutMeView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, 
  });
  const { isEnglish } = useLanguage();
  const [cvFile] = useState({
    en: `${process.env.PUBLIC_URL}/EN-MATIAS-MONTONE.pdf`,
    es: `${process.env.PUBLIC_URL}/ES-MATIAS-MONTONE.pdf`
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section id="about" className="bg-white text-black flex flex-col lg:flex-row-reverse lg:h-screen">
      <div ref={ref} className={`w-full lg:w-1/2 lg:pt-0 pt-8 flex justify-center items-center profile-image-container ${isVisible ? 'visible' : ''}`}>
        <img src={ProfileImage} alt="Profile" className="h-96 w-96 pulse" />
      </div>
      <div className={`w-full lg:w-1/2 p-8 flex justify-center items-center about-container ${isVisible ? 'visible' : ''}`}>
        <div>
          <div className="flex items-center">
            <FaArrowRight size={36} className="mr-2 arrow-right lg:ml-12" />
            <h2 className="text-3xl sm:text-5xl font-bold">{isEnglish ? 'About Me' : 'Sobre Mí'}</h2>
          </div>
          <p className="text-lg mt-2 lg:ml-12">{isEnglish ? 'Hello! My name is Matías Montone, I am a 22-year-old Full Stack Web Developer.' : '¡Hola! Mi nombre es Matías Montone, soy un Desarrollador Web Full Stack de 22 años.'}</p>
          <p className="text-lg mt-2 lg:ml-12">{isEnglish ? 'I live in Buenos Aires, Argentina, and I am constantly developing projects to keep up to date with technology updates. I always seek to improve day by day and grow as a professional, in order to be able to work both in a team or as a freelancer.' : 'Vivo en Buenos Aires, Argentina y estoy constantemente desarrollando proyectos para mantenerme al día con las actualizaciones tecnológicas. Siempre busco mejorar día a día y crecer como profesional, para poder trabajar tanto en equipo como freelance.'}</p>
          <p className="text-lg mt-2 lg:ml-12">{isEnglish ? 'I started studying web design and development in 2021 at the Da Vinci School, where I learned most of my knowledge, including web development, web design, digital marketing and IOT.' : 'Comencé a estudiar diseño y desarrollo web en 2021 en la Escuela Da Vinci, donde aprendí la mayor parte de mis conocimientos, incluyendo desarrollo web, diseño web, marketing digital e IOT.'}</p>
          <div className="btn-container mt-4 lg:ml-12 flex flex-col md:flex-row">
            <a href={cvFile[isEnglish ? 'en' : 'es']} target="_blank" rel='noreferrer' className="border border-black rounded-full font-bold py-2 text-center inline-block w-full md:mb-0 mb-2 md:mr-2">
              <FaFilePdf className="inline-block mr-2 mb-1 lg:mb-0.5" />{isEnglish ? 'Download resume' : 'Descargar currículum'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeView;
