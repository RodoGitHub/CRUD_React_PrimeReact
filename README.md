# 🦄 CRUD con React + PrimeReact

Este proyecto es una aplicación simple de CRUD de "Unicornios" desarrollada con **React** y **PrimeReact**, que ofrece una interfaz moderna, limpia y con un excelente manejo de errores y experiencia de usuario.

---

## 🚀 Características

- 🎨 **UI moderna** con el tema `nano` de PrimeReact, sin CSS personalizado.
- 🧩 **Componentes reutilizables**: separación entre lógica y vista (`ObjectsContainer` y `ObjectsView`).
- ✅ **Validaciones de formulario** en tiempo real.
- 🔔 **Notificaciones Toast** para feedback visual de éxito y errores.
- ⚙️ **Manejo robusto de errores de API**, con capturas y mensajes al usuario.
- 💨 **Animaciones sutiles** con PrimeFlex (`hover`, `transition`, etc.).
- 📱 **Diseño responsive**, adaptable a todos los dispositivos.
- ✏️ **Edición y eliminación** directa desde la tabla.

---

## 🛠️ Requisitos previos

- Node.js v16 o superior
- npm

---

## 📦 Instalación

Cloná el repositorio y corré el proyecto:

```bash
git clone https://github.com/RodoGitHub/CRUD_React_PrimeReact.git
cd CRUD_React_PrimeReact
npm install
npm run dev
```

---

## 📦 Instalación de dependencias (si querés hacerlo manualmente)

```bash
# Instalar React (si no lo tenés)
npm install react react-dom

# Instalar PrimeReact y estilos
npm install primereact primeicons primeflex
```

> 📁 Todos los paquetes también están definidos en `package.json`. Usá `npm install` para instalarlos automáticamente.

---

## 🗂️ Estructura del proyecto

```
src/
├── ObjectsContainer.jsx  
├── ObjectsView.jsx        
└── main.jsx              
```

---

## 🧠 Funcionalidades clave

- Crear, listar, editar y eliminar objetos "unicornio".
- Uso de componentes como `InputText`, `InputNumber`, `Button`, `DataTable` y `Toast`.
- Feedback visual animado y fluido.
- Manejo de errores al llamar a la API (`try/catch`, validaciones de status).

---

## ✨ Mejoras a futuro

- Agregar filtros o buscador en la tabla.
- Reemplazar formulario inline por `Dialog` de edición.
- Modo oscuro activable.
- Guardado offline usando `localStorage`.
- Paginación y ordenamiento avanzados.

---

## 👨‍💻 Autores del equipo

- Rodo Palacios
- Joni Detsplas
- Nico Cardinali
- Cristian Druetta
 
