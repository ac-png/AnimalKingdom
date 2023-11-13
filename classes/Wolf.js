import Canine from "./Canine.js";

class Wolf extends Canine{
  constructor(_name, _age){
    super(_name, _age)
  }

  creatorNoise(){
    console.log("Howling: aaaaooooooooo!");
  }

}

export default Wolf;