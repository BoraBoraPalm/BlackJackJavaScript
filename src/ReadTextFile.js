export default class ReadTextFile {
  constructor(path) {
    //get the path of the textfile, where the game history is written down
    this.path = path;
  }

  //here: 90% just copied from the web: stackoverflow greets ;) !
  readTextFile() {
    var allText;
    var lines;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", this.path, false);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          allText = rawFile.responseText;
          lines = allText.split("\n");
        }
      }
    };
    rawFile.send(null);
    return lines;
  }
}
