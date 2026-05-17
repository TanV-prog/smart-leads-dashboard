# Smart Leads Dashboard

A full-stack Lead Management Dashboard built with the MERN stack, TypeScript, and TailwindCSS.

## Features

- JWT Authentication (Register, Login, Protected Routes)
- Role-Based Access Control (Admin, Sales)
- Leads CRUD (Create, Read, Update, Delete)
- Advanced Filtering (Status, Source, Search, Sort)
- Debounced Search
- Backend Pagination (10 records/page)
- CSV Export
- Responsive UI with Loading & Error States
- Docker Support

## Tech Stack

**Frontend:** React, TypeScript, TailwindCSS, Axios, React Router
**Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose, JWT, bcrypt

## Setup Instructions

### Prerequisites
- Node.js v18+
- MongoDB
- Docker (optional)

### Backend
cd backend
cp .env.example .env
npm install
npm run dev

### Frontend
cd frontend
npm install
npm run dev

### Docker
docker-compose up

## API Documentation

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | /api/auth/register | Register user | No |
| POST | /api/auth/login | Login user | No |
| GET | /api/auth/me | Get current user | Yes |
| GET | /api/leads | Get all leads | Yes |
| POST | /api/leads | Create lead | Yes |
| PUT | /api/leads/:id | Update lead | Yes |
| DELETE | /api/leads/:id | Delete lead | Admin |
| GET | /api/leads/export/csv | Export CSV | Yes |

## Environment Variables

PORT=5000
MONGO_URI=mongodb://localhost:27017/smartleads
JWT_SECRET=your_jwt_secret
NODE_ENV=development

## Folder Structure

smart-leads-dashboard/
├── backend/
│   └── src/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── middleware/
│       ├── types/
│       └── config/
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       ├── services/
│       ├── context/
│       └── types/
└── docker-compose.yml