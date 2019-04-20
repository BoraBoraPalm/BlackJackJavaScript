export default class Message {
  constructor() {}

  //this creates the coordinates of each place and set elements to this coordinates!
  createPlace(placeNumber) {
    if (placeNumber > 0) {
      var chair = document.getElementById("resultChair" + placeNumber);

      var xPositionStartChair = 413;
      var yPositionStartChair = 240;

      var r = 330; //radius
      var as = 22; //beginning angle of first chair!
      var af = 160 / 7; //angle factor, 120° = whole angle from first player to last player
      var ap = af * (placeNumber - 1); //angle of the respective chair

      var xPosition = r * Math.cos((as + ap) * (Math.PI / 180));
      var yPosition = r * Math.sin((as + ap) * (Math.PI / 180));
      chair.style.left = xPositionStartChair + xPosition + "px";
      chair.style.top = yPositionStartChair + yPosition + "px";
    } else if (placeNumber === 0) {
      chair = document.getElementById("resultChair" + placeNumber);
      chair.style.left = 413 + "px"; //origin x of delaer cards place
      chair.style.top = 170 + "px"; //origin y of dealer cards place
    }
  }
}
