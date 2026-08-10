# Portal de Transparencia Financiera — Municipalidad de Colonias Unidas

## Guía de implementación paso a paso (para IA de programación)

---

## 0. Resumen del proyecto (contexto para vos, no es un prompt)

**Qué es:** Dashboard público donde cualquier vecino pueda ver de forma simple e intuitiva de dónde viene la plata de la municipalidad y en qué se gasta. Es un MVP/prototipo con datos mockeados para presentarle al cliente.

**Público:** Vecinos sin conocimientos contables. Todo tiene que estar traducido a lenguaje simple.

**Objetivo de esta etapa:** Impresionar visualmente para vender el desarrollo completo. Prioridad: verse profesional, limpio y confiable.

### Decisiones ya tomadas (no cambiar, no inventar nada nuevo)

- **Identidad visual:** Frase representativa "UNIDOS POR UNIDAS". Colores: `#477f32` (verde institucional), blanco y negro.
- **Estructura de navegación:**
  1. **Home/Landing** (previo al sistema): presenta brevemente qué es el portal, con un botón grande en el medio para entrar al dashboard.
  2. **Inicio/Resumen**: KPIs generales (Ingresos totales, Egresos totales, Balance).
  3. **Ingresos**: de dónde viene la plata (Coparticipación Nacional, Coparticipación Provincial, Recaudación Local, Otros ingresos), con descripciones en criollo.
  4. **Egresos**: en qué se gasta (Obras Públicas, Sueldos y Personal, Mantenimiento Urbano, Salud, Educación/Cultura, Administración), con descripciones en criollo.
  5. **FAQ/Glosario**: términos clave explicados simple.
- **Fuera de alcance para este prototipo:** sección "Obras en Curso" con seguimiento visual — NO incluir.
- **Datos:** todos mockeados, números genéricos creíbles (no reales).
- **Responsive:** obligatorio, mobile-first.
- **Colores de datos:** evitar el rojo para egresos (connota negativo). Usar el verde institucional para ingresos y un color cálido neutro (ámbar/naranja) para egresos.

### Stack sugerido

React + Vite + TypeScript + TailwindCSS + shadcn-ui, con Recharts para los gráficos. Este stack es consistente con el resto de tus proyectos actuales, así que la curva de entrada con la IA de programación va a ser mínima.

### Estructura de carpetas sugerida

```
src/
  components/
    ui/              (shadcn)
    layout/           (Navbar, Footer, PageContainer)
    charts/           (DonutChart, BarChart wrappers)
    kpi/              (KpiCard)
  data/
    mockData.ts       (todos los datos mockeados, centralizados)
  pages/
    Landing.tsx
    Resumen.tsx
    Ingresos.tsx
    Egresos.tsx
    Faq.tsx
  App.tsx
  main.tsx
```

---

## Cómo usar este documento

Cada bloque de abajo es un **PROMPT independiente**. Pasáselos a la IA de programación **en orden**, uno por vez, esperando a que termine cada uno antes de pasar al siguiente. Cada prompt ya incluye el contexto necesario para que no se pierda nada en el camino.

---

## PROMPT 1 — Setup inicial del proyecto y sistema de diseño

```
Estoy armando un prototipo frontend para un Portal de Transparencia Financiera de una municipalidad (Municipalidad de Colonias Unidas). Es un MVP con datos mockeados, pensado para vecinos sin conocimientos contables, con foco en verse profesional, minimalista y transmitir confianza.

Quiero que armes el setup inicial del proyecto con:
- React + Vite + TypeScript
- TailwindCSS configurado
- shadcn-ui instalado y configurado
- react-router-dom para el ruteo
- recharts para gráficos

Identidad visual a configurar en Tailwind (como tokens/variables de tema, no hardcodeado):
- Color institucional principal: #477f32 (verde)
- Blanco y negro como colores base
- Definir también un color secundario cálido neutro (ámbar/naranja, ej. #d97706) que se va a usar exclusivamente para representar egresos/gastos más adelante — el verde institucional se reserva para ingresos y elementos de marca.
- Tipografía: una sans-serif geométrica y legible (Inter o similar), importada correctamente.

Estructura de carpetas a crear:
src/components/ui (shadcn)
src/components/layout
src/components/charts
src/components/kpi
src/data
src/pages
App.tsx y main.tsx con react-router-dom ya configurado (rutas vacías por ahora, las vamos a completar en los siguientes pasos).

No implementes ninguna vista todavía, solo el setup, el tema de diseño y el esqueleto de rutas.
```

---

## PROMPT 2 — Datos mockeados centralizados

```
Seguimos con el Portal de Transparencia Financiera de la Municipalidad de Colonias Unidas (mismo proyecto del paso anterior).

Necesito que crees el archivo src/data/mockData.ts con datos financieros mockeados (números genéricos pero creíbles, no reales) para un período mensual, con esta estructura:

INGRESOS (categorías, con: nombre, monto, descripción en lenguaje simple para un vecino sin conocimientos contables):
- Coparticipación Nacional
- Coparticipación Provincial
- Recaudación Local (tasas municipales)
- Otros ingresos

EGRESOS (categorías, con: nombre, monto, descripción en lenguaje simple):
- Obras Públicas
- Sueldos y Personal
- Mantenimiento Urbano
- Salud
- Educación y Cultura
- Administración

Además, calculá y exportá:
- totalIngresos
- totalEgresos
- balance (totalIngresos - totalEgresos)
- fecha de "última actualización" (mockeada)

Tipalo todo correctamente con TypeScript (interfaces/types). No agregues ninguna categoría que no esté en esta lista, no agregues sección de "obras en curso" ni ningún dato que no haya sido pedido acá.
```

---

## PROMPT 3 — Layout general (Navbar + estructura de páginas)

```
Seguimos con el Portal de Transparencia Financiera de la Municipalidad de Colonias Unidas (mismo proyecto).

Necesito el layout general que van a compartir las páginas internas del sistema (todas menos el Home/Landing, que va aparte y sin este layout).

Creá en src/components/layout:
- Navbar: con el nombre del portal y la frase "UNIDOS POR UNIDAS", y links a las 4 secciones internas: Inicio, Ingresos, Egresos, FAQ. Tiene que verse institucional, usando el verde #477f32 como color de marca. Tiene que ser responsive: en mobile, colapsar a un menú hamburguesa.
- Footer: simple, con el nombre de la municipalidad y un texto tipo "Portal de Transparencia Financiera".
- PageContainer: wrapper con el padding/max-width consistente para todas las páginas internas.

Armá también un componente Layout.tsx que combine Navbar + contenido (via Outlet de react-router-dom) + Footer, y usalo en las rutas internas (/inicio, /ingresos, /egresos, /faq) dentro de App.tsx. La ruta / (raíz) queda reservada para el Home/Landing que vamos a hacer en el siguiente paso, sin este layout.

No implementes el contenido de las páginas todavía, solo el layout y el ruteo.
```

---

## PROMPT 4 — Home / Landing previo al sistema

```
Seguimos con el Portal de Transparencia Financiera de la Municipalidad de Colonias Unidas (mismo proyecto).

Necesito la página Home/Landing (ruta /, sin el Navbar/Footer del layout interno) que sea la primera pantalla que ve el vecino, ANTES de entrar al dashboard. Su función es presentar brevemente qué es el portal y motivar a entrar.

Debe incluir:
- Identidad visual: verde #477f32, blanco y negro, con la frase "UNIDOS POR UNIDAS" presente.
- Un título claro tipo "Portal de Transparencia Financiera" con un subtítulo corto explicando el propósito: que cualquier vecino pueda ver de forma simple en qué se usa la plata del municipio.
- Una breve explicación (2-3 frases, lenguaje simple, sin tecnicismos) de qué se va a encontrar adentro (de dónde viene la plata, en qué se gasta).
- Un botón grande y protagonista, centrado, que diga algo como "Ingresar al Portal" y navegue a /inicio.
- Diseño limpio, minimalista, con mucho espacio en blanco, que transmita profesionalismo y confianza. Nada sobrecargado.
- Totalmente responsive (mobile-first).

No repliques el Navbar interno acá, esta pantalla es independiente y su único llamado a la acción es el botón central.
```

---

## PROMPT 5 — Vista "Inicio / Resumen"

```
Seguimos con el Portal de Transparencia Financiera de la Municipalidad de Colonias Unidas (mismo proyecto). Ya existen el layout interno y el archivo de datos mockeados (src/data/mockData.ts).

Necesito la página Inicio/Resumen (ruta /inicio), que es la primera vista dentro del sistema (después de entrar desde el Landing). Debe mostrar:

- 3 KPI cards grandes y protagonistas, usando componentes en src/components/kpi:
  1. Total Ingresos (color verde institucional)
  2. Total Egresos (color ámbar/naranja definido en el tema)
  3. Balance del período (neutro, en negro/gris oscuro)
- Debajo, un texto pequeño tipo "Última actualización: [fecha mockeada]" para reforzar que los datos están vivos.
- Un breve texto de bienvenida arriba de todo, explicando en una línea qué va a encontrar el vecino en esta sección.

Usá los datos de mockData.ts, no inventes valores nuevos acá. Diseño limpio, números como protagonistas visuales (tipografía grande), totalmente responsive: en mobile los KPI cards se apilan en columna.
```

---

## PROMPT 6 — Vista "Ingresos"

```
Seguimos con el Portal de Transparencia Financiera de la Municipalidad de Colonias Unidas (mismo proyecto). Ya existen el layout interno y mockData.ts.

Necesito la página Ingresos (ruta /ingresos), que muestra de dónde viene la plata del municipio. Debe incluir:

- Un título breve tipo "¿De dónde viene la plata?"
- Un gráfico (donut o barras horizontales, usando recharts) con las categorías de ingresos de mockData.ts (Coparticipación Nacional, Coparticipación Provincial, Recaudación Local, Otros ingresos), usando el verde institucional #477f32 y variaciones de tono del mismo para diferenciar categorías (no usar colores random fuera de la paleta de marca).
- Debajo o al lado del gráfico, una lista/cards de cada categoría con: nombre, monto, y su descripción en lenguaje simple (ya definida en mockData.ts). Nada de jerga contable adicional a la ya escrita en los datos.
- Responsive: en mobile, el gráfico arriba y las cards en columna debajo.

No agregues categorías ni datos que no estén en mockData.ts.
```

---

## PROMPT 7 — Vista "Egresos"

```
Seguimos con el Portal de Transparencia Financiera de la Municipalidad de Colonias Unidas (mismo proyecto). Ya existen el layout interno y mockData.ts.

Necesito la página Egresos (ruta /egresos), que muestra en qué se gasta la plata del municipio. Debe incluir:

- Un título breve tipo "¿En qué se gasta?"
- Un gráfico (donut o barras horizontales, usando recharts) con las categorías de egresos de mockData.ts (Obras Públicas, Sueldos y Personal, Mantenimiento Urbano, Salud, Educación y Cultura, Administración), usando el color ámbar/naranja definido en el tema (NO rojo) con variaciones de tono para diferenciar categorías.
- Debajo o al lado del gráfico, una lista/cards de cada categoría con: nombre, monto, y su descripción en lenguaje simple (ya definida en mockData.ts).
- Mismo estilo visual y de layout que la página de Ingresos, para que se sienta consistente (reutilizá los mismos componentes de charts/cards si aplica, solo cambiando la paleta de color).
- Responsive: mismo comportamiento que la página de Ingresos.

No agregues categorías ni datos que no estén en mockData.ts.
```

---

## PROMPT 8 — Vista "FAQ / Glosario"

```
Seguimos con el Portal de Transparencia Financiera de la Municipalidad de Colonias Unidas (mismo proyecto). Ya existen el layout interno.

Necesito la página FAQ (ruta /faq), con un glosario simple de 5 a 6 términos financieros/municipales explicados en lenguaje llano para un vecino sin conocimientos contables. Usá términos como: Coparticipación, Tasa Municipal, Partida Presupuestaria, Balance, Recaudación Local, Ejecución Presupuestaria (podés ajustar la lista a estos 6, sin agregar términos fuera de este ámbito).

Formato: acordeón (accordion de shadcn-ui) donde cada término se expande para mostrar su explicación. Diseño consistente con el resto del sistema (misma paleta, misma tipografía). Responsive.
```

---

## PROMPT 9 — Pulido final y revisión de responsive

```
Seguimos con el Portal de Transparencia Financiera de la Municipalidad de Colonias Unidas (mismo proyecto). Ya están implementadas todas las páginas: Landing, Inicio/Resumen, Ingresos, Egresos y FAQ.

Hacé una pasada de revisión general sobre todo el proyecto para:
1. Confirmar que la identidad visual (verde #477f32, blanco, negro, tipografía elegida) sea consistente en TODAS las pantallas.
2. Confirmar que el comportamiento responsive/mobile-first funcione correctamente en las 5 vistas (Landing, Inicio, Ingresos, Egresos, FAQ), incluyendo el Navbar con menú hamburguesa en mobile.
3. Revisar que no haya inconsistencias de espaciado, tamaños de fuente o alineación entre páginas.
4. Verificar que la navegación entre todas las secciones funcione correctamente (incluyendo el botón del Landing hacia /inicio).

No agregues ninguna funcionalidad ni sección nueva en este paso, es únicamente una pasada de control de calidad y consistencia visual sobre lo ya construido.
```

---

## Notas finales

- Los prompts están pensados para ejecutarse en orden y en la misma sesión/contexto de la IA de programación, para que no pierda el hilo del proyecto.
- Si en algún punto la IA se desvía o agrega algo no pedido (por ejemplo, la sección de "Obras en Curso"), recordale explícitamente que está fuera de alcance para este prototipo.
- Cuando quieras avanzar a una v2 con datos reales, conexión a backend, o la sección de Obras en Curso, conviene armar un documento nuevo con esa etapa para no mezclar contextos.