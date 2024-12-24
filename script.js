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
    this.type = "Dog";
  }
  
  // Ensure that Dog.prototype inherits from Animal.prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Set the constructor of Dog.prototype to Dog (optional, best practice)
  Dog.prototype.constructor = Dog;
  
  // Override the sound method in Dog.prototype to log "Bark"
  Dog.prototype.sound = function () {
    console.log("Bark");
  };
  
  // Create an instance of Dog called myDog
  let myDog = new Dog();
  
  // Call the sound method on myDog
  myDog.sound(); 
  
  // Verify inheritance chain
  console.log(myDog instanceof Dog); 
  console.log(myDog instanceof Animal); 
  
  // Access inherited methods
  const genericAnimal = new Animal();
  genericAnimal.sound(); 
  console.log(genericAnimal.type); 
  