# Prueba Técnica – Front-End (Next.js + Tailwind CSS)

Este proyecto corresponde a una prueba técnica para el rol de **Desarrollador Front-End**, cuyo objetivo es demostrar habilidades en el desarrollo de aplicaciones web modernas utilizando **Next.js**, **Tailwind CSS** y buenas prácticas de arquitectura de componentes.

## Descripción

La aplicación implementa un **CRUD completo** consumiendo la API pública de **JSONPlaceholder**, aplicando una arquitectura basada en **Atomic Design**, con un enfoque en organización del código, reutilización de componentes y diseño responsive.

## Tecnologías Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- React Hook Form
- Zod
- JSONPlaceholder API

## Arquitectura

El proyecto sigue el enfoque **Atomic Design**

## Configuración de Variables de Entorno

El proyecto requiere un archivo `.env` en la raíz del proyecto. Este archivo **NO está incluido en el repositorio** por razones de seguridad (está en `.gitignore`).

Crea el archivo `.env` con el siguiente contenido:

```env
NEXT_PUBLIC_API_BASE_URL=https://jsonplaceholder.typicode.com
NEXT_PUBLIC_API_TIMEOUT=10000
```

> ⚠️ **Nota:** En un proyecto real, **NUNCA** se deben exponer las variables de entorno en la documentación pública. Se documentan aquí únicamente con fines de evaluación de esta prueba técnica, ya que se trata de una API pública sin credenciales sensibles.

**Nota:** Las variables de entorno son obligatorias para que la aplicación funcione correctamente.

## Ejecutar el Proyecto

```bash
# Instalar dependencias
yarn install

# Configurar el archivo .env.local (ver sección anterior)

# Ejecutar en desarrollo
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

```

## Scripts Disponibles

- `yarn dev` - Inicia el servidor de desarrollo
- `yarn build` - Construye la aplicación para producción
- `yarn start` - Inicia la aplicación en modo producción
- `yarn lint` - Ejecuta ESLint

## Deploy

El proyecto está optimizado para desplegarse en [Vercel](https://vercel.com).

## 🌐 Demo

**[https://interfell-epayco.vercel.app](https://interfell-epayco.vercel.app)**
```
