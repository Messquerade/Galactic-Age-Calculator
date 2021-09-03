export default class SolarAge {
  constructor(age, gender, continent) {
    this.earthYears = age;
    this.gender = gender;
    this.continent = continent;
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

  calculateLifeExpectancy () {
    let lifeExpectanciesFemale = new Map (
      [
        ["Northern America", 81],
        ["Europe", 82],
        ["Oceania", 81],
        ["Asia", 75],
        ["Latin America and the Caribbean", 79],
        ["Africa", 65]
      ]
    )
    console.log(lifeExpectanciesFemale.get(this.continent));
    this.lifeExpectancy = lifeExpectanciesFemale.get(this.continent);
  }
}