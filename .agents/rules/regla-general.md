---
trigger: always_on
---

---
description: Portfolio personal con React + Vite + Tailwind CSS
globs: **/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css, tailwind.config.*, vite.config.*
alwaysApply: true
---

# 🎨 Portfolio Personal — React + Vite + Tailwind

## 🧱 Stack Tecnológico

- **Framework**: React 18+ con TypeScript
- **Bundler**: Vite 5+
- **Estilos**: Tailwind CSS v3+ (utility-first)
- **Routing**: React Router DOM v6
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React o React Icons
- **Formulario de contacto**: React Hook Form + Zod (validación)
- **Estado global (si aplica)**: Zustand o Context API

---

## 📁 Estructura de Carpetas

```
src/
├── assets/           # Imágenes, fuentes, SVGs
├── components/
│   ├── ui/           # Componentes reutilizables (Button, Badge, Card…)
│   └── sections/     # Secciones del portfolio (Hero, About, Projects…)
├── data/             # Datos estáticos (projects.ts, skills.ts, experience.ts)
├── hooks/            # Custom hooks (useScrollAnimation, useTheme…)
├── layouts/          # Layout principal (MainLayout.tsx)
├── pages/            # Páginas (Home, ProjectDetail…)
├── types/            # Interfaces y tipos TypeScript
├── utils/            # Funciones helpers
├── App.tsx
└── main.tsx
```

---

## 🎯 Principios de Diseño y Código

### Componentes

- Usa **componentes funcionales** con TypeScript siempre.
- Cada componente en su propio archivo, exportación nombrada Y default.
- Props siempre tipadas con `interface` o `type` en TypeScript.
- Prefiere composición sobre herencia.
- Desacopla lógica de UI usando custom hooks.

```tsx
// ✅ Correcto
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageUrl?: string;
}

export const ProjectCard = ({ title, description, tags, href, imageUrl }: ProjectCardProps) => {
  return (
    <article className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20">
      {/* contenido */}
    </article>
  );
};

export default ProjectCard;
```

### Tailwind CSS

- **Mobile-first**: siempre empieza sin prefijo, luego `sm:`, `md:`, `lg:`, `xl:`.
- Agrupa clases en orden: layout → spacing → sizing → typography → color → border → effects → animation.
- Usa `@apply` en `globals.css` solo para clases muy repetidas (ej. `.btn-primary`).
- Define la paleta de colores del portfolio en `tailwind.config.ts`:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        surface: {
          DEFAULT: '#0f0f13',
          card:    '#1a1a23',
          border:  '#2a2a38',
        },
      },
      fontFamily: {
        display: ['Cal Sans', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'slide-in-r': 'slideInRight 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

### TypeScript

- **Strict mode** activado en `tsconfig.json`.
- No usar `any` — usa `unknown` si el tipo es incierto.
- Define tipos globales del portfolio en `src/types/index.ts`:

```ts
// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tooling' | 'design';
  level: 1 | 2 | 3; // 1=básico, 2=intermedio, 3=avanzado
  iconUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}
```

---

## 🗂️ Secciones del Portfolio

El portfolio debe incluir estas secciones en `src/components/sections/`:

| Archivo              | Propósito                                      |
|----------------------|------------------------------------------------|
| `HeroSection.tsx`    | Presentación principal con CTA                 |
| `AboutSection.tsx`   | Bio, foto y soft skills                        |
| `SkillsSection.tsx`  | Tecnologías organizadas por categoría          |
| `ProjectsSection.tsx`| Grid de proyectos destacados con filtros       |
| `ExperienceSection.tsx` | Timeline de experiencia laboral            |
| `ContactSection.tsx` | Formulario de contacto + redes sociales        |

---

## 🚦 Convenciones de Nombrado

| Elemento              | Convención          | Ejemplo                    |
|-----------------------|---------------------|----------------------------|
| Componentes           | PascalCase          | `ProjectCard.tsx`          |
| Hooks                 | camelCase + `use`   | `useScrollAnimation.ts`    |
| Utils / helpers       | camelCase           | `formatDate.ts`            |
| Constantes            | UPPER_SNAKE_CASE    | `SOCIAL_LINKS`             |
| CSS clases custom     | kebab-case          | `.hero-gradient`           |
| Variables de entorno  | VITE_ prefix        | `VITE_EMAILJS_PUBLIC_KEY`  |

---

## ⚡ Performance y Buenas Prácticas

- **Lazy loading** en rutas con `React.lazy` + `Suspense`.
- **Imágenes**: usa `loading="lazy"` y formatos WebP/AVIF.
- **Fuentes**: carga con `<link rel="preconnect">` y `font-display: swap`.
- **Accesibilidad**: usa etiquetas semánticas (`<main>`, `<section>`, `<article>`), `aria-label` donde sea necesario.
- **SEO básico**: configura `<title>` y `<meta description>` por página.
- Evita inline styles; todo va en clases de Tailwind o variables CSS.
- Extrae datos estáticos a `src/data/` para mantener componentes limpios.

---

## 🎞️ Animaciones con Framer Motion

Usa variantes reutilizables en `src/utils/animations.ts`:

```ts
// src/utils/animations.ts
import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};
```

Usa `viewport={{ once: true }}` en `motion.div` para animar solo al entrar en vista.

---

## 🛠️ Comandos del Proyecto

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build de producción
pnpm build

# Preview del build
pnpm preview

# Type check
pnpm tsc --noEmit

# Lint
pnpm eslint src --ext .ts,.tsx
```

---

## ✅ Checklist antes de hacer commit

- [ ] No hay errores de TypeScript (`tsc --noEmit`)
- [ ] Responsive en mobile (375px), tablet (768px) y desktop (1280px)
- [ ] Dark mode funciona correctamente
- [ ] Imágenes tienen `alt` descriptivo
- [ ] Formulario de contacto valida y maneja errores
- [ ] Variables de entorno sensibles en `.env.local` (no commitear)
- [ ] Sin `console.log` en producción