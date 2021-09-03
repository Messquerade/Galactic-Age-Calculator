import SolarAge from "./../src/business";

describe('SolarAge', () => {

  test('should correctly create a SolarAge object with age property in earth years', () => {
    let newSolarAge = new SolarAge(28);
    expect(newSolarAge.earthYears).toEqual(28);
  });

  test('should correctly convert age in Earth years to age in Mars years', () => {
    let newSolarAge = new SolarAge(28);
    newSolarAge.calculateMarsAge();
    expect(newSolarAge.marsYears).toEqual(15)
  });
});