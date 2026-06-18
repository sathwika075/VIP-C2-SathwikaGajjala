# Project Design Phase-II
## Data Flow Diagram & User Stories

| Field | Value |
|:---|:---|
| **Date** | 18 June 2026 |
| **Team ID** | SMARTBRIDGE-2026-NM |
| **Project Name** | NexusMart E-commerce Platform |
| **Maximum Marks** | 4 Marks |

---

## Data Flow Diagrams

A Data Flow Diagram (DFD) is a traditional visual representation of the information flows within a system. A neat and clear DFD can depict the right amount of the system requirement graphically. It shows how data enters and leaves the system, what changes the information, and where data is stored.

---

### DFD Level 0 (Context Diagram)

```
                    ┌──────────────┐
                    │   Customer   │
                    │  (End User)  │
                    └──────┬───────┘
                           │
          Registration,    │    Product Catalog,
          Login,           │    Order Confirmation,
          Product Search,  │    Cart Details,
          Cart Actions,    │    Order History
          Payment Info     │
                           ▼
                    ┌──────────────────┐
                    │                  │
                    │    NexusMart     │
                    │   E-commerce     │
                    │    Platform      │
                    │                  │
                    └──────┬───────────┘
                           │        │
              ┌────────────┘        └────────────┐
              │                                  │
              ▼                                  ▼
     ┌────────────────┐                 ┌────────────────┐
     │  Administrator │                 │  Stripe API    │
     │   (Admin)      │                 │  (Payment)     │
     └────────────────┘                 └────────────────┘
       Product CRUD,                     Payment Intent,
       Category Mgmt,                   Checkout Session
       Order Status,
       User Mgmt
```

---

### DFD Level 1 (Detailed Data Flow)

```
┌──────────────┐                                           ┌──────────────┐
│   Customer   │                                           │    Admin     │
└──────┬───────┘                                           └──────┬───────┘
       │                                                          │
       │  1. Register (name, email, password)                     │
       ├─────────────────────────┐                                │
       │                         ▼                                │
       │              ┌─────────────────────┐                     │
       │              │  1.0 Authentication │                     │
       │              │  Process            │                     │
       │              │  (Register / Login) │                     │
       │              └──────────┬──────────┘                     │
       │                         │                                │
       │                         │ Store/Verify                   │
       │                         ▼                                │
       │              ┌─────────────────────┐                     │
       │              │   D1: Users Store   │                     │
       │              │   (MongoDB)         │                     │
       │              └─────────────────────┘                     │
       │                                                          │
       │  2. Browse/Search Products                               │
       ├─────────────────────────┐                                │
       │                         ▼                                │
       │              ┌─────────────────────┐                     │
       │              │  2.0 Product        │◄────────────────────┤
       │              │  Management         │  CRUD Operations    │
       │              └──────────┬──────────┘                     │
       │                         │                                │
       │                         │ Fetch/Update                   │
       │                         ▼                                │
       │              ┌─────────────────────┐                     │
       │              │  D2: Products Store │                     │
       │              │  (MongoDB)          │                     │
       │              └─────────────────────┘                     │
       │                                                          │
       │  3. Add to Cart / Checkout                               │
       ├─────────────────────────┐                                │
       │                         ▼                                │
       │              ┌─────────────────────┐                     │
       │              │  3.0 Cart &         │                     │
       │              │  Checkout Process   │                     │
       │              └──────────┬──────────┘                     │
       │                         │                                │
       │              ┌──────────┼──────────┐                     │
       │              ▼          ▼          ▼                     │
       │    ┌──────────────┐ ┌────────┐ ┌──────────────┐          │
       │    │ D3: Orders   │ │ Stripe │ │ D4:Categories│          │
       │    │  Store       │ │  API   │ │   Store      │◄─────────┤
       │    │ (MongoDB)    │ │        │ │ (MongoDB)    │ Category  │
       │    └──────────────┘ └────────┘ └──────────────┘ CRUD     │
       │                                                          │
       │  4. View Order History                                   │
       ├─────────────────────────┐                                │
       │                         ▼                                │
       │              ┌─────────────────────┐                     │
       │              │  4.0 Order          │◄────────────────────┤
       │              │  Management         │  Status Updates     │
       │              └─────────────────────┘                     │
       │                                                          │
       ◄───── Product List, JWT Token, ────────────────────────────
              Order Confirmation, Cart Data
```

---

### DFD Level 2 (Authentication Process Detail)

```
┌──────────────┐
│   User       │
└──────┬───────┘
       │
       │ POST /api/auth/register
       │ {name, email, password}
       ▼
┌─────────────────────┐
│ 1.1 Validate Input  │
│  - Check required   │
│    fields            │
│  - Check duplicate  │
│    email             │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ 1.2 Hash Password   │
│  - bcrypt.genSalt(10)│
│  - bcrypt.hash()     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐         ┌─────────────────────┐
│ 1.3 Create User     │────────►│  D1: Users Store    │
│  - User.create()    │         │  (MongoDB)          │
└──────────┬──────────┘         └─────────────────────┘
           │
           ▼
┌─────────────────────┐
│ 1.4 Generate Token  │
│  - jwt.sign({id},   │
│    JWT_SECRET,       │
│    {expiresIn:30d}) │
└──────────┬──────────┘
           │
           ▼
     {_id, name, email, role, token}
     ──────────► User
```

---

## User Stories

Use the below template to list all the user stories for the product.

| User Type | Functional Requirement (Epic) | User Story Number | User Story / Task | Acceptance Criteria | Priority | Release |
|:---|:---|:---|:---|:---|:---|:---|
| **Customer (Web User)** | **Registration** | USN-1 | As a user, I can register for the application by entering my name, email, and password | I can access my account and see the product catalog after registration | High | Sprint-1 |
| | | USN-2 | As a user, my password is securely hashed using bcryptjs before being stored | My password is never stored in plain text in the database | High | Sprint-1 |
| | | USN-3 | As a user, I receive a JWT token upon successful registration for session management | I am automatically logged in and can access protected routes | High | Sprint-1 |
| | **Login** | USN-4 | As a user, I can log into the application by entering my email and password | I receive a JWT token and am redirected to the products page | High | Sprint-1 |
| | | USN-5 | As a user, I see an error message if I enter invalid credentials | I am shown "Invalid email or password" and remain on the login page | High | Sprint-1 |
| | **Product Browsing** | USN-6 | As a user, I can browse all available products on the catalog page | I can see product cards with name, image, price, and description | High | Sprint-1 |
| | | USN-7 | As a user, I can filter products by category (Fashion, Electronics, Mobiles, Groceries, Sports) | Only products matching the selected category are displayed | High | Sprint-1 |
| | | USN-8 | As a user, I can search for products by name using the search bar | Products matching my search keyword are shown in real-time | High | Sprint-1 |
| | **Cart Management** | USN-9 | As a user, I can add products to my shopping cart | The product appears in my cart with quantity and price | High | Sprint-2 |
| | | USN-10 | As a user, I can update the quantity of items in my cart | The subtotal and total amount update dynamically | High | Sprint-2 |
| | | USN-11 | As a user, I can remove items from my shopping cart | The item is removed and totals recalculate automatically | High | Sprint-2 |
| | | USN-12 | As a user, I can see a live breakdown of subtotal, shipping, tax, and total amount | All charges are transparently displayed before checkout | High | Sprint-2 |
| | **Checkout & Payment** | USN-13 | As a user, I can proceed to checkout and enter my billing address | My address is saved with the order record | High | Sprint-2 |
| | | USN-14 | As a user, I can pay securely using Stripe card payment | A Stripe checkout session is created and payment is processed | High | Sprint-2 |
| | | USN-15 | As a user, I receive an order confirmation after successful payment | An order is created with itemized details and status "Pending" | High | Sprint-2 |
| | **Order Management** | USN-16 | As a user, I can view my order history on my profile page | All my past orders are listed with date, items, amount, and status | Medium | Sprint-3 |
| | | USN-17 | As a user, I can cancel a pending order with a reason | The order status changes to "Cancelled" and reason is recorded | Medium | Sprint-3 |
| | **Wishlist** | USN-18 | As a user, I can add products to my wishlist | The product is saved to my wishlist in the database | Low | Sprint-4 |
| | | USN-19 | As a user, I can view and remove items from my wishlist | I can see my saved products and remove them individually | Low | Sprint-4 |
| **Administrator** | **Dashboard** | USN-20 | As an admin, I can view total sales, total users, and total orders on my dashboard | Key business metrics are displayed as summary cards | High | Sprint-3 |
| | **Product Management** | USN-21 | As an admin, I can create a new product with name, description, price, category, and image URL | The product appears in the catalog immediately | High | Sprint-3 |
| | | USN-22 | As an admin, I can update existing product details | Changes are reflected in the product catalog | High | Sprint-3 |
| | | USN-23 | As an admin, I can delete a product from the catalog | The product is permanently removed from the database | High | Sprint-3 |
| | **Category Management** | USN-24 | As an admin, I can create new product categories with name and image | The category appears in the category grid on the homepage | Medium | Sprint-3 |
| | | USN-25 | As an admin, I can delete existing categories | The category is removed from the grid and database | Medium | Sprint-3 |
| | **User Management** | USN-26 | As an admin, I can view all registered users with their details | A list of users (name, email, join date) is displayed | Medium | Sprint-3 |
| | | USN-27 | As an admin, I can delete user accounts | The user is removed from the database | Medium | Sprint-3 |
| | **Order Oversight** | USN-28 | As an admin, I can view all customer orders across the platform | All orders are listed with customer details, amounts, and statuses | High | Sprint-4 |
| | | USN-29 | As an admin, I can update the status of any order (Pending → Processing → Shipped → Delivered) | The order status is updated in the database and reflected to the customer | High | Sprint-4 |
