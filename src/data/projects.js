import Wapi1      from '../assets/imgs/projects/wapifirma/01-wapi.png';
import Wapi2      from '../assets/imgs/projects/wapifirma/02-wapi.png';
import Wapi3      from '../assets/imgs/projects/wapifirma/03-wapi.png';
import Wapi4      from '../assets/imgs/projects/wapifirma/04-wapi.png';
import Levrone1  from '../assets/imgs/projects/levrone/01-levrone.png';
import Levrone2  from '../assets/imgs/projects/levrone/02-levrone.png';
import Levrone3  from '../assets/imgs/projects/levrone/03-levrone.png';
import Levrone4  from '../assets/imgs/projects/levrone/04-levrone.png';
import Inventario1  from '../assets/imgs/projects/inventario/01-inventario.png';
import Inventario2  from '../assets/imgs/projects/inventario/02-inventario.png';
import Inventario3  from '../assets/imgs/projects/inventario/03-inventario.png';
import Inventario4  from '../assets/imgs/projects/inventario/04-inventario.png';
import Blog1  from '../assets/imgs/projects/blog/01-blog.png';
import Blog2  from '../assets/imgs/projects/blog/02-blog.png';
import Blog3  from '../assets/imgs/projects/blog/03-blog.png';
import Blog4  from '../assets/imgs/projects/blog/04-blog.png';
import Safenest1  from '../assets/imgs/projects/safenest/01-safenest.png';
import Safenest2  from '../assets/imgs/projects/safenest/02-safenest.png';
import Safenest3  from '../assets/imgs/projects/safenest/03-safenest.png';
import Safenest4  from '../assets/imgs/projects/safenest/04-safenest.png';
import Five1     from '../assets/imgs/projects/five-stars/01-five-stars.png';
import Five2     from '../assets/imgs/projects/five-stars/02-five-stars.png';
import Five3     from '../assets/imgs/projects/five-stars/03-five-stars.png';
import Five4     from '../assets/imgs/projects/five-stars/04-five-stars.png';
import Pokeapi1  from '../assets/imgs/projects/poke-api/01-poke-api.png';
import Pokeapi2  from '../assets/imgs/projects/poke-api/02-poke-api.png';
import Pokeapi3  from '../assets/imgs/projects/poke-api/03-poke-api.png';
import TailwindIcon from '../assets/imgs/tailwind-icon.png';
import TypescriptIcon from '../assets/imgs/typescript-icon.png';

const projects = [
    {
      images: [Wapi1, Wapi2, Wapi3, Wapi4],
      title: "WapiFirma",
      "description": {
      "en": "Front-end design for the WapiFirma company in which you can create a document, view it in requests, sign it, view your profile, buy plans, register through Google, among others.",
      "es": "Diseño Front-end para la empresa WapiFirma en el cual se puede crear un documento, visualizarlo en solicitudes, firmarlo, ver tu perfil, comprar planes, registrarse mediante google, entre otros."
      },
      icons: ["FaHtml5", "FaJs", "FaVuejs"],
      website: 'https://app.wapifirma.com/',
      github: 'https://github.com/matiasmontonee/WapiFirma',
      tailwindIcon: TailwindIcon
    },
    {
      images: [Levrone1, Levrone2, Levrone3, Levrone4],
      title: "Levrone",
      "description": {
        "en": "Website for sales of training articles and supplements. Includes home section, registration, shopping cart, products, forum, blog, purchase registration, affiliate program, among others.",
        "es": "Sitio de ventas de artículos de entrenamiento y suplementos. Incluye sección de inicio, registro, carrito de compras, productos, foro, blog, registro de compras, programa de afiliados, entre otros."
      },
      icons: ["FaHtml5", "FaCss3", "FaJs", "FaReact"],
      website: 'https://levrone.vercel.app/',
      github: 'https://github.com/matiasmontonee/levrone',
      tailwindIcon: TailwindIcon
    },
    {
      images: [Inventario1, Inventario2, Inventario3, Inventario4],
      title: "Sistema Inventario",
      "description": {
        "en": "Web application for managing products, suppliers, and categories, allowing individual and bulk create, read, update, and delete operations. It includes Purchasing and Sales modules with real-time stock control, PDF/Excel report generation, and list pagination, all secured by role-based access permissions.",
        "es": "Aplicación web para gestionar productos, proveedores y categorías, permitiendo altas, bajas y modificaciones tanto individuales como masivas. Incluye módulos de Compras y Ventas con control de stock en tiempo real, generación de PDF/Excel de informes y paginación de listas, todo con permisos de acceso según roles."
      },
      icons: ["FaPhp", "FaBootstrap", "FaJs"],
      github: 'https://github.com/matiasmontonee/sistema-inventario'
    },
    {
      images: [Blog1, Blog2, Blog3, Blog4],
      title: "Blog",
      "description": {
        "en": "Full-stack blog project that supports registration and login with JWT. The frontend is built with Vue 3 and Vite + Bootstrap, and the backend runs on Node.js + Express using MySQL as the database, securing routes with authentication middleware.",
        "es": "Proyecto de blog full-stack que permite registro e inicio de sesión con JWT. El frontend está hecho en Vue 3 y Vite + Bootstrap y el backend corre en Node.js + Express usando MySQL como Base de Datos, protegiendo las rutas con un middleware de autenticación."
      },
      icons: ["FaHtml5", "FaBootstrap", "FaJs", "FaVuejs", "FaNode"],
      github: 'https://github.com/matiasmontonee/blog'
    },
    {
      images: [Safenest1, Safenest2, Safenest3, Safenest4],
      title: "Safenest",
      "description": {
        "en": "Random password generator and validator. It features login, light/dark mode, password history and user profile.",
        "es": "Generador y validador de contraseñas aleatorias. Cuenta con inicio de sesión, modo claro/oscuro, historial de contraseñas y perfil de usuario."
      },
      icons: ["FaHtml5", "FaCss3", "FaReact"],
      website: 'https://safenest-password-generator.vercel.app/',
      github: 'https://github.com/matiasmontonee/password-generator',
      typescriptIcon: TypescriptIcon,
      tailwindIcon: TailwindIcon
    },
    {
      images: [Five1, Five2, Five3, Five4],
      title: "Five Stars",
      "description": {
        "en": "Informational site for movies obtained from The Movie Database API. It has functionalities to add to favorites, watchlist, mark as viewed, search engine and details of each one.",
        "es": "Sitio informativo sobre películas obtenidas de la API de The Movie Database. Tiene funcionalidades para agregar a favoritos, lista de seguimiento, marcar como visto, buscador y detalles de cada uno."
      },
      icons: ["FaHtml5", "FaCss3", "FaJs", "FaReact", "FaBootstrap",],
      website: 'https://five-stars-api.vercel.app',
      github: 'https://github.com/matiasmontonee/movieapi'
    },
    {
      images: [Pokeapi1, Pokeapi2, Pokeapi3],
      title: "PokeApi",
      "description": {
        "en": "In this project you can see the stats of a Pokemon brought from the PokeApi API. You can filter by type of Pokemon, scroll infinitely, search Pokemon by name and view their details.",
        "es": "En este proyecto puedes ver las estadísticas de un Pokémon traídas desde la API PokeApi. Puedes filtrar por tipo de Pokémon, desplazarte infinitamente, buscar Pokémon por nombre y ver sus detalles."
      },
      icons: ["FaHtml5", "FaCss3", "FaJs", "FaReact"],
      website: 'https://pokeapi-website.vercel.app',
      github: 'https://github.com/matiasmontonee/pokeapi',
      tailwindIcon: TailwindIcon 
    }
  ];
  
export default projects;  