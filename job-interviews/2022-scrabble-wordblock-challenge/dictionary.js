import { readFileSync } from 'fs';

export class Dictionary {
  /**
   * @typedef {Object} Dictionary
   * @property {Set<string>} words - A set of words from the dictionary file of the given length
   * @property {number} wordLengthLimit - The length of words to load from the dictionary file
   * @property {Map<string, Set<string>>} lookupTable - A map of characters to words that start with those characters
   * @property {function} loadWords - Loads the word list from the dictionary file into memory
   * @property {function} getWordsWithCharactersAtPosition - Finds words with the given characters at the given position in any words in the word list
   * @property {function} getWordsStartingWith - Finds words that start with the given characters in the word list
   * @property {function} createLookupTable - Creates a lookup table for the word list
   * @property {function} getRandomWord - Get a random word from the word list
   * @property {function} delete - Remove a word from the word list
   * @property {function} add - Add a word to the word list
   * 
   * @param {number} wordLengthLimit - The length of words to load from the dictionary file
   * @returns {Dictionary} A dictionary object
   */

  // Private properties
  /**
   * @private
   * @property {Set<string>} words - A set of words from the dictionary file of the given length
   */
  #words;

  /**
   * @private {Map<string, Set<string>>} lookupTable - A map of characters to words that start with those characters
   */
  #lookupTable;

  /**
   * @private {number} wordLengthLimit - The length of words to load from the dictionary file
   */
  #wordLengthLimit;

  /**
   * Create a new dictionary of words of the given length
   * 
   * @param {number} wordLengthLimit - The length of words to load from the dictionary file
   */
  constructor(wordLengthLimit) {
    this.#wordLengthLimit = wordLengthLimit;
    this.#words = this.#loadWords();
    this.#lookupTable = this.createLookupTable();
  }

  /**
   * @returns {Set<string>} All words stored in the dictionary
   */
  get words() {
    return this.#words;
  }

  /**
   * @returns {number} The length of words loaded from the dictionary file
   */
  get wordLengthLimit() {
    return this.#wordLengthLimit;
  }

  /**
   * @returns {Map<string, Set<string>>} A map of characters to words that start with those characters and sequential sets of characters
   */
  get lookupTable() {
    return this.#lookupTable;
  }

  /**
   * Loads the word list from the dictionary file into memory.
   * If limitSize is set, only words of the given length will be loaded
   * 
   * @param {number} wordLengthLimit - The length of words to load from the dictionary file
   * @returns {Set<string>} A set of words from the dictionary file of the given length
   */
  #loadWords() {
    try {
      const data = readFileSync('./dictionary.txt');
      const words = new Set(data.toString().toUpperCase().replace(/(\r)?\n/g, ' ').split(' '));
  
      if (this.wordLengthLimit) {
        for (let word of words) {
          if (word.length !== this.wordLengthLimit) {
            words.delete(word);
          }
        }
      }

      return words;
    } catch (err) {
      console.error(err);
      return new Set();
    }
  }

  /**
   * Finds words with the given characters at the given position in any words in the word list.
   * 
   * @param {string} characters - The characters to search for
   * @param {number} position - The position in the word to search for the characters
   * @returns {Set<string>} A set of words that contain the given characters at the given position
   */
  getWordsWithCharactersAtPosition(characters, position) {
    const results = new Set();

    for (let word of this.#words) {
      if (word.indexOf(characters) === position) {
        results.add(word);
      }
    }
    
    return results;
  }

  /**
   * Finds words that start with the given characters in the word list.
   * 
   * @param {string} characters - The characters to search for
   * @returns {Set<string>} A set of words that start with the given characters
   */
  getWordsStartingWith(characters) {
    return this.#lookupTable.get(characters) ?? new Set();
  }

  /**
   * Creates a lookup table for the word list.
   * Every starting character in the word list is mapped to a set of words that start with that character.
   * Every sequential set of characters in the word list is mapped to a set of words that start with that set of characters.
   * 
   * @returns {Map<string, Set<string>>} A map of characters to words that start with those characters
   */
  createLookupTable() {
    const lookupTable = new Map();

    for (let word of this.words) {
      const firstLetter = word[0];

      // Add the word to the lookup table for its starting character
      if (!lookupTable.has(firstLetter)) {
        lookupTable.set(firstLetter, new Set([word]));
      } else if (!lookupTable.get(firstLetter).has(word)) {
        lookupTable.get(firstLetter).add(word);
      }
      
      // Add the word to the lookup table for each sequential set of characters
      for (let i = 1; i <= this.wordLengthLimit; i++) {
        const characters = word.slice(0, i);

        if (!lookupTable.has(characters)) {
          lookupTable.set(characters, new Set([word]));
        } else if (!lookupTable.get(characters).has(word)) {
          lookupTable.get(characters).add(word);
        } else {
          continue;
        }
      }
    }

    return lookupTable;
  }

  /**
   * Get a random word from the word list
   * 
   * @returns {string} A random word from the word list
   */
  getRandomWord() {
    return Array.from(this.#words)[Math.floor(Math.random() * this.#words.size)]
  }

  /**
   * Remove a word from the word list
   * 
   * @param {string} word - The word to remove from the word list
   */
  delete(word) {
    if (this.#words.has(word)) {
      this.#words.delete(word);
    }
  }

  /**
   * Add a word to the word list
   * 
   * @param {string} word - The word to add to the word list
   */
  add(word) {
    if (!this.#words.has(word)) {
      this.#words.add(word);
    }
  }

  /**
   * Add multiple words to the word list
   * 
   * @param {Set<string>} wordSet - The set of words to add to the word list
   */
  addMultiple(wordSet) {
    for (let word of wordSet) {
      this.#words.add(word);
    }
  }
}
