import ReadTextFile from "/src/ReadTextFile";
import Player from "/src/Player";
import Dealer from "/src/Dealer";
import GetCardFile from "/src/GetCardFile";
import Chair from "/src/Chair";

var file = new ReadTextFile("/assets/textfiles/BlackJackGameHistory.txt");
var gameHistory = file.readTextFile();

//create dummy players with map
var testMap = new Map();
testMap.set("Kurt", parseInt("2"), Object); //first name, second place, and object=new Player??? requiered???
testMap.get("Kurt");

//create dummy players
var players = [
  ["FREE"],
  ["FREE"],
  ["FREE"],
  ["FREE"],
  ["FREE"],
  ["FREE"],
  ["FREE"]
];

//WARUM FUNKTIONIERT DIES NUR GLOBLA UNF NICHT IN #1 ?????
function prepaireChairs() {
  console.log(">>> CREATE");
  var chairs = new Array(7);
  for (let i = 0; i <= 7; i++) {
    var chair = new Chair();
    var place = chair.createPlace(i);
    chairs.push(place);
  }
}
prepaireChairs();

for (var i = 0; i < gameHistory.length - 1; ++i) {
  var gameHistoryElements = gameHistory[i].split(";");
  var input = gameHistoryElements;
  console.log(input);

  switch (input[1]) {
    case "GAME":
      //CREATE table, 'cause only one option!
      console.log("> CREATE TABLE");
      break;
    case "TABLE":
      if (input[3] === "CREATE") {
        //CREATE
        //create chairs
        // #1
      } else if (input[3] === "GET") {
        //GET
        console.log(">>> GET");
        if (input[6] === "DEALER") {
          //DEALER
          var dealer = new Dealer("Seppl");
          console.log(">>>>>> DEALER");
        } else if (input[6] === "PLAYER") {
          //PLAYER
          //--->input[5] - 1 ==> chair Place? or sitting position? what is "0"
          players.splice(input[5] - 1, 0, new Player(input[5], input[7]));
          console.log(">>>>>> PLAYER");
        }
      }
      break;
    case "DEALER":
      if (input[3] === "GET") {
        //GET
        //dealer.hand.showHandDealer("SHOW", input[7]);
        console.log(">>> GET");
      } else if (input[3] === "HAS") {
        //HAS
        console.log(">>> HAS");
        if (input[8] === "SHOW") {
          //SHOW
          //FIXME PART 1: ADDS CARD IF I CALL SHOW AND THEN SHOWALL!
          dealer.hand.showHandDealer("SHOW", input[7]);
          console.log(">>>>>>>> SHOW");
        } else if (input[8] === "SHOWALL") {
          //SHOWALL
          //FIXME PART 2: ADDS CARD IF I CALL SHOW AND THEN SHOWALL!
          dealer.hand.showHandDealer("SHOWALL", input[7]);
          console.log(">>>>>>>> SHOWALL");
        }
      } else if (input[3] === "CHECKTURN") {
        //CHECKTURN
        console.log(">>> CHECKTURN");
        if (input[8] === "ALLOW") {
          //ALLOW
          console.log(">>>>>>>> ALLOW");
        } else if (input[8] === "BLOCK") {
          //BLOCK
          console.log(">>>>>>>> BLOCK");
        }
      }
      break;
    case "PLAYER":
      if (input[3] === "GET") {
        //GET
        //alert(players[input[2]-1])
        console.log(">>> GET");
        if (input[6] === "CARD") {
          //CARD
          console.log(">>>>>> CARD");
        } else if (input[6] === "COIN") {
          //COIN
          console.log(">>>>>> COIN");
        }
      } else if (input[3] === "HAS") {
        //HAS
        console.log(">>> HAS");
        if (input[6] === "CARDS") {
          //CARD
          //input[2] - 1 ==> this also could be a name!!!
          players[input[2] - 1].hands[input[5]].showHandAllCards(input[7]);
          console.log(">>>>>> CARD");
        } else if (input[6] === "RESULT") {
          //RESULT
          console.log(">>>>>> RESULT");
        }
      } else if (input[3] === "WANT") {
        //WANT
        console.log(">>> WANT");
        if (input[8] === "WHAIT") {
          //WHAIT
          console.log(">>>>>>>> WHAIT");
        } else if (input[8] === "PLAY") {
          //PLAY
          console.log(">>>>>>>> PLAY");
        }
      } else if (input[3] === "REMOVE") {
        //REMOVE
        console.log(">>> REMOVE");
      }
      break;
    default:
      break;
  }
}
