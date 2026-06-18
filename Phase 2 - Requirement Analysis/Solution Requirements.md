# Project Design Phase-II
## Solution Requirements (Functional & Non-functional)

| Field | Value |
|:---|:---|
| **Date** | 18 June 2026 |
| **Team ID** | SMARTBRIDGE-2026-NM |
| **Project Name** | NexusMart E-commerce Platform |
| **Maximum Marks** | 4 Marks |

---

## Functional Requirements

Following are the functional requirements of the proposed solution.

| FR No. | Functional Requirement (Epic) | Sub Requirement (Story / Sub-Task) |
|:---|:---|:---|
| **FR-1** | **User Registration** | Registration through Sign-up Form (name, email, password) |
| | | Password hashing using bcryptjs before storage |
| | | Duplicate email validation during registration |
| | | Auto-assignment of 'user' role upon registration |
| **FR-2** | **User Authentication** | Login via email and password with bcrypt comparison |
| | | JWT token generation with 24-hour expiration window |
| | | Token-based session management using Authorization headers |
| | | Admin detection and redirect to Admin Dashboard on login |
| **FR-3** | **Product Browsing & Search** | View all products on the product catalog page |
| | | Filter products dynamically by category (Fashion, Electronics, Mobiles, Groceries, Sports Equipments) |
| | | Real-time keyword search on product names |
| | | Product details display (name, description, price, image, category) |
| **FR-4** | **Category Management** | Display category grid cards with images on homepage |
| | | Admin: Create new categories with name and image URL |
| | | Admin: Delete existing categories |
| | | Dynamic category fetching from database |
| **FR-5** | **Shopping Cart Management** | Add products to cart with quantity selection |
| | | Update quantity of cart items dynamically |
| | | Remove items from cart |
| | | Live calculation of subtotal, shipping charges, tax, and total amount |
| | | Cart state management via React Context API |
| **FR-6** | **Checkout & Payment** | Stripe-integrated secure payment checkout |
| | | Billing address collection during checkout |
| | | Payment method selection (Card via Stripe) |
| | | Order creation upon successful payment with itemized receipt |
| | | Mock sandbox payment session for testing |
| **FR-7** | **Order Management** | Create new order with items, total amount, and shipping address |
| | | View personal order history on Profile page |
| | | Cancel pending orders with reason |
| | | Admin: View all customer orders across the platform |
| | | Admin: Update order status (Pending → Processing → Shipped → Delivered → Cancelled) |
| **FR-8** | **Admin Dashboard** | Display total sales amount, total user count, and total order count |
| | | Full product CRUD (Create, Read, Update, Delete) |
| | | Category management panel |
| | | User management with view and delete capabilities |
| | | Order oversight with status management |
| **FR-9** | **User Profile** | View user profile information (name, email) |
| | | View personal order history with order details |
| | | Cancel pending orders directly from profile |
| **FR-10** | **Wishlist** | Add products to wishlist |
| | | Remove products from wishlist |
| | | View wishlist items (populated with product details) |

---

## Non-functional Requirements

Following are the non-functional requirements of the proposed solution.

| NFR No. | Non-Functional Requirement | Description |
|:---|:---|:---|
| **NFR-1** | **Usability** | The application provides a clean, responsive UI built with React and Vanilla CSS. Navigation is intuitive with a fixed header, clear page routing, and a hero banner for discoverability. Category grid cards and search bar enhance product discovery. The admin dashboard uses simple card-based metrics and tabbed interfaces for easy management. |
| **NFR-2** | **Security** | User passwords are hashed using bcryptjs (salt rounds: 10) before database storage. Authentication is handled via JWT tokens with 24-hour expiration. Role-based access control (RBAC) protects admin endpoints using middleware that verifies `admin` role. API routes are protected by the `protect` middleware that validates Bearer tokens. Stripe handles sensitive payment data, keeping card information off the application server. |
| **NFR-3** | **Reliability** | The application uses MongoDB for persistent data storage with Mongoose ORM ensuring schema validation and data integrity. Auto-seeding on first launch guarantees the platform is always operational with demo data. Error handling is implemented across all API routes with proper HTTP status codes (400, 401, 403, 404, 500). |
| **NFR-4** | **Performance** | The frontend is built with Vite for fast hot module replacement (HMR) and optimized production builds. React's virtual DOM ensures efficient UI rendering. MongoDB queries use indexed fields for fast lookups. API responses are JSON-formatted for minimal payload size. Category and product filtering are handled server-side using MongoDB query operators. |
| **NFR-5** | **Availability** | The application is designed to run continuously with Express.js serving the backend on port 5000 and Vite dev server on port 5173. MongoDB connection auto-reconnects on failure. The database seeding mechanism ensures the platform is ready-to-use on fresh deployments without manual setup. CORS is enabled to allow cross-origin requests from the frontend. |
| **NFR-6** | **Scalability** | The MERN stack architecture supports horizontal scaling. The modular route structure (auth, products, orders, categories, payments, users) allows independent scaling of services. MongoDB's document-oriented design handles growing product catalogs and user bases. The separation of frontend (React/Vite) and backend (Express/Node.js) enables independent deployment and scaling. |
| **NFR-7** | **Maintainability** | Code is organized in a modular structure — models, middleware, routes on the backend and components, context on the frontend. ES Module imports (type: "module") ensure modern JavaScript practices. Each component has a single responsibility. The CartContext provider centralizes state management for checkout flows. |
