# Project Design Phase
## Solution Architecture

| Field | Value |
|:---|:---|
| **Date** | 18 June 2026 |
| **Team ID** | SMARTBRIDGE-2026-NM |
| **Project Name** | NexusMart E-commerce Platform |
| **Maximum Marks** | 4 Marks |

---

### Solution Architecture Description

Solution architecture bridges the gap between business problems and technology solutions. NexusMart's architecture is a modern 3-Tier Web Architecture designed for scalability, security, and responsive performance.

#### Architectural Diagram

```mermaid
graph TD
    %% Clients
    subgraph Client Layer (Presentation)
        C_User[Customer Browser]
        C_Admin[Admin Browser]
    end

    %% Routing / Reverse Proxy / Static Hosting
    subgraph Hosting & Delivery Layer
        CDA[Vercel / Netlify CDN]
        Proxy[Nginx / Routing Gateway]
    end

    %% Backend Server
    subgraph Application Server Layer (Logic)
        API[Node.js / Express.js Server]
        Auth[JWT & Bcrypt Auth Middleware]
        U_Route[User Routes]
        P_Route[Product Routes]
        O_Route[Order Routes]
        C_Route[Category Routes]
    end

    %% External Interfaces
    subgraph External APIs
        Stripe[Stripe API Gateway]
    end

    %% Data Store
    subgraph Database Layer (Storage)
        DB[(MongoDB Database / Atlas)]
    end

    %% Connections
    C_User -->|HTTPS Requests| CDA
    C_Admin -->|HTTPS Requests| CDA
    CDA -->|API Calls / REST| Proxy
    Proxy -->|Route Requests| API
    
    API --> Auth
    Auth --> U_Route
    Auth --> P_Route
    Auth --> O_Route
    Auth --> C_Route
    
    O_Route -->|Initialize Checkout| Stripe
    C_User -->|Payment Details| Stripe
    Stripe -->|Webhook Confirmation| O_Route

    U_Route --> DB
    P_Route --> DB
    O_Route --> DB
    C_Route --> DB
```

#### Architectural Components & Technologies

| Layer | Component | Description | Technology Stack |
|:---|:---|:---|:---|
| **Presentation** | Frontend SPA | High-performance user interface displaying products, cart, profile, and admin dashboards | React.js, Tailwind CSS / Vanilla CSS |
| **Routing** | Static Server | Content Delivery Network for serving bundled static frontend assets | Vercel / Netlify |
| **Application** | API Gateway | Node.js runtime environment running an Express application serving REST API endpoints | Node.js, Express.js |
| **Security** | Auth Middleware | Authentication system using JSON Web Tokens (JWT) for session management and Bcrypt for hashing passwords | JSON Web Tokens, Bcrypt |
| **External** | Payments | Secure payment processing gateway handling checkout fields and webhooks | Stripe Checkout API |
| **Database** | Persistence Store | Document-based database for storing Users, Products, Categories, and Orders | MongoDB (Local / Atlas Cloud) |
| **Infrastructure** | Runtime Environment | Hosting for the backend API and database connections | Render / Railway (Backend) & MongoDB Atlas (DB) |
