// Define a constructor function Animal with a property type set to "Animal"
function Animal() {
    this.type = "Animal";
  }
  
  // Add a method sound to Animal.prototype that logs "Animal sound"
  Animal.prototype.sound = function () {
    console.log("Animal sound");
  };
  
  // Define a constructor function Dog that inherits from Animal
  function Dog() {
    Animal.call(this); // Call the Animal constructor to inherit properties
    this.type = "Dog"; // Override type for Dog
  }
  
  // Ensure that Dog.prototype inherits from Animal.prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Reset the constructor property of Dog.prototype to Dog
  Dog.prototype.constructor = Dog;
  
  // Override the sound method in Dog.prototype to log "Bark"
  Dog.prototype.sound = function () {
    console.log("Bark");
  };
  
  // Create an instance of Dog called myDog
  const myDog = new Dog();
  
  // Call the sound method on myDog
  myDog.sound(); 
  
  
  console.log(myDog instanceof Dog); 
  console.log(myDog instanceof Animal); 
  
  // Call the inherited sound method for an Animal instance
  const genericAnimal = new Animal();
  genericAnimal.sound(); 
  