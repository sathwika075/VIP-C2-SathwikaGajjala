# Project Design Phase
## Problem – Solution Fit Template

| Field | Value |
|:---|:---|
| **Date** | 18 June 2026 |
| **Team ID** | SMARTBRIDGE-2026-NM |
| **Project Name** | NexusMart Platform |
| **Maximum Marks** | 2 Marks |

---

### Problem – Solution Fit Template

The Problem-Solution Fit simply means that you have found a problem with your customer and that the solution you have realized for it actually solves the customer's problem. It helps entrepreneurs, marketers and corporate innovators identify behavioral patterns and recognize what would work and why.

**Purpose:**
- Solve complex problems in a way that fits the state of your customers.
- Succeed faster and increase your solution adoption by tapping into existing mediums and channels of behavior.
- Sharpen your communication and marketing strategy with the right triggers and messaging.
- Increase touch-points with your company by finding the right problem-behavior fit and building trust by solving frequent annoyances, or urgent or costly problems.
- Understand the existing situation in order to improve it for your target group.

**References:**
- [https://www.ideahackers.network/problem-solution-fit-canvas/](https://www.ideahackers.network/problem-solution-fit-canvas/)
- [https://medium.com/@epicantus/problem-solution-fit-canvas-aa3dd59cb4fe](https://medium.com/@epicantus/problem-solution-fit-canvas-aa3dd59cb4fe)

---

## Problem-Solution Fit Canvas: NexusMart E-commerce Platform

### 1. CUSTOMER SEGMENT

| Attribute | Details |
|:---|:---|
| **Target Customer 1** | Online shoppers aged 18–40 who prefer browsing and purchasing products from the convenience of their homes |
| **Target Customer 2** | Small business owners / store administrators who need a cost-effective, integrated platform to manage their online storefront |
| **Geography** | India (primary), scalable to global markets |
| **Tech Profile** | Moderate to high internet literacy, comfortable with web-based applications |

---

### 2. PROBLEMS (Customer Pain Points)

| Problem # | Problem Description | Severity |
|:---|:---|:---|
| **P-1** | Online shoppers face cluttered product listings without effective category-based filtering or real-time search, making product discovery time-consuming | High |
| **P-2** | Many e-commerce platforms have hidden charges at checkout (shipping, tax), causing cart abandonment due to lack of transparent pricing | High |
| **P-3** | Customers are anxious about payment security on unknown platforms, especially when the checkout process looks unprofessional or lacks trusted payment gateways | High |
| **P-4** | Users cannot easily track their order history, view delivery status, or cancel orders from a single centralized profile page | Medium |
| **P-5** | Store administrators lack an integrated dashboard that combines product CRUD, category management, order tracking, and user oversight in one place | High |
| **P-6** | Registration processes on many platforms are overly complex, requiring too many fields and lacking clear error feedback | Medium |

---

### 3. EXISTING ALTERNATIVES (How Customers Solve These Today)

| Alternative | Limitation |
|:---|:---|
| Large marketplaces (Amazon, Flipkart) | Too complex for small businesses to set up; high commission fees; no custom branding |
| Shopify / WooCommerce | Monthly subscription costs; requires technical setup; steep learning curve for admin |
| Social media selling (Instagram, WhatsApp) | No integrated cart, payment, or order tracking; manual order management |
| Custom-built websites | Expensive development; time-consuming; requires dedicated IT team for maintenance |
| Spreadsheets for order tracking | Error-prone; no real-time updates; cannot scale with growing orders |

---

### 4. SOLUTION (NexusMart's Approach)

| Solution # | Solution Description | Addresses Problem |
|:---|:---|:---|
| **S-1** | **Dynamic Category Filtering & Real-time Search**: Products organized into 5 clear categories (Fashion, Electronics, Mobiles, Groceries, Sports) with keyword search that filters results as you type | P-1 |
| **S-2** | **Transparent Cart & Pricing**: Shopping cart shows live breakdown of subtotal, shipping charges, tax, and final total before checkout — no hidden fees | P-2 |
| **S-3** | **Stripe-Integrated Secure Payment**: Industry-standard Stripe checkout handles all payment processing, providing PCI-DSS compliance and trust signals | P-3 |
| **S-4** | **Centralized User Profile**: Profile page shows complete order history with status tracking (Pending → Processing → Shipped → Delivered) and one-click order cancellation | P-4 |
| **S-5** | **Integrated Admin Dashboard**: Single-page admin panel with tabs for dashboard metrics (sales, users, orders), product CRUD, category management, user oversight, and order status updates | P-5 |
| **S-6** | **Simple Registration & JWT Auth**: Clean 3-field registration (name, email, password) with bcrypt security and instant JWT-based login — no unnecessary complexity | P-6 |

---

### 5. KEY METRICS (How We Measure Success)

| Metric | Target | Measurement Method |
|:---|:---|:---|
| Cart Abandonment Rate | < 20% | Track orders created vs carts initiated |
| User Registration Conversion | > 80% of visitors who reach registration | Track registration API success rate |
| Admin Task Completion Time | < 2 minutes for product CRUD operations | Measure time from dashboard load to action completion |
| Order Fulfillment Rate | > 95% orders reach "Delivered" status | Track order status transitions |
| Average Session Duration | > 5 minutes | Track user engagement on product catalog |

---

### 6. UNIQUE VALUE PROPOSITION

> **NexusMart provides a clean, secure, and fully-integrated e-commerce experience** where customers can browse, filter, search, and purchase products with transparent pricing and Stripe-secured payments — while administrators manage their entire storefront (products, categories, orders, users) from a single, intuitive dashboard. Built on the proven MERN stack, NexusMart delivers the simplicity of a modern web app without the overhead of subscription-based platforms.

---

### 7. CHANNELS (How We Reach Customers)

| Channel | Description |
|:---|:---|
| **Web Browser** | Responsive React.js frontend accessible on any modern browser (Chrome, Firefox, Edge, Safari) |
| **Direct URL** | Frontend served at `localhost:5173` (dev) or deployed domain |
| **API Access** | RESTful API at `localhost:5000/api` for potential mobile app or third-party integrations |
| **Admin Panel** | Built-in admin dashboard accessible via admin login (admin@nexusmart.com) |

---

### 8. COST STRUCTURE

| Cost Item | Type | Details |
|:---|:---|:---|
| MongoDB Atlas / Local DB | Infrastructure | Free tier (512MB) or local MongoDB installation |
| Stripe Payment Processing | Transaction | 2.9% + 30¢ per successful transaction (Stripe standard) |
| Node.js / Express.js Hosting | Infrastructure | Free on local, or cloud hosting (Render, Railway, Heroku) |
| React Frontend Hosting | Infrastructure | Free on Vercel, Netlify, or similar JAMstack platforms |
| Unsplash Images | Content | Free tier for product/category images |
| Development | One-time | Individual developer (Gajjala Sathwika) — no ongoing cost |
