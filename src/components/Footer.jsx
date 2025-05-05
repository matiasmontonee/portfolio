import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaFilePdf } from 'react-icons/fa';
import { useLanguage } from '../context/Language'; 

const Footer = () => {
  const { isEnglish } = useLanguage();
  const [cvFile] = useState({
    en: `${process.env.PUBLIC_URL}/EN-MATIAS-MONTONE.pdf`,
    es: `${process.env.PUBLIC_URL}/ES-MATIAS-MONTONE.pdf`
  });
  
  return (
    <footer className='p-2 pl-8 pr-8 lg:p-6 lg:pl-20 lg:pr-20'>

      {/* DESKTOP */}
      <div className='hidden lg:flex justify-between'>
        <div className='btn-container'>
          <a href={cvFile[isEnglish ? 'en' : 'es']} target="_blank" rel='noreferrer' className="border border-black rounded-full font-bold inline-block p-1 pl-3 pr-3 mr-1">
            <FaFilePdf className='inline-block mr-2 mb-1'/>{isEnglish ? 'Download resume' : 'Descargar currículum'}
          </a>
        </div>

        <div className={`text-2xl font-bold ${isEnglish ? 'mr-0' : 'mr-7'}`}>Matías Montone &copy; 2024</div>

        <div className="flex icon-container2">
          <a href="https://wa.me/+5491133501860" target="_blank" rel="noopener noreferrer" className="mr-4 text-4xl" aria-label='WhatsApp de Matías Montone'><FaWhatsapp /></a>
          <a href="https://github.com/matiasmontonee" target="_blank" rel="noopener noreferrer" className="mr-4 text-4xl" aria-label='Github de Matías Montone'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/matiasmontone/" target="_blank" rel="noopener noreferrer" className="mr-4 text-4xl" aria-label='LinkedIn de Matías Montone'><FaLinkedin /></a>
          <a href="mailto:matiasmontonedev@gmail.com" target="_blank" rel="noopener noreferrer" className="text-4xl" aria-label='Email de Matías Montone'><FaEnvelope /></a>
        </div>
      </div>

      {/* MOBILE */}
      <div className='flex lg:hidden flex-col items-center'>
        <div className="text-xl md:text-2xl font-bold mb-3.5">Matías Montone &copy; 2024</div>
        <hr className="w-full border-b-1 border-black"/>

        <div className="flex justify-between w-full mt-5 mb-2">
          <div className="btn-container">
            <a href={cvFile[isEnglish ? 'en' : 'es']} target="_blank" rel='noreferrer' className="border border-black rounded-full font-bold inline-block p-0.5 pl-2 pr-2">
              <FaFilePdf className='inline-block mr-2 mb-1'/>{isEnglish ? 'Download CV' : 'Descargar CV'}
            </a>
          </div>

          <div className="flex icon-container2">
            <a href="https://wa.me/+5491133501860" target="_blank" rel="noopener noreferrer" className="mr-2 text-3xl" aria-label='WhatsApp de Matías Montone'><FaWhatsapp /></a>
            <a href="https://github.com/matiasmontonee" target="_blank" rel="noopener noreferrer" className="mr-2 text-3xl" aria-label='Github de Matías Montone'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/matiasmontone/" target="_blank" rel="noopener noreferrer" className="mr-2 text-3xl" aria-label='LinkedIn de Matías Montone'><FaLinkedin /></a>
            <a href="mailto:matiasmontonedev@gmail.com" target="_blank" rel="noopener noreferrer" className="text-3xl" aria-label='Email de Matías Montone'><FaEnvelope /></a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
