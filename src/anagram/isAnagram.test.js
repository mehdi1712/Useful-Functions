// isAnagram.test.js
const isAnagram = require('./isAnagram');

describe('isAnagram Function', () => {
  test('recognizes anagrams with the same case', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
  });

  test('recognizes anagrams with different cases', () => {
    expect(isAnagram('Listen', 'Silent')).toBe(true);
  });

  test('returns false for non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
  });

  test('ignores spaces and still recognizes anagrams', () => {
    expect(isAnagram('conversation', 'voices rant on')).toBe(true);
  });

  test('returns false for different length strings', () => {
    expect(isAnagram('binary', 'brain')).toBe(false);
  });

  test('works with empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });
});
