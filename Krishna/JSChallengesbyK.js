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

var num = 211;
console.log("The given number is:", num);

getSum(num);


//using simple method more code
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


/*
CHALLENGE 2:
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

{
    "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
    "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
    ""  -->  ""
*/


function order(words){
  
}