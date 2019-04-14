export default class RotatePlayerPlace {
  constuctore() {}

  rotate(placeNumber, angle) {
    var placeName = "chair" + placeNumber;
    var c = document.getElementById(placeName);
    var ctx = c.getContext("2d");

    var width = c.width;
    var height = c.height;

    //left upper corner centered
    ctx.translate(-width / 2, -height / 2);
    ctx.translate(width / 2, height / 2);

    ctx.rotate(angle * (Math.PI / 180)); //Radianten!
  }
}
