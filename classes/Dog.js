import Canine from "./Canine.js";

class Dog extends Canine{
  constructor(_name, _age){
    super(_name, _age);
  }

  creatorNoise(){
    console.log("Barking: Woof woof woof");
  }

}

export default Dog;