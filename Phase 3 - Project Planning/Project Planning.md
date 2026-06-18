# Project Planning Phase
## Project Planning Template (Product Backlog, Sprint Planning, Stories, Story Points)

| Field | Value |
|:---|:---|
| **Date** | 18 June 2026 |
| **Team ID** | SMARTBRIDGE-2026-NM |
| **Project Name** | NexusMart E-commerce Platform |
| **Maximum Marks** | 5 Marks |

---

## Product Backlog, Sprint Schedule, and Estimation (4 Marks)

### Product Backlog & Sprint Schedule

| Sprint | Functional Requirement (Epic) | User Story Number | User Story / Task | Story Points | Priority | Team Members |
|:---|:---|:---|:---|:---|:---|:---|
| **Sprint-1** | **Registration** | USN-1 | As a user, I can register for the application by entering my name, email, and password | 3 | High | Gajjala Sathwika |
| Sprint-1 | | USN-2 | As a user, my password is securely hashed using bcryptjs before storage | 2 | High | Gajjala Sathwika |
| Sprint-1 | | USN-3 | As a user, I receive a JWT token upon successful registration | 2 | High | Gajjala Sathwika |
| Sprint-1 | **Login** | USN-4 | As a user, I can log into the application by entering email & password | 2 | High | Gajjala Sathwika |
| Sprint-1 | | USN-5 | As a user, I see an error message for invalid credentials | 1 | High | Gajjala Sathwika |
| Sprint-1 | **Backend Setup** | USN-30 | Set up Express.js server with MongoDB connection, CORS, and dotenv | 3 | High | Gajjala Sathwika |
| Sprint-1 | | USN-31 | Create Mongoose models (User, Product, Category, Order) | 3 | High | Gajjala Sathwika |
| Sprint-1 | | USN-32 | Implement auth middleware (protect & admin role check) | 2 | High | Gajjala Sathwika |
| Sprint-1 | | USN-33 | Implement auto-seeding of products, categories, and admin user | 2 | Medium | Gajjala Sathwika |
| | | | **Sprint-1 Total** | **20** | | |
| **Sprint-2** | **Product Browsing** | USN-6 | As a user, I can browse all available products on the catalog page | 3 | High | Gajjala Sathwika |
| Sprint-2 | | USN-7 | As a user, I can filter products by category | 2 | High | Gajjala Sathwika |
| Sprint-2 | | USN-8 | As a user, I can search for products by name using the search bar | 2 | High | Gajjala Sathwika |
| Sprint-2 | **Cart Management** | USN-9 | As a user, I can add products to my shopping cart | 3 | High | Gajjala Sathwika |
| Sprint-2 | | USN-10 | As a user, I can update the quantity of items in my cart | 2 | High | Gajjala Sathwika |
| Sprint-2 | | USN-11 | As a user, I can remove items from my shopping cart | 1 | High | Gajjala Sathwika |
| Sprint-2 | | USN-12 | As a user, I can see live breakdown of subtotal, shipping, tax, and total | 2 | High | Gajjala Sathwika |
| Sprint-2 | **Frontend Setup** | USN-34 | Set up React + Vite project with component structure | 3 | High | Gajjala Sathwika |
| Sprint-2 | | USN-35 | Implement CartContext (React Context API) for cart state management | 2 | High | Gajjala Sathwika |
| | | | **Sprint-2 Total** | **20** | | |
| **Sprint-3** | **Checkout & Payment** | USN-13 | As a user, I can proceed to checkout and enter billing address | 2 | High | Gajjala Sathwika |
| Sprint-3 | | USN-14 | As a user, I can pay securely using Stripe card payment | 5 | High | Gajjala Sathwika |
| Sprint-3 | | USN-15 | As a user, I receive an order confirmation after successful payment | 2 | High | Gajjala Sathwika |
| Sprint-3 | **Order Management** | USN-16 | As a user, I can view my order history on my profile page | 3 | Medium | Gajjala Sathwika |
| Sprint-3 | | USN-17 | As a user, I can cancel a pending order with a reason | 2 | Medium | Gajjala Sathwika |
| Sprint-3 | **Homepage UI** | USN-36 | Implement Header component with navigation and auth status | 2 | High | Gajjala Sathwika |
| Sprint-3 | | USN-37 | Implement HeroBanner and CategoryGrid components | 2 | High | Gajjala Sathwika |
| Sprint-3 | | USN-38 | Style all pages with responsive Vanilla CSS | 2 | High | Gajjala Sathwika |
| | | | **Sprint-3 Total** | **20** | | |
| **Sprint-4** | **Admin Dashboard** | USN-20 | As an admin, I can view total sales, users, and orders on dashboard | 3 | High | Gajjala Sathwika |
| Sprint-4 | **Product Mgmt (Admin)** | USN-21 | As an admin, I can create a new product | 2 | High | Gajjala Sathwika |
| Sprint-4 | | USN-22 | As an admin, I can update existing product details | 2 | High | Gajjala Sathwika |
| Sprint-4 | | USN-23 | As an admin, I can delete a product from the catalog | 1 | High | Gajjala Sathwika |
| Sprint-4 | **Category Mgmt (Admin)** | USN-24 | As an admin, I can create new categories with name and image | 2 | Medium | Gajjala Sathwika |
| Sprint-4 | | USN-25 | As an admin, I can delete existing categories | 1 | Medium | Gajjala Sathwika |
| Sprint-4 | **User Mgmt (Admin)** | USN-26 | As an admin, I can view all registered users | 2 | Medium | Gajjala Sathwika |
| Sprint-4 | | USN-27 | As an admin, I can delete user accounts | 1 | Medium | Gajjala Sathwika |
| Sprint-4 | **Order Oversight (Admin)** | USN-28 | As an admin, I can view all customer orders | 2 | High | Gajjala Sathwika |
| Sprint-4 | | USN-29 | As an admin, I can update order status | 2 | High | Gajjala Sathwika |
| Sprint-4 | **Wishlist** | USN-18 | As a user, I can add products to my wishlist | 1 | Low | Gajjala Sathwika |
| Sprint-4 | | USN-19 | As a user, I can view and remove wishlist items | 1 | Low | Gajjala Sathwika |
| | | | **Sprint-4 Total** | **20** | | |

---

## Project Tracker, Velocity & Burndown Chart (4 Marks)

### Sprint Tracker

| Sprint | Total Story Points | Duration | Sprint Start Date | Sprint End Date (Planned) | Story Points Completed (as on Planned End Date) | Sprint Release Date (Actual) |
|:---|:---|:---|:---|:---|:---|:---|
| Sprint-1 | 20 | 6 Days | 02 Jun 2026 | 07 Jun 2026 | 20 | 07 Jun 2026 |
| Sprint-2 | 20 | 6 Days | 09 Jun 2026 | 14 Jun 2026 | 20 | 14 Jun 2026 |
| Sprint-3 | 20 | 6 Days | 16 Jun 2026 | 21 Jun 2026 | 20 | 21 Jun 2026 |
| Sprint-4 | 20 | 6 Days | 23 Jun 2026 | 28 Jun 2026 | 20 | 28 Jun 2026 |

---

### Velocity

The team has a **6-day sprint duration**, and the velocity of the team is **20 story points per sprint**.

**Average Velocity (AV) per iteration unit:**

```
AV = Total Story Points per Sprint / Sprint Duration (in days)
AV = 20 / 6
AV ≈ 3.33 story points per day
```

| Metric | Value |
|:---|:---|
| **Sprint Duration** | 6 days |
| **Points per Sprint** | 20 |
| **Average Velocity** | ~3.33 points/day |
| **Total Project Points** | 80 |
| **Total Sprints** | 4 |
| **Total Project Duration** | 24 working days (~4 weeks) |

---

### Burndown Chart

A burndown chart is a graphical representation of work left to do versus time. It is used in Agile software development methodologies such as Scrum. The chart shows the ideal rate of work completion vs actual progress.

#### Sprint-1 Burndown Data

| Day | Ideal Remaining | Actual Remaining |
|:---|:---|:---|
| Day 0 | 20 | 20 |
| Day 1 | 16.67 | 17 |
| Day 2 | 13.33 | 14 |
| Day 3 | 10.00 | 10 |
| Day 4 | 6.67 | 7 |
| Day 5 | 3.33 | 3 |
| Day 6 | 0 | 0 |

#### Overall Project Burndown

| Sprint End | Ideal Remaining (Total) | Actual Remaining (Total) |
|:---|:---|:---|
| Start | 80 | 80 |
| Sprint-1 End | 60 | 60 |
| Sprint-2 End | 40 | 40 |
| Sprint-3 End | 20 | 20 |
| Sprint-4 End | 0 | 0 |

```
Story Points
Remaining
    80 |●
       |  \
    60 |    ●───── Sprint 1 Complete
       |      \
    40 |        ●───── Sprint 2 Complete
       |          \
    20 |            ●───── Sprint 3 Complete
       |              \
     0 |                ●───── Sprint 4 Complete (Release)
       └──────────────────────
        S1    S2    S3    S4   → Sprints
```

---

### References
- [https://www.atlassian.com/agile/project-management](https://www.atlassian.com/agile/project-management)
- [https://www.atlassian.com/agile/tutorials/how-to-do-scrum-with-jira-software](https://www.atlassian.com/agile/tutorials/how-to-do-scrum-with-jira-software)
- [https://www.atlassian.com/agile/tutorials/epics](https://www.atlassian.com/agile/tutorials/epics)
- [https://www.atlassian.com/agile/tutorials/sprints](https://www.atlassian.com/agile/tutorials/sprints)
- [https://www.atlassian.com/agile/project-management/estimation](https://www.atlassian.com/agile/project-management/estimation)
- [https://www.atlassian.com/agile/tutorials/burndown-charts](https://www.atlassian.com/agile/tutorials/burndown-charts)
- [https://www.visual-paradigm.com/scrum/scrum-burndown-chart/](https://www.visual-paradigm.com/scrum/scrum-burndown-chart/)
