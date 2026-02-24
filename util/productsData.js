const products = [
    // Category: Electronics
    { id: 1, name: "Mechanical Keyboard", category: "Electronics", price: 89.99, stock: 15, createdAt: "2024-05-01T10:00:00Z" },
    { id: 2, name: "Wireless Mouse", category: "Electronics", price: 45.50, stock: 30, createdAt: "2024-05-02T11:30:00Z" },
    { id: 3, name: "4K Monitor", category: "Electronics", price: 320.00, stock: 8, createdAt: "2024-05-03T09:15:00Z" },
    { id: 4, name: "Noise Cancelling Headphones", category: "Electronics", price: 199.99, stock: 12, createdAt: "2024-05-04T14:45:00Z" },
    { id: 5, name: "Webcam 1080p", category: "Electronics", price: 59.00, stock: 25, createdAt: "2024-05-05T08:20:00Z" },

    // Category: Accessories
    { id: 6, name: "Leather Laptop Sleeve", category: "Accessories", price: 35.00, stock: 50, createdAt: "2024-05-06T16:00:00Z" },
    { id: 7, name: "USB-C Hub", category: "Accessories", price: 29.99, stock: 40, createdAt: "2024-05-07T12:10:00Z" },
    { id: 8, name: "Desk Mat (Extra Large)", category: "Accessories", price: 22.50, stock: 100, createdAt: "2024-05-08T10:05:00Z" },
    { id: 9, name: "Laptop Stand", category: "Accessories", price: 49.99, stock: 20, createdAt: "2024-05-09T11:50:00Z" },
    { id: 10, name: "Cable Organizer Kit", category: "Accessories", price: 15.00, stock: 60, createdAt: "2024-05-10T09:30:00Z" }
];



export const getAllProduct = () => {
    return products
}


export const findProduct = (productId) => {
    return products.find(product => product.id === productId)
}
