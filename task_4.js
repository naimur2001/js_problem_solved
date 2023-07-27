// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const array=[1, 3, 6, 8, 11, 15];

const target_value=9;

const target_number_function=(arr,target)=>{

  const map=new Map();

  for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    let number=target-element;

    if (map.has(number)) {
      return[map.get(number),index]
    }
    
    map.set(element,index)
  }

}
console.log("Indexes for traget value : ["+target_number_function(array,target_value)+"]");