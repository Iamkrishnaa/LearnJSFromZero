/*
CHALLENGE 1:
    Given n, take the sum of the digits of n. 
    If that value has more than one digit, 
    continue reducing in this way until a 
    single-digit number is produced. 
    The input will be a non-negative integer.

    {
            16  -->  1 + 6 = 7
            942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
            132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
            493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
    }
*/


function getSum(number){
    var strNum = number.toString();
    var numSize = strNum.length - 1;

    var sum = 0;

    while(numSize >= 0){
        let num = parseInt(strNum[numSize]);
        sum += num;
        numSize--;
    }

    numSize = sum.toString().length;
    
    //using recursion
    if(numSize == 1){
        console.log("The sum is:", sum);
        return sum;
    }else{
        getSum(sum);
    }
    
}

var num = 493193;
console.log("The given number is:", num);

getSum(num);


//using simple method
// while(true){
//     var numSum = getSum(num);
//     var numStr = numSum.toString();
//     var numLength = numStr.length;
//     num = numSum;
//     console.log(">>",num);
//     if(numLength == 1){
//         break;
//     }
// }