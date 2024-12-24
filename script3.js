// Base Constructor: Product
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Add shared methods to Product.prototype
  Product.prototype.getDetails = function () {
    return `${this.name} - $${this.price} (Quantity: ${this.quantity})`;
  };
  
  Product.prototype.updateQuantity = function (amount) {
    this.quantity += amount;
    console.log(`${this.name} quantity updated to: ${this.quantity}`);
  };
  
  // Specialized Constructor: Electronics
  function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); // Call Product constructor
    this.brand = brand;
    this.model = model;
  }
  
  // Inherit from Product
  Electronics.prototype = Object.create(Product.prototype);
  Electronics.prototype.constructor = Electronics;
  
  // Add methods specific to Electronics
  Electronics.prototype.powerOn = function () {
    console.log(`${this.name} by ${this.brand} is now powered on.`);
  };
  
  Electronics.prototype.powerOff = function () {
    console.log(`${this.name} by ${this.brand} is now powered off.`);
  };
  
  // Specialized Constructor: Clothing
  function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity); // Call Product constructor
    this.size = size;
    this.material = material;
  }
  
  // Inherit from Product
  Clothing.prototype = Object.create(Product.prototype);
  Clothing.prototype.constructor = Clothing;
  
  // Add methods specific to Clothing
  Clothing.prototype.getSize = function () {
    return `Size: ${this.size}`;
  };
  
  Clothing.prototype.getMaterial = function () {
    return `Material: ${this.material}`;
  };
  
  // Specialized Constructor: Books
  function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); // Call Product constructor
    this.author = author;
    this.genre = genre;
  }
  
  // Inherit from Product
  Books.prototype = Object.create(Product.prototype);
  Books.prototype.constructor = Books;
  
  // Add methods specific to Books
  Books.prototype.getAuthor = function () {
    return `Author: ${this.author}`;
  };
  
  Books.prototype.getGenre = function () {
    return `Genre: ${this.genre}`;
  };
  
  // Demonstration
  // Create instances of each product type
  const laptop = new Electronics("Laptop", 1200, 10, "Dell", "XPS 15");
  const tshirt = new Clothing("T-Shirt", 25, 50, "M", "Cotton");
  const novel = new Books("1984", 15, 30, "George Orwell", "Dystopian");
  
  // Interact with Electronics
  console.log(laptop.getDetails());
  laptop.powerOn();
  laptop.powerOff();
  laptop.updateQuantity(5);
  
  // Interact with Clothing
  console.log(tshirt.getDetails());
  console.log(tshirt.getSize());
  console.log(tshirt.getMaterial());
  tshirt.updateQuantity(-10);
  
  // Interact with Books
  console.log(novel.getDetails());
  console.log(novel.getAuthor());
  console.log(novel.getGenre());
  novel.updateQuantity(20);
  