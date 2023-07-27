// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const ps=require('prompt-sync');
const prompt=ps();

const input_numbers=prompt("Enter numbers : ");

const second_smallest_element=(numbers)=>{
  let  array=numbers.split(" ").map(Number)
  let temp;
  for (let i = 0; i < array.length; i++) {
   for (let j = i+1; j < array.length; j++) {
    if (array[i]>array[j]) {
      temp=array[i]
      array[i]=array[j]
      array[j]=temp
    }
    
   }
    
  }
 return array[1]
}

console.log("2nd smallest element is : "+second_smallest_element(input_numbers));