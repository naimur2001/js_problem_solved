// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const ps=require("prompt-sync")
const prompt=ps()

const input=prompt("Enter input : ")

const roman_to_number=(input)=>{
  const roman_container = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result=0;
  for (let i = 0; i < input.length; i++) {
    let current=roman_container[input[i]]
    let next=roman_container[input[i+1]]
    
    if (current<next) {
      result += next-current;
      i++;
    }
    else{
      result +=  current
    }
  }
  return result;
}
console.log("Roman to number is : "+roman_to_number(input));