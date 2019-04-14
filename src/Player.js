import Hand from "/src/Hand";

export default class Player {
  constructor(placeNumber, name, handNumber) {
    this.placeNumber = placeNumber;
    this.name = name;
    this.card = "";
    this.hands = new Array();
    this.hands.push(new Hand(parseInt(placeNumber)));
  }

  //Player says something
  speak(message) {
    alert(message);
  }

  //Player gets new Hand
  addHand() {
    this.hands.push(new Hand());
  }

  //Get on of the player's hand
  getHand(handNumber) {
    return this.hands[handNumber];
  }

  //Player gets a new Card on one of it's hands!
  addCard(card, handNumber) {
    this.hands[handNumber].addCard(card);
  }

  //Player gives a sign what he would like to do
  handSign(turn) {
    switch (turn) {
      case "H":
        alert(this.name + " want hit");
        break;
      case "S":
        alert(this.name + " want stand");
        break;
      case "P":
        alert(this.name + " want split");
        break;
      case "R":
        alert(this.name + " want surrender");
      case "DD":
        alert(this.name + " want double down");
        break;
      default:
        alert("SOMETHING WENT WRONG!");
    }
  }
}
