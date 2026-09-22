# Esencias Naturales

Sitio web estático e informativo, construido con **React + Vite**. No
requiere servidor ni base de datos: es HTML, CSS y JavaScript compilados a
archivos estáticos, listos para publicarse en cualquier hosting web.

## Estructura del proyecto

```
esencias-naturales/
├── index.html              # Punto de entrada HTML
├── public/                 # Assets estáticos (favicon, etc.)
├── src/
│   ├── main.jsx             # Bootstrap de React y del router
│   ├── App.jsx              # Layout raíz y definición de rutas
│   ├── pages/                # Una página por ruta
│   ├── components/
│   │   ├── layout/            # Header y Footer, compartidos en todo el sitio
│   │   ├── common/             # Piezas reutilizables (logo, íconos, CTA de contacto, etc.)
│   │   ├── home/                # Secciones exclusivas de la página de inicio
│   │   └── productos/            # Secciones exclusivas de la página de Productos
│   └── styles/
│       ├── variables.css          # Tokens de marca: color, tipografía, espaciado
│       ├── global.css             # Reset y estilos base
│       └── pages.css              # Estilos compartidos entre páginas internas
└── package.json
```

Cada componente vive junto a su propio archivo de estilos (mismo nombre), así
que es fácil ubicar y ajustar una sección sin afectar el resto del sitio.

## Sistema de marca

Los colores, tipografías y espaciados no están repartidos por el código:
viven centralizados en `src/styles/variables.css` como variables CSS. Para
ajustar la identidad visual del sitio (un color, una fuente, un radio de
borde) basta con cambiar el valor ahí — el cambio se aplica automáticamente
en todas las páginas y componentes.

## Cómo correr el proyecto

Instalar dependencias:

```bash
npm install
```

Levantar el entorno de desarrollo:

```bash
npm run dev
```

Generar la versión de producción (carpeta `dist/`):

```bash
npm run build
```

Previsualizar ese build localmente antes de publicarlo:

```bash
npm run preview
```

## Publicación

El resultado de `npm run build` es la carpeta `dist/`: un conjunto de
archivos estáticos que se puede subir a cualquier proveedor de hosting web.

Un detalle importante a configurar en el hosting: como el sitio usa rutas de
navegador (por ejemplo `/productos`, sin `#`), hay que indicarle al servidor
que redirija cualquier ruta desconocida hacia `index.html`. Sin esto, recargar
la página estando en una ruta interna (o compartir ese enlace directamente)
puede devolver un error 404. La mayoría de los hostings de sitios estáticos
ofrecen esta opción como un ajuste de configuración sencillo.
