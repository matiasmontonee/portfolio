import React, { useEffect } from 'react';
import { FaArrowRight, FaEnvelope, FaLinkedin, FaRocket, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/Language';
import Img from '../assets/imgs/programador.png'

const ContactView = () => {
  const { isEnglish } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const skillElements = document.querySelectorAll('.contact');
      skillElements.forEach((skill) => {
        const rect = skill.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const visiblePercent = (windowHeight - rect.top) / windowHeight;
        if (visiblePercent >= 0.2) {
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
    <section id="contact" className="bg-black flex flex-col lg:flex-row lg:p-20 p-8">
      <div className='lg:w-1/2 contact'>
        <div className="flex items-center">
          <FaArrowRight size={36} className="mr-2 arrow-right" />
          <h2 className="text-3xl sm:text-5xl font-bold text-white">{isEnglish ? 'Contact' : 'Contacto'}</h2>
        </div>
        <p className="text-md sm:text-xl text-white mt-4 flex items-center">
          {isEnglish ? 'Contact me to start your project!' : '¡Contactame para comenzar tu proyecto!'}<FaRocket className='text-blue-500 ml-2'/>
        </p>

        <div className='btn-container mt-8'>
          <a href="mailto:matiasmontonedev@gmail.com" target="_blank" rel="noopener noreferrer" className="border border-white text-white rounded-full font-bold py-2 text-center inline-block w-full lg:w-3/4">
            <FaEnvelope className="inline-block mr-2 mb-1 lg:mb-0.5" />matiasmontonedev@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/matiasmontone/" target="_blank" rel="noopener noreferrer" className="border border-white text-white rounded-full font-bold py-2 text-center inline-block w-full lg:w-3/4 my-6">
            <FaLinkedin className="inline-block mr-2 mb-1 lg:mb-0.5" />Matías Montone
          </a>
          <a href="https://wa.me/+5491133501860" target="_blank" rel="noopener noreferrer" className="border border-white text-white rounded-full font-bold py-2 text-center inline-block w-full lg:w-3/4">
            <FaWhatsapp className="inline-block mr-2 mb-1 lg:mb-0.5" />+54 9 1133501860
          </a>
        </div>
      </div>

      <div className='lg:w-1/2 flex justify-center items-center mt-8 contact'>
        <img src={Img} alt="Banner programador" className="h-64 w-96 lg:w-128 pulse" />
      </div>
    </section>
  );
};

export default ContactView;
