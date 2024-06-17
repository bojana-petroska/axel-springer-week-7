// Task 1: Find a Number in a Sorted Array
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleNumber = arr[middle];

    if (middleNumber === target) {
      return true;
    } else if (middleNumber < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return false;
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23));
console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 7));
console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 54));
console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 16));

//Task 2: Swap Two Numbers in an Array

function swapInAscending(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(swapInAscending([5, 2]));
console.log(swapInAscending([3, 1]));
console.log(swapInAscending([9, 4]));

function swapInDescending(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(swapInDescending([5, 2]));
console.log(swapInDescending([1, 5]));
console.log(swapInDescending([4, 8]));

// Task 3: Sort a Three-Element Array

function sortThreeElements(arr) {
  let temp;

  if (arr[0] > arr[1]) {
    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }

  if (arr[1] > arr[2]) {
    temp = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;
  }

  if (arr[0] > arr[1]) {
    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }

  return arr;
}

console.log(sortThreeElements([9, 4, 7]));
console.log(sortThreeElements([9, 7, 4]));
console.log(sortThreeElements([1, 7, 4]));
