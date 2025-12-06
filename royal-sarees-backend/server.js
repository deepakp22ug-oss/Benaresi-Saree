import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/royal-sarees';
    await mongoose.connect(uri);
    console.log('✓ MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    console.warn('Proceeding without MongoDB. Some features that require the database will be disabled in this session.');
    // In dev, allow the server to keep running even if MongoDB is not available.
  }
};

connectDB();

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Products Routes
app.get('/api/products', async (req, res) => {
  try {
    // Fetch from database
    const products = []; // Will connect to DB
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Orders Routes
app.post('/api/orders', async (req, res) => {
  try {
    const { items, totalAmount, shippingAddress, userEmail } = req.body;
    
    // Validate order
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Order must have items' });
    }

    // Create order in database
    const order = {
      id: Date.now().toString(),
      items,
      totalAmount,
      shippingAddress,
      userEmail,
      status: 'pending',
      createdAt: new Date()
    };

    res.status(201).json({ 
      success: true, 
      message: 'Order created successfully',
      order 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Authentication Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create user (will add to DB)
    const user = {
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date()
    };

    res.status(201).json({ 
      success: true,
      message: 'User registered successfully',
      user 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Authenticate user (will check DB)
    const user = {
      id: '123',
      name: 'Test User',
      email
    };

    const token = 'jwt_token_here'; // Will generate real JWT

    res.json({ 
      success: true,
      message: 'Login successful',
      user,
      token 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email (will integrate with email service)
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      subject,
      message,
      createdAt: new Date()
    };

    res.status(201).json({ 
      success: true,
      message: 'Message sent successfully',
      contact 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🌟 VINARM BANARSI RITHEE Backend Server`);
  console.log(`📦 Running on http://localhost:${PORT}`);
  console.log(`\n✓ API Health Check: http://localhost:${PORT}/api/health`);
  console.log(`✓ CORS Enabled`);
  console.log(`✓ JSON Parser Enabled\n`);
});

export default app;

