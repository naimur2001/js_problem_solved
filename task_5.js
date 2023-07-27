// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const ps=require('prompt-sync');
const prompt=ps();
const num1 = parseFloat(prompt('Enter the first number : '));
  const operator = prompt('Enter the operator (+, -, *, /) : ');
  const num2 = parseFloat(prompt('Enter the second number : '));


const calculator=(n1,o,n2)=>{
  switch (operator) {
    case '+':
return n1+n2

      break;
    case '-':
return n1-n2
      
      break;
    case '*':
return n1*n2
      
      break;
    case '/':
return (n1/n2).toFixed(2)
      
      break;
  
    default:
      break;
  }
}

  console.log("Result is : "+calculator(num1,operator,num2));
