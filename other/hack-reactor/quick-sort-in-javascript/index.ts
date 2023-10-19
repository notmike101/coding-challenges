/**
 * Quick-sort in Javascript Hack Reactor problem
 * 
 * Here is the Python implementation of quicksort from the exploration on sorting:
 * 
 * def partition(values, left, right):
 *  # get the pivot value (the last item)
 *  pivot = values[right]
 *  
 *  # star keeps track of the end of the "smaller than the pivot" list
 *  star = left - 1
 * 
 *  # move all of the items that are less than pivot to the beginning of the list
 *  for i in range(left, right):
 *    if values[i] <= pivot
 *      star += 1
 *      values[star], values[i] = values[i], values[star]
 * 
 *  # move the pivot value into the "middle" of the list
 *  star += 1
 *  values[star], values[right] = values[right], values[star]
 * 
 *  # return the position of the pivot values
 *  return star
 * 
 * def quicksort(values, left=None, right=None):
 *  # handle the default calling case where only values is provided
 *  if left is None and right is None:
 *    left = 0
 *    right = len(values) - 1
 * 
 *  # if there is nothing left to sort, return
 *  if left >= right or left < 0:
 *    return
 * 
 *  # partition values and get the position (index) of the pivot item
 *  p = partition(values, left, right)
 * 
 *  # recurisvely sort the left half
 *  quicksort(values, left, p - 1)
 * 
 *  # recursively sort the right half
 *  quicksort(values, p + 1, right)
 * 
 * Now implmement quicksort in JavaScript!
 */

const partition = (values: number[], left: number, right: number) => {
  const pivot = values[right];
  let star = left - 1;

  for (let index = left; index < right; index++) {
    if (values[index] <= pivot) {
      star += 1;

      const oldStarValue = values[star];

      values[star] = values[index];
      values[index] = oldStarValue;
    }
  }
  
  star += 1;

  const oldStarValue = values[star];
  values[star] = values[right];
  values[right] = oldStarValue;

  return star;
};

export const quickSort = (values: number[], left: number | null = null, right: number | null = null) => {
  if (left === null && right === null) {
    left = 0;
    right = values.length - 1;
  }

  if (left === null || right === null) return;
  if (left >= right || right < 0) return;

  const p = partition(values, left, right);
  
  quickSort(values, left, p - 1);
  quickSort(values, p + 1, right);
};