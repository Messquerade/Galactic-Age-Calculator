export default class SolarAge {
  constructor(age) {
    this.earthYears = age;
  }
  
  makeConversionMap () {
    let conversions = new Map (
      [
        ["mars", 1.88],
        ["mercury", .24],
        ["venus", .62],
        ["jupiter", 11.86]
      ]
    );
    return conversions;
  }

  calculateSolarAge () {
    this.marsYears = Math.round(this.earthYears / 1.88);
    this.mercuryYears = Math.round(this.earthYears / 0.24);
    this.venusYears = Math.round(this.earthYears / 0.62);
    this.jupiterYears = Math.round(this.earthYears / 11.86);
  }
}