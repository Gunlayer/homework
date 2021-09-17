/**
 * RANGE
 *
 * to run code from this file use: npx nodemon 5-range
 *
 * 5.1 Write a function that takes two arguments, start and end, and returns an array
 *    containing all the numbers from start up to (and including) end. Next, write a sum
 *    function that takes an array of numbers and returns the sum of these numbers.
 *
 * 5.2 Optional: As a bonus assignment, modify your range function to take an optional
 *    third argument that indicates the “step” value used when building the array. If no
 *    step is given, the elements go up by increments of one, corresponding to the old behavior.
 *    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with
 *    negative step values so that range(5, 2, -1)
 *
 */

// Your code here.
//
// console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55
const range = (num1, num2) => {
    let arr = [];
    for (let i = num1; i <= num2; i++) {
        arr.push(i);
    }
    return arr;
}
const modifiedRange = (num1, num2, step = 1) => {
    let arr = [];
    let counter = num1;
    if (num1 <= num2) {
        while (counter <= num2) {
            arr.push(counter);
            counter += step;
        }
    } else {
        while (counter>=num2) {
            arr.push(counter);
            counter+=step;
        }
    }
    return arr;
}
const sum = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}
console.log(range(1, 7));
console.log(sum(range(1, 10)));
console.log(modifiedRange(1, 7,3));