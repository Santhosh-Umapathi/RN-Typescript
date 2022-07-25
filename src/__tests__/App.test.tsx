import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App';

function add(a: number, b: number) {
  return a + b;
}

describe('App', () => {
  //Test a simple function
  test('should return number', () => {
    expect(add(2, 2)).toBe(4);
  });

  //Test a simple React Component
  test('should render correctly', () => {
    renderer.create(<App />);
  });
});
