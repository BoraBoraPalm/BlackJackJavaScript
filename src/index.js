import Player from "/src/Player";
import GetCardFile from "/src/GetCardFile";
import Chair from "/src/Chair";

//let canvas = document.getElementById("gameScreen");
//let context = canvas.getContext("2d"); //c == context

//const GAME_WITH = 800;
//const GAME_HEIGHT = 600;

//let paddle = new Paddle(GAME_WITH, GAME_HEIGHT);
var chairs = new Array(7);

for (var i = 1; i <= 7; i++) {
  let chair = new Chair();
  let place = chair.createPlace(i);
  chairs.push(place);
}

//WARUM WIRD BEI BEIDEN HÄNDEN JEWEILS NUR DIE HÄLFTE GESPIELT?!
let player1 = new Player("1", "Fredl");
player1.hands[0].showHandAllCards("HERZ;ASS;PIK;ZEHN;HERZ;ZWEI");
let player2 = new Player("2", "Fredl");
player2.hands[0].showHandAllCards("KARO;DREI;PIK;FUENF");
let player3 = new Player("3", "Fredl");
player3.hands[0].showHandAllCards(
  "HERZ;ASS;PIK;ZEHN;HERZ;ZWEI;KARO;DREI;PIK;FUENF"
);
let player4 = new Player("4", "Fredl");
player1.hands[0].showHandAllCards("HERZ;ASS;PIK;ZEHN;HERZ;ZWEI");
let player5 = new Player("5", "Fredl");
player2.hands[0].showHandAllCards("KARO;DREI;PIK;FUENF");
let player6 = new Player("6", "Fredl");
player3.hands[0].showHandAllCards(
  "HERZ;ASS;PIK;ZEHN;HERZ;ZWEI;KARO;DREI;PIK;FUENF"
);
let player7 = new Player("7", "Fredl");
player1.hands[0].showHandAllCards("HERZ;ASS;PIK;ZEHN;HERZ;ZWEI");

/*
test();
async function test() {
  for (var i = 0; i < 5; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    var b = player.hands[0].showHandAllCards("HERZ;ASS");
  }
}
*/
/*
test2();
async function test2() {
  for (var i = 0; i < 5; i++) {
    var b = player.hands[0].showHandAllCards("HERZ;ASS");
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}*/

//var a = player.hands[0].showHandAllCards("HERZ;ASS;PIK;NEUN");

//let name = new GetCardFile("HERZ;ASS;PIK;ZEHN");
//name.getFilePathOfCard();

//let img = new Image();
//img.src

/*
window.onload = function() {
  alert("drinnen!");
  var c = document.getElementById("char1");
  var ctx = c.getContext("2d");
  //let img = new Image();
  //img.scr = "assets/images/cards/10b.png";
  var img = document.getElementById("card");
  ctx.drawImage(img, 20, 20, 20, 20);
};*/
/*
function something1() {
  //alert("drinnen!");

  //var c = document.createElement("canvas");
  var c = document.getElementById("chair1");
  var ctx = c.getContext("2d");

  var img = document.createElement("img");
  img.setAttribute("src", "assets/images/cards/19b.png");
  //img.setAttribute("height", "20");
  //img.setAttribute("width", "20");
  img.onload = function() {
    ctx.globalAlpha = 1;
    ctx.translate(100 - 25, 100 - 35);
    ctx.rotate(10 * (Math.PI / 180)); //Radianten!
    ctx.translate(-40, 0);
    ctx.drawImage(img, 0, 0, 50, 70);
  };
}
window.onload = something1();
*/

/*
window.onload = function() {
  var c = document.createElement("canvas");
  //document.body.style.margin = "0px";
  //document.body.style.overflow = "hidden";
  c.width = 100;
  c.height = 100;

  var ctx = c.getContext("2d");
  let img = new Image();
  img.src = "assets/images/cards/10b.png";
  ctx.drawImage(img, 10, 10);
  document.body.append(c);
};
*/

/*
let engine = new Engine();
engine.start();

let img = new Image();
img.src = "assets/images/cards/10b.png";

engine.userDraw = function(ctx) {
  ctx.drawImage(img, 0, 0, 50, 50);
};
*/

//THIS WORKS///////////////////////////////////////////
/*
let img = new Image();
img.src = "assets/images/cards/10b.png";

let engine = new Engine();
engine.start();

let img = new Image();
img.src = "assets/images/cards/10b.png";

engine.userDraw = function(ctx) {
  ctx.drawImage(img, 0, 0);
};
*/
//THIS WORKS END/////////////////////////////////////////
let x = 0;
let y = 0;

function run(sprites) {}

//loadCardPicture("assets/images/cards/10b.png", run);

//player.getHands(0);
//.addCard("");

//player.hands[0].addCard("lala");
//player.speak("I will win!");
/*
new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.fillStyle = "#00f";
  context.clearRect(0, 0, 800, 600);

  paddle.update(deltaTime);
  paddle.draw(context);

  requestAnimationFrame(gameLoop); //when the next Frame ist ready, call this!
}

gameLoop();

/*
context.fillStyle = "#f00";
context.fillRect(20, 20, 100, 100);

context.fillStyle = "#00f";
context.fillRect(200, 200, 100, 100);
*/
