import Wapi1      from '../assets/imgs/projects/wapifirma/01-wapi.png';
import Wapi2      from '../assets/imgs/projects/wapifirma/02-wapi.png';
import Wapi3      from '../assets/imgs/projects/wapifirma/03-wapi.png';
import Wapi4      from '../assets/imgs/projects/wapifirma/04-wapi.png';
import Levrone1  from '../assets/imgs/projects/levrone/01-levrone.png';
import Levrone2  from '../assets/imgs/projects/levrone/02-levrone.png';
import Levrone3  from '../assets/imgs/projects/levrone/03-levrone.png';
import Levrone4  from '../assets/imgs/projects/levrone/04-levrone.png';
import Safenest1  from '../assets/imgs/projects/safenest/01-safenest.png';
import Safenest2  from '../assets/imgs/projects/safenest/02-safenest.png';
import Safenest3  from '../assets/imgs/projects/safenest/03-safenest.png';
import Safenest4  from '../assets/imgs/projects/safenest/04-safenest.png';
import Tenis1  from '../assets/imgs/projects/tenis-shop/01-tenis.png';
import Tenis2  from '../assets/imgs/projects/tenis-shop/02-tenis.png';
import Tenis3  from '../assets/imgs/projects/tenis-shop/03-tenis.png';
import Tenis4  from '../assets/imgs/projects/tenis-shop/04-tenis.png';
import Music1  from '../assets/imgs/projects/music-shop/01-music.png';
import Music2  from '../assets/imgs/projects/music-shop/02-music.png';
import Music3  from '../assets/imgs/projects/music-shop/03-music.png';
import Music4  from '../assets/imgs/projects/music-shop/04-music.png';
import Sas1      from '../assets/imgs/projects/security-and-system/01-sas.png';
import Sas2      from '../assets/imgs/projects/security-and-system/02-sas.png';
import Sas3      from '../assets/imgs/projects/security-and-system/03-sas.png';
import Five1     from '../assets/imgs/projects/five-stars/01-five-stars.png';
import Five2     from '../assets/imgs/projects/five-stars/02-five-stars.png';
import Five3     from '../assets/imgs/projects/five-stars/03-five-stars.png';
import Five4     from '../assets/imgs/projects/five-stars/04-five-stars.png';
import Feather1  from '../assets/imgs/projects/feather/01-feather.png';
import Feather2  from '../assets/imgs/projects/feather/02-feather.png';
import Feather3  from '../assets/imgs/projects/feather/03-feather.png';
import Feather4  from '../assets/imgs/projects/feather/04-feather.png';
import Todo1     from '../assets/imgs/projects/todo-app/01-todo-app.png';
import Todo2     from '../assets/imgs/projects/todo-app/02-todo-app.png';
import Pokeapi1  from '../assets/imgs/projects/poke-api/01-poke-api.png';
import Pokeapi2  from '../assets/imgs/projects/poke-api/02-poke-api.png';
import Pokeapi3  from '../assets/imgs/projects/poke-api/03-poke-api.png';
import TailwindIcon from '../assets/imgs/tailwind-icon.png';
import TypescriptIcon from '../assets/imgs/typescript-icon.png';
import NextIcon from '../assets/imgs/next-icon.png';

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
      images: [Tenis1, Tenis2, Tenis3, Tenis4],
      title: "TeniShop",
      "description": {
        "en": "Website for sales of tennis rackets. It includes three types of user, shopping cart, administration panel, dashboard and payment gateway with Mercado Pago Sandbox.",
        "es": "Sitio de ventas de raquetas de tenis. Incluye tres tipos de usuario, carrito de compras, panel de administración, dashboard y pasarela de pago con Mercado Pago Sandbox."
      },
      icons: ["FaHtml5", "FaCss3", "FaBootstrap", "FaPhp", "FaLaravel"],
      github: 'https://github.com/matiasmontonee/tenis-shop',
    },
    {
      images: [Music1, Music2, Music3, Music4],
      title: "Music Shop",
      "description": {
        "en": "Website for sales of cds. Includes home section, registration, contact, shopping cart, products, purchase record and administration panel.",
        "es": "Sitio de ventas de cds. Incluye sección de inicio, registro, contacto, carrito de compras, productos, registro de compras y panel de administración."
      },
      icons: ["FaHtml5", "FaCss3", "FaPhp"],
      github: 'https://github.com/matiasmontonee/music-shop',
    },
    {
      images: [Sas1, Sas2, Sas3],
      title: "Security and System",
      "description": {
      "en": "A website showcasing a user profile with sections such as About Me, Interests, and Contact. It is a technical test mainly developed with Next.js for the Security and System company.",
      "es": "Página web que muestra un perfil de usuario con secciones como acerca de mí, intereses y contacto. Es una prueba técnica realizada principalmente con Next.js para la empresa Security and System."
      },
      icons: ["FaHtml5", "FaCss3", "FaJs", "FaReact"],
      website: 'https://security-and-system.vercel.app/',
      github: 'https://github.com/matiasmontonee/security_and_system',
      tailwindIcon: NextIcon
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
      images: [Feather1, Feather2, Feather3, Feather4],
      title: "Feather",
      "description": {
        "en": "Simulation of a virtual book store with DOM management. Includes products, details, category filter, shopping cart and payment gateway.",
        "es": "Simulación de una librería virtual con gestión DOM. Incluye productos, detalles, filtro de categorías, carrito de compras y pasarela de pago."
      },
      icons: ["FaHtml5", "FaCss3", "FaJs"],
      website: 'https://feather-store.vercel.app',
      github: 'https://github.com/matiasmontonee/feather'
    },
    {
      images: [Todo1, Todo2],
      title: "To-do app",
      "description": {
        "en": "Simple app where you can write down pending tasks and then move them to completed. Tasks can be deleted in both sections.",
        "es": "Aplicación sencilla donde puedes anotar tareas pendientes y luego pasarlas a completadas. Las tareas se pueden eliminar en ambas secciones."
      },
      icons: ["FaHtml5", "FaCss3", "FaJs", "FaReact"],
      website: 'https://to-do-app-website.vercel.app',
      github: 'https://github.com/matiasmontonee/to-do-app',
      tailwindIcon: TailwindIcon 
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
