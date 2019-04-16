import GetCardFile from "/src/GetCardFile";
import DisplayCard from "/src/DisplayCard";

export default class HandboxContentStart {
  constructor(placeNumber, handNumber) {
    this.cards = new Array();
    this.cardsAlreadyOnTable = 0;
    this.numberOfCards = 0;
    this.box = 0;
    this.fileAndPathAll;
    this.displayCards = new DisplayCard();
    this.placeNumber = placeNumber;
    this.handNumber = handNumber;
  }

  //give Hand of Player a card: important!
  // This function in dealer implementieren? AKTION: DEALER WIRFT KARTE ZU!
  addCard(card) {
    //alert("Drinnen!");
    this.cards.push(card);

    /*
    var imageCard = new Image();
    imageCard.src = "assets/images/cards/10b.png";
    imageCard.onload = function() {
      // CREATE CANVAS CONTEXT
      let canvas = document.getElementById("playerPlace1");
      var ctx = canvas.getContent("2d");
      canvas.width = imageCard.width;
      canvas.height = imageCard.height;

      ctx.drawImage(imageCard, 20, 20);
    };
*/
  }

  //ZEIGT NUR DIE OFFENEN KARTEN DES DEALER AN
  showHandDealer(action, cards) {
    var getFile = new GetCardFile(cards);
    this.fileAndPathAll = getFile.getFilePathOfCard();
    var handNumber = 1;
    if (action === "SHOWALL") {
      for (var i = 0; i < this.fileAndPathAll.length; ++i) {
        this.displayCards.displayCard(
          this.fileAndPathAll[i],
          handNumber,
          this.placeNumber
        );
      }
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

  //DAS ZEIGT NUR ALLE KARTEN AN!
  showHandAllCards(cards) {
    var getFile = new GetCardFile(cards);
    this.fileAndPathAll = getFile.getFilePathOfCard();
    this.numberOfCards = cards.split(",").length / 3;
    //So modifizieren, dass gemerkt wird, wiviele karten bereits gesetzt wurden!

    //was aber, wenn ich splitte?
    if (this.numberOfCards > this.cardsAlreadyOnTable) {
      for (var i = this.cardsAlreadyOnTable; i < this.numberOfCards; ++i) {
        this.displayCards.displayCard(
          this.fileAndPathAll[i],
          this.handNumber,
          this.placeNumber
        );
      }
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

  //places the requiered card on the table
  //  -> to call the piture, in need:
  //    -> the suit yes, color no,  the picture, the blackJackValue maybe;
}
