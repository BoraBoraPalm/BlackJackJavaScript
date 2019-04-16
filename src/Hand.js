import GetCardFile from "/src/GetCardFile";
import DisplayCard from "/src/DisplayCard";

export default class HandboxContentStart {
  constructor(placeNumber, handNumber) {
    //this.cards = new Array(); //set cards of player
    this.cardsAlreadyOnTable = 0; // cards which are already on table dont need to be placed again!
    this.numberOfCards = 0; //number of Cards which are new in the function input!
    this.box = 0; //TODO: NEED TO BE PROGRAMMED => this is for coins!
    this.fileAndPathAll; //NEED TO BE GLOBAL? This is for path array of cards
    this.displayCards = new DisplayCard(); //each hand displays it's cards!
    this.placeNumber = placeNumber; // On which place the player/dealer is sitting! (this is for display cards!)
    this.handNumber = handNumber; // needed for displayCard!
  }

  //NOT USED YET
  addCard(card) {
    this.cards.push(card);
  }

  //only for the dealer to show open card, hide one card and show all cards
  showHandDealer(action, cards) {
    //get filepath of cards, returns string array
    var getFile = new GetCardFile(cards);
    this.fileAndPathAll = getFile.getFilePathOfCard();
    //read number of cards
    this.numberOfCards = cards.split(",").length / 3;
    //set static hand number of dealer!
    var handNumber = 1;

    //if the dealer should show all cards
    if (action === "SHOWALL") {
      if (this.numberOfCards > this.cardsAlreadyOnTable) {
        for (var i = 0; i < this.fileAndPathAll.length; ++i) {
          this.displayCards.displayCard(
            this.fileAndPathAll[i],
            handNumber,
            this.placeNumber
          );
        }
        //new number of cards on the place!
        this.cardsAlreadyOnTable = this.numberOfCards;
      }
      //or if the dealer should only show one card and one is hidden (show back of card)
    } else if (action === "SHOW") {
      this.displayCards.displayCard(
        "assets/images/cards/backa.png",
        handNumber,
        this.placeNumber
      );
      this.displayCards.displayCard(
        this.fileAndPathAll[1],
        handNumber,
        this.placeNumber
      );
    }
  }

  //this function? method? is for the player to show all his cards
  showHandAllCards(cards) {
    //get filepath of cards, returns string array
    var getFile = new GetCardFile(cards);
    this.fileAndPathAll = getFile.getFilePathOfCard();
    //get number of cards
    this.numberOfCards = cards.split(",").length / 3;

    //TODO: implement split!
    if (this.numberOfCards > this.cardsAlreadyOnTable) {
      for (var i = this.cardsAlreadyOnTable; i < this.numberOfCards; ++i) {
        this.displayCards.displayCard(
          this.fileAndPathAll[i],
          this.handNumber,
          this.placeNumber
        );
      }
      //set new number of cards (on which hand ????)
      this.cardsAlreadyOnTable = this.numberOfCards;
    }
  }
  //add some money to the player's hand!
  addMoney(money) {
    this.box += money;
  }

  //remove some money from the player's hand!
  subMoney(money) {
    this.box -= money;
  }
}
