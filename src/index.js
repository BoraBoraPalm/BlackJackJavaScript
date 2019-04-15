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

let player1 = new Player("7", "Fredl");

player1.hands[1].showHandAllCards("HERZ;ASS;KREUZ;ASS");
player1.hands[1].showHandAllCards("HERZ;ASS;PIK;ASS;PIK;ASS");
player1.hands[1].showHandAllCards("HERZ;ASS;PIK;ASS;PIK;ASS");

let player2 = new Player("3", "Fredl");
player2.hands[1].showHandAllCards("HERZ;ASS;PIK;ASS;PIK;ASS");
