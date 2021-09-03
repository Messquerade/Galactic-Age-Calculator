export default class SolarAge {
  constructor(age) {
    this.earthYears = age
  }
  
  makeConversionMap () {
    let conversions = new Map (
      [
        [],
        []
      ]
    );
    return conversions;
  }

  calculateMarsAge () {
    this.marsYears = Math.round(this.earthYears / 1.88)
  }
}