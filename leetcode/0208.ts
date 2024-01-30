/**
 * Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/description/
 * 
 * Runtime: 159ms - Beats 94.88%
 * Memory:  75.08 MB - Beats 25.60%
 */

class TrieNode {
  isFullWord = false;
  letters = new Map<string, TrieNode>();
}

class Trie {
  root = new TrieNode();

  insert(word: string): void {
    let node = this.root;

    for (const letter of word) {
      if (!node.letters.has(letter)) {
        node.letters.set(letter, new TrieNode());
      }

      node = node.letters.get(letter)!;
    }

    node.isFullWord = true;
  }

  search(word: string): boolean {
    let node = this.root;

    for (const letter of word) {
      if (!node.letters.has(letter)) {
        return false;
      }

      node = node.letters.get(letter)!;
    }

    return node.isFullWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;

    for (const letter of prefix) {
      if (!node.letters.has(letter)) {
        return false;
      }

      node = node.letters.get(letter)!;
    }

    return true;
  }
}

const test1 = () => {
  const obj = new Trie();
  obj.insert('apple');
  
  console.assert(obj.search('apple') === true, 'Expected true, got false');
  console.assert(obj.search('app') === false, 'Expected false, got true');
  console.assert(obj.startsWith('app') === true, 'Expected true, got false');
  
  obj.insert('app');
  console.assert(obj.search('app') === true, 'Expected true, got false');
};

test1();
