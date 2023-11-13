import Feline from "./Feline.js";

class Cat extends Feline{
  constructor(_name, _age){
    super(_name, _age)
  }

  creatorNoise(){
    console.log("Meowing: Meeeeoooowwww");
  }

}

export default Cat;