const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Ameer', () => {
    expect(values.firstName).toEqual('Ameer');
  });
  test('lastName is Hamza', () => {
    expect(values.lastName).toEqual('Hamza');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2000', () => {
    expect(values.birthYear).toEqual(2000);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello, I am Ameer Hamza and I am 26 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is Ameer Hamza', () => {
    expect(values.fullName).toEqual('Ameer Hamza');
  });
  test.skip('age is 26', () => {
    expect(values.age).toEqual(26);
  });
});
