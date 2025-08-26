# 📚 Mini Library 2.0 – React + FastAPI

Este proyecto es una aplicación web **fullstack** para gestión de una biblioteca.  
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/) con Python.  
- **Frontend**: [React + Vite](https://vitejs.dev/).  

---

## 🚀 Características
- API REST con **FastAPI** para gestionar libros, autores y préstamos.
- Interfaz en **React** rápida y modular.
- Comunicación frontend ↔ backend mediante **fetch/axios**.
- Soporte para despliegue local y en la nube.

---

## ⚙️ Requisitos previos
Asegúrate de tener instalados:
- [Python 3.10+](https://www.python.org/downloads/)
- [Node.js 18+](https://nodejs.org/en/download/)
- [npm](https://docs.npmjs.com/)
- [Git](https://git-scm.com/)

---

## 📂 Estructura del proyecto
```
mini-library-2.0-react-fastapi/
│── backend/          # Código FastAPI
│   ├── main.py
│   ├── models.py
│   ├── routers/
│   └── requirements.txt
│
│── frontend/         # Código React con Vite
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md         # Documentación
```

---

## 🔧 Instalación y ejecución

### 1️⃣ Clonar repositorio
```bash
git clone https://github.com/tu-usuario/mini-library-2.0-react-fastapi.git
cd mini-library-2.0-react-fastapi
```

### 2️⃣ Backend – FastAPI
```bash
cd backend
python -m venv venv
venv\Scripts\activate   # (Windows)
source venv/bin/activate  # (Linux/Mac)

pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
👉 Disponible en: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 3️⃣ Frontend – React con Vite
```bash
cd frontend
npm install
npm run dev
```
👉 Disponible en: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Solución de errores comunes

### ❌ Error: `require() of ES Module`
✔️ En tu `package.json`, asegúrate de tener:
```json
{
  "type": "module"
}
```
✔️ O renombra `vite.config.js` → `vite.config.mjs`.

### ❌ Error en dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📌 Scripts útiles

### Backend
```bash
uvicorn main:app --reload --port 8000
```

### Frontend
```bash
npm run dev
npm run build
npm run preview
```

---

## ✨ Autor
Desarrollado por Juan camilo peña – Proyecto **Mini Library 2.0**
