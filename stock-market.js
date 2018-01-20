// var balancing = 1; // balancing is a global variable that we want to keep track of in each function


// // FIRST FUNCTION THAT REMOVE ANY MAX VAR ON THE LEFT AND MIN ON THE RIGHT
// // MATHEMATICALY IMPOSSBILE VALUE
// function removeEdges(array){

//   for(var i = 0; i < array.length; i++){

//     var max = Math.max.apply(Math, array);
//     var min = Math.min.apply(Math, array);

//     if(max === array[0] || min === array[array.length -1]){

//       if(max === array[0]){
//         array = array.slice(1);
//       }
//       if(min === array[array.length -1]){
//         array = array.slice(0, -1);
//       }
//     }
//   }
//   return array;
// }

// // FUNCTION THAT DETERMINE THE BEST MIN IF MIN IS INDEX 0
// function bestMin(array){
//   var min = Math.min.apply(Math, array);
//   if(min === array[0]){
//     return min
//   }
//   return false;
// }
// // FUNCTION THAT DETERMINE THE BEST MAX IF MAX IS INDEX LENGTH - 1
// function bestMax(array){
//   var max = Math.max.apply(Math, array);
//   if(max === array[array.length -1]){
//     return max
//   }
//   return false;
// }

// // FUNCTION THAT RETURN SOLUTION IF BESTMIN IS FOUND
// function minSolution(bestmin, array){
//   var max = Math.max.apply(Math, array);
//   return max - bestmin;
// }

// // FUNCTION THAT RETURN SOLUTION IF BESTMAX IS FOUND
// function maxSolution(bestmax, array){
//   var min = Math.min.apply(Math, array);
//   return bestmax - min;
// }


// // FUNCTION THAT RUNS OUR CHECKS
// function bestProfit(array){
//   var step1 = removeEdges(array);
//   for( i = 1; i < array.length; i++ ){

//     var stepMin = bestMin(step1);
//     var stepMax = bestMax(step1);

//     if(stepMin !== false){
//       return (minSolution(stepMin, step1));
//     }
//     if(stepMax !== false){
//       return (maxSolution(stepMax, step1));
//     }

//     if(balancing === 1){
//       step1 = step1.slice(1);
//       balancing = 2;
//     }
//     else {
//       step1 = step1.slice(0, -1);
//       balancing = 1;
//     }

//   }
// }

// // FUNCTION THAT DISPLAY OUR MESSAGE
// function message(number){
//   if( number === 0 ){
//     console.log("Sorry, no profit were possible today.")
//   }
//   else{
//     console.log("My best possible profit value for the day is: $" + number + ".");
//   }
// }

var testArray = [45, 24, 35, 31, 40, 38, 11];// 16
var testArray2 = [1, 3, 7, 9, 11, 14, 19]; // 18
var testArray3 = [19, 14, 11, 9, 7, 3, 1]; // no profit
var testArray4 = [45, 4, 48, 31, 7, 38, 11]; // 44
var testArray5 = [45, 4, 48, 1, 78, 38, 11]; // 77
var testArray6 = [45, 1, 48, 4, 78, 38, 11]; // 77
var testArray7 = [11, 10, 51, 7, 50, 1, 2, 3]; // 43



var testArray8 = [154, 25, 76, 179, 83, 181, 44, 27, 102, 133, 77, 162, 81, 101, 22, 89, 113, 100, 183, 99]; // 183-22 161
var testArray9 = [195, 31, 111, 63, 191, 120, 9, 144, 177, 125, 178, 180, 179, 134, 130, 24, 42, 88, 153, 99]; // 180-9 171
var testArray10 = [50, 6, 125, 133, 192, 32, 123, 44, 159, 93, 166, 193, 176, 31, 182, 49, 97, 55, 42, 114]; // 187
var testArray11 = [122, 728, 124, 66, 149, 160, 102, 121, 33, 94, 48, 162, 161, 155, 9, 163, 175, 74, 96, 44]; // 728-122 606 <=== FAIL
var testArray12 = [728, 29, 140, 51, 45, 160, 105, 27, 104, 30, 35, 161, 117, 121, 58, 125, 127, 177, 168, 2]; // 177-27 150
var testArray13 = [728, 29, 140, 51, 45, 1425, 105, 27, 104, 30, 35, 1, 117, 121, 58, 125, 127, 177, 168, 2]; // 177-27 150


// message(bestProfit(testArray));
// message(bestProfit(testArray2));
// message(bestProfit(testArray3));
// message(bestProfit(testArray4));
// message(bestProfit(testArray5));
// message(bestProfit(testArray6));
// message(bestProfit(testArray7));

// message(bestProfit(testArray8));
// message(bestProfit(testArray9));
// message(bestProfit(testArray10));
// message(bestProfit(testArray11));
// message(bestProfit(testArray12));


// WE WANT TO SUBSTRACT VALUE FROM RIGHT PAIR TO LEFT PAIR
// IF POSITIVE THEN PROFIT - IF NEGATIVE NO PROFIT
function maxDiff (arr, arrLength)
{
    // Initialize diff, current sum and max sum
    var potential = arr[1] - arr[0]; // difference between time 1h and 0h
    var currentProfit = potential; // our current difference
    var maxProfit = currentProfit; // our maxixum difference

    for(var i = 1; i < arrLength - 1; i++) //<==
    {
        // Calculate current potential
        potential = arr[i + 1]-arr[i]; // difference between time N+1h and Nh

        // Calculate our potential current profit so far
        if (currentProfit > 0)
           currentProfit += potential;
        else
           currentProfit = potential;

        // if we find a better profit we update maxprofit
        if (currentProfit > maxProfit)
           maxProfit = currentProfit;
    }

    if (maxProfit <= 0){
      return -1;
    }

    return maxProfit;
}

// console.log(maxDiff(testArray, testArray.length));
// console.log(maxDiff(testArray11, testArray11.length));
// console.log(maxDiff(testArray8, testArray8.length));
// console.log(maxDiff(testArray9, testArray9.length));
// console.log(maxDiff(testArray7, testArray7.length));
// console.log(maxDiff(testArray3, testArray3.length));
// console.log(maxDiff(testArray13, testArray13.length));

// TODO: TEST FUNCTION
