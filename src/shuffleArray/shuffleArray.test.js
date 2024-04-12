const shuffleArray = require('./shuffleArray');


describe('shuffleArray Function', () => {
    const array = [1, 2, 3, 4, 5];
  
    test('returns an array of the same length', () => {
      const result = shuffleArray([...array]); // Create a copy to avoid modifying the original
      expect(result.length).toBe(array.length);
    });
  
    test('contains the same set of elements before and after shuffle', () => {
      const result = shuffleArray([...array]);
      expect(result.sort()).toEqual(array.sort());
    });
  
    test('typically alters the order of elements (probabilistic)', () => {
      const original = [...array];
      const result = shuffleArray([...array]);
      const isSameOrder = original.every((element, index) => element === result[index]);
  
      // This test may occasionally fail due to the random nature of shuffling
      // It's generally expected but not guaranteed that the order will change
      expect(isSameOrder).toBeFalsy();
    });
  
    test('handles an empty array correctly', () => {
      const result = shuffleArray([]);
      expect(result).toEqual([]);
    });
  
    test('handles an array with one element correctly', () => {
      const singleElementArray = [1];
      const result = shuffleArray([...singleElementArray]);
      expect(result).toEqual(singleElementArray);
    });
  });