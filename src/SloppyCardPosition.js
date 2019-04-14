export default class SloppyCardPosition {
  constructor() {}

  getSloppyFactor(min, max) {
    var random = Math.random() * (+max - +min) + +min;
    return random;
  }
}
