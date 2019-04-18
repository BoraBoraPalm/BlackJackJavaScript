import SloppyCardPosition from "/src/SloppyCardPosition";
import PositionCards from "/src/PositionCards";

export default class displayCard {
  constructor() {
    this.positionCardDealerX = -250;
    this.positionCardDealerY = 0;
    this.positionCardDealerHiddenX = 0;
    this.positionCardDealerHiddenX = 0;

    //this.cardsCoordinates = [];

    this.positionCards = new PositionCards();
    this.hiddenCardOverlayed = false;
    this.dealerCardsOnTable = 0;
    this.dealerCardsOnTableOldOverlayed = 0;

    //um den ganzen rotationspfad nachvollziehen zu könnne, da immer relativ gesetzt wird von anfangskarte bzw. winkel!
    this.rotationSumm = 0;
  }

  displayCard(fileAndPath, handNumber, chairNumber) {
    function display() {
      //get canwas element which is written in the HTML5 file (index.html)
      var c = document.getElementById("cardsPlace" + chairNumber);
      var ctx = c.getContext("2d"); //get the 2d contect of the canvas
      var img = document.createElement("img"); //create an element which is called "img"

      img.setAttribute("src", fileAndPath); //set in the HTML5 element the image path for the cards

      //Now load the needet image which represents a card!
      img.onload = function() {
        //set the alpha at 1, so it's not transparent
        ctx.globalAlpha = 1;

        //if the player/dealer plays with hand 1:
        if (handNumber === 1) {
          //get canvas width and hight
          var width = c.width;
          var height = c.height;
          //console.log(height);

          //#0 random generator for placing the cards not clean! More real!
          var sloppy = new SloppyCardPosition();
          var sloppyFactor = sloppy.getSloppyFactor(-5, 5);
          //sloppyFactor = 0;

          //#1a centered position
          ctx.translate((width - 50) / 2, (height - 70) / 2);

          //#1b initial position for one hand
          ctx.translate(-40 + sloppyFactor, 55 + sloppyFactor);

          //#2 rotate with slopyFactor
          ctx.rotate(sloppyFactor * (Math.PI / 180)); //Radianten!

          //#3 draw card
          ctx.drawImage(img, 0, 0, 50, 70);

          //#4 go back to origin + set relative position for next card!
          ctx.translate(-40 + -40 / 2, -55 - 65);

          //#5 translation for next card
          var sloppyFactor2 = sloppy.getSloppyFactor(0, -10);
          ctx.translate(10, -10 + sloppyFactor2);
        } else {
          //TODO: AREA FOR DISPLAY SPLIT!
        }

        /* OPTION 1: WORKS: DO NOT DELETE!
        ctx.translate(100 - 25, 100 - 35);
        ctx.rotate(10 * (Math.PI / 180)); //Radianten!
        ctx.translate(-40, 0);
        ctx.drawImage(img, 0, 0, 50, 70);

        //Transformation back to the origin
        ctx.translate(+80, 0);
        ctx.rotate(-20 * (Math.PI / 180)); //Radianten!
        ctx.translate(-100 + 25, -100 + 35);

        //Transformation to the starting origin for the new card!
        //ctx.translate(100 - 25, 100 - 35);
        ctx.rotate(10 * (Math.PI / 180)); //Radianten!
        ctx.translate(-20, -10);
        */
      };
    }
    window.onload = display();
  }

  //add: var sloppy = new SloppyCardPosition();
  //https://stackoverflow.com/questions/29661207/drawing-multiple-images-on-an-html5-canvas-doesnt-work-sometimes
  displayCardDealer(imageUrl, show) {
    //necessary if a new card is added
    let addPosition = false;

    //image path
    let imagePath = imageUrl;

    //#1a set local variables, they are used to place cards
    let positionX;
    let positionY;

    //#1b set sloppy factor
    var sloppy = new SloppyCardPosition();
    var sloppyFactor = sloppy.getSloppyFactor(-2, 2);
    let rotation = sloppyFactor; //AND SAVE THIS HOW?

    //#2 check, if dealer shows all cards or if he hides one!
    //#2a if the dealer show all cards....
    //alert(show);

    if (show === "SHOWALL") {
      //#2aa...and if he has one card hidden now, he replaces the hidden card!
      if (this.hiddenCardOverlayed === false) {
        //for only replaye hidden carde once!
        this.hiddenCardOverlayed = true;

        //local ---> hier ist fehler
        positionX = this.positionCards.get(0)[0];
        positionY = this.positionCards.get(0)[1];
        rotation = this.positionCards.get(0)[2];

        //don't add position of new card
        addPosition = false;

        //#counts how many cards already on table (delaer)
        this.dealerCardsOnTable = 0;
        this.dealerCardsOnTable++;
      }
      //#2ab.if the hidden card is already replaced!
      else if (this.hiddenCardOverlayed === true) {
        //jetzt muss ich Schritt für Schritt jede karte überschreiben!

        //#counts how many cards already on table (delaer)
        this.dealerCardsOnTable++;

        //add position of new card
        addPosition = true;

        //global
        this.positionCardDealerX += 100;
        this.positionCardDealerY = 0;
        //local
        positionX = this.positionCardDealerX + sloppyFactor;
        positionY = this.positionCardDealerY + sloppyFactor;
      }
    }
    //#2b if the dealer has only two cards and one of them is hidden!
    else if (show === "SHOW") {
      //alert();
      //#2ba if first card => hidden
      if (this.dealerCardsOnTable === 0) {
        imagePath = "assets/images/cards/backa.png";
        //rotationOrigin = rotation;
      }
      //#2ba else other than first card, do nothing
      else {
        //nothing: use origin imagePath
        //this.positionCardDealerX = -250;
        //this.positionCardDealerY = 0;
      }
      //add position of new cards
      addPosition = true;
      //global
      this.positionCardDealerX += 110;
      this.positionCardDealerY = 0;
      //local
      positionX = this.positionCardDealerX + sloppyFactor;
      positionY = this.positionCardDealerY + sloppyFactor;

      //#counts how many cards already on table (delaer)
      this.dealerCardsOnTable++;
    }

    //#3 set card size
    let widthCard = 50;
    let heightCard = 70;

    //#4 save position of card on canvas!
    if (addPosition === true) {
      //positionX = this.positionCardDealerX + sloppyFactor;
      //positionY = this.positionCardDealerY + sloppyFactor;
      this.positionCards.add(positionX, positionY, rotation);
    }

    //#4 save position of card on canvas!
    //this.positionCards.add(this.positionCardDealerX, this.positionCardDealerY);

    //#5 create new image!
    var image = new Image();

    //#6 preload image: TODO: WHAT IS BIND FOR USED?
    image.onload = this.loadImage.bind(
      image,
      positionX,
      positionY,
      rotation,
      widthCard,
      heightCard
    );
    image.src = imagePath;

    return image;
  }

  loadImage(xPosition, yPosition, angle, widthCard, heightCard) {
    let c = document.getElementById("cardsPlace" + 0);
    let ctx = c.getContext("2d");
    //get canvas width and hight
    let widthCanvas = c.width + xPosition;
    let heightCanvas = c.height + yPosition;

    //calculate center of the card on canvas
    let cardCenterX = widthCanvas / 2 - widthCard / 2;
    let cardCenterY = heightCanvas / 2 - heightCard / 2;

    //rotate image on cnavas
    ctx.rotate(angle * (Math.PI / 180));

    // Draw the image
    ctx.drawImage(this, cardCenterX, cardCenterY, widthCard, heightCard);

    //rotate image back to origin
    ctx.rotate(-angle * (Math.PI / 180));
  }
}
