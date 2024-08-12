import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/Language'; 

const Modal = ({ onClose, isSuccess }) => {
  const { isEnglish } = useLanguage();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const title = isSuccess 
    ? (isEnglish ? 'Form submitted successfully' : 'Formulario enviado con éxito')
    : (isEnglish ? 'Form submitted unsuccessfully' : 'Formulario enviado sin éxito');
  
  const message = isSuccess 
    ? (isEnglish ? 'Thank you for contacting me, I will reply as soon as possible.' : 'Gracias por contactarme, te responderé lo antes posible.')
    : (isEnglish ? 'Oops, something went wrong. Please try again.' : 'Ups! Algo salió mal. Por favor inténtalo de nuevo.');

  const borderColor = isSuccess ? 'border-green-500' : 'border-red-500';

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-80 flex justify-center items-center">
      <div className={`bg-white border-2 ${borderColor} rounded-lg overflow-hidden p-8 pt-4 pr-6 max-w-lg w-full mx-4`}>
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 focus:outline-none">
            <FaTimes className="h-6 w-6 sm:h-8 sm:w-8 text-white bg-red-500 hover:bg-red-400 rounded-full p-1"/>
          </button>
        </div>
        <h2 className="text-lg sm:text-2xl font-bold pr-6 mb-4 mt-4">{title}</h2>
        <p className="text-md sm:text-lg pr-8 text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default Modal;