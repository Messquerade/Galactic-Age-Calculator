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
    );
    let lifeExpectanciesMale = new Map (
      [
        ["Northern America", 77],
        ["Europe", 75],
        ["Oceania", 77],
        ["Asia", 71],
        ["Latin America and the Caribbean", 72],
        ["Africa", 62]
      ]
    );
    if (this.gender === "female") {
      this.lifeExpectancy = lifeExpectanciesFemale.get(this.continent);
    } else if (this.gender === "male") {
      this.lifeExpectancy = lifeExpectanciesMale.get(this.continent);
    } else {
      this.lifeExpectancy = Math.round((lifeExpectanciesFemale.get(this.continent) + lifeExpectanciesMale.get(this.continent)) / 2);
    }
  }

  calculateYearsDifference () {
    this.calculateLifeExpectancy();
    if (this.lifeExpectancy >= this.earthYears) {
      this.earthYearsLeft = this.lifeExpectancy - this.earthYears;
      this.marsYearsLeft = Math.round(this.earthYearsLeft / 1.88);
      this.mercuryYearsLeft = Math.round(this.earthYearsLeft / 0.24);
      this.venusYearsLeft = Math.round(this.earthYearsLeft / .62);
      this.jupiterYearsLeft = Math.round(this.earthYearsLeft / 11.86);
    } else {
      this.earthYearsOver = this.earthYears - this.lifeExpectancy;
      this.marsYearsOver = Math.round(this.earthYearsOver / 1.88);
      this.mercuryYearsOver = Math.round(this.earthYearsOver / 0.24);
      this.venusYearsOver = Math.round(this.earthYearsOver / 0.62);
      this.jupiterYearsOver = Math.round(this.earthYearsOver / 11.86);
    }
  }
}