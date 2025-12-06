# 🌟 VINARM BANARSI RITHEE - Premium E-Commerce Platform

A modern, full-stack e-commerce platform for luxury Banarasi sarees with React frontend and Node.js backend.

## 📋 Project Structure

```
royal-sarees/
├── royal-sarees/                    # Original vanilla JS version
├── royal-sarees-react/              # React frontend (Vite)
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   ├── pages/                   # Page components
│   │   ├── store/                   # Zustand state management
│   │   ├── data/                    # Product database
│   │   ├── App.jsx                  # Main app with routing
│   │   ├── index.css                # Tailwind styles
│   │   └── main.jsx                 # Entry point
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
└── royal-sarees-backend/            # Node.js/Express API
    ├── models/                      # MongoDB schemas
    ├── server.js                    # Express server
    ├── package.json
    └── .env.example
```

## 🚀 Quick Start

### Frontend (React)

```bash
cd royal-sarees-react

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Frontend URL**: http://localhost:5174

### Backend (Node.js)

```bash
cd royal-sarees-backend

# Install dependencies
npm install

# Create .env file from .env.example
cp .env.example .env

# Start development server
npm run dev

# Start production server
npm start
```

**API URL**: http://localhost:5000

## ✨ Features

### Frontend Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Product catalog with filtering & sorting
- ✅ Shopping cart with persistent storage
- ✅ Wishlist functionality
- ✅ Product detail pages
- ✅ Collections showcase
- ✅ User authentication ready
- ✅ Multi-currency support (INR, USD, GBP, AED)
- ✅ Beautiful UI with Tailwind CSS
- ✅ Smooth animations and transitions
- ✅ Fast performance with Vite

### Backend Features
- ✅ RESTful API with Express.js
- ✅ MongoDB database integration
- ✅ User authentication with JWT
- ✅ Order management system
- ✅ Product management
- ✅ Wishlist API
- ✅ Contact form handling
- ✅ Admin endpoints
- ✅ Error handling & validation
- ✅ CORS enabled
- ✅ Ready for Stripe payment integration

## 🎨 Design System

### Colors
- **Primary Maroon**: #722F37
- **Gold Accent**: #D4AF37
- **Navy**: #1a3a52
- **Emerald**: #2d5016
- **Cream**: #F5E6D3

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Montserrat (sans-serif)

### Components
- Navigation header with sticky behavior
- Product cards with image galleries
- Shopping cart with checkout flow
- Wishlist management
- Filter sidebar with multiple options
- Footer with company info
- Contact form
- Product detail tabs

## 📦 Tech Stack

### Frontend
- **React 18**: UI library
- **Vite**: Build tool & dev server
- **Tailwind CSS**: Utility-first CSS
- **React Router**: Client-side routing
- **Zustand**: State management
- **Axios**: HTTP client (ready to integrate)
- **React Icons**: Icon library

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **bcryptjs**: Password hashing
- **Stripe**: Payment processing (ready)
- **CORS**: Cross-origin support

## 🔄 Data Flow

```
User Browser
    ↓
React Frontend (Vite)
    ↓
Zustand State Store
    ↓
Axios HTTP Client
    ↓
Express API Server (Node.js)
    ↓
MongoDB Database
```

## 📱 Pages

### Frontend Pages
1. **Home** - Hero, featured products, collections, testimonials
2. **Shop** - Product listing with filters and sorting
3. **Product Detail** - Full product info with gallery and tabs
4. **Collections** - All collections showcase
5. **Cart** - Shopping cart management
6. **Wishlist** - Saved products
7. **About** - Brand story and heritage
8. **Contact** - Contact form and info

### API Endpoints

#### Products
```
GET    /api/products              # List all products
GET    /api/products/:id          # Get product by ID
POST   /api/products              # Create product (admin)
PUT    /api/products/:id          # Update product (admin)
DELETE /api/products/:id          # Delete product (admin)
```

#### Authentication
```
POST   /api/auth/register         # Register new user
POST   /api/auth/login            # Login user
POST   /api/auth/logout           # Logout user
GET    /api/auth/profile          # Get user profile
PUT    /api/auth/profile          # Update profile
```

#### Orders
```
POST   /api/orders                # Create order
GET    /api/orders                # Get user orders
GET    /api/orders/:id            # Get order details
PUT    /api/orders/:id            # Update order status
DELETE /api/orders/:id            # Cancel order
```

#### Other
```
POST   /api/contact               # Submit contact
GET    /api/wishlist              # Get wishlist
POST   /api/wishlist              # Add to wishlist
DELETE /api/wishlist/:productId   # Remove from wishlist
```

## 🔐 Authentication

- JWT-based authentication
- Password hashing with bcryptjs
- Secure token storage
- Auto token refresh ready
- Protected API routes

## 💾 Database Models

### Product
```javascript
{
  name, description, price, originalPrice,
  category, fabric, collection, image, images,
  rating, reviews, colors, inStock, stock,
  details: { weave, zari, blouse, length }
}
```

### User
```javascript
{
  name, email, password (hashed),
  phone, address, wishlist, orders, isAdmin
}
```

### Order
```javascript
{
  orderNumber, user, items, totalAmount,
  shippingAddress, paymentStatus,
  orderStatus, trackingNumber
}
```

## 🎯 Sample Products

12 pre-loaded products including:
- Bridal Maroon Banarasi (₹42,000)
- Wedding Gold Saree (₹28,000)
- Party Navy Blue (₹15,000)
- Everyday Emerald (₹11,000)
- Festival Red Saree (₹32,000)
- And 7 more...

## 🛠️ Development

### State Management (Zustand)
```javascript
import { useStore } from './store/appStore';

const { cart, addToCart, removeFromCart } = useStore();
```

### API Integration
```javascript
// Ready for axios
const response = await axios.get('/api/products');
```

### Component Structure
```
App
├── Header
├── Routes
│   ├── Home
│   ├── Shop
│   ├── ProductDetail
│   ├── Cart
│   ├── Wishlist
│   ├── Collections
│   ├── About
│   └── Contact
└── Footer
```

## 📝 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/royal-sarees
PORT=5000
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=sk_test_...
FRONTEND_URL=http://localhost:5174
```

## 🚢 Deployment

### Frontend (Vite)
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop build folder
- **GitHub Pages**: Configure vite config
- **Any Static Host**: Upload `dist` folder

### Backend (Node.js)
- **Heroku**: Add Procfile, deploy
- **Render**: Connect GitHub repo
- **Railway**: Push code, configure env
- **AWS/DigitalOcean**: SSH deploy
- **Docker**: Containerize and deploy

## 📊 Performance

- ⚡ Vite hot module replacement
- 🎯 Tree-shaking for minimal bundle
- 📦 Code splitting by routes
- 🖼️ Image optimization ready
- 💾 Zustand for minimal re-renders
- 🔒 CORS caching support

## 🧪 Testing Ready

- Jest configuration ready
- React Testing Library integrated
- E2E testing with Cypress (ready)
- API testing with Postman

## 🔐 Security Features

- JWT authentication
- Password hashing
- CORS restrictions
- Input validation
- Environment variables
- Error handling
- Rate limiting ready

## 📱 Responsive Design

- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (480px - 767px)
- **Small Mobile** (<480px)

## 🎁 Premium Features Included

- Multi-currency support
- Advanced filtering system
- Product image gallery
- Review/rating system
- Wishlist management
- Cart persistence
- Contact form
- Newsletter signup ready
- Admin panel ready
- Analytics ready

## 📚 Documentation

- Frontend: Check `royal-sarees-react/README.md`
- Backend: Check `royal-sarees-backend/README.md`
- Original: Check `royal-sarees/README.md`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🙏 Support

For support, email: support@royalsarees.in

---

## 🎉 Get Started Now!

```bash
# Clone the repository
git clone https://github.com/your-username/royal-sarees.git

# Install frontend dependencies
cd royal-sarees-react
npm install
npm run dev

# In another terminal, install backend
cd ../royal-sarees-backend
npm install
npm run dev

# Open http://localhost:5174 in your browser
```

**Happy Coding!** 🌟

---

Built with ❤️ for luxury Banarasi sarees lovers worldwide.

*Preserving Heritage, Celebrating Timeless Beauty*

