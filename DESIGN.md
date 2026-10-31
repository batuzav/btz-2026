# DESIGN — Sello btz

Identidad visual y de código de Pedro Valdez (batuzav / **btz**). Este documento describe el portafolio N°01 y sirve de base para cualquier proyecto futuro que lleve el sello btz: si algo nuevo no se parece a esto, no es btz.

Fuente de verdad del código: [app/globals.css](app/globals.css) (tokens y componentes), [app/page.tsx](app/page.tsx) (estructura editorial) y [app/layout.tsx](app/layout.tsx) (fuentes).

---

## 1. Idea central

**Un periódico impreso, pero de un ingeniero.**

El diseño toma prestado el lenguaje de la prensa y la revista de autor (homenaje a *Comme des Garçons* y *Six*): papel, tinta, reglas, tipografía enorme, datos en columnas. Nada de tarjetas, sombras, gradientes ni "UI de startup".

Por qué funciona para btz:

- **El backend no se ve.** El trabajo de Pedro es invisible (APIs, datos, infraestructura). Un periódico presenta hechos y cifras, no decoración: encaja con vender resultados medibles.
- **Autoridad sin ruido.** Blanco y negro, una sola jerarquía tipográfica y reglas finas comunican rigor y oficio.
- **Memorable.** Casi nadie en tech presenta su portafolio como una portada; eso lo vuelve reconocible.

Tres principios que mandan sobre cualquier otra decisión:

1. **Contenido primero.** Si un elemento no informa, se quita.
2. **Estructura con líneas, no con cajas.** Las secciones se separan con reglas (`border`), nunca con fondos, sombras o bordes redondeados.
3. **Contraste extremo de escala.** Titulares gigantes junto a texto mono diminuto. La tensión entre ambos es la firma.

---

## 2. Metáfora editorial (vocabulario)

Cada parte de la página tiene nombre de periódico. Úsalos en el código y en las conversaciones; mantienen la coherencia.

| Pieza | Clase | Función |
| --- | --- | --- |
| **Dateline** | `.dateline` | Franja superior: número de edición, sección, estación del año. |
| **Masthead** | `.masthead` | La cabecera: el nombre en tipografía gigante, con `role` debajo. |
| **Lead** | `.lead` | Titular-declaración + texto en columnas (la nota principal). |
| **Impacto** | `.impact` / `.fig` | Cifras grandes con pie explicativo. |
| **Trabajos** | `.work` / `.entry` | Lista numerada de proyectos, como un índice. |
| **Strips** | `.strip` | Franjas de texto corrido en mono (stack, trayectoria). |
| **Manifiesto** | `.manifesto` | Declaración final, en japonés y español. |
| **Colophon** | `.colophon` | Pie: wordmark, contacto, lugar y edición. |

Cada proyecto es un **número** ("N°01"). El siguiente proyecto btz es el N°02, con su propia fecha y estación. La edición, la estación y el número son parte del sello.

---

## 3. Color

Solo dos colores: **papel** y **tinta**. Sin acentos de color.

| Token | Claro | Oscuro | Uso |
| --- | --- | --- | --- |
| `--paper` | `#ECE9E1` | `#0C0B09` | Fondo. Es hueso/crema, nunca blanco puro. |
| `--paper-2` | `#E3DFD4` | `#131210` | Fondo secundario (reservado). |
| `--ink` | `#000000` | `#EDE8DB` | Texto y reglas. |
| `--ink-soft` | `#1b1b17` | `#d8d2c4` | Texto atenuado (reservado). |
| `--rule` | `#000000` | `#EDE8DB` | Todas las líneas. |

Reglas:

- **Nunca** blanco `#fff` ni negro de interfaz gris. El papel es cálido; el oscuro es "papel negro, tinta hueso", no un gris azulado.
- El modo oscuro **invierte** papel y tinta; no es un tema aparte. Se activa por `prefers-color-scheme` y se puede forzar con `data-theme="light|dark"`.
- Los énfasis se logran con **peso, escala y opacidad** (`.65`–`.7`), no con color.
- Un proyecto btz no introduce un color de acento. Si de verdad hace falta uno, es una decisión consciente que se documenta aquí.

### Grano

Una capa de ruido SVG (`body::after`) cubre toda la página con `mix-blend-mode: multiply` (claro) o `screen` (oscuro) y opacidad ~`.055`–`.07`. Da textura de papel impreso. Es sutil: si se nota a simple vista, está muy fuerte. Debe ser `pointer-events:none`.

---

## 4. Tipografía

Tres familias, cada una con un trabajo exacto. Se cargan con `next/font/google` y se exponen como variables CSS.

| Rol | Fuente | Variable | Pesos |
| --- | --- | --- | --- |
| **Voz** (titulares, cuerpo) | Hanken Grotesk | `--font-hanken` | 400, 500, 700, 800, 900 + itálica |
| **Dato** (metadatos, etiquetas, cifras pequeñas) | Space Mono | `--font-mono` | 400, 700 + itálica |
| **Firma** (manifiesto en japonés) | Noto Sans JP | `--font-jp` | 400, 700 (sin preload: es CJK y pesa) |

Cómo se usan:

- **Titulares**: Hanken en **800–900**, `line-height` entre `.82` y `1`, `letter-spacing` **negativo** (`-.01em` a `-.03em`). Apretados, como cabecera de prensa.
- **Cuerpo**: Hanken regular, `line-height` ~`1.4–1.46`, **justificado** con `hyphens:auto` (por eso el `lang="es"` es obligatorio en los bloques de texto).
- **Mono en mayúsculas con tracking amplio** (`.12em`–`.34em`) para datelines, encabezados de sección, metadatos y `role`. El mono en minúsculas se reserva para contacto y firma.
- **Cifras de impacto**: Hanken 900, hasta `5.6rem`, `line-height:.86`. Siempre con un pie en mono.
- **Capitular**: la primera letra del primer párrafo de la bio (`::first-letter`) va en 900 a `3.1em`.

Escala fluida: todo tamaño usa `clamp()`. No hay breakpoints para tipografía; solo para reorganizar columnas.

---

## 5. Layout y reglas

### Contenedor
`.sheet`: `max-width:1180px`, centrado, con `padding` fluido `clamp(16px, 3.5vw, 40px)` / `clamp(16px, 4vw, 52px)`.

### Reglas (líneas)
Es el elemento estructural principal:

- **2px** (`border-top/bottom: 2px solid var(--rule)`): separan secciones mayores (dateline, lead, impacto, trabajos, colophon).
- **1px**: separan filas dentro de una sección (entradas, cifras, strips, encabezados internos).
- Un cierre de bloque usa 2px (`.strip:last-of-type`).

### Espaciado
Vertical fluido, entre secciones `clamp(34px, 5vw, 70px)`; el manifiesto y el colophon respiran más (`clamp(40px, 6vw, 90px)`). Se prefiere `clamp()` a valores fijos.

### Rejillas
- **Lead**: 2 columnas (`1.15fr 1fr`); la nota usa `columns:2` con `column-rule:1px`, como columnas de periódico.
- **Impacto**: 3 columnas separadas por reglas verticales de 1px.
- **Entradas**: `auto 1fr auto` → índice · contenido · metadatos.
- En móvil (≤760px / 680 / 640 / 560) todo colapsa a una columna; las reglas verticales desaparecen.

### Romper el marco
El masthead se sale a propósito (`margin-right:-18vw` en la segunda línea): el nombre es tan grande que casi se corta. Es intencional: da escala y tensión. Se mantiene `overflow-x:hidden` en `body`.

---

## 6. Componentes y estados

- **Enlaces de título** (`.entry .title a`): subrayado grueso con `box-shadow: inset 0 -2px 0`. En `hover` se **invierte**: fondo tinta, texto papel. Es la interacción característica de btz.
- **Enlaces del colophon**: subrayado 1px; mismo `hover` invertido.
- **Foco** (`:focus-visible`): `outline:2px solid var(--ink)` con `outline-offset:3px`. No se elimina nunca.
- **Etiqueta** (`.tag`): mono pequeño en mayúsculas dentro de una píldora de 1px (`border-radius:999px`). Es la **única** forma redondeada permitida; se usa para estados ("Aprendiendo Ruby").
- **Metadatos** (`.meta`): mono en mayúsculas, alineado a la derecha, apilado por líneas (tecnologías · bases de datos · plataforma y año).

No existen: botones rellenos, tarjetas, sombras, gradientes, iconos decorativos, modales ni carruseles.

---

## 7. Movimiento

Mínimo y con significado: **una sola animación**, la revelación del masthead.

- `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)`, 1.15s, `cubic-bezier(.2,.7,.1,1)`. Se siente como una cortina de tinta que descubre el titular.
- La segunda línea entra con `animation-delay:.18s`.
- Con `prefers-reduced-motion: reduce` se desactiva por completo.

Regla: el movimiento revela, no entretiene. No añadir parallax, scroll-jacking ni animaciones de entrada por sección.

---

## 8. Voz y contenido

- **Idioma**: español, tono directo y sobrio. Frases cortas, verbos concretos.
- **Cifras reales**. Nada de "mucho" o "rápido": `+50K productos/día`, `<1s`, `2s`. Todo número debe poder defenderse (viene del CV).
- **Tercera persona** en la bio ("Construye soluciones…"); **primera/firma** en el manifiesto ("— pedro valdez").
- **Minúsculas** en el manifiesto y el `role`; **MAYÚSCULAS** en el nombre y en las etiquetas mono.
- **Japonés** como sello: el manifiesto lleva un párrafo en japonés (con `lang="ja"`), eco directo de la referencia *Six*. No decorativo: es la firma del autor.
- **Honestidad**: lo que se está aprendiendo se declara (`Aprendiendo Ruby`). Es parte del carácter.

Datos fijos del sello:

| Dato | Valor |
| --- | --- |
| Nombre | Pedro Valdez |
| Alias | batuzav / **btz** |
| Lugar | Mazatlán, Sinaloa, MX |
| Primera edición | N°01 · Otoño 2026 |

---

## 9. Accesibilidad (innegociable)

- Texto con contraste máximo (negro sobre hueso / hueso sobre negro).
- `aria-label` en cada sección principal.
- `lang` correcto en cada bloque (`es`, `ja`) para guionado y lectores de pantalla.
- Enlaces externos con `target="_blank"` **siempre** con `rel="noopener noreferrer"`.
- Foco visible, respeto a `prefers-reduced-motion`, y soporte de `env(safe-area-inset-*)` en móviles con notch.
- HTML semántico: `header`, `main`, `section`, `article`, `footer`, `h3` para títulos de entrada.

---

## 10. Reglas técnicas del sello

- Next.js (App Router) + TypeScript. Página **estática**, un solo server component, **sin JS de cliente** salvo analítica.
- **Una sola hoja de estilos** (`globals.css`). Sin Tailwind, sin CSS-in-JS, sin librerías de UI.
- Colores solo vía variables CSS; ningún hex suelto en componentes.
- Tamaños con `clamp()`; unidades en `rem`/`em`/`vw`.
- Fuentes por `next/font` con `display:swap` y fallback del sistema declarado en `:root`.
- Analítica: Vercel Web Analytics (sin cookies, sin banner).
- Cero dependencias nuevas si CSS o HTML lo resuelven.

---

## 11. Cómo crear un nuevo proyecto btz (N°02, N°03…)

1. Copia los tokens de `:root` (color, grano, fuentes) y las tres fuentes de `layout.tsx`.
2. Define su **dateline**: número de edición, sección, estación y año.
3. Construye un **masthead** con el nombre del proyecto en Hanken 900 y un `role` en mono.
4. Estructura el contenido con **reglas de 2px y 1px**, no con cajas.
5. Usa **cifras reales** en lugar de adjetivos.
6. Cierra con un **colophon** (wordmark, contacto, lugar, número y año).
7. Pasa la lista de verificación.

### Lista de verificación

- [ ] Solo papel y tinta; sin colores de acento.
- [ ] Sin sombras, gradientes, tarjetas ni bordes redondeados (salvo `.tag`).
- [ ] Titulares con interlineado apretado y tracking negativo.
- [ ] Texto mono en mayúsculas y con tracking amplio para etiquetas.
- [ ] Grano de papel activo y sutil.
- [ ] Modo oscuro por inversión papel/tinta.
- [ ] `hover` invertido en enlaces; `focus-visible` presente.
- [ ] Animación única, con `prefers-reduced-motion`.
- [ ] Cifras reales y verificables.
- [ ] `lang` en los bloques; `rel="noopener noreferrer"` en enlaces externos.
- [ ] Firma: "— pedro valdez" y número de edición.

---

## 12. Lo que btz **no** es

Minimalismo genérico de plantilla, "glassmorphism", modo oscuro azulado, ilustraciones 3D, emojis como decoración, degradados morados, animaciones al hacer scroll, o texto de relleno. Si dudas entre añadir y quitar, quita.
