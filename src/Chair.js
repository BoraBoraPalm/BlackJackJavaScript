export default class Chair {
  constructor() {}

  createPlace(placeNumber) {
    var chair = document.getElementById("cardsPlace" + placeNumber);

    //#1 player area
    if (placeNumber > 0) {
      //#1 position (rotation center is on table!!!)
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

      //#2 rotation (rotation center is on place center)
      //rotating the player/chairs
      as = 320;
      af = 94 / 7; //angle factor, 105° = whole factor, 105°/7 of one player relative to the other one!
      ap = af * (placeNumber - 1); //angle of the chair

      var angle = as + ap;
      chair.style.transform = "rotate(" + angle + "deg)";
      //#2 dealer area
    } else if (placeNumber === 0) {
      chair.style.left = 378 + "px";
      chair.style.top = 240 + 78 + "px";
      angle = 180;
      chair.style.transform = "rotate(" + angle + "deg)";
    }
  }
}
