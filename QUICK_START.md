# 🚀 Quick Start Guide

Get your VINARM BANARSI RITHEE platform running in 5 minutes!

## Prerequisites

Make sure you have installed:
- ✓ Node.js (v14+)
- ✓ npm (comes with Node)
- ✓ Git (optional, for cloning)

## 🏃 Quick Start (5 Minutes)

### Terminal 1: Start Backend

```bash
# Navigate to backend
cd royal-sarees-backend

# Install dependencies (first time only)
npm install

# Start the server
npm run dev
```

Expected output:
```
✓ MongoDB Connected
🌟 VINARM BANARSI RITHEE Backend Server
📦 Running on http://localhost:5000
```

### Terminal 2: Start Frontend

```bash
# Navigate to frontend (open new terminal)
cd royal-sarees-react

# Install dependencies (first time only)
npm install

# Start the dev server
npm run dev
```

Expected output:
```
VITE v7.2.6  ready in 399 ms
➜  Local:   http://localhost:5174/
➜  press h + enter to show help
```

### 3. Open Browser

**Visit**: http://localhost:5174

🎉 You should see the VINARM BANARSI RITHEE home page!

---

## 🧪 Test the Application

### On Home Page
1. ✅ See hero section with CTAs
2. ✅ Browse featured products
3. ✅ View collections

### On Shop Page
1. ✅ Click "Shop" in header
2. ✅ Try filters (collection, fabric, price)
3. ✅ Try sorting
4. ✅ Click on product

### On Product Page
1. ✅ See product gallery
2. ✅ View details
3. ✅ Click "Add to Cart"
4. ✅ Notice cart badge updated
5. ✅ Click "Add to Wishlist"

### On Cart Page
1. ✅ Click cart icon
2. ✅ Update quantities
3. ✅ Remove items
4. ✅ See total

### Navigation
1. ✅ Click "Collections"
2. ✅ Click "About Us"
3. ✅ Click "Contact Us" and submit form
4. ✅ Mobile menu on small screens

---

## 📱 Mobile Test

Resize browser to test responsive design:
- **Desktop**: Full width
- **Tablet**: 768px width
- **Mobile**: 375px width

Everything should look great on all sizes!

---

## 🔌 API Testing (Optional)

### Test Backend API

Using browser or Postman:

```bash
# Health check
GET http://localhost:5000/api/health

Response:
{
  "status": "Server is running",
  "timestamp": "2024-12-06..."
}
```

---

## ⚙️ Configuration

### No Database Required
- Currently uses in-memory data
- Products stored in JavaScript
- Cart stored in browser (localStorage)
- No backend database needed yet

### Ready to Connect
When you're ready to add MongoDB:
1. Edit `.env` in backend
2. Install MongoDB locally or use Atlas
3. Models are already created
4. Endpoints are ready

---

## 📁 File Structure You'll Use

```
royal-sarees/
├── royal-sarees-react/      ← Frontend (localhost:5174)
│   └── src/
│       ├── pages/           ← Page components
│       ├── components/      ← Reusable components
│       └── store/          ← State management
│
└── royal-sarees-backend/    ← Backend (localhost:5000)
    └── server.js           ← Main server file
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill existing process (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or use different ports
npm run dev -- --port 5175  # Frontend
PORT=5001 npm run dev       # Backend
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Changes Not Showing
```bash
# Clear browser cache
Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)

# Restart dev servers
# Ctrl+C to stop, then npm run dev again
```

---

## 🎯 Next Steps

### Today
- ✅ Get it running
- ✅ Browse the site
- ✅ Test functionality
- ✅ Check mobile view

### This Week
- [ ] Customize product images
- [ ] Update brand name
- [ ] Change contact info
- [ ] Update colors (if needed)

### This Month
- [ ] Set up MongoDB
- [ ] Connect to backend
- [ ] Add payment (Stripe)
- [ ] Deploy to web

---

## 📚 Documentation

Read these files for more info:
- `README.md` - Main project overview
- `FINAL_SUMMARY.md` - Complete feature list
- `royal-sarees-react/README.md` - Frontend details
- `royal-sarees-backend/README.md` - Backend details

---

## 🎨 Customization Tips

### Change Colors
Edit `royal-sarees-react/tailwind.config.js`:
```javascript
colors: {
  primary: {
    800: '#722F37',  // Change this
  },
  gold: {
    400: '#D4AF37',  // Or this
  }
}
```

### Change Products
Edit `royal-sarees-react/src/data/products.js`:
```javascript
{
  id: 1,
  name: "Your Product Name",  // Change
  price: 25000,               // Change
  // ... edit other fields
}
```

### Update Brand Name
Search and replace "VINARM BANARSI RITHEE" with your brand name in:
- `Header.jsx`
- `Footer.jsx`
- HTML pages

---

## 💡 Tips for Success

1. **Keep both servers running** - One for frontend, one for backend
2. **Use different terminals** - Don't stop one server to start another
3. **Clear cache** - If seeing old version, clear browser cache
4. **Check console** - Browser console (F12) shows errors
5. **Check terminal** - Server terminal shows API errors
6. **Mobile first** - Test on mobile size early

---

## 🎓 Learning

### Understand the Code
- `Header.jsx` - Navigation component
- `Shop.jsx` - Filtering logic
- `appStore.js` - State management
- `server.js` - Backend routes

### Modify Things
- Add new products (data/products.js)
- Change colors (tailwind.config.js)
- Update text (pages/*.jsx)
- Add new pages (pages/*.jsx)

### Build Features
- Add search
- Add reviews
- Add wishlist to DB
- Add user login

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] Test all pages
- [ ] Test on mobile
- [ ] Update contact info
- [ ] Add real product images
- [ ] Set up payment
- [ ] Configure email
- [ ] Update social links
- [ ] Check spelling
- [ ] Test forms
- [ ] Performance check

---

## ❓ FAQ

**Q: Do I need MongoDB running?**
A: Not for testing! It works with sample data. Add MongoDB later.

**Q: Can I change product images?**
A: Yes! Edit product URLs in `data/products.js` or upload to Cloudinary.

**Q: How do I deploy?**
A: See deployment section in README.md

**Q: Can I add user accounts?**
A: Yes! Backend auth is ready, just implement login UI.

**Q: How do I change colors?**
A: Edit `tailwind.config.js` color variables.

---

## 📞 Need Help?

1. **Check browser console** (F12)
2. **Check server logs** (terminal)
3. **Read README files**
4. **Restart servers**
5. **Clear cache and reload**

---

## ✨ You're Ready!

Your complete e-commerce platform is set up and running. Explore the code, make changes, and build your dream e-commerce store!

**Happy Building!** 🌟

---

**Pro Tip**: Keep one terminal always showing your servers, and open a separate terminal for git commands or file management.

Remember: `npm run dev` is your best friend! 🚀

