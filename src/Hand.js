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
    this.sameAmountOfCardsShow === false;
    this.replacedHiddenCard === false;

    this.called = false; //DEAST, DELETE
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
    //alert(cards);

    //wenn SHOWALL
    // *) verdeckte karte ersetzen
    //    --> passiert beim ersten mal, wenn diese Funktion aufgerufen wird
    //wenn SHOW
    // *) eine Karte ist verdeckt
    alert(action);
    if (action === "SHOW") {
      //place hidden card
      this.displayCards.displayCardDealer(this.fileAndPathAll[0], action);
      //place othercards (without hidden card!)
      for (let i = this.cardsAlreadyOnTable + 1; i < this.numberOfCards; ++i) {
        this.displayCards.displayCardDealer(this.fileAndPathAll[i], action);
      }
    } else if (action === "SHOWALL") {
      //if first time showall called --> replaye hidden card
      this.displayCards.displayCardDealer(this.fileAndPathAll[0], action);
      //display all cards
      for (let i = this.cardsAlreadyOnTable + 1; i < this.numberOfCards; ++i) {
        this.displayCards.displayCardDealer(this.fileAndPathAll[i], action);
      }
    }
    /*
    //#b if number of cards are changed, dealer can place new card or/and he can show hidden card
    //if number of cards changed, only place new cards
    if (this.numberOfCards > this.cardsAlreadyOnTable) {
      //if number of cards are the same (and if "SHOWALL"), replace hidden card

      //replace hidden card only will occur one time
      this.displayCards.displayCardDealer(this.fileAndPathAll[0], action);

      for (let i = this.cardsAlreadyOnTable; i < this.numberOfCards; ++i) {
        this.displayCards.displayCardDealer(this.fileAndPathAll[i], action);
      }

      this.cardsAlreadyOnTable = this.numberOfCards;
      this.sameAmountOfCardsShow = false;
    }
    //#b if number of cards are not changed, dealer can only show hidden card
    //if number of cards are the same (and if "SHOWALL"), replace hidden card
    else if (this.numberOfCards === this.cardsAlreadyOnTable) {
      if (action === "SHOWALL" && this.sameAmountOfCardsShow === false) {
        //CALL ONLY ONCE
        this.displayCards.displayCardDealer(this.fileAndPathAll[0], action);
        this.sameAmountOfCardsShow = true;
      } else {
      }
    } */
    //alert(this.cardsAlreadyOnTable)
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
