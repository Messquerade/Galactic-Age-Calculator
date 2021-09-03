export default class SolarAge {
  constructor(age) {
    this.earthYears = age
  }


  calculateMarsAge () {
    this.marsYears = Math.round(this.earthYears / 1.88)
  }
}