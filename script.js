// Parent Class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showProduct() {
    return `
      <div class="product-card">
        <h2>${this.name}</h2>
        <p>Price: ₹${this.price}</p>
      </div>
    `;
  }
}

// Child Class (Inheritance)
class ElectronicProduct extends Product {
  constructor(name, price, warranty) {
    super(name, price);
    this.warranty = warranty;
  }

  showProduct() {
    return `
      <div class="product-card">
        <h2>${this.name}</h2>
        <p>Price: ₹${this.price}</p>
        <p>Warranty: ${this.warranty} year</p>
      </div>
    `;
  }
}

// Creating Objects
const products = [
  new Product("Pen", 20),
  new ElectronicProduct("Laptop", 60000, 2),
  new ElectronicProduct("Mobile", 25000, 1)
];

// Display Products
const list = document.getElementById("productList");
products.forEach(product => {
  list.innerHTML += product.showProduct();
});
