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


// function getSum(number){
//     var strNum = number.toString();
//     var numSize = strNum.length - 1;

//     var sum = 0;

//     while(numSize >= 0){
//         let num = parseInt(strNum[numSize]);
//         sum += num;
//         numSize--;
//     }

//     numSize = sum.toString().length;
    
//     //using recursion
//     if(numSize == 1){
//         console.log("The sum is:", sum);
//         return sum;
//     }else{
//         getSum(sum);
//     }
    
// }

// var num = 211;
// console.log("The given number is:", num);

// getSum(num);


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

// var givenWord = "is2 Thi1s T4est 3a";
// console.log(order(givenWord));
// function order(words){
//     var wordsArr = words.split(" ");

//     if(wordsArr.length == 0){
//         return "";
//     }else{
//         var finalWord = "";

//         for(var i = 1; i<=wordsArr.length;i++){
//             var positionedWord = "";
//             for(var a in wordsArr){
//                 if(wordsArr[a].includes(i)){
//                     positionedWord = wordsArr[a];
//                     finalWord += wordsArr[a];
//                     if(i != wordsArr.length){
//                         finalWord += " ";
//                     }
//                 }
//             }
//         }
//         return finalWord;
//     }
// }


//CHELLENGE 3

// var arr = [1, 3, 9, 15, 90];

// console.log(calculateAverage(arr));
// function calculateAverage(arr){
//     let avg = 0;
//     for(var i in arr){
//         avg += arr[i];
//     }
//     return (avg/arr.length);
// }

//CHALLENGE 4

// var arr = [1, 4, -5, 7, -2, 11, -22, 55];
// console.log("Max num is:", findMaxNum(arr));
// function findMaxNum(arr){
//     let maxNum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(maxNum < arr[i]){
//             maxNum = arr[i];
//         }
//     }
//     return maxNum;
// }


//CHALLENGE 5
// write a js code to reverse a given sentence.
// Note: No extra whitespaces should be allowed i.e. length of provided sentence must mach with reversed.

// let sentence = "The quick brown fox jumping over the lazy dog";

// console.log(reverseSentence(sentence));

// function reverseSentence(sentence){
//     let splittedSentence = sentence.split(" ");
//     let reversedSentence = [];

//     for(let i = splittedSentence.length - 1; i >= 0; i--){
//         reversedSentence.push(splittedSentence[i]);
//     }
//     return reversedSentence.join(" ");
// }


//CHALLENGE 6

/*
Create a function that will convert a string containing a binary number into a number
*/


// let binaryString = "1110011";

// console.log(binToNum(binaryString));

// function binToNum(binStr){
//     let binaryArr = binStr.split("");
//     binaryArr.reverse();

//     let decimalNum = 0;

//     // for (let i = 0; i < binaryArr.length; i++){
//     //     let decVal = (binaryArr[i]*2)**i;
//     //     decimalNum += decVal;
//     // }

//     binaryArr.forEach((value, index, arr) => {
//         decimalNum += (value*2)**index;
//     });

//     return decimalNum;
// }

//CHELLENGE 7
// capatilize first letter of each word in text

// let word = "the quick brown fox jumping over the lazy dog";

// console.log(capatilizeFunction(word));

// function capatilizeFunction(word){
//     let wordsArr = word.split(" ");

//     let changedWordArr = [];

//     wordsArr.forEach((value) => {
//         let word = "";
//         value.split("").forEach((val, index) => {
//             if(index == 0){
//                 word += val.toUpperCase();
//             }else{
//                 word += val;
//             }
//         });

//         changedWordArr.push(word);
//     });

//     return changedWordArr.join(" ");

// }


function printTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(num, "*", i, "=", num*i);
    }
}
