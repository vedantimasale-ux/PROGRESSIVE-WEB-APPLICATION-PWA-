const products = [
    {
        name: "Smart Watch",
        price: 1999,
        image: "images/smartwatch.png",
        description: "Waterproof Smart Watch"
    },
    {
        name: "Shoes",
        price: 1499,
        image: "images/redshoes.png",
        description: "Running Shoes"
    }
];

const container = document.getElementById("products");

products.forEach(product => {
    container.innerHTML += `
        <div class="card">
            <img src="${product.image}" />
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">
                Add to Cart
            </button>
        </div>
    `;
});