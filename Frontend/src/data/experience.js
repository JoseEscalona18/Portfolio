import { FaNodeJs, FaReact } from 'react-icons/fa6';
import { SiExpress, SiMongodb } from 'react-icons/si';

/**
 * @typedef {Object} Technology
 * @property {string} name
 * @property {import('react').ComponentType} [icon]
 * @property {string} [color]
 */

/**
 * @typedef {Object} Experience
 * @property {string} id
 * @property {string} company
 * @property {string} [companyLogo]
 * @property {string} role
 * @property {string} period // ej. "2021 - Presente"
 * @property {string} description
 * @property {(Technology|string)[]} technologies
 */

/** @type {Experience[]} */
export const experiences = [
  {
    id: 'exp-1',
    company: 'Holanet, C.A.',
    identify: 'J-50118548-4',
    contact: '+584146528096',
    web: 'https://holanet.com.ve',
    address: 'Av. Bolivar con Calle 5, Edif. Macova planta baja, Local S/N, Valera, Trujillo, Venezuela',
    companyLogo: '/Compañias/Holanet.jpg',
    role: 'Ingenieros en Tecnologías de la Información (TI)',
    period: '',
    description: 'Desarrollo de infraestructuras críticas, incluyendo la interconexión con el sistema Biopago del Banco de Venezuela. Lideramos un ecosistema de Backend robusto y de microservicios con altísima disponibilidad para facturación y reporte de pagos de miles de clientes. Trabajamos con automatización de servicios, desarrollo de software empresarial y soluciones con IA.',
    technologies: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]' },
      { name: 'Express', icon: SiExpress, color: 'text-white/80' },
      { name: 'React', icon: FaReact, color: 'text-[#61DAFB]' },
      { name: 'API Rest' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' }
    ]
  }
];
