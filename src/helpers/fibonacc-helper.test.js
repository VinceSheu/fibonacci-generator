import { generateFibonacciSequence } from './fibonacci-helper';

test('base case with 1 number requested', () => {
  const returnArray = [0];
  expect(generateFibonacciSequence(1)).toEqual(returnArray);
});

test('base case with 2 numbers requested', () => {
  const returnArray = [0, 1];
  expect(generateFibonacciSequence(2)).toEqual(returnArray);
});

test('base case with 5 numbers requested', () => {
  const returnArray = [0, 1, 1, 2, 3];
  expect(generateFibonacciSequence(5)).toEqual(returnArray);
});