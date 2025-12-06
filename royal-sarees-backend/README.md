# VINARM BANARSI RITHEE - Backend API

A complete Node.js/Express REST API for the VINARM BANARSI RITHEE e-commerce platform.

## Features

- **Product Management**: CRUD operations for sarees
- **User Authentication**: JWT-based authentication with password hashing
- **Order Management**: Complete order processing and tracking
- **Shopping Cart**: Cart persistence and management
- **Wishlist**: User wishlist functionality
- **Payment Integration**: Stripe integration ready
- **Admin Dashboard**: Admin endpoints for management
- **Email Notifications**: Order confirmation and updates
- **CORS Support**: Cross-origin requests handling

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT + bcryptjs
- **Payment**: Stripe
- **File Upload**: Multer
- **Email**: Nodemailer (optional)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup

1. **Install dependencies**
```bash
cd royal-sarees-backend
npm install
```

2. **Configure environment variables**
```bash
cp .env.example .env
```
Edit `.env` with your configuration:
```
MONGODB_URI=mongodb://localhost:27017/royal-sarees
PORT=5000
JWT_SECRET=your_secret_key_here
STRIPE_SECRET_KEY=sk_test_...
```

3. **Start the server**
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and timestamp.

### Products
```
GET /api/products                    # Get all products
GET /api/products/:id                # Get product by ID
POST /api/products                   # Create product (admin)
PUT /api/products/:id                # Update product (admin)
DELETE /api/products/:id             # Delete product (admin)
```

### Authentication
```
POST /api/auth/register              # Register new user
POST /api/auth/login                 # Login user
POST /api/auth/logout                # Logout user
GET /api/auth/profile                # Get user profile
PUT /api/auth/profile                # Update user profile
POST /api/auth/refresh-token         # Refresh JWT token
```

### Orders
```
POST /api/orders                     # Create order
GET /api/orders                      # Get user orders
GET /api/orders/:id                  # Get order details
PUT /api/orders/:id                  # Update order status (admin)
DELETE /api/orders/:id               # Cancel order
```

### Wishlist
```
GET /api/wishlist                    # Get user wishlist
POST /api/wishlist                   # Add to wishlist
DELETE /api/wishlist/:productId      # Remove from wishlist
```

### Contact
```
POST /api/contact                    # Submit contact form
GET /api/contact                     # Get all contacts (admin)
DELETE /api/contact/:id              # Delete contact (admin)
```

### Admin
```
GET /api/admin/dashboard             # Admin dashboard stats
GET /api/admin/users                 # List all users
GET /api/admin/orders                # List all orders
GET /api/admin/products              # Manage products
```

## Request/Response Examples

### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123"
}

Response:
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Create Order
```bash
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    {
      "productId": "prod_123",
      "quantity": 2,
      "price": 25000
    }
  ],
  "totalAmount": 50000,
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  }
}

Response:
{
  "success": true,
  "message": "Order created successfully",
  "order": {
    "id": "ord_123",
    "orderNumber": "ORD-1234567-1",
    "status": "pending",
    "totalAmount": 50000
  }
}
```

## Database Schema

### Product
```javascript
{
  name: String,
  description: String,
  price: Number,
  originalPrice: Number,
  category: String,
  fabric: String,
  collection: String,
  image: String,
  images: [String],
  rating: Number,
  colors: [String],
  inStock: Boolean,
  stock: Number,
  details: {
    weave: String,
    zari: String,
    blouse: String,
    length: String
  }
}
```

### User
```javascript
{
  name: String,
  email: String,
  password: String (hashed),
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  wishlist: [ObjectId],
  orders: [ObjectId],
  isAdmin: Boolean
}
```

### Order
```javascript
{
  orderNumber: String,
  user: ObjectId,
  items: [{
    product: ObjectId,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  shippingAddress: Object,
  paymentStatus: String,
  orderStatus: String,
  trackingNumber: String
}
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication.

1. **Login**: Send credentials to `/api/auth/login`
2. **Receive**: JWT token in response
3. **Send**: Include token in `Authorization: Bearer <token>` header
4. **Verify**: Server validates token on protected routes

### Protected Routes
All routes requiring authentication should include:
```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

All errors return appropriate HTTP status codes:

```javascript
{
  "success": false,
  "error": "Error message",
  "statusCode": 400
}
```

Common status codes:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

## Deployment

### Heroku
```bash
# Add Procfile with: web: npm start
# Set environment variables on Heroku
heroku create royal-sarees-api
git push heroku main
```

### AWS/DigitalOcean
```bash
npm install
npm start
# Configure reverse proxy (nginx)
```

### Docker
```bash
docker build -t royal-sarees-api .
docker run -p 5000:5000 royal-sarees-api
```

## Security Best Practices

- ✓ Password hashing with bcryptjs
- ✓ JWT token expiration
- ✓ CORS configuration
- ✓ Input validation
- ✓ Environment variables for secrets
- ✓ Rate limiting (recommended to add)
- ✓ HTTPS enforcement (in production)
- ✓ SQL injection prevention (using Mongoose)

## Performance Optimization

- Database indexing on frequently queried fields
- Pagination for large datasets
- Caching strategies (Redis recommended)
- Image optimization and CDN
- Database query optimization

## Testing

```bash
# API Testing with Postman/Insomnia
# Import environment file
# Run collections

# Unit Tests (to be implemented)
npm test

# Integration Tests (to be implemented)
npm run test:integration
```

## Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
# Update MONGODB_URI in .env
# Ensure network access if using Atlas
```

### JWT Token Errors
```bash
# Verify JWT_SECRET is set
# Check token expiration
# Ensure Authorization header format
```

### CORS Errors
```bash
# Verify FRONTEND_URL in .env
# Check browser console for exact error
# Ensure credentials: 'include' if needed
```

## API Documentation

Complete API documentation available at:
- Local: `http://localhost:5000/api-docs` (with Swagger UI)
- Production: `https://api.royalsarees.in/api-docs`

## Contributing

1. Create feature branch: `git checkout -b feature/AmazingFeature`
2. Commit changes: `git commit -m 'Add AmazingFeature'`
3. Push to branch: `git push origin feature/AmazingFeature`
4. Open Pull Request

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For support, email: api-support@royalsarees.in

---

**Happy Coding!** 🌟

Built with ❤️ by VINARM BANARSI RITHEE Team

