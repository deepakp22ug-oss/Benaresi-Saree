// VINARM BANARSI RITHEE - Main JavaScript
// ========================================

// Global State Management
const appState = {
    cart: [],
    wishlist: [],
    currentCurrency: 'INR',
    currencyRates: {
        INR: 1,
        USD: 0.012,
        GBP: 0.01,
        AED: 0.044
    },
    currencySymbols: {
        INR: '₹',
        USD: '$',
        GBP: '£',
        AED: 'د.إ'
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    loadWishlistFromStorage();
    initializeNavigation();
    initializeNewsletter();
    loadFeaturedProducts();
    loadBestSellers();
    updateCartBadge();
    updateWishlistBadge();
});

// ========================================
// NAVIGATION & MOBILE MENU
// ========================================
function initializeNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && !event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle')) {
            navMenu.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        }
    });
}

// ========================================
// PRODUCT DISPLAY & GRID
// ========================================
function displayProducts(productList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    productList.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'saree-card';
    card.innerHTML = `
        <div class="saree-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.badge ? `<span class="saree-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
            <button class="wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)" title="Add to Wishlist">
                <i class="fas fa-heart"></i>
            </button>
        </div>
        <div class="saree-info">
            <p class="saree-category">${product.collection}</p>
            <h3 class="saree-name">${product.name}</h3>
            <p class="saree-details">${product.details.weave}</p>
            <div class="rating">
                ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} 
                <span>(${product.reviews})</span>
            </div>
            <div class="price-section">
                <span class="price">${formatPrice(product.price)}</span>
                ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                ${product.originalPrice ? `<span class="discount">${Math.round((1 - product.price/product.originalPrice) * 100)}% OFF</span>` : ''}
            </div>
            <div class="saree-actions">
                <button class="cta-button secondary" onclick="addToCart(${product.id})">Add to Cart</button>
                <a href="pages/product.html?id=${product.id}" class="cta-button primary">View</a>
            </div>
        </div>
    `;
    
    // Add hover effect for image zoom
    const imageContainer = card.querySelector('.saree-image');
    if (imageContainer) {
        imageContainer.addEventListener('click', function() {
            window.location.href = `pages/product.html?id=${product.id}`;
        });
    }
    
    return card;
}

// ========================================
// FEATURED & BEST SELLERS LOADING
// ========================================
function loadFeaturedProducts() {
    const featured = products.slice(0, 4);
    displayProducts(featured, 'featuredSarees');
}

function loadBestSellers() {
    const bestsellers = products.filter(p => p.badge === 'Bestseller').slice(0, 4);
    if (bestsellers.length < 4) {
        bestsellers.push(...products.filter(p => p.badge !== 'Bestseller').slice(0, 4 - bestsellers.length));
    }
    displayProducts(bestsellers, 'bestSellers');
}

// ========================================
// CART MANAGEMENT
// ========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = appState.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        appState.cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartBadge();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartBadge();
}

function updateCartQuantity(productId, quantity) {
    const item = appState.cart.find(item => item.id === productId);
    if (item && quantity > 0) {
        item.quantity = quantity;
        saveCartToStorage();
        updateCartBadge();
    } else if (quantity <= 0) {
        removeFromCart(productId);
    }
}

function getCartTotal() {
    return appState.cart.reduce((total, item) => {
        const price = item.price * appState.currencyRates[appState.currentCurrency];
        return total + (price * item.quantity);
    }, 0);
}

function updateCartBadge() {
    const badge = document.getElementById('cartCount');
    if (badge) {
        const count = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = count;
    }
}

function saveCartToStorage() {
    localStorage.setItem('royalSareesCart', JSON.stringify(appState.cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('royalSareesCart');
    if (saved) {
        appState.cart = JSON.parse(saved);
    }
}

// ========================================
// WISHLIST MANAGEMENT
// ========================================
function toggleWishlist(productId, event) {
    event.stopPropagation();
    
    const index = appState.wishlist.indexOf(productId);
    if (index > -1) {
        appState.wishlist.splice(index, 1);
    } else {
        appState.wishlist.push(productId);
    }
    
    saveWishlistToStorage();
    updateWishlistBadge();
    updateWishlistButtons();
    
    const product = products.find(p => p.id === productId);
    const action = index > -1 ? 'removed from' : 'added to';
    showNotification(`${product.name} ${action} wishlist!`);
}

function isInWishlist(productId) {
    return appState.wishlist.includes(productId);
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlistCount');
    if (badge) {
        badge.textContent = appState.wishlist.length;
    }
}

function updateWishlistButtons() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const parent = btn.closest('.saree-card');
        if (parent) {
            const productId = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
            if (isInWishlist(productId)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }
    });
}

function saveWishlistToStorage() {
    localStorage.setItem('royalSareesWishlist', JSON.stringify(appState.wishlist));
}

function loadWishlistFromStorage() {
    const saved = localStorage.getItem('royalSareesWishlist');
    if (saved) {
        appState.wishlist = JSON.parse(saved);
    }
}

// ========================================
// CURRENCY CONVERSION
// ========================================
function changeCurrency(currency) {
    appState.currentCurrency = currency;
    localStorage.setItem('royalSareesCurrency', currency);
    updatePricesDisplay();
}

function formatPrice(price) {
    const converted = price * appState.currencyRates[appState.currentCurrency];
    const symbol = appState.currencySymbols[appState.currentCurrency];
    
    if (appState.currentCurrency === 'INR') {
        return `${symbol}${converted.toLocaleString('en-IN')}`;
    } else {
        return `${symbol}${converted.toFixed(2)}`;
    }
}

function updatePricesDisplay() {
    document.querySelectorAll('.price').forEach(el => {
        const priceText = el.textContent;
        const priceMatch = priceText.match(/[\d,]+/);
        if (priceMatch) {
            const originalPrice = parseInt(priceMatch[0].replace(/,/g, ''));
            el.textContent = formatPrice(originalPrice);
        }
    });
}

// ========================================
// NEWSLETTER
// ========================================
function initializeNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            // In real application, send to backend
            showNotification(`Thank you for subscribing with ${email}!`);
            form.reset();
        });
    }
}

// ========================================
// NOTIFICATIONS
// ========================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        animation: slideInUp 0.3s ease-out;
        z-index: 9999;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInUp 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// UTILITIES
// ========================================
function getProductById(id) {
    return products.find(p => p.id === id);
}

function filterProducts(filters) {
    return products.filter(product => {
        if (filters.category && product.category !== filters.category) return false;
        if (filters.fabric && product.fabric !== filters.fabric) return false;
        if (filters.collection && product.collection !== filters.collection) return false;
        if (filters.priceMin && product.price < filters.priceMin) return false;
        if (filters.priceMax && product.price > filters.priceMax) return false;
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            return product.name.toLowerCase().includes(searchLower) || 
                   product.description.toLowerCase().includes(searchLower);
        }
        return true;
    });
}

function sortProducts(products, sortBy) {
    const sorted = [...products];
    switch(sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'newest':
            return sorted.reverse();
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'popular':
            return sorted.sort((a, b) => b.reviews - a.reviews);
        default:
            return sorted;
    }
}

// ========================================
// PAGE SCROLL & ANIMATIONS
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.saree-card, .feature-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ========================================
// SEARCH FUNCTIONALITY
// ========================================
function initializeSearch(containerId) {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const results = filterProducts({ search: e.target.value });
            if (containerId) {
                displayProducts(results, containerId);
            }
        });
    }
}

// ========================================
// LAZY LOADING IMAGES
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('VINARM BANARSI RITHEE - JavaScript Loaded Successfully');

