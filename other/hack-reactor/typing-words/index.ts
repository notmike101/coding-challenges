/**
 * Typing Words Hack Reactor problem
 * Mike Orozco (notmike101)
 * 
 * Given an array of strings words, return the words that can be typed using letters
 * of the alphabet on only one row of American keyboard like the image below.
 * 
 * In the American keyboard:
 *   * The first row consists of the characters "qwertyuiop"
 *   * The second row consists of the characters "asdfghjkl"
 *   * The third row consits of the characters "zxcvbnm"
 * 
 * Test cases:
 *   * ["Hello", "Alaska", "Dad", "Peace"] -> ["Alaska", "Dad"]
 *   * ["omk"] -> []
 *   * ["asdf", "sfd"] -> ["asdf", "sfd"]
 */

const keyboardRowMap = new Map([
  ['q', 1],
  ['w', 1],
  ['e', 1],
  ['r', 1],
  ['t', 1],
  ['y', 1],
  ['u', 1],
  ['i', 1],
  ['o', 1],
  ['p', 1],
  ['a', 2],
  ['s', 2],
  ['d', 2],
  ['f', 2],
  ['g', 2],
  ['h', 2],
  ['j', 2],
  ['k', 2],
  ['l', 2],
  ['z', 3],
  ['x', 3],
  ['c', 3],
  ['v', 3],
  ['b', 3],
  ['n', 3],
  ['m', 3],
]);

const getKeyboardRowWords = (words: string[]) => {
  const output: string[] = [];
  
  for (const word of words) {
    const splitWord = word.toLowerCase().split('');
    const firstCharKeyboardRow = keyboardRowMap.get(splitWord[0]);
    let isWordCharsInSameRow = true;

    splitWord.shift()
    
    for (const letter of splitWord) {
      const letterKeyboardRow = keyboardRowMap.get(letter);

      if (letterKeyboardRow !== firstCharKeyboardRow) {
        isWordCharsInSameRow = false;
        break;
      }
    }

    if (isWordCharsInSameRow === true) {
      output.push(word);
    }
  }

  return output;
};

export { getKeyboardRowWords };
