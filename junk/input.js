export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      //alert(event.keyCode);

      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          //alert("move left");
          break;

        case 39:
          paddle.moveRight();
          //alert("move right");
          break;
      }
    });
  }
}
