// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const ps=require('prompt-sync');
const prompt=ps() //taking dynamically input from user

const input_string=prompt("Enter input : ");
const revere_function =(string)=>{
  let reversed_string=[];
  for (let index = input_string.length-1; index >=0; index--) {
    const element = input_string[index];
    reversed_string.push(element);
  }
 return reversed_string=reversed_string.join('') 
}
console.log( "Reversed String : "+revere_function(input_string))
