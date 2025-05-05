import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowUp, FaArrowDown, FaHtml5, FaCss3, FaJs, FaBootstrap, FaVuejs, FaReact, FaPhp, FaLaravel, FaGithub, FaExternalLinkAlt, FaTools } from 'react-icons/fa';
import { useLanguage } from '../context/Language'; 
import projects from '../data/projects';

const ProjectsView = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isEnglish } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const accordions = document.querySelectorAll('.accordion');
      accordions.forEach((accordion) => {
        const rect = accordion.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const visiblePercent = (windowHeight - rect.top) / windowHeight;
        if (visiblePercent >= 0.2) {
          accordion.classList.add('in-viewport');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleAccordion = (index) => {
    setSelectedProject((prevIndex) => (prevIndex === index ? null : index));
    setCurrentImageIndex(0);
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === projects[selectedProject].images.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? projects[selectedProject].images.length - 1 : prevIndex - 1));
  };

  const getIcons = (icons) => {
    return icons.map((icon, index) => {
      switch (icon) {
        case "FaHtml5":
          return <FaHtml5 key={index} className="mr-1" />;
        case "FaCss3":
          return <FaCss3 key={index} className="mr-1" />;
        case "FaJs":
          return <FaJs key={index} className="mr-1" />;
        case "FaBootstrap":
          return <FaBootstrap key={index} />;
        case "FaVuejs":
          return <FaVuejs key={index} className="mr-1" />;
        case "FaReact":
          return <FaReact key={index} className="mr-1" />;
        case "FaPhp":
          return <FaPhp key={index} className="mr-1" />;
        case "FaLaravel":
          return <FaLaravel key={index} className="mr-1" />;
        default:
          return null;
      }
    });
  };

  return (
    <section id="projects" className="lg:p-20 p-8 bg-black">
      <div className="flex items-center accordion">
        <FaArrowRight size={36} className="mr-2 arrow-right" />
        <h2 className="text-3xl sm:text-5xl font-bold text-white">{isEnglish ? 'Projects' : 'Proyectos'}</h2>
      </div>

      <p className='text-white mt-8 text-lg sm:text-2xl flex items-center accordion'>{isEnglish ? 'All my work done' : 'Todos mis trabajos realizados'} <FaTools className='text-blue-500 ml-2' /></p>

      {projects.map((project, index) => (
        <div key={index} className="accordion mt-8">
          <div className={`accordion-bar p-4 sm:p-8 ${selectedProject === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
            <h3 className="accordion-title text-xl sm:text-3xl text-white">{project.title}</h3>
            <div className="accordion-arrow text-blue-500 text-2xl sm:text-3xl">{selectedProject === index ? <FaArrowUp /> : <FaArrowDown />}</div>
          </div>
          <div className={`accordion-content flex flex-col lg:flex-row ${selectedProject === index ? 'active' : ''}`} style={{ maxHeight: selectedProject === index ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
            <div className='lg:w-1/2 relative'>
              <div className="slider-container relative" style={{ width: '100%', overflow: 'hidden' }}>
                <div className="slider-inner" style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentImageIndex * 100}%)` }}>
                  {project.images.map((image, index) => (
                    <img key={index} src={image} alt={project.title} className="p-4 w-full" />
                  ))}
                </div>
              </div>
              <div className="slider-nav">
                <button className="prev-slide" onClick={prevSlide}>&#10094;</button>
                <button className="next-slide" onClick={nextSlide}>&#10095;</button>
              </div>
              <div className="hidden lg:block absolute top-6 bottom-6 right-0 bg-white w-px"></div>
              <div className="lg:hidden absolute bottom-0 right-5 left-5 bg-white h-px"></div>
            </div>
            <div className='lg:w-1/2 p-5 lg:pl-3.5 pt-2.5 lg:pt-5 flex flex-col justify-between text-white'>
              <p className="mb-4 text-md sm:text-xl">{isEnglish ? project.description.en : project.description.es}</p>
              <div className="flex justify-between">
                <div className="flex items-end text-3xl sm:text-4xl">
                  {getIcons(project.icons)}
                  {project.typescriptIcon && <img src={project.typescriptIcon} alt="Typescript Icon" style={{ objectFit: 'contain', marginLeft: '4px' }} className='tailwind-img' />}
                  {project.tailwindIcon && <img src={project.tailwindIcon} alt="Tailwind Icon" style={{ objectFit: 'contain', marginLeft: '4px' }} className='tailwind-img' />}
                </div>
                <div className="flex items-end text-3xl sm:text-4xl">
                  <a href={project.github} className='github-hover' target="_blank" rel="noreferrer" aria-label='Repositorio en GitHub de Matías Montone'><FaGithub /></a>
                  {index !== 3 && index !== 4 && (
                    <a href={project.website} className='web-hover ml-2 sm:ml-4' target="_blank" rel="noreferrer" aria-label='Sitio web de Matías Montone'><FaExternalLinkAlt /></a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsView;
