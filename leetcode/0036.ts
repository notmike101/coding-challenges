/**
 * Valid Sudoku
 * https://leetcode.com/problems/valid-sudoku/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 61ms - Beats 92.65%
 * Memory:  46.79 MB - Beats 46.20%
 */

import { captureTestResults, type ITest } from '../testControl.ts';

const isValidSudoku = (board: string[][]): boolean => {
  const rows = new Map<number, Set<string>>();
  const cols = new Map<number, Set<string>>();
  const blocks = new Map<number, Set<string>>();

  for (let cellIndex = 0; cellIndex < 81; ++cellIndex) {
    const row = Math.floor(cellIndex / 9);
    const col = cellIndex % 9;
    const block = Math.floor(row / 3) * 3 + Math.floor(col / 3);
    const cell = board[row][col];

    if (cell === '.') continue;
    if (!rows.has(row)) rows.set(row, new Set());
    if (!cols.has(col)) cols.set(col, new Set());
    if (!blocks.has(block)) blocks.set(block, new Set());
    if (rows.get(row)?.has(cell)) return false;
    if (cols.get(col)?.has(cell)) return false;
    if (blocks.get(block)?.has(cell)) return false;

    rows.get(row)?.add(cell);
    cols.get(col)?.add(cell);
    blocks.get(block)?.add(cell);
  }

  return true;
};

const tests: ITest[] = [
  {
    input: [[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]],
    expected: true,
    func: isValidSudoku,
  },
  {
    input: [[["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]],
    expected: false,
    func: isValidSudoku,
  }
];

console.table(captureTestResults(tests));