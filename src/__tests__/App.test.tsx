function add(a: number, b: number) {
  return a + b;
}

//Test a simple function
describe('App', () => {
  test('should return number', () => {
    expect(add(2, 2)).toBe(4);
  });
});
