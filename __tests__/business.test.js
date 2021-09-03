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

  test('should correctly create a map containing the names of the planets as keys and conversion numbers as values', () => {
    let entriesIterable = conversions.entries();
    expect(entriesIterable.next().value).toEqual(["Mars", 1.88]);
    expect(entriesIterable.next().value).toEqual(["Mercury", 0.24]);
    expect(entriesIterable.next().value).toEqual(["Venus", 0.62]);
    expect(entriesIterable.next().value).toEqual(["Jupiter", 11.86]);
  });
});