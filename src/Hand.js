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

    if (this.numberOfCards > this.cardsAlreadyOnTable) {
      if (action === "SHOWALL") {
        for (let i = this.cardsAlreadyOnTable; i < this.numberOfCards; ++i) {
          this.displayCards.createImage(this.fileAndPathAll[i]);
        }
      } else if (action === "SHOW") {
        //HIER WIRFT SICH NUN DIE FRAGE AUF: WIE KANN ICH PLAZIERTE BILDER WIEDER LÖSCHEN BZW DURCHSICHTIG MACHEN?!
        //DEN PLATZ ZURÜCKSETZEN, WENN DANN GELÖSCHT BZW. MERKEN, WENN SCHLAMPIG PLAZIERT!
        this.displayCards.createImage("assets/images/cards/backa.png");
        this.displayCards.createImage(this.fileAndPathAll[1]);
      }
      this.cardsAlreadyOnTable = this.numberOfCards;

      //JUST TEST: DELETE:
      this.displayCards.modifyImageTest();
    }
    /*
    //if the dealer should show all cards
    if (action === "SHOWALL") {
      if (this.numberOfCards > this.cardsAlreadyOnTable) {
        for (let i = 0; i < this.numberOfCards; ++i) {
          this.displayCards.displayCardDealer(
            this.fileAndPathAll[i],
            "SHOWALL"
          );
        }
        //new number of cards on the place!
        this.cardsAlreadyOnTable = this.numberOfCards;
      }
      //or if the dealer should only show one card and one is hidden (show back of card)
    } else if (action === "SHOW") {
      for (let i = 0; i < 2; ++i) {
        if (i === 0) {
          this.displayCards.displayCardDealer(
            "assets/images/cards/backa.png",
            "SHOW"
          );
        } else {
          this.displayCards.displayCardDealer(this.fileAndPathAll[i], "SHOW");
        }
      }

      this.displayCards.displayCardDealer(this.fileAndPathAll[1]);
    }
    */
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
      for (let i = this.cardsAlreadyOnTable; i < this.numberOfCards; ++i) {
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
