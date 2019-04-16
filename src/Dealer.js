import Hand from "/src/Hand";

export default class Dealer {
  constructor(name) {
    this.placeNumber = 0; //fix place of dealer
    this.name = name; //dealer's name
    this.card = ""; //NOT USED YET -> DELETE?
    this.handNumber = 1; //dealre only plays with one hand (does do no split or such creepy stuff)
    this.hand = new Hand(this.placeNumber, this.handNumber); //when dealer gets created, he get's automatic a hand!
  }

  //dealer says something
  speak(message) {
    alert(message);
  }
  //give Card to himself
  giveCard(place) {
    if (place === 0) {
    }
  }

  //TODO: implement what dealer says!
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
