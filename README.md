# Nexus AI

A single-page website powered by a fully API-driven Laravel backend and a modern JavaScript frontend. Unlike traditional Laravel apps, this project **does not use Blade templates** — all content is served through a RESTful API and consumed by a separate frontend application, giving it a clean, decoupled architecture with a full admin panel for content management.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Architecture](#-project-architecture)
- [API Documentation](#-api-documentation)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Authentication](#-authentication)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🔎 Overview

Nexus AI is a single-page marketing/portfolio-style website where **all dynamic sections** — Hero, About, Team, Testimonials, Services, Features, Portfolio, FAQs, and Contact Messages — are fully manageable through an **admin panel** and served via a REST API. The frontend fetches data dynamically from the backend, meaning any update made in the admin panel reflects instantly on the live site without touching the frontend codebase.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Laravel (API-only, no Blade views) |
| Frontend | JavaScript-based SPA (Vite / `npm run dev`) |
| Database | MySQL / MariaDB (via Eloquent ORM) |
| API Style | RESTful JSON API |
| Auth | Token/Session-based (Admin protected routes) |

---

## ✨ Features

- Fully decoupled **frontend/backend** architecture
- Complete **CRUD operations** for every content resource
- Centralized, consistent **RESTful API design**
- **Admin panel** to manage all site content in real time
- **Public endpoints** for read-only content delivery
- **Rate-limited** public contact form submission
- **Protected admin endpoints** for create/update/delete actions and viewing submitted messages

---

## 🏗 Project Architecture

```
nexus-ai/
├── backend/              # Laravel API application
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/Api/   # Resource controllers (About, Hero, Team, etc.)
│   │   └── Models/                # Eloquent models
│   ├── routes/
│   │   └── api.php                # All API route definitions
│   └── ...
│
└── frontend/             # SPA frontend (fetches data from the API)
    ├── src/
    │   ├── pages/                 # Hero, About, Team, Services, etc.
    │   └── services/               # API service calls
    └── ...
```

> **Note:** Adjust the folder structure above if your repository layout differs (e.g., monorepo vs. two separate repos).

---

## 📡 API Documentation

**Base URL:**
```
http://127.0.0.1:8000/api
```

### Standard Endpoint Pattern

Every resource follows the same predictable REST pattern, where `{resource}` is the plural resource name (e.g. `services`, `team`, `faqs`):

| Method | Endpoint | Action | Access |
|---|---|---|---|
| `GET` | `/api/{resource}` | List all records | 🌐 Public |
| `GET` | `/api/{resource}/{id}` | Get a single record | 🌐 Public |
| `POST` | `/api/{resource}` | Create a new record | 🔒 Admin only |
| `PUT` | `/api/{resource}/{id}` | Update a record | 🔒 Admin only |
| `DELETE` | `/api/{resource}/{id}` | Delete a record | 🔒 Admin only |
| `POST` | `/api/contact` | Submit contact form | 🌐 Public (rate limited) |
| `GET` | `/api/contact` | List all contact messages | 🔒 Admin only |

### Resources Covered

| Resource | Public Endpoint |
|---|---|
| About | `GET /api/about` |
| Heroes | `GET /api/heroes` |
| Portfolio | `GET /api/portfolios` |
| Team | `GET /api/team` |
| Testimonials | `GET /api/testimonials` |
| Services | `GET /api/services` |
| Features | `GET /api/features` |
| FAQ | `GET /api/faqs` |
| Contact Messages | `GET /api/contact-messages` *(Admin only)* |

Each of the resources above also supports the full CRUD pattern (`POST`, `PUT`, `DELETE`) under admin authentication, following the same structure shown in the **Standard Endpoint Pattern** table.

---

## ⚙️ Installation & Setup

Follow these steps to get the project running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/bismagul202/nexus-ai-landing-page.git
cd nexus-ai-landing-page
```

### 2. Backend Setup (Laravel API)

```bash
cd backend

# Install PHP dependencies
composer install

# Copy the environment file and configure your database
cp .env.example .env
php artisan key:generate

# Run migrations (and seeders, if available)
php artisan migrate --seed

# Start the Laravel development server
php artisan serve
```

The API will now be available at:
```
http://127.0.0.1:8000/api
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Once both servers are running, open the frontend URL shown in your terminal (typically `http://localhost:5173`) — the site will fetch all sections (Hero, About, Team, Services, Testimonials, Features, FAQs) live from the API.

---

## 🔐 Environment Variables

Configure the following in your backend `.env` file:

```env
APP_NAME=NexusAI
APP_URL=http://127.0.0.1:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nexus_ai
DB_USERNAME=root
DB_PASSWORD=

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173
```

And in your frontend `.env`:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

---

## 🔑 Authentication

- All **GET** requests for content resources are public and require no authentication.
- **POST**, **PUT**, and **DELETE** requests are restricted to authenticated admin users.
- The **contact form submission** (`POST /api/contact`) is public but rate-limited to prevent abuse.
- Only admins can view submitted contact messages via `GET /api/contact` or `GET /api/contact-messages`.

> Admin authentication should be handled via Laravel Sanctum (or your chosen auth guard) — attach the issued token as a `Bearer` token in the `Authorization` header for all protected requests.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch and open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).