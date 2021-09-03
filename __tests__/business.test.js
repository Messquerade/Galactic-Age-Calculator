import SolarAge from "./../src/business";

describe('SolarAge', () => {
  let reusableAge;

  beforeEach(() => {
    reusableAge = new SolarAge(28);
  });
  test('should correctly create a SolarAge object with age property in earth years', () => {
    expect(reusableAge.earthYears).toEqual(28);
  });

  test('should correctly convert age in Earth years to age in Mars years', () => {
    reusableAge.calculateMarsAge();
    expect(reusableAge.marsYears).toEqual(15);
  });

  test('should return a map', () => {
    let conversions = reusableAge.makeConversionMap();
    expect(conversions instanceof Map).toBeTruthy();
  });

  test('should correctly return a map containing the names of the planets as keys and conversion numbers as values', () => {
    let conversions = reusableAge.makeConversionMap();
    let entriesIterable = conversions.entries();
    expect(entriesIterable.next().value).toEqual(["Mars", 1.88]);
    expect(entriesIterable.next().value).toEqual(["Mercury", 0.24]);
    expect(entriesIterable.next().value).toEqual(["Venus", 0.62]);
    expect(entriesIterable.next().value).toEqual(["Jupiter", 11.86]);
  });
  // wrote two tests at once because I needed to test for a simpler behavior before getting a good fail on the more complicated behavior
});