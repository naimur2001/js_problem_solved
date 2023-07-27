// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const uppercase_letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase_letters="abcdefghijklmnopqrstuvwxyz"
const special_characters="!@#$%^&*()-_=+[]{}|;:,.<>?"
const numbers="0123456789"
const password_length=12;

const random_character=(all_characters)=>{
let random_index=Math.floor(Math.random()* all_characters.length);
return all_characters[random_index]
}

const random_password=(length)=>{

  const all_characters=uppercase_letters+lowercase_letters+numbers+special_characters
  let password=''
  
  for (let index = 0; index < length; index++) {
    password +=random_character(all_characters)
    
  }
return password
}
console.log( "Random password is : " +random_password(password_length));