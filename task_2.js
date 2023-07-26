// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const ps=require('prompt-sync');
const prompt=ps();

const input_numbers=prompt("Enter numbers : ");

function positive_numbers_sum(numbers) {
 let  array=numbers.split(" ").map(Number)
  let sum=0;
  for (let index = 0; index < array.length; index++) {
;
    
    if (array[index] >0) {
      sum=sum+array[index];
    }
    else{
      sum=sum;
    }
    
  }
  return sum

}
console.log("Positive numbers : "+positive_numbers_sum(input_numbers));