/**
 * Recursive searches for a number in an array
 * using binary search. Must be given a SORTED
 * array to work.
 * 
 * @param {Input array} arr 
 * @param {Number to search for} target 
 * @returns index of target if it is in the given array, false otherwise.
 */
export function binarySearchRecursive(arr, target) {
    // check if target is out of bounds of the array
    if (target > arr[arr.length - 1] || target < arr[0]) {
        return false;
    }
    // get new middle index value
    let mIndex = Math.floor(arr.length / 2);

    // base case
    // if array only has one element and it 
    // isn't what we're looking for, return false
    if (arr.length === 1 && arr[0] != target) {
        return false;
    }
    // check if target is value in the middle index
    if (target === arr[mIndex]) {
        return mIndex;
    // check if target is less than value in the middle index    
    } else if (target < arr[mIndex]) {
        // search through 1st half recursively
        return binarySearchRecursive(target, arr.slice(0, mIndex));
        // check if target is greater than value in the middle index        
    } else if (target > arr[mIndex]) {
        // search through 2nd half recursively
        return binarySearchRecursive(target, arr.slice(mIndex));
    }
}