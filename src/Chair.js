export default class Chair {
  constructor() {}

  createPlace(placeNumber) {
    //get HTML5 element
    var chair = document.getElementById("cardsPlace" + placeNumber);

    //#1 player area
    if (placeNumber > 0) {
      //#1a position (rotation center is on table!!!)
      //position of players/chairs by using the cartesian coordinate system

      var xPositionStartChair = 380;
      var yPositionStartChair = 240;

      var r = 200; //radius
      var as = 22; //beginning angle of first chair!
      var af = 160 / 7; //angle factor, 120° = whole angle from first player to last player
      var ap = af * (placeNumber - 1); //angle of the respective chair

      var xPosition = r * Math.cos((as + ap) * (Math.PI / 180));
      var yPosition = r * Math.sin((as + ap) * (Math.PI / 180));
      chair.style.left = xPositionStartChair + xPosition + "px";
      chair.style.top = yPositionStartChair + yPosition + "px";

      //#1b rotation (rotation center is on place center)
      //rotating the player/chairs
      as = 320;
      af = 94 / 7; //angle factor, 105° = whole factor, 105°/7 of one player relative to the other one!
      ap = af * (placeNumber - 1); //angle of the chair

      var angle = as + ap;
      chair.style.transform = "rotate(" + angle + "deg)";
      //#2 dealer area
    } else if (placeNumber === 0) {
      chair.style.left = 378 + "px"; //origin x of delaer cards place
      chair.style.top = 240 + 78 + "px"; //origin y of dealer cards place
      angle = 180; //turn the dealer with the angle of 180°, so now he lookts to the player
      chair.style.transform = "rotate(" + angle + "deg)"; //execute the transformation and translation
    }
  }
}
