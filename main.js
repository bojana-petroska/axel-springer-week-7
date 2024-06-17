// const numbers = [2, 3, 4, 5, 7, 12, 17, 18, 23, 24, 27, 29, 31, 48, 72, 98];
// const resultDisplay = document.getElementById('result');

// function binarySearch(numbers, target) {
//     let left = 0;
//     let right = numbers.length - 1;

//     while(left <= right) {
//         const middle = Math.floor((left + right) / 2);
//         const middleNumber = numbers[middle];

//         if (middleNumber === target) {
//             return middle; // index of the found number
//         } else if (middleNumber < target) {
//             left = middle + 1;
//         } else {
//             right = middle - 1;
//         }
//     }

//     return -1;
// }

// function search() {
//     const searchNumber = parseInt(document.getElementById('search-number').value);
//     const index = binarySearch(numbers, searchNumber);

//     if (index !== -1) {
//         resultDisplay.textContent = `Number ${searchNumber} found at index: ${index}`
//     } else {
//         resultDisplay.textContent = `Number ${searchNumber} was not found.`
//     }
// }

let nums = [2,0,2,1,1,0];
var sortColors = function(nums) {
    let temp;
    for (let i=0; i<nums.length - 1; i++) {
        for (let j=0; j<nums.length - 1; j++) {
            if (nums[j] > nums[j+1]) {
                temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    return nums;
};

console.log(sortColors(nums));

