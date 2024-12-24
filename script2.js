// Constructor function for Car
function Car(make, model, year, type, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type; // e.g., SUV, Sedan
    this.isAvailable = isAvailable;
  }
  
  // Constructor function for Customer
  function Customer(name) {
    this.name = name;
    this.rentedCars = [];
  }
  
  // Add a method to rent a car to Customer prototype
  Customer.prototype.rentCar = function (car) {
    if (car.isAvailable) {
      car.isAvailable = false;
      this.rentedCars.push(car);
      console.log(`${this.name} successfully rented the ${car.make} ${car.model}.`);
    } else {
      console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);
    }
  };
  
  // Add a method to return a car to Customer prototype
  Customer.prototype.returnCar = function (car) {
    setTimeout(() => {
      car.isAvailable = true;
      this.rentedCars = this.rentedCars.filter((rentedCar) => rentedCar !== car);
      console.log(`${this.name} returned the ${car.make} ${car.model}.`);
    }, 2000); // Simulate 2-second delay
  };
  
  // Constructor function for PremiumCustomer (inherits from Customer)
  function PremiumCustomer(name, discountRate) {
    Customer.call(this, name); // Call the Customer constructor
    this.discountRate = discountRate; // Discount rate for rentals
  }
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  
  // Function to calculate rental price
  function calculateRentalPrice(car, days, customer) {
    const baseRate = 50; // Base price per day
    const carTypeRates = {
      SUV: 1.5,
      Sedan: 1.2,
      Hatchback: 1.0,
    };
    const rateMultiplier = carTypeRates[car.type] || 1.0;
    let totalPrice = baseRate * rateMultiplier * days;
  
    // Apply discount for premium customers
    if (customer instanceof PremiumCustomer) {
      totalPrice *= 1 - customer.discountRate / 100;
    }
  
    return totalPrice;
  }
  
  // Maintenance function
  function Maintenance(car, delay) {
    console.log(`The ${car.make} ${car.model} is under maintenance.`);
    setTimeout(() => {
      car.isAvailable = true;
      console.log(`The ${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
  }
  
  // Demonstration
  // Create car objects
  const car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
  const car2 = new Car("Ford", "Explorer", 2022, "SUV");
  const car3 = new Car("Honda", "Civic", 2021, "Hatchback");
  
  // Create customers
  const customer1 = new Customer("Alice");
  const customer2 = new PremiumCustomer("Bob", 10); // 10% discount
  
  // Renting cars
  customer1.rentCar(car1);
  customer2.rentCar(car2);
  
  // Calculating rental prices
  const price1 = calculateRentalPrice(car1, 5, customer1); 
  console.log(`Rental price for ${customer1.name}: $${price1}`);
  
  const price2 = calculateRentalPrice(car2, 3, customer2); 
  console.log(`Rental price for ${customer2.name} (with discount): $${price2}`);
  
  // Returning cars
  customer1.returnCar(car1);
  customer2.returnCar(car2);
  
  // Maintenance
  Maintenance(car3, 3000); // 3-second maintenance delay
  