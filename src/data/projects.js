import Fxw1      from '../assets/imgs/projects/fxw/01-fxw.png';
import Fxw2      from '../assets/imgs/projects/fxw/02-fxw.png';
import Fxw3      from '../assets/imgs/projects/fxw/03-fxw.png';
import Fxw4      from '../assets/imgs/projects/fxw/04-fxw.png';
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
import Vuestore1 from '../assets/imgs/projects/vuejstore/01-vuejstore.png';
import Vuestore2 from '../assets/imgs/projects/vuejstore/02-vuejstore.png';
import Music1    from '../assets/imgs/projects/music-shop/01-music-shop.png';
import Music2    from '../assets/imgs/projects/music-shop/02-music-shop.png';
import Music3    from '../assets/imgs/projects/music-shop/03-music-shop.png';
import Music4    from '../assets/imgs/projects/music-shop/04-music-shop.png';
import Starwars1 from '../assets/imgs/projects/starwars-api/01-starwars-api.png';
import Starwars2 from '../assets/imgs/projects/starwars-api/02-starwars-api.png';
import Cutler1   from '../assets/imgs/projects/cutler/01-cutler.png';
import Cutler2   from '../assets/imgs/projects/cutler/02-cutler.png';
import Cutler3   from '../assets/imgs/projects/cutler/03-cutler.png';
import Cutler4   from '../assets/imgs/projects/cutler/04-cutler.png';
import TailwindIcon from '../assets/imgs/tailwind-icon.png';
import NextIcon from '../assets/imgs/next-icon.png';

const projects = [
    {
      images: [Fxw1, Fxw2, Fxw3, Fxw4],
      title: "FxW",
      "description": {
      "en": "Front-end design for the FxW company in which you can create a document, view it in requests, sign it, view your profile, buy plans, register through Google, among others.",
      "es": "Diseño Front-end para la empresa FxW en el cual se puede crear un documento, visualizarlo en solicitudes, firmarlo, ver tu perfil, comprar planes, registrarse mediante google, entre otros."
      },
      icons: ["FaHtml5", "FaJs", "FaVuejs"],
      website: 'https://fx-w.vercel.app/',
      github: 'https://github.com/matiasmontonee/FxW',
      tailwindIcon: TailwindIcon
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
    },
    {
      images: [Vuestore1, Vuestore2],
      title: "VueJStore",
      "description": {
        "en": "Simulation of a virtual store dedicated to the sale of technological devices. The products can be found through a search engine. It has a shopping cart, payment gateway and contact section.",
        "es": "Simulación de una tienda virtual dedicada a la venta de dispositivos tecnológicos. Los productos se pueden encontrar a través de un motor de búsqueda. Dispone de carrito de compra, pasarela de pago y apartado de contacto."
      },
      icons: ["FaHtml5", "FaCss3", "FaJs", "FaVuejs"],
      website: '',
      github: ''
    },
    {
      images: [Music1, Music2, Music3, Music4],
      title: "Music Shop",
      "description": {
        "en": "Virtual store of musical CDS obtained from a SQL database. It has registration, login, products, contact, administrator panel and abm operations.",
        "es": "Tienda virtual de CDS musicales obtenidos de una base de datos SQL. Tiene operaciones de registro, inicio de sesión, productos, contacto, panel de administrador y abm."
      },
      icons: ["FaHtml5", "FaCss3", "FaPhp"],
      website: '',
      github: ''
    },
    {
      images: [Starwars1, Starwars2],
      title: "Starwars API",
      "description": {
        "en": "Informational site for Starwars characters obtained from The Stars Wars API. Each character has a details section and can be searched using a search engine.",
        "es": "Sitio informativo para personajes de Starwars obtenidos de The Stars Wars API. Cada personaje tiene una sección de detalles y se puede buscar mediante un motor de búsqueda."
      },
      icons: ["FaHtml5", "FaCss3", "FaJs", "FaReact", "FaBootstrap"],
      website: '',
      github: ''
    },
    {
      images: [Cutler1, Cutler2, Cutler3, Cutler4],
      title: "Cutler",
      "description": {
        "en": "Website for sales of training articles and supplements. It includes sections for home, registration, shopping cart, products, seller administration panel, among others.",
        "es": "Sitio de ventas de artículos de entrenamiento y suplementos. Incluye secciones de inicio, registro, carrito de compras, productos, panel de administración para el vendedor, entre otros."
      },
      icons: ["FaHtml5", "FaCss3", "FaJs", "FaReact"],
      website: '',
      github: '',
      tailwindIcon: TailwindIcon
    }
  ];
  
export default projects;  