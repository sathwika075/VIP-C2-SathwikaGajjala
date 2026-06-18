# Ideation Phase
## Brainstorming, Idea Generation & Prioritization

| Field | Value |
|:---|:---|
| **Date** | 18 June 2026 |
| **Team ID** | SMARTBRIDGE-2026-NM |
| **Project Name** | NexusMart E-commerce Platform |
| **Maximum Marks** | 4 Marks |

---

### Overview

This document captures the brainstorming process, idea generation, and prioritization for the NexusMart E-commerce Platform. The team followed a structured 3-step process to identify, evaluate, and prioritize ideas for implementation.

**Reference:** [https://www.mural.co/templates/brainstorm-and-idea-prioritization](https://www.mural.co/templates/brainstorm-and-idea-prioritization)

---

## Step-1: Team Gathering, Collaboration and Select the Problem Statement

### Selected Problem Statement
> Online shoppers face challenges in finding quality products, making secure payments, and managing their orders on a single, user-friendly platform. Small business administrators need an integrated solution to manage their product catalog, process orders, and track sales metrics without juggling multiple tools.

### Team Collaboration Summary

| Activity | Details |
|:---|:---|
| **Team Size** | 1 (Individual Project — Gajjala Sathwika) |
| **Collaboration Method** | Self-directed research, competitive analysis, and user persona development |
| **Problem Domain** | E-commerce / Online Shopping & Store Management |
| **Target Users** | Online Shoppers (B2C) and Store Administrators |
| **Duration** | 1 Week (Research & Problem Identification) |

### Key Observations from Research
- Over 70% of online shoppers abandon carts due to poor UX and payment security concerns
- Small businesses need affordable, integrated admin dashboards for product & order management
- Category-based filtering and real-time search are top-requested features on e-commerce platforms
- Stripe payment integration provides the most developer-friendly secure checkout solution

---

## Step-2: Brainstorm, Idea Listing and Grouping

### Idea Categories & Listings

#### Category A: User Experience & Frontend
| Idea # | Idea Description |
|:---|:---|
| A-1 | Build a responsive product catalog with hero banner and category grid cards |
| A-2 | Implement real-time product search with keyword filtering |
| A-3 | Dynamic category-based filtering (Fashion, Electronics, Mobiles, Groceries, Sports) |
| A-4 | Clean, modern shopping cart with live price calculations (subtotal, tax, shipping) |
| A-5 | User profile page with order history and cancel functionality |
| A-6 | Separate login and registration pages with form validation |

#### Category B: Payment & Checkout
| Idea # | Idea Description |
|:---|:---|
| B-1 | Stripe integration for secure card-based payment processing |
| B-2 | Checkout page with billing address collection and order summary |
| B-3 | Mock sandbox payment for testing without real transactions |
| B-4 | Payment status tracking (Paid/Pending/Failed) on order records |

#### Category C: Admin & Management
| Idea # | Idea Description |
|:---|:---|
| C-1 | Admin dashboard with total sales, users count, and order count metrics |
| C-2 | Full product CRUD (Create, Read, Update, Delete) capability |
| C-3 | Category management (add/delete categories with images) |
| C-4 | User management panel to view and delete user accounts |
| C-5 | Order management with status updates (Pending → Processing → Shipped → Delivered) |

#### Category D: Security & Authentication
| Idea # | Idea Description |
|:---|:---|
| D-1 | JWT-based authentication with 24-hour token expiration |
| D-2 | Bcrypt password hashing for secure credential storage |
| D-3 | Role-based access control (User vs Admin) with protected routes |
| D-4 | Auth middleware for API route protection |

#### Category E: Backend & Database
| Idea # | Idea Description |
|:---|:---|
| E-1 | RESTful API with modular route architecture (auth, products, orders, payments) |
| E-2 | MongoDB with Mongoose ORM for data persistence |
| E-3 | Auto-seeding of demo data (products, categories, admin account) |
| E-4 | Wishlist functionality for registered users |

---

## Step-3: Idea Prioritization

### Prioritization Matrix (Impact vs Effort)

| Priority | Idea ID | Idea | Impact | Effort | Decision |
|:---|:---|:---|:---|:---|:---|
| 🔴 **Must Have** | A-1 | Responsive product catalog with hero banner | High | Medium | ✅ Implement in Sprint 1 |
| 🔴 **Must Have** | A-2 | Real-time product search | High | Low | ✅ Implement in Sprint 1 |
| 🔴 **Must Have** | A-3 | Category-based filtering | High | Low | ✅ Implement in Sprint 1 |
| 🔴 **Must Have** | A-4 | Shopping cart with live calculations | High | Medium | ✅ Implement in Sprint 2 |
| 🔴 **Must Have** | A-6 | Login and Registration pages | High | Low | ✅ Implement in Sprint 1 |
| 🔴 **Must Have** | B-1 | Stripe payment integration | High | High | ✅ Implement in Sprint 2 |
| 🔴 **Must Have** | C-1 | Admin dashboard with metrics | High | Medium | ✅ Implement in Sprint 3 |
| 🔴 **Must Have** | C-2 | Product CRUD operations | High | Medium | ✅ Implement in Sprint 3 |
| 🔴 **Must Have** | D-1 | JWT authentication | High | Medium | ✅ Implement in Sprint 1 |
| 🔴 **Must Have** | D-2 | Bcrypt password hashing | High | Low | ✅ Implement in Sprint 1 |
| 🔴 **Must Have** | D-3 | Role-based access control | High | Medium | ✅ Implement in Sprint 1 |
| 🔴 **Must Have** | E-1 | RESTful API architecture | High | High | ✅ Implement in Sprint 1 |
| 🔴 **Must Have** | E-2 | MongoDB with Mongoose | High | Medium | ✅ Implement in Sprint 1 |
| 🟡 **Should Have** | A-5 | Profile page with order history | Medium | Medium | ✅ Implement in Sprint 3 |
| 🟡 **Should Have** | B-2 | Checkout with billing address | Medium | Low | ✅ Implement in Sprint 2 |
| 🟡 **Should Have** | C-3 | Category management | Medium | Low | ✅ Implement in Sprint 3 |
| 🟡 **Should Have** | C-4 | User management panel | Medium | Low | ✅ Implement in Sprint 3 |
| 🟡 **Should Have** | C-5 | Order status management | Medium | Medium | ✅ Implement in Sprint 4 |
| 🟡 **Should Have** | E-3 | Auto-seeding of demo data | Medium | Low | ✅ Implement in Sprint 1 |
| 🟢 **Nice to Have** | B-3 | Mock sandbox payment | Low | Low | ✅ Implement in Sprint 2 |
| 🟢 **Nice to Have** | B-4 | Payment status tracking | Low | Low | ✅ Implement in Sprint 4 |
| 🟢 **Nice to Have** | E-4 | Wishlist functionality | Low | Medium | ✅ Implement in Sprint 4 |
