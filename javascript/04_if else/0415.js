// ## 0415-Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following

let mark=95
let mark1=95
let mark2=97
let mark3=98
let mark4=90

total=mark+mark1+mark2+mark3+mark4
let percentage=total/5
  console.log("percentage", percentage)
  
if(percentage >=90)
{
    console.log("grade A")
}
else if(percentage >=80)
{
    console.log("grade B")
}
else if(percentage >=70)
{
    console.log("grade C")
}
else if(percentage >=60)
{
    console.log("grade D")
}
else if(percentage >=40)
{
    console.log("grade E")
}
else
{
    console.log("grade F")
}
