//0610-Write a program to calculate factorial of a number.

const num = 5;
const factorial = num => {
   let res = 1;
   for(let i = num; i > 1; i--){
      res *= i;
   };
   return res;
};
console.log(factorial(num));
