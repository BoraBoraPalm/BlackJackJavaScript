import GetCardFile from "/src/GetCardFile";
import DisplayCard from "/src/DisplayCard";

export default class HandboxContentStart {
  constructor(placeNumber) {
    this.cards = new Array();
    this.cardsAlreadyOnTable = 0;
    this.stringLength = 0;
    this.box = 0;
    this.fileAndPathAll;
    this.displayCards = new DisplayCard();
    this.placeNumber = placeNumber;
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

  //DAS ZEIGT NUR ALLE KARTEN AN!
  async showHandAllCards(cards) {
    var getFile = new GetCardFile(cards);
    this.fileAndPathAll = getFile.getFilePathOfCard();

    //So modifizieren, dass gemerkt wird, wiviele karten bereits gesetzt wurden!
    for (
      var i = this.cardsAlreadyOnTable;
      i < this.fileAndPathAll.length;
      ++i
    ) {
      this.displayCards.displayCard(
        this.fileAndPathAll[i],
        1,
        this.placeNumber
      );
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    //feststellen, wenn Karten hinzugekommen sind zu String!
    if (cards.length > this.stringLength) {
      for (var position = 0; position < cards.length; position++) {
        if (cards.charAt(position) === ";") {
          this.cardsAlreadyOnTable += 1; //-1
          console.log(this.cardsAlreadyOnTable);
        }
      }

      //this.cardsAlreadyOnTable =
    }
    this.stringLength = cards.length;
    //this.displayCards.displayCard(this.fileAndPathAll[0], 1, 2);
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
