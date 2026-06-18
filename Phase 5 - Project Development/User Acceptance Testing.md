# User Acceptance Testing (UAT) Template

| Field | Value |
|:---|:---|
| **Date** | 18 June 2026 |
| **Team ID** | SMARTBRIDGE-2026-NM |
| **Project Name** | NexusMart Platform |
| **Maximum Marks** | 5 Marks |

---

### Project Overview
* **Project Name:** NexusMart Platform
* **Project Description:** A fully integrated MERN stack e-commerce web application featuring real-time search, category filtering, a transparent cart, secure Stripe payments, user order history profiles, and an all-in-one Single-Page Admin Dashboard for system management.
* **Project Version:** v1.0.0
* **Testing Period:** 15 June 2026 to 18 June 2026
* **Testing Scope:**
  * User registration and authentication flows (JWT, Bcrypt).
  * Product browsing, real-time searching, and category filtering.
  * Shopping cart operations (add/remove, item updates, transparent calculations).
  * Stripe checkout process and webhook order creation.
  * Customer profile order logs and cancellation.
  * Admin dashboard operations: Dashboard stats, Product CRUD, Category CRUD, Order state update, User permissions administration.
* **Testing Environment:**
  * **URL/Location:** Frontend running at `http://localhost:5173`, Backend running at `http://localhost:5000`
  * **Credentials (User):** `user@gmail.com.com` / `password123`
  * **Credentials (Admin):** `admin@gmail.com.com` / `adminpassword`

---

### Test Cases

| Test Case ID | Test Scenario | Test Steps | Expected Result | Actual Result | Pass/Fail |
|:---|:---|:---|:---|:---|:---|
| **TC-001** | User Registration | 1. Navigate to Registration page.<br>2. Enter name, email, and password.<br>3. Click "Sign Up". | User account is successfully created and redirected to Login page. | User account created and redirected successfully. | Pass |
| **TC-002** | User Login & Authentication | 1. Navigate to Login page.<br>2. Enter registered credentials.<br>3. Click "Sign In". | JWT token is issued, stored in localStorage, and user is redirected to Dashboard catalog. | JWT token stored, user logged in and redirected. | Pass |
| **TC-003** | Product Search & Filter | 1. Type "shoes" in the search bar.<br>2. Select "Groceries" category filter. | Catalog displays only products matching "shoes" and category matches selection instantly. | Displayed products filtered dynamically in real time. | Pass |
| **TC-004** | Cart Pricing Transparency | 1. Add 2 items to the cart.<br>2. View Cart page.<br>3. Verify subtotal, tax (18%), shipping, and final total. | Price breakdown matches subtotal + tax + shipping exactly with no hidden fees. | Pricing verified to match calculations. | Pass |
| **TC-005** | Stripe Secure Checkout | 1. Click "Proceed to Checkout" from Cart.<br>2. Enter test card details on Stripe page.<br>3. Submit payment. | User is redirected to Success page; order is created in database with "Processing" status. | Stripe checkout processed, redirected to Success page, order created. | Pass |
| **TC-006** | Profile Order Cancellation | 1. Go to User Profile.<br>2. Locate the newly placed order.<br>3. Click "Cancel Order". | Order status changes to "Cancelled", and cancellation action is logged in database. | Order status updated to "Cancelled". | Pass |
| **TC-007** | Admin Product CRUD | 1. Log in as admin.<br>2. Go to Admin Dashboard -> Products tab.<br>3. Click "Add Product", fill form, and submit. | New product immediately shows up in product list and customer catalog. | Product added and verified in list and catalog. | Pass |
| **TC-008** | Admin Order Update | 1. Go to Admin Dashboard -> Orders tab.<br>2. Select an order and change status to "Shipped". | Order status updates in database and updates in customer's profile order log. | Status updated to "Shipped" and verified in customer profile. | Pass |

---

### Bug Tracking

| Bug ID | Bug Description | Steps to reproduce | Severity | Status | Additional feedback |
|:---|:---|:---|:---|:---|:---|
| **BG-001** | Cart count badge doesn't decrement when removing an item | 1. Add product to cart.<br>2. Click remove icon in cart drawer.<br>3. Badge in navbar still shows original count. | Medium | Closed | Fixed by dispatching `UPDATE_CART_COUNT` action to global state. |
| **BG-002** | Payment success redirect fails if webhook experiences network lag | 1. Complete Stripe payment.<br>2. Immediately close checkout window before webhook finishes. | High | Closed | Resolved by implementing a poll-fallback on the frontend checkout return page. |

---

### Sign-off
* **Tester Name:** Gajjala Sathwika
* **Date:** 18 June 2026
* **Signature:** *Gajjala Sathwika*

---

#### Notes
1. Ensure that all test cases cover both positive and negative scenarios (e.g., login with invalid credentials, empty cart checkout attempts).
2. Encourage testers to provide detailed feedback, including UI/UX suggestions for improvement.
3. Bug tracking must update severity, status, and developer notes periodically.
4. Obtain sign-off from both the project manager and product owner before deployment to cloud servers.
