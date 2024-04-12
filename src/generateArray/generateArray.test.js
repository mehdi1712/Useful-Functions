const generateArray = require('./generateArray');

describe('Generate array function' , ()=>{
  
    test('generates an array from 1 to n for a positive n', () => {
        expect(generateArray(5)).toEqual([1, 2, 3, 4, 5]);
      });
    
      test('returns an empty array when n is 0', () => {
        expect(generateArray(0)).toEqual([]);
      });
    
      test('returns an empty array for negative n', () => {
        expect(generateArray(-1)).toEqual([]);
      });
    
      test('correctly generates an array for n = 1', () => {
        expect(generateArray(1)).toEqual([1]);
      });
    
  });