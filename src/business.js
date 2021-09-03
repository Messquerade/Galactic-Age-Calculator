export default class SolarAge {
  constructor(age) {
    this.earthYears = age
  }
  
  makeConversionMap () {
    
  }

  calculateMarsAge () {
    this.marsYears = Math.round(this.earthYears / 1.88)
  }
}