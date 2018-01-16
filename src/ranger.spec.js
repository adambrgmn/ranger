import ranger from './';

test('should accept a string as input and output array of numbers', () => {
  expect(ranger('1,2,3')).toEqual([1, 2, 3]);
  expect(ranger('1-3')).toEqual([1, 2, 3]);
  expect(ranger('1,2-3')).toEqual([1, 2, 3]);
  expect(ranger('1-2,3')).toEqual([1, 2, 3]);
  expect(ranger('1-1')).toEqual([1]);
});

test('should ignore whitespace', () => {
  expect(ranger('1, 2, 3')).toEqual([1, 2, 3]);
  expect(ranger('1 -2 ,3')).toEqual([1, 2, 3]);
  expect(ranger('1  -2 ,   3')).toEqual([1, 2, 3]);
});

test('throws an error if a range is incorrect', () => {
  expect(() => ranger('3-1')).toThrowError(RangeError);
  expect(() => ranger('3-1')).toThrowError(
    'The input 3-1 is invalid. Start must be smaller than end.',
  );
});
