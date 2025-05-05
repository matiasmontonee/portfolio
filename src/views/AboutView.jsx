import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaFilePdf } from 'react-icons/fa';
import { useLanguage } from '../context/Language'; 
import ProfileImage from '../assets/imgs/profile.png'; 

const AboutView = () => {
  const { isEnglish } = useLanguage();
  const [cvFile] = useState({
    en: `${process.env.PUBLIC_URL}/EN-MATIAS-MONTONE.pdf`,
    es: `${process.env.PUBLIC_URL}/ES-MATIAS-MONTONE.pdf`
  });

  useEffect(() => {
    const handleScroll = () => {
      const skillElements = document.querySelectorAll('.about');
      skillElements.forEach((skill) => {
        const rect = skill.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const visiblePercent = (windowHeight - rect.top) / windowHeight;
        if (visiblePercent >= 0.3) {
          skill.classList.add('in-viewport');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="bg-white text-black flex flex-col lg:flex-row lg:h-screen">
      <div className='w-full lg:w-1/2 p-8 flex justify-center items-center about-container about'>
        <div>
          <div className="flex items-center">
            <FaArrowRight size={36} className="mr-2 arrow-right lg:ml-12" />
            <h2 className="text-3xl sm:text-5xl font-bold">{isEnglish ? 'About Me' : 'Sobre Mí'}</h2>
          </div>
          <p className="text-lg mt-2 lg:ml-12">{isEnglish ? 'Hello! My name is Matías Montone, I am a 23-year-old Full Stack Web Developer.' : '¡Hola! Mi nombre es Matías Montone, soy un Desarrollador Web Full Stack de 23 años.'}</p>
          <p className="text-lg mt-2 lg:ml-12">{isEnglish ? 'I live in Buenos Aires, Argentina, and I am constantly developing projects to keep up to date with technology updates. I always seek to improve day by day and grow as a professional, in order to be able to work both in a team or as a freelancer.' : 'Vivo en Buenos Aires, Argentina y estoy constantemente desarrollando proyectos para mantenerme al día con las actualizaciones tecnológicas. Siempre busco mejorar día a día y crecer como profesional, para poder trabajar tanto en equipo como de manera independiente.'}</p>
          <p className="text-lg mt-2 lg:ml-12">{isEnglish ? 'I started studying Web Design and Development in 2021 at the Da Vinci School, where I learned most of my knowledge, including Web Development, Web Design, Digital Marketing and IOT.' : 'Comencé a estudiar Diseño y Desarrollo Web en 2021 en la Escuela Da Vinci, donde aprendí la mayor parte de mis conocimientos, incluyendo Desarrollo Web, Diseño Web, Marketing Digital e IOT.'}</p>
          <div className="btn-container mt-4 lg:ml-12 flex flex-col md:flex-row">
            <a href={cvFile[isEnglish ? 'en' : 'es']} target="_blank" rel='noreferrer' className="border border-black rounded-full font-bold py-2 text-center inline-block w-full md:mb-0 mb-2 md:mr-2">
              <FaFilePdf className="inline-block mr-2 mb-1 lg:mb-0.5" />{isEnglish ? 'Download resume' : 'Descargar currículum'}
            </a>
          </div>
        </div>
      </div>

      <div className='w-full lg:w-1/2 lg:pb-0 pb-8 flex justify-center items-center profile-image-container about'>
        <img src={ProfileImage} alt="Profile" className="h-96 w-96 pulse" />
      </div>
    </section>
  );
};

export default AboutView;