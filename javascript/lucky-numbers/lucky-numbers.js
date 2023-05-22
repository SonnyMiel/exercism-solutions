// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number.parseFloat(array1.join("")) + Number.parseFloat(array2.join(""));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const arr = Array.from(String(value), (num) => Number(num));

  return arr.join("") === arr.map(e => e).reverse().join("")
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // 0 || not a number 
  // 1+
  // empty string || undefined || null
  if (!input) {
    return 'Required field'
  }

  const n = Number(input);
  if (Number.isNaN(n) || n === 0) {
    return 'Must be a number besides 0';
  }

  return '';
}
