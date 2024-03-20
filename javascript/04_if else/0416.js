// ## 0416-Write a program to input basic salary of an employee and calculate its Gross salary according to following:


let salary=22000
let hra
let da

if( salary <= 10000)
{
    hra = (20/100) * salary
    da = (80/ 100) * salary
    grosssalary=salary + hra + da
    console.log("gross salary",grosssalary)
}
else if( salary <= 20000)
{
    hra = (25/100) * salary
    da = (90/ 100) * salary
    grosssalary=salary + hra + da
    console.log("gross salary",grosssalary)
}
else
{
    hra = (30/100) * salary
    da = (95/ 100) * salary
    grosssalary=salary + hra + da
    console.log("gross salary",grosssalary)
} 

