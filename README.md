# 🎣 Fishing Dashboard - Web App

Panel de control completo para pescadores con análisis en tiempo real, predictor de mareas, clima y registro de capturas.

## 🌟 Features

✅ **Dashboard Interactivo**
- Gráficos en tiempo real
- Estadísticas de capturas
- Análisis de tendencias

✅ **Predictor Inteligente**
- Mejores horas para pescar
- Predicción de mareas
- Análisis de clima

✅ **Mapa Interactivo**
- Zonas de pesca recomendadas
- Ubicación de capturas
- Rutas de pesca

✅ **Gestión de Capturas**
- Registro detallado
- Galería de fotos
- Historial completo

✅ **Autenticación Segura**
- Login con JWT
- Perfil de usuario
- Datos personalizados

✅ **Responsive Design**
- Mobile-first
- Tablet optimizado
- Desktop completo

## 🛠️ Stack Tecnológico

**Frontend:**
- React 18 + Vite
- Tailwind CSS
- Chart.js para gráficos
- Leaflet para mapas
- Axios para API calls

**Backend:**
- Node.js + Express
- MongoDB Atlas
- JWT Authentication
- dotenv para variables

**APIs Externas:**
- OpenWeatherMap (clima)
- TidalAPI (mareas)

## 📦 Instalación

### Requisitos
- Node.js >= 16
- MongoDB (Atlas Cloud)
- npm o yarn

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edita .env con tus credenciales
npm run dev
```

## 📝 Variables de Entorno

Crear archivo `.env` en backend:
```
MONGODB_URI=tu_mongodb_url
JWT_SECRET=tu_secret_key
OPENWEATHER_API_KEY=tu_api_key
TIDAL_API_KEY=tu_api_key
PORT=5000
FRONTEND_URL=http://localhost:5173
```

## 🚀 Desarrollo

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## 📚 API Endpoints

- `POST /api/auth/register` - Registro
- `POST /api/auth/login` - Login
- `GET /api/weather/:lat/:lon` - Clima actual
- `GET /api/tides/:location` - Predicción de mareas
- `GET /api/catches` - Mis capturas
- `POST /api/catches` - Registrar captura
- `GET /api/zones` - Zonas recomendadas
- `GET /api/stats` - Estadísticas

## 🎨 Estructura de Carpetas

```
fishing-dashboard/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── server.js
└── README.md
```

## 📄 Licencia

MIT

---

**Estatus:** En desarrollo 🚀
