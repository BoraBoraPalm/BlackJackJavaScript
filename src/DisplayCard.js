import SloppyCardPosition from "./SloppyCardPosition";

export default class displayCard {
  constructor(numberOfHands) {
    //this.numberOfHands = numberOfHands;
  }
  displayCard(fileAndPath, handNumber, chairNumber) {
    function display() {
      //alert("drinnen in show Hand!");

      //var c = document.createElement("canvas");
      var c = document.getElementById("chair" + chairNumber);
      var ctx = c.getContext("2d");
      var img = document.createElement("img");

      //img.setAttribute("max-width:", "2px");
      //img.setAttribute("max-height", "1px");
      img.setAttribute("src", fileAndPath);

      img.onload = function() {
        ctx.globalAlpha = 1;

        //alert(this.numberOfHands);
        if (handNumber === 1) {
          //get canvas width and hight
          var width = c.width;
          var height = c.height;
          console.log(height);

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
}
