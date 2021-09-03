export default class SolarAge {
  constructor(age) {
    this.earthYears = age;
  }
  
  makeConversionMap () {
    let conversions = new Map (
      [
        ["Mars", 1.88],
        ["Mercury", .24],
        ["Venus", .62],
        ["Jupiter", 11.86]
      ]
    );
    return conversions;
  }

  calculateSolarAge () {
    // this.marsYears = Math.round(this.earthYears / 1.88);
  }
}