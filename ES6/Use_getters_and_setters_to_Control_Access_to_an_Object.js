// Only change code below this line
class Thermostat {
  constructor(tem) {
    this.temFah = tem;
  }

  get temperature() {
    return (this.temCel = (5 / 9) * (this.temFah - 32));
  }

  set temperature(tem) {
    this.temFah = tem * (9 / 5) + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
