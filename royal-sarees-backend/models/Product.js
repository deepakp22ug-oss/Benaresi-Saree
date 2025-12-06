import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  originalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['bridal', 'wedding', 'party', 'everyday', 'festival']
  },
  fabric: {
    type: String,
    required: true
  },
  collection: String,
  image: String,
  images: [String],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 4.5
  },
  reviews: {
    type: Number,
    default: 0
  },
  colors: [String],
  inStock: {
    type: Boolean,
    default: true
  },
  stock: {
    type: Number,
    default: 0
  },
  badge: {
    type: String,
    enum: [null, 'Bestseller', 'New', 'Sale']
  },
  details: {
    weave: String,
    zari: String,
    blouse: String,
    length: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Product = mongoose.model('Product', productSchema);

