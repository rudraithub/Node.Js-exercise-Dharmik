// 0706-write a new array that contains the squares of each number in the original array.

function squareArray(arr) { 
    return arr.map(function(num){
        return num ** 2
    })
  }
  
  console.log(squareArray([2, 4, 5, 5, 5]))
