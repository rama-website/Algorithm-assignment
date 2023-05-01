// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

// Number is: 0 Sum: 0

// Number is: 1 Sum: 1

// Number is: 2 Sum: 3

// Number is: 3 Sum: 6
//Pseudocode
//1 loop through numers from 1 until 135
//2 print the sum of the numer

//code:
let sum = 0;

for (let i = 1; i <= 135; i++) {
  sum += i;
  console.log('Number is:', i, 'Sum is:', sum);
}
//Diagram:
//This program initializes a variable `sum` to 0 and uses a `for` loop to iterate over the range of numbers from 1 to 135. 
//For each number,
// the program adds it to the `sum` variable and then logs both the current number and the running sum to the console.

//Print the elements of an array
// 1- we must define the array which is x = [1,4,2,12] here
// 2- then we will use function to print the given numbers instead of looping through the array and printing
// 3- so we will use the array as input to the function and print each element from the array which supposed to be here as input
// 4- then looping inside the input to print each element
// Coding
let x = [1, 4, 2, 12];
function printNumbers(arr){
for(let i = 0; i< arr.length; i++){
    console.log(arr[i])
};

}
printNumbers(x);
// Diagram
// 1- console.log(arr[i]) and calling the function printNumbers ==> when i = 0 print x (0 index) which is 1
// 2- console.log(arr[i]) and calling the function printNumbers ==> when i = 1 print x (1 index) which is 4
// 3- console.log(arr[i]) and calling the function printNumbers ==> when i = 2 print x (2 index) which is 2
// 4- console.log(arr[i]) and calling the function printNumbers ==> when i = 3 print x (3 index) which is 12

// 6 Find Max
//Pseudocode
//finds the maximum value in an array,
// including arrays with negative values and zero:
//code:
const X = [2, -3, -1];
let max = x[0];

for (let i = 1; i < x.length; i++) {
  if (x[i] > max) {
    max = x[i];
  }
}

console.log('The maximum value of the array is:', max);
// Diagram
// This program initializes an array `x` with some values and a variable `max` to the first value in the array. 
// It then iterates through the rest of the array using a `for` loop and compares each value to the current maximum.
//  If a value is greater than the current maximum, it becomes the new maximum. 
//  Finally, the program logs the maximum value to the console. 
// The output for the example array `[2, -3, -1]` will be:
// The maximum value of the array is: 2
// If the array contains only negative values (e.g., `[-2, -3, -1]`) or only zeroes (e.g., `[0, 0, 0]`),
//  the maximum value will be the largest negative value or zero, respectively.

//Get Average
//Pseudocode
//declare an array
//calculate the average value of
// 7 all elements in an array:
//code:
const x = [2, 1, 3];
let sum = 0;

for (let i = 0; i < x.length; i++) {
  sum += x[i];
}

const average = sum / x.length;
console.log('The average value of the array is:', average);
// Diagram
// This program initializes an array `x` with some values and a variable `sum` to 0.
//  It then iterates through the array using a `for` loop and adds each value to the `sum` variable.
//   After the loop, it calculates the average by dividing the `sum` by the length of the array. 
//   Finally, the program logs the average value to the console.
// The average value of the array is: 2
//Eliminate the Negatives
//Pseudocode
//declare an array
// removes all negative numbers
//  from an array and replaces them with 0:
//code:
const x = [2, -3, -1];
const result = [];

for (let i = 0; i < x.length; i++) {
  if (x[i] < 0) {
    result.push(0);
  } else {
    result.push(x[i]);
  }
}

console.log('The modified array is:', result);
// Diagram
// This program initializes an array `x` with some values and creates an empty `result` array.
//  It then iterates through the `x` array using a `for` loop and checks each value. 
//  If the value is negative, it pushes a 0 to the `result` array. Otherwise,
//   it pushes the original value to the `result` array.
//   Finally, the program logs the modified array to the console.
// The output for the example array `[2, -3, -1]` will be:
// The modified array is: [2, 0, 0]
//8 Number to String
//Pseudocode
//declare an array
// declare array of numbers as input and replaces,
// negative values with the string "turing":
//code:
function replaceNegativeWithSturing(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr[i] = "string";
      }
    }
    return arr;
  }
  // Diagram
//   This function loops through each element in the input array and checks if it's less than zero.
//    If so,
//    it replaces the element with the string "turing". Finally,
//    it returns the modified array.
