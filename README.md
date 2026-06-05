# Portfolio — Matías Montone

Sitio personal y portfolio profesional. Presenta mi perfil como Desarrollador Full Stack orientado a producto, con foco en e-commerce, SaaS y herramientas para merchants.

**Sitio en producción:** [matiasmontone.vercel.app](https://matiasmontone.vercel.app)

## Stack

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [simple-icons](https://simpleicons.org/) para iconos de tecnologías
- i18n español / inglés
- Tema claro y oscuro

## Secciones

- Inicio
- Sobre mí (con descarga de CV)
- Experiencia laboral y educación
- Habilidades técnicas
- Contacto

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build    # genera dist/
npm run preview  # previsualiza el build
```

No commitear `dist/` — es la salida de compilación.

## Estructura del proyecto

```
portfolio-v2/
├── public/              # Archivos estáticos servidos tal cual
│   ├── img/profile.jpg
│   ├── EN-MATIAS-MONTONE.pdf
│   └── ES-MATIAS-MONTONE.pdf
└── src/
    ├── components/      # UI reutilizable (nav, cards, skeletons…)
    ├── composables/     # Tema, idioma, scroll spy
    ├── data/            # Experiencia y habilidades
    ├── sections/        # Secciones de la página
    ├── style.css        # Tokens de tema y estilos compartidos
    └── App.vue
```

`style.css` define los tokens de tema y las clases que usa el proyecto (layout, navegación, cards, animaciones). El resto del estilo va con Tailwind en los templates.

## Contacto

- **Email:** matiasmontonedev@gmail.com
- **LinkedIn:** [matiasmontone](https://www.linkedin.com/in/matiasmontone/)
- **GitHub:** [matiasmontonee](https://github.com/matiasmontonee)
