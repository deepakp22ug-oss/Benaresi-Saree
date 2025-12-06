// Product Database - VINARM BANARSI RITHEE
const products = [
    {
        id: 1,
        name: "Royal Katan Bridal Saree",
        category: "bridal",
        fabric: "katan",
        collection: "Bridal Collection",
        price: 35000,
        originalPrice: 42000,
        currency: "INR",
        rating: 5,
        reviews: 45,
        image: "images/saree-1.jpg",
        images: ["images/saree-1.jpg", "images/saree-1-2.jpg", "images/saree-1-3.jpg"],
        badge: "Bestseller",
        description: "Exquisite handwoven Banarasi Katan silk saree in maroon with elaborate gold zari work. Perfect for weddings and special occasions.",
        details: {
            weave: "Pure Katan Silk",
            zari: "24K Gold Zari",
            blouse: "Included - Embroidered",
            length: "5.5 meters"
        },
        colors: ["Maroon", "Navy Blue", "Emerald Green"],
        inStock: true,
        stock: 5
    },
    {
        id: 2,
        name: "Emerald Organza Party Saree",
        category: "party",
        fabric: "organza",
        collection: "Party Wear",
        price: 18000,
        originalPrice: 22000,
        currency: "INR",
        rating: 4.5,
        reviews: 32,
        image: "images/saree-2.jpg",
        images: ["images/saree-2.jpg", "images/saree-2-2.jpg"],
        badge: "New",
        description: "Elegant emerald green organza saree with delicate floral patterns and gold borders. Perfect for evening events.",
        details: {
            weave: "Organza with Jacquard",
            zari: "Gold Zari",
            blouse: "Included",
            length: "5.5 meters"
        },
        colors: ["Emerald", "Navy", "Burgundy"],
        inStock: true,
        stock: 10
    },
    {
        id: 3,
        name: "Gold Tissue Handloom Saree",
        category: "everyday",
        fabric: "tissue",
        collection: "Handloom Sarees",
        price: 12000,
        originalPrice: 15000,
        currency: "INR",
        rating: 4,
        reviews: 28,
        image: "images/saree-3.jpg",
        images: ["images/saree-3.jpg", "images/saree-3-2.jpg"],
        badge: null,
        description: "Light and elegant gold tissue saree with traditional patterns. Ideal for festivals and casual occasions.",
        details: {
            weave: "Tissue Silk",
            zari: "Gold Zari",
            blouse: "Included",
            length: "5.5 meters"
        },
        colors: ["Gold", "Pink", "Cream"],
        inStock: true,
        stock: 15
    },
    {
        id: 4,
        name: "Burgundy Georgette Wedding Saree",
        category: "wedding",
        fabric: "georgette",
        collection: "Wedding Collection",
        price: 25000,
        originalPrice: 32000,
        currency: "INR",
        rating: 4.5,
        reviews: 50,
        image: "images/saree-4.jpg",
        images: ["images/saree-4.jpg", "images/saree-4-2.jpg", "images/saree-4-3.jpg"],
        badge: "Bestseller",
        description: "Sophisticated burgundy georgette saree with intricate threadwork and embellishments. A stunning choice for weddings.",
        details: {
            weave: "Georgette with Jacquard",
            zari: "Silver & Gold Zari",
            blouse: "Included - Embroidered",
            length: "5.5 meters"
        },
        colors: ["Burgundy", "Maroon", "Deep Purple"],
        inStock: true,
        stock: 8
    },
    {
        id: 5,
        name: "Navy Blue Pure Silk Katan",
        category: "bridal",
        fabric: "katan",
        collection: "Pure Katan Silk",
        price: 40000,
        originalPrice: 48000,
        currency: "INR",
        rating: 5,
        reviews: 38,
        image: "images/saree-5.jpg",
        images: ["images/saree-5.jpg", "images/saree-5-2.jpg"],
        badge: "New",
        description: "Premium navy blue pure Banarasi Katan silk with rich gold zari work throughout. A masterpiece for royal occasions.",
        details: {
            weave: "Pure Katan Silk",
            zari: "24K Gold Zari",
            blouse: "Included - Handwoven",
            length: "5.5 meters"
        },
        colors: ["Navy Blue", "Royal Blue"],
        inStock: true,
        stock: 3
    },
    {
        id: 6,
        name: "Cream & Gold Silk Saree",
        category: "wedding",
        fabric: "silk",
        collection: "Wedding Collection",
        price: 22000,
        originalPrice: 28000,
        currency: "INR",
        rating: 4.5,
        reviews: 41,
        image: "images/saree-6.jpg",
        images: ["images/saree-6.jpg", "images/saree-6-2.jpg"],
        badge: null,
        description: "Classic cream silk saree with golden borders and traditional Banarasi weaving. Timeless elegance for any occasion.",
        details: {
            weave: "Silk with Jacquard",
            zari: "Gold Zari",
            blouse: "Included",
            length: "5.5 meters"
        },
        colors: ["Cream", "White", "Ivory"],
        inStock: true,
        stock: 12
    },
    {
        id: 7,
        name: "Pink Georgette Celebration Saree",
        category: "party",
        fabric: "georgette",
        collection: "Party Wear",
        price: 16000,
        originalPrice: 20000,
        currency: "INR",
        rating: 4,
        reviews: 35,
        image: "images/saree-7.jpg",
        images: ["images/saree-7.jpg", "images/saree-7-2.jpg"],
        badge: "Sale",
        description: "Vibrant pink georgette saree with delicate threadwork and beaded details. Perfect for celebrations and festive occasions.",
        details: {
            weave: "Georgette",
            zari: "Gold Zari",
            blouse: "Included - Beaded",
            length: "5.5 meters"
        },
        colors: ["Pink", "Rose", "Peach"],
        inStock: true,
        stock: 14
    },
    {
        id: 8,
        name: "Black & Gold Formal Saree",
        category: "party",
        fabric: "silk",
        collection: "Party Wear",
        price: 19000,
        originalPrice: 24000,
        currency: "INR",
        rating: 4.5,
        reviews: 42,
        image: "images/saree-8.jpg",
        images: ["images/saree-8.jpg", "images/saree-8-2.jpg"],
        badge: null,
        description: "Sophisticated black silk saree with elaborate gold zari patterns. Ideal for formal events and evening gatherings.",
        details: {
            weave: "Silk with Jacquard",
            zari: "Gold Zari",
            blouse: "Included - Embroidered",
            length: "5.5 meters"
        },
        colors: ["Black", "Charcoal"],
        inStock: true,
        stock: 9
    },
    {
        id: 9,
        name: "Maroon & Gold Festive Saree",
        category: "festival",
        fabric: "katan",
        collection: "Festival Wear",
        price: 21000,
        originalPrice: 26000,
        currency: "INR",
        rating: 5,
        reviews: 55,
        image: "images/saree-9.jpg",
        images: ["images/saree-9.jpg", "images/saree-9-2.jpg", "images/saree-9-3.jpg"],
        badge: "Bestseller",
        description: "Rich maroon Katan silk with traditional motifs and gold zari borders. A statement saree for festivals and celebrations.",
        details: {
            weave: "Katan Silk",
            zari: "Gold Zari",
            blouse: "Included",
            length: "5.5 meters"
        },
        colors: ["Maroon", "Deep Red"],
        inStock: true,
        stock: 7
    },
    {
        id: 10,
        name: "Teal Silk Everyday Saree",
        category: "everyday",
        fabric: "silk",
        collection: "Casual Wear",
        price: 11000,
        originalPrice: 14000,
        currency: "INR",
        rating: 4,
        reviews: 29,
        image: "images/saree-10.jpg",
        images: ["images/saree-10.jpg"],
        badge: null,
        description: "Comfortable teal silk saree with subtle patterns. Perfect for daily wear and casual occasions.",
        details: {
            weave: "Pure Silk",
            zari: "Silver Zari",
            blouse: "Included",
            length: "5.5 meters"
        },
        colors: ["Teal", "Turquoise"],
        inStock: true,
        stock: 20
    },
    {
        id: 11,
        name: "Lavender Tissue Bridal Saree",
        category: "bridal",
        fabric: "tissue",
        collection: "Bridal Collection",
        price: 32000,
        originalPrice: 40000,
        currency: "INR",
        rating: 5,
        reviews: 44,
        image: "images/saree-11.jpg",
        images: ["images/saree-11.jpg", "images/saree-11-2.jpg"],
        badge: "New",
        description: "Delicate lavender tissue saree with fine zari work and pearl embellishments. Ethereal beauty for bridal collection.",
        details: {
            weave: "Tissue with Jacquard",
            zari: "Gold Zari",
            blouse: "Included - Pearl Embroidered",
            length: "5.5 meters"
        },
        colors: ["Lavender", "Lilac"],
        inStock: true,
        stock: 4
    },
    {
        id: 12,
        name: "Charcoal Grey Organza Saree",
        category: "party",
        fabric: "organza",
        collection: "Party Wear",
        price: 17000,
        originalPrice: 21000,
        currency: "INR",
        rating: 4,
        reviews: 31,
        image: "images/saree-12.jpg",
        images: ["images/saree-12.jpg"],
        badge: null,
        description: "Modern charcoal grey organza saree with contemporary zari patterns. Perfect for upscale events.",
        details: {
            weave: "Organza",
            zari: "Gold & Silver Zari",
            blouse: "Included",
            length: "5.5 meters"
        },
        colors: ["Charcoal Grey"],
        inStock: true,
        stock: 11
    }
];

// Collections Data
const collections = [
    {
        id: 1,
        name: "Bridal Collection",
        description: "Premium sarees for the most special day of your life",
        image: "images/bridal-collection.jpg",
        productCount: 24,
        link: "shop.html?collection=bridal"
    },
    {
        id: 2,
        name: "Wedding Collection",
        description: "Elegant sarees for wedding events and festivities",
        image: "images/wedding-collection.jpg",
        productCount: 32,
        link: "shop.html?collection=wedding"
    },
    {
        id: 3,
        name: "Party Wear",
        description: "Glamorous sarees for parties and celebrations",
        image: "images/party-collection.jpg",
        productCount: 28,
        link: "shop.html?collection=party"
    },
    {
        id: 4,
        name: "Pure Katan Silk",
        description: "The finest handwoven Katan silk sarees from Banaras",
        image: "images/katan-collection.jpg",
        productCount: 18,
        link: "shop.html?fabric=katan"
    },
    {
        id: 5,
        name: "Organza Sarees",
        description: "Light and elegant organza sarees for special occasions",
        image: "images/organza-collection.jpg",
        productCount: 15,
        link: "shop.html?fabric=organza"
    },
    {
        id: 6,
        name: "Handloom Sarees",
        description: "Authentic handloom sarees supporting local artisans",
        image: "images/handloom-collection.jpg",
        productCount: 22,
        link: "shop.html?collection=handloom"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, collections };
}

