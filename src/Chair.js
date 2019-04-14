export default class Chair {
  constructor() {}

  createPlace(placeNumber) {
    var chair = document.getElementById("chair" + placeNumber);
    var xPosition =
      260 * Math.cos((142 - (120 / 7) * (placeNumber - 1)) * (Math.PI / 180));
    var yPosition =
      260 * Math.sin((142 - (120 / 7) * (placeNumber - 1)) * (Math.PI / 180));
    chair.style.left = 381 + xPosition + "px";
    chair.style.top = 150 + yPosition + "px";
  }
}
