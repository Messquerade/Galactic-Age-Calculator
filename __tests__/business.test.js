import SolarAge from "./../src/business";

describe('SolarAge', () => {
  let reusableAge;

  beforeEach(() => {
    reusableAge = new SolarAge(28, "female", "Northern America");
  });
  test('should correctly create a SolarAge object with age property in earth years, gender property and continent property', () => {
    expect(reusableAge.earthYears).toEqual(28);
    expect(reusableAge.gender).toEqual("female");
    expect(reusableAge.continent).toEqual("Northern America");
  });
  
  test('should correctly convert age in Earth years to age in Mars years, Mercury Years, Venus Years, and Jupiter Years', () => {
    reusableAge.calculateSolarAge();
    expect(reusableAge.marsYears).toEqual(15);
    expect(reusableAge.mercuryYears).toEqual(117);
    expect(reusableAge.venusYears).toEqual(45);
    expect(reusableAge.jupiterYears).toEqual(2);
  });

  test('should add property to SolarAge object of life expectancy in Earth years dependent on continent lived on', () => {
    reusableAge.calculateLifeExpectancy();
    expect(reusableAge.lifeExpectancy).toEqual(81);
  });

  test('should add property to SolarAge object of life expectancy in Earth years dependent on continent and gender', () => {
    let newAge = new SolarAge(55, "male", "Oceania");
    let anotherAge = new SolarAge(90, "non-binary", "Europe");
    newAge.calculateLifeExpectancy();
    anotherAge.calculateLifeExpectancy();
    expect(newAge.lifeExpectancy).toEqual(77);
    expect(anotherAge.lifeExpectancy).toEqual(79);
  });
  test('should add properties of years left to live on each planet to SolarAge object if life expectancy is greater than age', () => {
    reusableAge.calculateYearsDifference();
    expect(reusableAge.earthYearsLeft).toEqual(53);
    expect(reusableAge.marsYearsLeft).toEqual(28);
    expect(reusableAge.mercuryYearsLeft).toEqual(221);
    expect(reusableAge.venusYearsLeft).toEqual(85);
    expect(reusableAge.jupiterYearsLeft).toEqual(4);
  });

  test('should add properties of years lived over life expectancy to SolarAge object if life expectancy is less than age', () => {
    let anotherAge = new SolarAge(90, "non-binary", "Europe");
    anotherAge.calculateYearsDifference();
    expect(anotherAge.earthYearsOver).toEqual(11);
    expect(anotherAge.marsYearsOver).toEqual(6);
    expect(anotherAge.mercuryYearsOver).toEqual(46);
    expect(anotherAge.venusYearsOver).toEqual(18);
    expect(anotherAge.jupiterYearsOver).toEqual(1);
  });

  test('should return a summary of SolarAge object with age on each planet', () => {
    expect(reusableAge.solarAgeSummary()).toMatch("Age on Mercury: 117 years");
    expect(reusableAge.solarAgeSummary()).toMatch("Age on Venus: 45 years");
    expect(reusableAge.solarAgeSummary()).toMatch("Age on Mars: 15 years");
    expect(reusableAge.solarAgeSummary()).toMatch("Age on Jupiter: 2 years");
  });

  test('should return a summary of SolarAge object with years left to live on each planet if life expectancy is greater than age', () => {
    expect(reusableAge.solarAgeSummary()).toMatch("Time left to live on Mercury: 221 years");
    expect(reusableAge.solarAgeSummary()).toMatch("Time left to live on Venus: 85 years");
    expect(reusableAge.solarAgeSummary()).toMatch("Time left to live on Mars: 28 years");
    expect(reusableAge.solarAgeSummary()).toMatch("Time left to live on Jupiter: 4 years");
  });

  test('should return a summary of object with years past life expectancy on each planet if life expectancy is less than age', () => {
    let anotherAge = new SolarAge(90, "non-binary", "Europe");
    expect(anotherAge.solarAgeSummary()).toMatch("Time lived past life expectancy on Mercury: 46 years");
    expect(anotherAge.solarAgeSummary()).toMatch("Time lived past life expectancy on Venus: 18 years");
    expect(anotherAge.solarAgeSummary()).toMatch("Time lived past life expectancy on Mars: 6 years");
    expect(anotherAge.solarAgeSummary()).toMatch("Time lived past life expectancy on Jupiter: 1 years");
  });
});