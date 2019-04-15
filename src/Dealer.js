import Hand from "/src/Hand";

export default class Dealer {
  constructor(name) {
    this.placeNumber = 0;
    this.name = name;
    this.card = "";
    this.placeNumber = 0;
    this.handNumber = 1;
    this.hand = new Hand(this.placeNumber, this.handNumber);
  }

  //Dealer says something
  speak(message) {
    alert(message);
  }

  giveCard(place) {
    if (place === 0) {
      //give Card to himself
    }
  }

  handSign(turn) {
    /*
    switch (turn) {
      case "H":
        alert(this.name + " want hit");
        break;
      case "S":
        alert(this.name + " want stand");
        break;
      case "WANTHIT":
        alert(this.name + " want stand");
        break;
      case "BLOCK":
        alert(this.name + " want stand");
        break;
      default:
        alert("SOMETHING WENT WRONG!");
    }
    */
  }
}
