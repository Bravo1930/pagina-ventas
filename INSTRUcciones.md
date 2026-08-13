# Instrucciones de Instalación y Setup

## 1. Instalar Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

## 2. Estructura del Proyecto

La aplicación sigue esta estructura de archivos:

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── TechStack.tsx
│   ├── Methodology.tsx
│   ├── CTA.tsx
│   ├── ChatBotWidget.tsx
│   ├── WhatsAppButton.tsx
│   └── Footer.tsx
```

## 3. Características Implementadas

### �� 🎨 Diseño y Estilo
- Modo oscuro premium con paleta de colores neón sobrios
- Fondo oscuro profundo (#0d0f17)
- Acentos en azul eléctrico/cyan (#3b82f6) y violeta/púrpura (#8b5cf6)
- Efectos glassmorphism y bordes sutiles con opacidad
- Tipografía moderna usando Inter

### �� 📱 Secciones de la Landing Page
1. **Header / Navbar** - Logo, navegación rápida, indicador de disponibilidad
2. **Hero Section** - Título impactante, subtítulo, CTA principal y secundario
3. **Services Section** - Grid interactivo de 6 pilares con efecto hover glow
4. **Tech & Marketing Stack** - Badges estilizados divididos en Desarrollo & Tech y Growth & Marketing
5. **Metodología / Proceso** - 4 pasos claros con timeline
6. **CTA Final & Footer** - Reafirmación de valor, copyright y enlaces sociales

### �� 🤖 Componentes Especiales de Interacción
- **ChatBotWidget.tsx**: Bot flotante interactivo (esquina inferior derecha) con:
  - Estado cerrado: Botón circular con animación de pulso
  - Estado abierto: Ventana de chat estilo Glassmorphism
  - Simulación interactiva con respuestas predefinidas
  - Indicador de tipeo y botón de conversión a WhatsApp

- **WhatsAppButton.tsx**: Botón directo de WhatsApp (esquina inferior izquierda) que abre:
  - https://wa.me/<NUMERO>?text=<MENSAJE_ENCODED>
  - Mensaje predeterminado: "Hola, vi tu página web y me gustaría cotizar sus servicios de software, marketing/ads y desarrollo."

### �� ⚡ Animaciones
Todas las animaciones implementadas con Framer Motion:
- Transiciones suaves al hacer scroll
- Efectos hover glow en tarjetas y botones
- Entrada de elementos basada en viewport
- Animaciones del bot de chat
- Animaciones de atención discretas

## 4. Cómo Ejecutar el Proyecto

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abre tu navegador en http://localhost:3000

## 5. Personalización

- Para cambiar el número de WhatsApp, reemplaza "TUNUMERO" en los componentes donde aparece
- Los colores pueden ajustarse en `tailwind.config.js`
- El contenido textual se puede modificar en cada componente respective