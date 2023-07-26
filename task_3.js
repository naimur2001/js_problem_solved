// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const ps=require('prompt-sync');
const prompt=ps();

const input_numbers=prompt("Enter numbers : ");

function frequent_number(numbers) {
 let count_1=1;
 let count_2=0; 
 let number=null;
 let  array=numbers.split(" ").map(Number)
for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (array[i]==array[j]) {
      count_2++;
    
    }
    if (count_1 <count_2) {
      count_1=count_2;
      number=array[i]
    }
   
    
  }
  count_2=0;
}
return number;
}

console.log("Most frequent number : "+frequent_number(input_numbers));