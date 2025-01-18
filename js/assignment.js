"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];


let findSmallestNumber = [myNumbers];
  let smallest = myNumbers[0];
    for (let i = 1; i < myNumbers.length; i++) {
        if (myNumbers[i] < smallest) { 
            smallest = myNumbers[i]; // Update the smallest number if a smaller number is found 
        } } console.log(smallest); // Return the smallest number found 
        

let findLargestNumber = [myNumbers];
   let largest = myNumbers[0];
           for (let i = 1; i < myNumbers.length; i++) {
              if (myNumbers[i] > largest) { 
                  largest = myNumbers[i]; // Update the largest number if a smaller number is found 
              } } console.log(largest); // Return the largest number found 
              