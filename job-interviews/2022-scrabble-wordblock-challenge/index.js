/**
 * Word square problem
 * Mike Orozco (notmike101)
 */

import { Dictionary } from './dictionary.js';

class WordBlock {
  /**
   * @typedef {Object} WordBlock
   * @property {number} size - The size of the word block
   * @property {Array<Array<string>>} wordBlock - The word block
   * @property {function} generateEmptyWordblock - Generate an empty word block of the given size
   * @property {function} addWord - Adds a word to the block at the given index and orientation
   * @property {function} addWords - Adds a set of words to the block at the given index and orientation
   * @property {function} validate - Checks if the word block is valid (no empty spaces)
   * @property {function} generate - Generate a valid word block using the given dictionary and first row word
   * @property {function} print - Prints the word block to the console
   */

  // Private properties
  /**
   * @private {number} size - The size of the word block
   * @default 3
   */
  #size;

  /**
   * @private {Array<Array<string>>} wordBlock - The word block
   */
  #wordBlock;

  /**
   * @private {Dictionary} dictionary - The dictionary to use to generate the word block
   */
  #dictionary;

  constructor(dictionary, size = 3) {
    this.#dictionary = dictionary;
    this.#size = size;
    this.#wordBlock = this.generateEmptyWordblock(size);
  }

  /**
   * @returns {Array<Array<string>>} The word block
   */
  get wordBlock() {
    return this.#wordBlock;
  }

  /**
   * Generate an empty word block of the given size
   * 
   * @param {number} size - The size of the word block to generate (3-6)
   * @returns An empty word block of the given size
   */
  generateEmptyWordblock(size = 3) {
    if (size < 3) throw new Error('Word blocks must be at least 3x3');
    if (size > 6) throw new Error('Word blocks cannot be larger than 6x6');

    const wordBlock = [];

    for (let row = 0; row < size; ++row) {
      wordBlock.push([]);

      for (let col = 0; col < size; ++col) {
        wordBlock[row].push('');
      }
    }

    return wordBlock;
  }

  /**
   * Adds a word to the block at the given index and orientation
   * 
   * @param {string} word - The word to add to the word block
   * @param {string} orientation - The orientation of the word (horizontal or vertical)
   * @param {number} index - The index of the word in the word block
   */
  addWord(word, orientation, index) {
    const wordArray = word.split('');

    if (orientation === 'vertical') {
      for (let row = 0; row < this.#size; ++row) {
        if (this.#wordBlock[row][index] === '') {
          this.#wordBlock[row][index] = wordArray[row];
        }
      }
    } else {
      this.#wordBlock[index] = wordArray;
    }
  }

  /**
   * @typedef {Object} WordSet
   * @property {string} word - The word to add to the word block
   * @property {string} orientation - The orientation of the word (horizontal or vertical)
   * @property {number} index - The index of the word in the word block
   */
  /**
   * Adds a set of words to the block at the given index and orientation
   * 
   * @param {WordSet} wordSet - A set of words to add to the word block
   */
  addWords(wordSet) {
    for (let wordObject of wordSet) {
      this.addWord(wordObject.word, wordObject.orientation, wordObject.index);
    }
  };

  /**
   * Checks if the word block is valid (no empty spaces)
   * 
   * @returns True if the word block is valid, false otherwise
   */
  validate() {
    for (let row = 0; row < this.#size; ++row) {
      for (let column = 0; column < this.#size; ++column) {
        if (this.#wordBlock[row][column] === '') {
          return false;
        }
      }
    }
  
    return true;
  }

  /**
   * Get the word from the given row
   * 
   * @param {number} rowIndex - The index of the row to get the word from
   * @returns 
   */
  getRowWord(rowIndex) {
    return this.#wordBlock[rowIndex].join('');
  }

  /**
   * Get the word from the given column
   * 
   * @param {number} columnIndex - The index of the column to get the word from
   * @returns 
   */
  getColumnWord(columnIndex) {
    let columnWord = '';

    for (let row = 0; row < this.#size; ++row) {
      columnWord += this.#wordBlock[row][columnIndex];
    }

    return columnWord;
  }

  /**
   * Generate a valid word block using the given dictionary and first row word
   * 
   * @param {string} firstRowWord - The word to use as the first row of the word block
   * @returns The filled word block
   * @throws {Error} Throws an error if the word block is invalid
   */
  generate(firstRowWord) {
    const possibleFirstColumnWords = this.#dictionary.getWordsStartingWith(firstRowWord.at(0));
    let breakout = false;
    const wordsToAdd = [];
    const validStartingPatterns = new Set(firstRowWord.split(''));

    // Remove the firstRowWord from the dictionary so it's not used again
    this.#dictionary.delete(firstRowWord);

    // Add all letters from the first possible column words into the valid starting patterns set
    for (let possibleWord of possibleFirstColumnWords) {
      for (let possibleCharacter of possibleWord) {
        validStartingPatterns.add(possibleCharacter);
      }
    }
    // Remove all words from the dictionary that don't start with a valid starting pattern
    for (let word of this.#dictionary.words) {
      const wordStarting = word.slice(0, 1);

      if (!validStartingPatterns.has(wordStarting)) {
        this.#dictionary.delete(word);
      }
    }

    // Itterate over all possible first column words
    for (let possibleFirstColumnWord of possibleFirstColumnWords) {
      // If the possible first column word is NOT in the dictionary, start a new loop
      if (!this.#dictionary.words.has(possibleFirstColumnWord)) continue;

      // Get all possible second row words
      const possibleSecondRowWords = this.#dictionary.getWordsStartingWith(possibleFirstColumnWord.at(1));

      // Remove the possible first column word from the dictionary so it's not used again
      this.#dictionary.delete(possibleFirstColumnWord);
  
      // Itterate over all the possible second row words
      for (let possibleSecondRowWord of possibleSecondRowWords) {
        // If the possible first column word is NOT in the dictionary, start a new loop
        if (!this.#dictionary.words.has(possibleSecondRowWord)) continue;
        // If there are no words in the dictionary that end with the last character
        // of the first row and last character of the second row, start a new loop
        // since it is impossible to create a valid word block using this word
        if (this.#dictionary.getWordsStartingWith(firstRowWord.at(-1) + possibleSecondRowWord.at(-1)).size === 0) continue;

        // Get all possible second column words
        const possibleSecondColumnWords = this.#dictionary.getWordsStartingWith(firstRowWord.at(1) + possibleSecondRowWord.at(1));

        // Remove the possible second row word from the dictionary so it's not used again
        this.#dictionary.delete(possibleSecondRowWord);
        
        // Itterate over all possible second column words
        for (let possibleSecondColumnWord of possibleSecondColumnWords) {
          // If the possible second column word is NOT in the dictionary, start a new loop
          if (!this.#dictionary.words.has(possibleSecondColumnWord)) continue;
          // If there are no words in the dictionary that end with the last character
          // of the first column and last character of the second column, start a new loop
          // since it is impossible to create a valid word block using this word
          if (this.#dictionary.getWordsStartingWith(possibleFirstColumnWord.at(-1) + possibleSecondColumnWord.at(-1)).size === 0) continue;
          
          // Get all possible third row words
          const possibleThirdRowWords = this.#dictionary.getWordsStartingWith(possibleFirstColumnWord.at(2) + possibleSecondColumnWord.at(2));

          // Remove the possible second column word from the dictionary so it's not used again
          this.#dictionary.delete(possibleSecondColumnWord);

          // Itterate over all possible third row words
          for (let possibleThirdRowWord of possibleThirdRowWords) {
            // If the possible third row word is not in the dictionary, start a new loop
            if (!this.#dictionary.words.has(possibleThirdRowWord)) continue;
            // If there are no words in the dictionary that end with the last character
            // of the first row, last character of the second row, and last character of the third row,
            // start a new loop since it is impossible to create a valid word block using this word
            if (this.#dictionary.getWordsStartingWith(firstRowWord.at(-1) + possibleSecondRowWord.at(-1) + possibleThirdRowWord.at(-1)).size === 0) continue;

            // Get all possible third column words
            const possibleThirdColumnWords = this.#dictionary.getWordsStartingWith(firstRowWord.at(2) + possibleSecondRowWord.at(2) + possibleThirdRowWord.at(2));

            // Remove the possible third row word from the dictionary so it's not used again
            this.#dictionary.delete(possibleThirdRowWord);

            // If the word block is 3x3 and there is at least one possible third column word,
            // add the words to the word block and consider the wordblock generated
            if (this.#size === 3 && possibleThirdColumnWords.size >= 1) {
              wordsToAdd.push(
                { word: possibleThirdColumnWords.values().next().value, orientation: 'vertical', index: 2 },
                { word: possibleSecondColumnWord, orientation: 'vertical', index: 1 },
                { word: possibleFirstColumnWord, orientation: 'vertical', index: 0 },
              );
  
              breakout = true;
              break;
            }

            // Itterate over all possible third column words
            for (let possibleThirdColumnWord of possibleThirdColumnWords) {
              // If the possible third column word is not in the dictionary, start a new loop
              if (!this.#dictionary.words.has(possibleThirdColumnWord)) continue;
              // If there are no words in the dictionary that end with the last character
              // of the first column, last character of the second column, and last character of the third column,
              // start a new loop since it is impossible to create a valid word block using this word
              if (this.#dictionary.getWordsStartingWith(possibleFirstColumnWord.at(-1) + possibleSecondColumnWord.at(-1) + possibleThirdColumnWord.at(-1)).size === 0) continue;

              // Get all possible fourth row words
              const possibleFourthRowWords = this.#dictionary.getWordsStartingWith(possibleFirstColumnWord.at(3) + possibleSecondColumnWord.at(3) + possibleThirdColumnWord.at(3));
              
              // Remove the possible third column word from the dictionary so it's not used again
              this.#dictionary.delete(possibleThirdColumnWord);

              // Itterate over all possible fourth row words
              for (let possibleFourthRowWord of possibleFourthRowWords) {
                // If the possible fourth row word is not in the dictionary, start a new loop
                if (!this.#dictionary.words.has(possibleFourthRowWord)) continue;
                // If there are no words in the dictionary that end with the last character
                // of the first row, last character of the second row, last character of the third row,
                // and last character of the fourth row, start a new loop since it is impossible to create
                if (this.#dictionary.getWordsStartingWith(firstRowWord.at(-1) + possibleSecondRowWord.at(-1) + possibleThirdRowWord.at(-1) + possibleFourthRowWord.at(-1)).size === 0) continue;
  
                // Get all possible fourth column words
                const possibleFourthColumnWords = this.#dictionary.getWordsStartingWith(firstRowWord.at(3) + possibleSecondRowWord.at(3) + possibleThirdRowWord.at(3) + possibleFourthRowWord.at(3));

                // Remove the possible fourth row word from the dictionary so it's not used again
                this.#dictionary.delete(possibleFourthRowWord);

                // If the word block is 4x4 and there is at least one possible fourth column word,
                // add the words to the word block and consider the wordblock generated
                if (this.#size === 4 && possibleFourthColumnWords.size >= 1) {
                  wordsToAdd.push(
                    { word: possibleFourthColumnWords.values().next().value, orientation: 'vertical', index: 3 },
                    { word: possibleThirdColumnWord, orientation: 'vertical', index: 2 },
                    { word: possibleSecondColumnWord, orientation: 'vertical', index: 1 },
                    { word: possibleFirstColumnWord, orientation: 'vertical', index: 0 },
                  );
    
                  breakout = true;
                  break;
                }
                
                // Itterate over all possible fourth column words
                for (let possibleFourthColumnWord of possibleFourthColumnWords) {
                  // If the possible fourth column word is not in the dictionary, start a new loop
                  if (!this.#dictionary.words.has(possibleFourthColumnWord)) continue;
                  // If there are no words in the dictionary that end with the last character
                  // of the first column, last character of the second column, last character of the third column,
                  // last character of the fourth column, start a new loop since it is impossible to create
                  if (this.#dictionary.getWordsStartingWith(possibleFirstColumnWord.at(-1) + possibleSecondColumnWord.at(-1) + possibleThirdColumnWord.at(-1) + possibleFourthColumnWord.at(-1)).size === 0) continue;

                  // Get all possible fifth row words
                  const possibleFifthRowWords = this.#dictionary.getWordsStartingWith(possibleFirstColumnWord.at(4) + possibleSecondColumnWord.at(4) + possibleThirdColumnWord.at(4) + possibleFourthColumnWord.at(4));

                  // Remove the possible fourth column word from the dictionary so it's not used again
                  this.#dictionary.delete(possibleFourthColumnWord);

                  // Itterate over all possible fifth row words
                  for (let possibleFifthRowWord of possibleFifthRowWords) {
                    // If the possible fifth row word is not in the dictionary, start a new loop
                    if (!this.#dictionary.words.has(possibleFifthRowWord)) continue;
                    // If there are no words in the dictionary that end with the last character
                    // of the first row, last character of the second row, last character of the third row,
                    // last character of the fourth row, and last character of the fifth row, start a new loop
                    // since it is impossible to create a valid word block using this word
                    if (this.#dictionary.getWordsStartingWith(firstRowWord.at(-1) + possibleSecondRowWord.at(-1) + possibleThirdRowWord.at(-1) + possibleFourthRowWord.at(-1) + possibleFifthRowWord.at(-1)).size === 0) continue;
                    
                    // Get all possible fifth column words
                    const possibleFifthColumnWords = this.#dictionary.getWordsStartingWith(firstRowWord.at(4) + possibleSecondRowWord.at(4) + possibleThirdRowWord.at(4) + possibleFourthRowWord.at(4) + possibleFifthRowWord.at(4));
  
                    // Remove the possible fifth row word from the dictionary so it's not used again
                    this.#dictionary.delete(possibleFifthRowWord);

                    // If the word block is 5x5 and there is at least one possible fifth column word,
                    // add the words to the word block and consider the wordblock generated
                    if (this.#size === 5 && possibleFifthColumnWords.size >= 1) {
                      wordsToAdd.push(
                        { word: possibleFifthColumnWords.values().next().value, orientation: 'vertical', index: 4 },
                        { word: possibleFourthColumnWord, orientation: 'vertical', index: 3 },
                        { word: possibleThirdColumnWord, orientation: 'vertical', index: 2 },
                        { word: possibleSecondColumnWord, orientation: 'vertical', index: 1 },
                        { word: possibleFirstColumnWord, orientation: 'vertical', index: 0 },
                      );
                      
                      breakout = true;
                      break;
                    }

                    // Itterate over all possible fifth column words
                    for (let possibleFifthColumnWord of possibleFifthColumnWords) {
                      // If the possible fifth column word is not in the dictionary, start a new loop
                      if (!this.#dictionary.words.has(possibleFifthColumnWord)) continue;
                      // If there are no words in the dictionary that end with the last character
                      // of the first column, last character of the second column, last character of the third column,
                      // last character of the fourth column, and last character of the fifth column, start a new loop
                      // since it is impossible to create a valid word block using this word
                      if (this.#dictionary.getWordsStartingWith(possibleFirstColumnWord.at(-1) + possibleSecondColumnWord.at(-1) + possibleThirdColumnWord.at(-1) + possibleFourthColumnWord.at(-1) + possibleFifthColumnWord.at(-1)).size === 0) continue;

                      // Get all possible sixth row words
                      const possibleSixthRowWords = this.#dictionary.getWordsStartingWith(possibleFirstColumnWord.at(5) + possibleSecondColumnWord.at(5) + possibleThirdColumnWord.at(5) + possibleFourthColumnWord.at(5) + possibleFifthColumnWord.at(5));
                      
                      // Remove the possible fifth column word from the dictionary so it's not used again
                      this.#dictionary.delete(possibleFifthColumnWord);

                      // Itterate over all possible sixth row words
                      for (let possibleSixthRowWord of possibleSixthRowWords) {
                        // If the possible sixth row word is not in the dictionary, start a new loop
                        if (!this.#dictionary.words.has(possibleSixthRowWord)) continue;
                        // If there are no words in the dictionary that end with the last character
                        // of the first row, last character of the second row, last character of the third row,
                        // last character of the fourth row, last character of the fifth row, and last character of the sixth row,
                        // start a new loop since it is impossible to create a valid word block using this word
                        if (this.#dictionary.getWordsStartingWith(firstRowWord.at(-1) + possibleSecondRowWord.at(-1) + possibleThirdRowWord.at(-1) + possibleFourthRowWord.at(-1) + possibleFifthRowWord.at(-1) + possibleSixthRowWord.at(-1)).size === 0) continue;
                        
                        // Get all possible sixth column words
                        const possibleSixthColumnWord = firstRowWord.at(5) + possibleSecondRowWord.at(5) + possibleThirdRowWord.at(5) + possibleFourthRowWord.at(5) + possibleFifthRowWord.at(5) + possibleSixthRowWord.at(5);

                        // Remove the possible sixth row word from the dictionary so it's not used again
                        this.#dictionary.delete(possibleSixthRowWord);

                        // If the word block is 6x6 and there is at least one possible sixth column word,
                        // add the words to the word block and consider the wordblock generated
                        if (this.#dictionary.words.has(possibleSixthColumnWord)) {
                          wordsToAdd.push(
                            { word: possibleSixthColumnWord, orientation: 'vertical', index: 5 },
                            { word: possibleFifthColumnWord, orientation: 'vertical', index: 4 },
                            { word: possibleFourthColumnWord, orientation: 'vertical', index: 3 },
                            { word: possibleThirdColumnWord, orientation: 'vertical', index: 2 },
                            { word: possibleSecondColumnWord, orientation: 'vertical', index: 1 },
                            { word: possibleFirstColumnWord, orientation: 'vertical', index: 0 },
                          );
                          
                          breakout = true;
                          break;
                        }
                      }
  
                      // If the word block has been generated, break out of the loop
                      if (breakout) break;
                      // Re-add the possible fifth column word to the dictionary
                      this.#dictionary.add(possibleFifthColumnWord);
                    }
  
                    // If the word block has been generated, break out of the loop
                    if (breakout) break;
                    // Re-add the possible fifth row word to the dictionary
                    this.#dictionary.add(possibleFifthRowWord);
                  }
  
                  // If the word block has been generated, break out of the loop
                  if (breakout) break;
                  // Re-add the possible fourth column word to the dictionary
                  this.#dictionary.add(possibleFourthColumnWord);
                }
  
                // If the word block has been generated, break out of the loop
                if (breakout) break;
                // Re-add the possible fourth row word to the dictionary
                this.#dictionary.add(possibleFourthRowWord);
              }
  
              // If the word block has been generated, break out of the loop
              if (breakout) break;
              // Re-add the possible third column word to the dictionary
              this.#dictionary.add(possibleThirdColumnWord);
            }
  
            // If the word block has been generated, break out of the loop
            if (breakout) break;
            // Re-add the possible third row word to the dictionary
            this.#dictionary.add(possibleThirdRowWord);
          }
  
          // If the word block has been generated, break out of the loop
          if (breakout) break;
          // Re-add the possible second column word to the dictionary
          this.#dictionary.add(possibleSecondColumnWord);
        }
  
        // If the word block has been generated, break out of the loop
        if (breakout) break;
        // Re-add the possible second row word to the dictionary
        this.#dictionary.add(possibleSecondRowWord);
      }
  
      // If the word block has been generated, break out of the loop
      if (breakout) break;
      // Re-add the possible first column word to the dictionary
      this.#dictionary.add(possibleFirstColumnWord);
    }

    // Add words from the wordsToAdd array to the word block
    this.addWords(wordsToAdd);

    // Validate the word block and throw an error if it is not valid
    if (!this.validate()) {
      throw new Error('Unable to generate a valid word block using the given dictionary and ' + firstRowWord);
    }

    // Return the generated wordblock
    return this.#wordBlock;
  }

  /**
   * Prints the word block to the console
   */
  print() {
    for (let row = 0; row < this.#size; ++row) {
      console.log(this.#wordBlock[row].join(' '));
    }
  }
}

/**
 * Main function
 * 
 * @param {string|number} blockSizeOrStartingWord - The size of the word block to generate (3-6) or the starting word to use
 */
const main = (blockSizeOrStartingWord) => {
  let blockSize = 3;
  let startingWordInput = null;

  if (blockSizeOrStartingWord !== undefined) {
    if (!Number.isNaN(parseInt(blockSizeOrStartingWord))) {
      blockSize = parseInt(blockSizeOrStartingWord);
    } else {
      startingWordInput = blockSizeOrStartingWord;
      blockSize = startingWordInput.length;
    }
  }

  const dictionary = new Dictionary(blockSize);
  const wordBlock = new WordBlock(dictionary, blockSize);
  let startTime = null;
  let endTime = null;

  try {
    const startingWord = startingWordInput ?? dictionary.getRandomWord();

    if (!dictionary.words.has(startingWord)) {
      throw new Error(startingWord + ' is not in the dictionary. Use a different word.');
    }

    console.log(`Generating ${blockSize}x${blockSize} word block with starting word ${startingWord}`);

    startTime = performance.now();
    wordBlock.generate(startingWord);
    endTime = performance.now();

    wordBlock.print();
  } catch (err) {
    endTime = performance.now();
    console.error(err.message);
  } finally {
    console.log(`Runtime ${((endTime - startTime) / 1000).toFixed(6)}s (${(endTime - startTime).toFixed(4)}ms)`);
  }
};

main(process.argv[2]);
