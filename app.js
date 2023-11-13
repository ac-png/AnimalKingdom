import Animal from "./classes/Animal.js";
import Feline from "./classes/Feline.js";
import Canine from "./classes/Canine.js";

import Cat from "./classes/Cat.js";
import Dog from "./classes/Dog.js";
import Lion from "./classes/Lion.js";
import Wolf from "./classes/Wolf.js";
import Zoo from "./classes/Zoo.js";

let cat1 = new Cat('Tom', 2);
let dog1 = new Dog('Charlie', 3);
let lion1 = new Lion('Tony', 2);
let wolfie = new Wolf('Wolfie', 3);

let zoo1 = new Zoo('MoZoo', '123 Fake Street');
let zoo2 = new Zoo('AnimalKindom', '321 Real Street')

zoo1.addNewAnimal(cat1);
zoo1.addNewAnimal(dog1);
zoo1.addNewAnimal('This is a fake lion');
zoo1.addNewAnimal(wolfie);

zoo2.addNewAnimal(lion1);

console.log(zoo1.getAnimalList());
// console.log(zoo2);

zoo1.getAnimalList().forEach((animal) => {
    animal.creatorNoise();
    animal.roam();
    animal.sleep();
    console.log("-----------");
});

console.log(zoo1.search("Tom"));

console.log(`Is cat1 a Cat: ${cat1 instanceof Cat}`);
console.log(`Is cat1 a Animal: ${cat1 instanceof Animal}`);
console.log(`Is cat1 a Feline: ${cat1 instanceof Feline}`);
console.log(`Is cat1 a Canine: ${cat1 instanceof Canine}`);
console.log(`Is cat1 a Dog: ${cat1 instanceof Dog}`);