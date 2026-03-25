import { FaReact, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa6';
import { SiJavascript, SiTailwindcss, SiFramer, SiExpress, SiMongodb, SiVite, SiN8N } from 'react-icons/si';
import { Palette } from 'lucide-react';

/**
 * @typedef {Object} Skill
 * @property {string} name
 * @property {'Frontend'|'Backend'|'Tooling'|'Design'} category
 * @property {1|2|3} level // 1: Básico, 2: Intermedio, 3: Avanzado
 * @property {import('react').ComponentType} [icon]
 * @property {string} [color]
 */

/** @type {Skill[]} */
export const skills = [
  { name: 'React', category: 'Frontend', level: 3, icon: FaReact, color: 'text-[#61DAFB]' },
  { name: 'JavaScript ES6+', category: 'Frontend', level: 3, icon: SiJavascript, color: 'text-[#F7DF1E]' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 3, icon: SiTailwindcss, color: 'text-[#06B6D4]' },
  { name: 'Framer Motion', category: 'Frontend', level: 1, icon: SiFramer, color: 'text-white' },
  { name: 'Node.js', category: 'Backend', level: 3, icon: FaNodeJs, color: 'text-[#339933]' },
  { name: 'Express', category: 'Backend', level: 2, icon: SiExpress, color: 'text-white/80' },
  { name: 'MongoDB', category: 'Backend', level: 3, icon: SiMongodb, color: 'text-[#47A248]' },
  { name: 'Git / GitHub', category: 'Tooling', level: 3, icon: FaGithub, color: 'text-white' },
  { name: 'Vite', category: 'Tooling', level: 2, icon: SiVite, color: 'text-[#646CFF]' },
  { name: 'Figma', category: 'Design', level: 2, icon: FaFigma, color: 'text-[#F24E1E]' },
  { name: 'UI/UX Principles', category: 'Design', level: 2, icon: Palette, color: 'text-pink-400' },
  { name: 'N8N', category: 'Tooling', level: 3, icon: SiN8N, color: 'text-[#EA4B71]' }
];
