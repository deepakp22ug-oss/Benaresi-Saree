# 🏗️ Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        WEB BROWSER                           │
│                  (Client Browser - Port 5174)                │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP Requests
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND LAYER                            │
│                   React + Tailwind CSS                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐ │
│  │   Header Comp  │  │  Footer Comp   │  │  Pages (8)     │ │
│  └────────────────┘  └────────────────┘  └────────────────┘ │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │         React Router (Client-Side Navigation)         │  │
│  │  Home → Shop → Product → Cart → Collections → etc    │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  State Management (Zustand Store)                     │  │
│  │  ├─ Cart (in memory + localStorage)                  │  │
│  │  ├─ Wishlist (in memory + localStorage)              │  │
│  │  ├─ User Info                                        │  │
│  │  ├─ Currency Settings                               │  │
│  │  └─ UI State                                         │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Data Layer                                           │  │
│  │  ├─ products.js (12 products, 6 collections)         │  │
│  │  └─ localStorage (cart, wishlist persistence)        │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Styling                                              │  │
│  │  ├─ Tailwind CSS (utility classes)                   │  │
│  │  ├─ Custom animations (index.css)                    │  │
│  │  ├─ Responsive breakpoints                           │  │
│  │  └─ Color variables                                  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ Axios (HTTP)
                              │ (Ready to connect)
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    API GATEWAY / REVERSE PROXY               │
│              (Optional - for production)                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP Requests
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND LAYER                             │
│                Node.js + Express.js                          │
│              (REST API Server - Port 5000)                   │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Express Server with Middleware                       │  │
│  │  ├─ CORS Middleware (Cross-origin requests)          │  │
│  │  ├─ JSON Parser (body parsing)                       │  │
│  │  ├─ Error Handler (error management)                 │  │
│  │  └─ 404 Handler (route not found)                    │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Route Handlers                                       │  │
│  │  ├─ /api/health (status check)                       │  │
│  │  ├─ /api/products (CRUD operations)                  │  │
│  │  ├─ /api/auth (registration, login, profile)        │  │
│  │  ├─ /api/orders (create, read, update, delete)      │  │
│  │  ├─ /api/wishlist (add, remove, get)                │  │
│  │  ├─ /api/contact (form submission)                  │  │
│  │  └─ /api/admin (admin operations)                   │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Business Logic                                       │  │
│  │  ├─ Product filtering & sorting                      │  │
│  │  ├─ Order processing                                │  │
│  │  ├─ User management                                 │  │
│  │  ├─ Cart calculations                               │  │
│  │  ├─ Authentication logic                            │  │
│  │  └─ Validation rules                                │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Database Connection (Mongoose ODM)                   │  │
│  │  ├─ Connection pooling                               │  │
│  │  ├─ Schema validation                                │  │
│  │  ├─ Query building                                   │  │
│  │  └─ Error handling                                   │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ Database Queries
                              │ (MongoDB Protocol)
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    DATABASE LAYER                            │
│                  MongoDB (NoSQL)                             │
│            (Local instance or MongoDB Atlas)                │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐ │
│  │   Products     │  │     Users      │  │     Orders     │ │
│  │   Collection   │  │   Collection   │  │   Collection   │ │
│  │                │  │                │  │                │ │
│  │ • 12 products  │  │ • Profiles     │  │ • Order info   │ │
│  │ • Images       │  │ • Wishlist     │  │ • Items        │ │
│  │ • Details      │  │ • Orders       │  │ • Shipping     │ │
│  │ • Ratings      │  │ • Addresses    │  │ • Payment      │ │
│  └────────────────┘  └────────────────┘  └────────────────┘ │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Indexes (for performance)                            │  │
│  │  ├─ Product._id                                      │  │
│  │  ├─ User.email                                       │  │
│  │  ├─ Order.orderNumber                               │  │
│  │  └─ Order.user                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

```
USER INTERACTION
        │
        ├─→ Home Page
        │    ├─→ Fetch Featured Products (from products.js)
        │    ├─→ Display Collections (from products.js)
        │    └─→ Show Testimonials
        │
        ├─→ Shop Page
        │    ├─→ Apply Filters (client-side)
        │    │    ├─ Collection filter
        │    │    ├─ Fabric filter
        │    │    ├─ Price range filter
        │    │    └─ Rating filter
        │    ├─→ Apply Sorting
        │    └─→ Display filtered/sorted results
        │
        ├─→ Product Detail Page
        │    ├─→ Load product by ID
        │    ├─→ Show images, specs, reviews
        │    └─→ Handle interactions
        │
        ├─→ Cart Operations
        │    ├─→ Add to cart
        │    │    ├─ Zustand state update
        │    │    ├─ localStorage persistence
        │    │    └─ Cart badge update
        │    ├─→ Update quantity
        │    ├─→ Remove item
        │    └─→ Calculate total
        │
        ├─→ Wishlist Operations
        │    ├─→ Add to wishlist
        │    │    ├─ Zustand state update
        │    │    ├─ localStorage persistence
        │    │    └─ Heart icon update
        │    ├─→ Remove from wishlist
        │    └─→ View wishlist page
        │
        ├─→ Forms (Contact)
        │    ├─→ Fill form
        │    ├─→ Validate
        │    ├─→ Send to backend (ready)
        │    └─→ Show confirmation
        │
        └─→ Other Pages
             ├─ Collections (display)
             ├─ About (read)
             ├─ Contact (form)
             └─ Navigation

ZUSTAND STORE (State Management)
        │
        ├─ cart: []
        │  ├─ addToCart(product, quantity)
        │  ├─ removeFromCart(productId)
        │  ├─ updateCartQuantity(productId, quantity)
        │  └─ cartTotal (calculated)
        │
        ├─ wishlist: []
        │  ├─ addToWishlist(product)
        │  ├─ removeFromWishlist(productId)
        │  └─ isInWishlist(productId) [check]
        │
        ├─ user: null
        │  ├─ setUser(user)
        │  ├─ logout()
        │  └─ isAuthenticated: boolean
        │
        ├─ currency: 'INR'
        │  ├─ setCurrency(currency)
        │  ├─ currencyRates {object}
        │  └─ currencySymbols {object}
        │
        └─ localStorage persistence
           └─ Auto-sync on state change

API ENDPOINTS (Ready to implement)
        │
        ├─ GET /api/health → Health check
        │
        ├─ Products
        │  ├─ GET /api/products → All products
        │  ├─ GET /api/products/:id → Single product
        │  ├─ POST /api/products → Create (admin)
        │  ├─ PUT /api/products/:id → Update (admin)
        │  └─ DELETE /api/products/:id → Delete (admin)
        │
        ├─ Authentication
        │  ├─ POST /api/auth/register → Create account
        │  ├─ POST /api/auth/login → Login
        │  ├─ POST /api/auth/logout → Logout
        │  ├─ GET /api/auth/profile → Get profile
        │  └─ PUT /api/auth/profile → Update profile
        │
        ├─ Orders
        │  ├─ POST /api/orders → Create order
        │  ├─ GET /api/orders → User's orders
        │  ├─ GET /api/orders/:id → Order details
        │  ├─ PUT /api/orders/:id → Update status
        │  └─ DELETE /api/orders/:id → Cancel order
        │
        ├─ Wishlist
        │  ├─ GET /api/wishlist → Get wishlist
        │  ├─ POST /api/wishlist → Add item
        │  └─ DELETE /api/wishlist/:id → Remove item
        │
        └─ Contact
           └─ POST /api/contact → Submit contact form
```

## Component Tree

```
App
├── Router
├── Header
│   ├── Navigation
│   ├── Logo
│   ├── Cart Badge
│   ├── Wishlist Badge
│   ├── Currency Selector
│   └── Mobile Menu
│
├── Routes
│   ├── /
│   │   └── Home
│   │       ├── Hero Section
│   │       ├── Trust Banner
│   │       ├── Featured Products Grid
│   │       ├── Collections Grid
│   │       ├── Best Sellers Grid
│   │       ├── Why Choose Us
│   │       └── Testimonials
│   │
│   ├── /shop
│   │   └── Shop
│   │       ├── Filters Sidebar
│   │       │   ├── Collection Filter
│   │       │   ├── Fabric Filter
│   │       │   ├── Price Range Slider
│   │       │   ├── Rating Filter
│   │       │   └── Clear Filters Button
│   │       ├── Sort Dropdown
│   │       └── Products Grid
│   │
│   ├── /product/:id
│   │   └── ProductDetail
│   │       ├── Image Gallery
│   │       ├── Product Info
│   │       │   ├── Title, Rating, Price
│   │       │   ├── Details Table
│   │       │   ├── Color Selector
│   │       │   ├── Quantity Selector
│   │       │   └── Action Buttons
│   │       └── Info Tabs
│   │           ├── Description
│   │           ├── Care Instructions
│   │           ├── Shipping & Returns
│   │           └── Reviews
│   │
│   ├── /cart
│   │   └── Cart
│   │       ├── Cart Items List
│   │       └── Order Summary
│   │
│   ├── /wishlist
│   │   └── Wishlist
│   │       └── Wishlist Products Grid
│   │
│   ├── /collections
│   │   └── Collections
│   │       └── Collections Grid
│   │
│   ├── /about
│   │   └── About
│   │       ├── Story Section
│   │       ├── Heritage Section
│   │       ├── Timeline
│   │       ├── Values
│   │       └── Stats
│   │
│   └── /contact
│       └── Contact
│           ├── Contact Info
│           ├── Contact Form
│           └── Map
│
└── Footer
    ├── Brand Info
    ├── Quick Links
    ├── Help Links
    ├── Contact Info
    ├── Newsletter Signup
    └── Legal Links
```

## State Management Flow

```
Zustand Store (appStore.js)
    │
    ├─ Reducers (Actions)
    │  ├─ Cart actions
    │  ├─ Wishlist actions
    │  ├─ User actions
    │  └─ Currency actions
    │
    ├─ State
    │  ├─ Persisted to localStorage
    │  └─ Updated in real-time
    │
    └─ Subscribers
       ├─ Header (cart badge)
       ├─ Header (wishlist badge)
       ├─ Cart (all operations)
       ├─ Wishlist (all operations)
       └─ Product pages (wishlist check)
```

## Technology Stack Details

```
FRONTEND STACK
│
├─ Runtime Environment
│  └─ Node.js (v14+)
│
├─ Framework
│  └─ React 18
│     ├─ Components (Function-based)
│     ├─ Hooks (useState, useEffect, etc)
│     └─ JSX syntax
│
├─ Build Tool
│  └─ Vite
│     ├─ Hot Module Replacement (HMR)
│     ├─ Tree-shaking
│     └─ Fast bundling
│
├─ Styling
│  └─ Tailwind CSS
│     ├─ Utility classes
│     ├─ Custom config (colors, fonts)
│     ├─ Responsive design
│     └─ PostCSS integration
│
├─ Routing
│  └─ React Router v6
│     ├─ Client-side routing
│     ├─ Nested routes
│     └─ Dynamic routes (/product/:id)
│
├─ State Management
│  └─ Zustand
│     ├─ Global state
│     ├─ localStorage middleware
│     └─ Minimal re-renders
│
├─ HTTP Client (Ready)
│  └─ Axios
│     ├─ Request/response interceptors
│     ├─ Automatic error handling
│     └─ Timeout management
│
├─ Icons
│  └─ React Icons
│     ├─ Font Awesome
│     ├─ Multiple icon libraries
│     └─ SVG components
│
└─ Package Manager
   └─ npm


BACKEND STACK
│
├─ Runtime Environment
│  └─ Node.js (v14+)
│
├─ Web Framework
│  └─ Express.js
│     ├─ Middleware system
│     ├─ Route handlers
│     ├─ Error handling
│     └─ Scalable architecture
│
├─ Database
│  └─ MongoDB
│     ├─ Document-oriented
│     ├─ Flexible schema
│     ├─ JSON-like storage
│     └─ Atlas support
│
├─ ODM (Database)
│  └─ Mongoose
│     ├─ Schema definition
│     ├─ Model creation
│     ├─ Validation
│     └─ Query building
│
├─ Authentication
│  ├─ JWT (jsonwebtoken)
│  │  ├─ Token generation
│  │  ├─ Token verification
│  │  └─ Claims & expiration
│  └─ bcryptjs
│     ├─ Password hashing
│     ├─ Salt rounds
│     └─ Comparison
│
├─ Security
│  └─ CORS
│     ├─ Cross-origin requests
│     ├─ Allowed origins
│     └─ Credentials handling
│
├─ File Upload (Ready)
│  └─ Multer
│     ├─ Multipart form data
│     ├─ File validation
│     └─ Storage handling
│
├─ Payment (Ready)
│  └─ Stripe
│     ├─ Payment processing
│     ├─ Subscription management
│     └─ Webhook handling
│
├─ Email (Ready)
│  ├─ Nodemailer
│  └─ SendGrid/Mailgun
│
├─ Environment Variables
│  └─ dotenv
│     ├─ .env file reading
│     ├─ Process.env access
│     └─ Variable interpolation
│
└─ Package Manager
   └─ npm
```

## Database Schema Relationships

```
┌─────────────┐
│  Products   │
├─────────────┤
│ _id (PK)    │
│ name        │
│ price       │
│ images[]    │
│ category    │
│ details{}   │
└─────────────┘
        │
        │ 1:N relationship
        │ (Product in many Orders)
        │
        ├──────────┬──────────┐
        │          │          │
        ▼          ▼          ▼
   ┌─────────┐  ┌─────────┐  ┌──────────┐
   │ Orders  │  │Wishlist │  │Reviews   │
   ├─────────┤  ├─────────┤  ├──────────┤
   │ _id(PK) │  │_id (PK) │  │_id (PK)  │
   │ user_id │  │user_id  │  │user_id   │
   │ items[] │  │prod_id[]│  │product_id│
   │ total   │  │created  │  │rating    │
   │ status  │  └─────────┘  │comment   │
   └─────────┘                └──────────┘
        │
        │ N:1 relationship
        │ (Many Orders per User)
        │
        ▼
   ┌─────────┐
   │  Users  │
   ├─────────┤
   │ _id(PK) │
   │ email   │
   │ password│
   │ address │
   │ phone   │
   │ isAdmin │
   └─────────┘
```

---

This architecture provides a scalable, maintainable, and professional e-commerce platform!

