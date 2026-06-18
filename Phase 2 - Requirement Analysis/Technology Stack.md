# Project Design Phase-II
## Technology Stack (Architecture & Stack)

| Field | Value |
|:---|:---|
| **Date** | 18 June 2026 |
| **Team ID** | SMARTBRIDGE-2026-NM |
| **Project Name** | NexusMart E-commerce Platform |
| **Maximum Marks** | 4 Marks |

---

## Technical Architecture

The NexusMart E-commerce Platform follows the **MERN Stack Architecture** (MongoDB, Express.js, React, Node.js) in a **client-server model**. The React frontend acts as the client running on `localhost:5173`, and the Express/Node.js backend acts as the API server running on `localhost:5000`, communicating over RESTful APIs. MongoDB stores all persistent data as JSON-like documents.

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT LAYER (Browser)                             │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                     React.js + Vite (Port 5173)                          │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────────────────┐   │  │
│  │  │  Header  │  │HeroBanner│  │CategoryGrid│ │     ProductList       │   │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └────────────────────────┘   │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────────────────┐   │  │
│  │  │   Cart   │  │  Login   │  │ Register │  │       Profile         │   │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └────────────────────────┘   │  │
│  │  ┌──────────────────────┐  ┌───────────────────────────────────────┐     │  │
│  │  │   AdminDashboard     │  │   CartContext (State Management)     │     │  │
│  │  └──────────────────────┘  └───────────────────────────────────────┘     │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────┬────────────────────────────────────────────┘
                                     │ HTTP / REST API (JSON)
                                     │ Authorization: Bearer <JWT Token>
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          SERVER LAYER (Node.js + Express.js)                    │
│                              Backend API (Port 5000)                            │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                        MIDDLEWARE LAYER                                   │  │
│  │  ┌────────────────┐  ┌────────────────┐  ┌────────────────────────────┐  │  │
│  │  │ CORS Middleware│  │ JSON Parser    │  │ Auth Middleware (JWT)      │  │  │
│  │  └────────────────┘  └────────────────┘  │  - protect (token verify) │  │  │
│  │                                          │  - admin (role check)     │  │  │
│  │                                          └────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                          ROUTE LAYER                                      │  │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────────────┐   │  │
│  │  │ /api/auth    │ │ /api/products│ │ /api/orders  │ │ /api/payment   │   │  │
│  │  │ (register,   │ │ (CRUD, search│ │ (create, list│ │ (Stripe        │   │  │
│  │  │  login)      │ │  filter)     │ │  cancel)     │ │  checkout)     │   │  │
│  │  └──────────────┘ └──────────────┘ └──────────────┘ └────────────────┘   │  │
│  │  ┌──────────────┐ ┌──────────────┐                                       │  │
│  │  │/api/categories│ │ /api/users  │                                       │  │
│  │  │ (CRUD)       │ │ (list,       │                                       │  │
│  │  │              │ │  wishlist)   │                                       │  │
│  │  └──────────────┘ └──────────────┘                                       │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                          MODEL LAYER (Mongoose ORM)                       │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │  │
│  │  │  User    │  │ Product  │  │ Category │  │  Order   │                 │  │
│  │  │  Schema  │  │  Schema  │  │  Schema  │  │  Schema  │                 │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘                 │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────┬────────────────────────────────────────────┘
                                     │ Mongoose Connection
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          DATA LAYER (MongoDB)                                   │
│                     mongodb://localhost:27017/nexusmart                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  users        │  │  products    │  │  categories  │  │  orders      │       │
│  │  Collection   │  │  Collection  │  │  Collection  │  │  Collection  │       │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────────────────────────────────────────────────────────────────┘
                                     │
                    ┌────────────────┘
                    ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                      EXTERNAL SERVICES                                          │
│  ┌────────────────────────────┐  ┌────────────────────────────────────────┐     │
│  │  Stripe Payment Gateway   │  │  Unsplash (Product & Category Images) │     │
│  │  (Checkout Sessions API)  │  │  (External Image CDN)                 │     │
│  └────────────────────────────┘  └────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Table-1: Components & Technologies

| S.No | Component | Description | Technology |
|:---|:---|:---|:---|
| 1 | **User Interface** | Web-based responsive UI for browsing products, managing cart, and checkout. Admin dashboard for store management. | React.js 18, Vite 4.4, Vanilla CSS, React Router DOM 7 |
| 2 | **Application Logic-1 (Frontend State)** | Shopping cart state management, user authentication state, and page navigation logic | React Context API, React Hooks (useState, useContext) |
| 3 | **Application Logic-2 (Backend API)** | RESTful API server handling authentication, product management, order processing, and payment | Node.js, Express.js 4.18 |
| 4 | **Application Logic-3 (Authentication)** | User registration, login, token generation, and role-based access control middleware | JSON Web Token (JWT) 9.0, bcryptjs 3.0 |
| 5 | **Database** | NoSQL document database storing users, products, categories, and orders as JSON-like documents | MongoDB (Local via Compass or Atlas Cluster) |
| 6 | **ORM / Data Access** | Object-Relational Mapping for MongoDB with schema validation, timestamps, and population | Mongoose 7.3 |
| 7 | **Payment Gateway** | Secure payment processing for checkout with card-based transactions | Stripe SDK 22.2, @stripe/react-stripe-js 6.6, @stripe/stripe-js 9.8 |
| 8 | **Build Tool** | Fast development server with Hot Module Replacement (HMR) and optimized production bundling | Vite 4.4, @vitejs/plugin-react 4.0 |
| 9 | **Development Tools** | Auto-restart server on file changes, code linting, and type checking | Nodemon 2.0, ESLint 8.45, eslint-plugin-react 7.32 |
| 10 | **External API (Images)** | Product and category images served from external CDN | Unsplash Image API (direct URLs) |
| 11 | **Infrastructure** | Local development environment with separate frontend and backend servers | Local Server: Node.js runtime, Frontend: `localhost:5173`, Backend: `localhost:5000` |

---

## Table-2: Application Characteristics

| S.No | Characteristics | Description | Technology |
|:---|:---|:---|:---|
| 1 | **Open-Source Frameworks** | React.js for frontend UI components, Express.js for backend REST API, Mongoose for MongoDB ORM, Vite for build tooling | React.js 18, Express.js 4.18, Mongoose 7.3, Vite 4.4 |
| 2 | **Security Implementations** | Password hashing with bcryptjs (10 salt rounds), JWT-based authentication with Bearer token scheme, Role-Based Access Control (admin middleware), Stripe handles PCI-DSS compliant payment processing | bcryptjs (SHA-256 based), JWT (HS256 signing), RBAC middleware, Stripe PCI compliance |
| 3 | **Scalable Architecture** | 2-tier architecture (Client + API Server) with modular route structure enabling independent scaling. MongoDB's horizontal scaling via sharding. Separation of concerns: Models, Middleware, Routes on backend; Components, Context on frontend | MERN Stack, Modular Express Routes, React Component Architecture |
| 4 | **Availability** | Express server auto-starts with seed data on launch. MongoDB auto-reconnection on connection failure. CORS enabled for cross-origin frontend requests. Environment variables via dotenv for deployment flexibility. | Express.js, dotenv, CORS middleware, Mongoose auto-reconnect |
| 5 | **Performance** | Vite's ESBuild-based bundling for near-instant HMR. React Virtual DOM for efficient rendering. Server-side MongoDB query filtering (category, search regex). JSON-only API responses for minimal payload size. Indexed MongoDB fields for fast lookups. | Vite (ESBuild), React Virtual DOM, MongoDB Indexing, JSON APIs |

---

## References
- [https://c4model.com/](https://c4model.com/)
- [https://www.mongodb.com/mern-stack](https://www.mongodb.com/mern-stack)
- [https://react.dev/](https://react.dev/)
- [https://expressjs.com/](https://expressjs.com/)
- [https://stripe.com/docs](https://stripe.com/docs)
- [https://vitejs.dev/](https://vitejs.dev/)
