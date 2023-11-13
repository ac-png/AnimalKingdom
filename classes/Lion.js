import Feline from "./Feline.js";

class Lion extends Feline{
  constructor(_name, _age){
    super(_name, _age)
  }

  creatorNoise(){
    console.log("Roaring: Roaaaar!!!");
  }

}

export default Lion;