/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} [longDescription]
 * @property {string[]} tags
 * @property {string} imageUrl
 * @property {string[]} gallery // Array de URLs de imágenes para el detalle
 * @property {string} [liveUrl]
 * @property {string} [githubUrl]
 * @property {boolean} featured
 * @property {number} year
 * @property {string} client
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'holanet-web',
    title: 'Página Web Oficial (Holanet C.A.)',
    client: 'Holanet, C.A.',
    description: 'Diseño e implementación de la landing page oficial de infraestructura del proveedor de servicios de internet.',
    longDescription: 'Creación de la presencia digital oficial de Holanet, C.A., un ISP (proveedor de internet). El proyecto abarca el diseño UI/UX y su consecuente desarrollo en código. Enfocado de manera crucial en la velocidad de acceso, las auditorías SEO y un diseño 100% responsivo para retener a los clientes actuales y potenciales. Además de la página web, se implementaron herramientas internas para la gestión de clientes y servicios. Totalmente funcional como PWA.',
    tags: ['Frontend', 'Diseño Web', 'Tailwind CSS', 'React', 'Backend'],
    imageUrl: '/public/WebHolanet/holanetcomve.png',
    gallery: [
      '/public/WebHolanet/holanetcomve.png',
      '/public/WebHolanet/consultarsaldo.png',
      '/public/WebHolanet/detallefacturacion.png',
      '/public/WebHolanet/FAQ.png',
      '/public/WebHolanet/zonascobertura.png',
    ],
    liveUrl: 'https://holanet.com.ve',
    featured: true,
    year: 2026,
  },
  {
    id: 'biopago-bdv',
    title: 'Botón de Pago (BiopagoBDV)',
    client: 'Holanet, C.A.',
    description: 'Pasarela de pago para facilitar a los clientes el pago de mensualidades a través de BiopagoBDV.',
    longDescription: 'Sistema completo de integración con la plataforma de Biopago del Banco de Venezuela (BDV). Diseñada específicamente para Holanet, C.A. con el objetivo de permitir a sus usuarios pagar mensualidades de forma rápida y segura. Consta de una arquitectura de microservicios para garantizar la disponibilidad al momento de procesar transacciones críticas.',
    tags: ['React', 'Node.js', 'Biopago API', 'Tailwind CSS'],
    imageUrl: '/public/BiopagoBDV/Biopago.png',
    gallery: [
      '/public/BiopagoBDV/metodoPago.png',
      '/public/BiopagoBDV/metodoAutenticacion.png',
      '/public/BiopagoBDV/CodigoAutenticacion.png',
      '/public/BiopagoBDV/Aprobado.png',
    ],
    liveUrl: 'https://holanet.com.ve/ConsultarSaldo',
    featured: true,
    year: 2025,
  },
  {
    id: 'reporte-pago-movil',
    title: 'Botón de Reportar Pago Móvil',
    client: 'Holanet, C.A.',
    description: 'Sistema avanzado de reportes de pago móvil con conciliación automática mediante API del BDV o conciliación manual interbancaria.',
    longDescription: 'Una pasarela flexible para reportar transacciones de Pago Móvil. La solución brinda a Holanet, C.A. dos vías operativas: 1) Consumo directo de la API de notificaciones del Banco de Venezuela para conciliación en tiempo real. 2) Un formulario detallado donde los usuarios pueden reportar de forma manual su referencia, fecha y monto provenientes de otros bancos, alimentando un API interno de conciliación.',
    tags: ['Express', 'API BDV', 'PostgreSQL', 'React', 'MongoDB'],
    imageUrl: '/public/PagoMovil/PagoMovilAuto.png',
    gallery: [
      '/public/PagoMovil/PagoMovilAuto.png',
      '/public/PagoMovil/PagoMovilManual.png',
      '/public/PagoMovil/PagoMovilManual2.png',
    ],
    liveUrl: 'https://holanet.com.ve/ConsultarSaldo',
    featured: true,
    year: 2025,
  }
];
