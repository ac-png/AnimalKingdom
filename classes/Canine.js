import Animal from "./Animal.js";

class Canine extends Animal{
  constructor(_name, _age){
    super(_name, _age)
  }

  roam(){
    console.log("Roaming: I'm roaming with my pack.");
  }
}

export default Canine;