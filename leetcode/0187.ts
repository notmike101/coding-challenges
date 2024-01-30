/**
 * Repeated DNA Sequences
 * https://leetcode.com/problems/repeated-dna-sequences/description/
 * 
 * Runtime: 77ms - Beats 78.31%
 * Memory:  62.21 MB - Beats 36.15%
 */

import captureTestResults, { ITest } from "../testControl.ts";

const findRepeatedDnaSequences = (s: string): string[] => {
  if (s.length < 10) return [];

  const sequenceLength = s.length,
        sequences = new Set<string>(),
        repeated = new Set<string>();

  for (let i = 0; i + 9 < sequenceLength; ++i) {
    const sequence = s.substring(i, i + 10);

    if (!sequences.has(sequence)) {
      sequences.add(sequence);
    } else {
      repeated.add(sequence);
    }
  }

  return Array.from(repeated);
};

const tests: ITest[] = [
  { input: 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', expected: ["AAAAACCCCC","CCCCCAAAAA"], func: findRepeatedDnaSequences },
  { input: 'AAAAAAAAAAAAA', expected: ['AAAAAAAAAA'], func: findRepeatedDnaSequences },
];

console.table(captureTestResults(tests));
