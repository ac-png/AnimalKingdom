import Animal from "./Animal.js";
// import Lion from "./Lion.js";

class Zoo{

  //constructor
  constructor(_name, _address){
    this.name = _name;
    this.address = _address;

    // let lion1 = new Lion('Tony', 2);
    // this.animals = [lion1];

    this.animals = [];
  }

  // gets full list of animals
  getAnimalList(){
    return this.animals;
  }

  // adds new animal to list
  addNewAnimal(_animal){
      if (_animal instanceof Animal) {
        this.animals.push(_animal);
      } else {
        console.error(`${_animal} is not an animal`);
      }
  }

  // searches for specific animal by name
  search(_term){
    let result = this.animals.filter(animal => animal.name === _term);
    return result;
  }

}

export default Zoo;