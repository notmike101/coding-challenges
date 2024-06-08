/**
 * Find Duplicate File in System
 * https://leetcode.com/problems/find-duplicate-file-in-system/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 141 ms - Beats 42.10%
 * Memory:  70.77 MB - Beats 5.26%
 */

import captureTestResults, { ITest } from "../testControl.ts";

const hashString = (input: string): number => {
  let h1 = 0xdeadbeef ^ 0,
      h2 = 0x41c6ce57 ^ 0,
      i,
      ch;

  for (i = 0, ch; i < input.length; i++) {
    ch = input.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return (4294967296 * (2097151 & h2) + (h1 >>> 0));
};

const findDuplicate = (paths: string[]): string[][] => {
  const contentSet: Record<number, Array<string>> = {};
  const output = new Array<Array<string>>;
  let i: number,
      j: number,
      rootDir: string,
      files: Array<string>,
      fileName: string,
      fileContent: string,
      hashedFileContent: number;

  for (i = paths.length - 1; i >= 0; --i) {
    [rootDir, ...files] = paths[i].split(' ');

    for (j = files.length - 1; j >= 0; --j) {
      [fileName, fileContent] = files[j].slice(0, -1).split('(');
      hashedFileContent = hashString(fileContent);

      if (!contentSet[hashedFileContent]) {
        contentSet[hashedFileContent] = [];
      }

      contentSet[hashedFileContent].push(rootDir + '/' + fileName);
    }
  }

  for (files of Object.values(contentSet)) {
    if (files.length > 1) {
      output.push(files);
    }
  }

  return output;
};

const test = (result: string[][], expected: string[][]): boolean => {
  for (let i = 0; i < result.length; ++i) {
    result[i] = result[i].reverse();
  }

  return result.toString() === expected.toString();
};
const tests: ITest[] = [
  {
    input: [["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]],
    expected: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]],
    func: findDuplicate,
    testFunc: test,
  },
  {
    input: [["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]],
    expected: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]],
    func: findDuplicate,
    testFunc: test,
  },
  {
    input: [["root/a 1.txt(FB) 2.txt(a)","root/c 3.txt(Ea)","root/c/d 4.txt(b)","root 4.txt(c)"]],
    expected: [[]],
    func: findDuplicate,
    testFunc: test,
  },
];

console.table(captureTestResults(tests, 30));
