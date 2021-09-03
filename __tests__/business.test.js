import SolarAge from "./../src/business";

describe('SolarAge', () => {

  test('should correctly create a SolarAge object with age property in earth years"', () => {
    let newSolarAge = new SolarAge(28)
    expect(newSolarAge.earthYears).toEqual(28);
  });
});