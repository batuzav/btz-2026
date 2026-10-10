# Pedro Valdez — Portafolio

Portafolio editorial en blanco y negro, estilo revista (homenaje a *Comme des Garçons / Six*). Construido con **Next.js (App Router)** y TypeScript.

## Requisitos

- Node.js 18.18+ (recomendado 20+)

## Arranque

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Scripts

| Comando         | Qué hace                              |
| --------------- | ------------------------------------- |
| `npm run dev`   | Servidor de desarrollo                |
| `npm run build` | Build de producción                   |
| `npm run start` | Sirve el build                        |
| `npm run lint`  | Linter de Next (requiere eslint)      |

## Estructura

```
.
├── app/
│   ├── layout.tsx     # fuentes (next/font) + metadata
│   ├── page.tsx       # todo el contenido del portafolio
│   └── globals.css    # estilos (una sola hoja)
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Cómo editarlo

- **Contenido:** todo vive en `app/page.tsx`, dividido por secciones comentadas (DATELINE, MASTHEAD, LEAD, IMPACTO, TRABAJOS, STRIPS, MANIFIESTO, COLOPHON).
- **Estilos y colores:** en `app/globals.css`. La paleta son variables CSS en `:root` (`--paper`, `--ink`, etc.). Hay modo claro y oscuro (se invierte a papel negro / tinta hueso).
- **Fuentes:** se cargan con `next/font/google` en `app/layout.tsx` (Hanken Grotesk, Space Mono, Noto Sans JP) y se referencian como variables en el CSS.

## Notas

- Es una página 100% estática: un solo *server component*, sin estado ni JS de cliente. Las animaciones son CSS y respetan `prefers-reduced-motion`.
- Para desplegar en Vercel: conecta el repo y listo (detecta Next.js automáticamente).

## Deploy rápido en Vercel

```bash
npm i -g vercel
vercel
```
