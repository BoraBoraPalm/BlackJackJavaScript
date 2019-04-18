export default class PositionCards {
  constructor() {
    this.positions = [];
    //this.index = 0;
  }

  add(x, y, angle) {
    let coordinates = [];
    coordinates.push(x);
    coordinates.push(y);
    coordinates.push(angle);
    this.positions.push(coordinates);
    //alert(this.addpositions)
    //this.index++;
  }

  get(index) {
    return this.positions[index];
  }

  resetAll() {
    this.positions = [];
    this.index = 0;
  }
}
