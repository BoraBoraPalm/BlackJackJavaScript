export default class GetCardFile {
  constructor(string) {
    //the string represents a string with one or more cards
    this.string = string;
    //the elements of the string need to be splitted
    this.cardsArray = this.string.split(",");
  }

  //generating the path accorind to the cards ind the string!
  getFilePathOfCard() {
    //this array should store the path of each card
    var filenameArray = new Array();
    //stepping trought the cards and it's elements
    for (var cardIndex = 0; cardIndex < this.cardsArray.length; ++cardIndex) {
      var cardPictureFilename = ""; //for the picture filename
      var offsetSuit; //belongs to the filename of the card
      var cardNumber; //belongs to the filename of the card

      //console.log("INDEX " + cardIndex + " |MODULO " + (cardIndex % 3));
      //console.log("STRING: " + this.cardsArray[cardIndex]);

      //1# first identify suit
      if (cardIndex % 3 === 0) {
        var cardIndexPicture = cardIndex + 2;
        console.warn("modulo === 0");
        //console.log("FIRST: " + (cardIndex % 2) + " " + this.cardsArray[cardIndex]);
        switch (this.cardsArray[cardIndex]) {
          case "KREUZ":
            //console.log("IN KREUZ");
            offsetSuit = 1;
            break;
          case "PIK":
            //console.log("IN PIK");
            offsetSuit = 2;
            break;
          case "HERZ":
            console.log("IN HERZ");
            offsetSuit = 3;
            break;
          case "KARO":
            //console.log("IN KARO");
            offsetSuit = 4;
            break;
          default:
            break;
        }
      }
      //#2..than identify the picture
      else if (cardIndex === cardIndexPicture) {
        //console.log("SECOND: " + (cardIndex % 2) + " " + this.cardsArray[cardIndex]);
        switch (this.cardsArray[cardIndex]) {
          case "ASS":
            console.log("IN ASS");
            cardNumber = offsetSuit + 4 * 0;
            break;
          case "KOENIG":
            cardNumber = offsetSuit + 4 * 1;
            break;
          case "DAME":
            cardNumber = offsetSuit + 4 * 2;
            break;
          case "BUBE":
            cardNumber = offsetSuit + 4 * 3;
            break;
          case "ZEHN":
            cardNumber = offsetSuit + 4 * 4;
            break;
          case "NEUN":
            cardNumber = offsetSuit + 4 * 5;
            break;
          case "ACHT":
            cardNumber = offsetSuit + 4 * 6;
            break;
          case "SIEBEN":
            cardNumber = offsetSuit + 4 * 7;
            break;
          case "SECHS":
            cardNumber = offsetSuit + 4 * 8;
            break;
          case "FUENF":
            cardNumber = offsetSuit + 4 * 9;
            break;
          case "VIER":
            cardNumber = offsetSuit + 4 * 10;
            break;
          case "DREI":
            cardNumber = offsetSuit + 4 * 11;
            break;
          case "ZWEI":
            cardNumber = offsetSuit + 4 * 12;
            break;
          default:
            break;
        }
        //#3 creating the full "path name"
        cardPictureFilename = "assets/images/cards/" + cardNumber + "b.png";
        //#4 adding the card which could be found to the "path array"
        filenameArray.push(cardPictureFilename);
      }
    }
    //return the path array of the cards
    return filenameArray;
  }
}
