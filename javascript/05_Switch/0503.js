//## 0503- Write a program to check whether a number is even or odd using switch case.

let a=3

switch(true){
   case a%2==0:
    console.log(a,"a is even");
    break

   case a%2==1:
    console.log(a,"a is odd");
    break

  default:
    console.log("invalid input");
}
