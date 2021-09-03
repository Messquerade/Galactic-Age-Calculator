import SolarAge from "./../src/business";

describe('SolarAge', () => {
  let reusableAge;

  beforeEach(() => {
    reusableAge = new SolarAge(28, "Woman", "Northern America");
  });
  test('should correctly create a SolarAge object with age property in earth years, gender property and continent property', () => {
    expect(reusableAge.earthYears).toEqual(28);
    expect(reusableAge.gender).toEqual("Woman");
    expect(reusableAge.continent).toEqual("Northern America");
  });
  
  test('should return a map', () => {
    let conversions = reusableAge.makeConversionMap();
    expect(conversions instanceof Map).toBeTruthy();
  });
  
  test('should correctly return a map containing the names of the planets as keys and conversion numbers as values', () => {
    let conversions = reusableAge.makeConversionMap();
    let entriesIterable = conversions.entries();
    expect(entriesIterable.next().value).toEqual(["mars", 1.88]);
    expect(entriesIterable.next().value).toEqual(["mercury", 0.24]);
    expect(entriesIterable.next().value).toEqual(["venus", 0.62]);
    expect(entriesIterable.next().value).toEqual(["jupiter", 11.86]);
  });
  // wrote two tests at once because I didn't know I would need to test for a simpler behavior before getting a good fail on the more complicated behavior

  test('should correctly convert age in Earth years to age in Mars years, Mercury Years, Venus Years, and Jupiter Years', () => {
    reusableAge.calculateSolarAge();
    expect(reusableAge.marsYears).toEqual(15);
    expect(reusableAge.mercuryYears).toEqual(117);
    expect(reusableAge.venusYears).toEqual(45);
    expect(reusableAge.jupiterYears).toEqual(2);
  });

  test('should return life expectancy in Earth years dependent on gender and continent lived on', () => {
    reusableAge.calculateLifeExpectancy("Woman", "Northern America");
    expect(reusableAge.calculatedLifeExpectancy).toEqual()
  })
});