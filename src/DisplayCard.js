import SloppyCardPosition from "/src/SloppyCardPosition";

export default class displayCard {
  constructor() {
    this.positionCardDealerX = -250;
    this.positionCardDealerY = 0;
    this.positionCardDealerHiddenX = 0;
    this.positionCardDealerHiddenX = 0;
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

  displayCardDealer(fileAndPath, show) {
    let chairNumber = 0;
    //get canwas element which is written in the HTML5 file (index.html)

    function display() {
      var c = document.getElementById("cardsPlace" + chairNumber);
      var ctx = c.getContext("2d"); //get the 2d contect of the canvas
      var img = document.createElement("img"); //create an element which is called "img"

      //img.setAttribute("src", fileAndPath); //set in the HTML5 element the image path for the cards
      //Now load the needet image which represents a card!
      img.onload = function() {
        //set the alpha at 1, so it's not transparent
        ctx.globalAlpha = 1;

        //get canvas width and hight
        var width = c.width;
        var height = c.height;
        //console.log(height);

        //#0 random generator for placing the cards not clean! More real!
        var sloppy = new SloppyCardPosition();
        var sloppyFactor = 0; //sloppy.getSloppyFactor(-2, 2);
        //sloppyFactor = 0;

        //#1a centered position
        ctx.translate((width - 50) / 2, (height - 70) / 2);

        //#1b initial position for one hand
        ctx.translate(-90 + sloppyFactor, 50 + sloppyFactor);

        //#2 rotate with slopyFactor
        ctx.rotate(sloppyFactor * (Math.PI / 180)); //Radianten!

        //#3 draw card

        /*
        if (show === "SHOW") {
          ctx.drawImage(img, 0, 0, 50, 70);
        } else if (show === "SHOWALL") {
          ctx.drawImage(img, 0, 0, 50, 70);
        }*/

        //#4 go back to origin + set relative position for next card!

        //#5 translation for next card
        //ctx.translate(-20, -50 + sloppyFactor);
        //#3 draw card
        //ctx.drawImage(img, 0, 0, 50, 70);

        ctx.translate(100, -70);
        /*
          //#4 go back to origin + set relative position for next card!
          ctx.translate(-40 + -40 / 2, -55 - 65);

          //#5 translation for next card
          let sloppyFactor2 = sloppy.getSloppyFactor(0, -10);
          ctx.translate(10, -10 + sloppyFactor2);
          */
      };
      //img.setAttribute("src", fileAndPath);
      img.src = fileAndPath;
    }
    window.onload = display();
  }

  modifyImageTest() {
    //alert(image.id);
  }
  //https://stackoverflow.com/questions/29661207/drawing-multiple-images-on-an-html5-canvas-doesnt-work-sometimes
  createImage(imageUrl) {
    this.positionCardDealerX += 100;
    this.positionCardDealerY = 0;
    let widthCard = 50;
    let heightCard = 70;

    var image = new Image();

    //CANNOT GIVE ID, BECAUSE ITS NOT A "DOM" --> what is a DOM?
    image.setAttribute("id", "lala");

    image.onload = this.loadImage.bind(
      image,
      this.positionCardDealerX,
      this.positionCardDealerY,
      widthCard,
      heightCard
    );
    image.src = imageUrl;
    return image;
  }

  loadImage(xPosition, yPosition, widthCard, heightCard) {
    let c = document.getElementById("cardsPlace" + 0);
    let ctx = c.getContext("2d");
    //get canvas width and hight
    let widthCanvas = c.width + xPosition;
    let heightCanvas = c.height + yPosition;

    let cardCenterX = widthCanvas / 2 - widthCard / 2;
    let cardCenterY = heightCanvas / 2 - heightCard / 2;
    // Draw the image
    ctx.drawImage(this, cardCenterX, cardCenterY, widthCard, heightCard);
  }
}
