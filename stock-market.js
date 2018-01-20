// FIRST FUNCTION THAT REMOVE ANY MAX VAR ON THE LEFT AND MIN ON THE RIGHT
// MATHEMATICALY IMPOSSBILE VALUE
function removeEdges(array){

  for(var i = 0; i < array.length; i++){

    var max = Math.max.apply(Math, array);
    var min = Math.min.apply(Math, array);

    if(max === array[0] || min === array[array.length -1]){

      if(max === array[0]){
        array = array.slice(1);
      }
      if(min === array[array.length -1]){
        array = array.slice(0, -1);
      }
    }
  }
  return array;
}

// FUNCTION THAT DETERMINE THE BEST MIN IF MIN IS INDEX 0
function bestMin(array){
  var min = Math.min.apply(Math, array);
  if(min === array[0]){
    return min
  }
  return false;
}
// FUNCTION THAT DETERMINE THE BEST MAX IF MAX IS INDEX LENGTH - 1
function bestMax(array){
  var max = Math.max.apply(Math, array);
  if(max === array[array.length -1]){
    return max
  }
  return false;
}

// FUNCTION THAT RETURN SOLUTION IF BESTMIN IS FOUND
function minSolution(bestmin, array){
  var max = Math.max.apply(Math, array);
  return max - bestmin;
}

// FUNCTION THAT RETURN SOLUTION IF BESTMAX IS FOUND
function maxSolution(bestmax, array){
  var min = Math.min.apply(Math, array);
  return bestmax - min;
}


// FUNCTION THAT RUNS OUR CHECKS
function bestProfit(array){
  var step1 = removeEdges(array);
  for( i = 1; i > 0; ){

    var stepMin = bestMin(step1);
    var stepMax = bestMax(step1);

    if(stepMin !== false){
      return (minSolution(stepMin, step1));
    }
    if(stepMax !== false){
      return (maxSolution(stepMax, step1));
    }
    step1 = step1.slice(1);
  }
}

// FUNCTION THAT DISPLAY OUR MESSAGE
function message(number){
  if( number === 0 ){
    console.log("Sorry, no profit were possible today.")
  }
  else{
    console.log("My best possible profit value for the day is: $" + number + ".");
  }
}

var testArray = [45, 24, 35, 31, 40, 38, 11];// 16
var testArray2 = [1, 3, 7, 9, 11, 14, 19]; // 18
var testArray3 = [19, 14, 11, 9, 7, 3, 1]; // no profit
var testArray4 = [45, 4, 48, 31, 7, 38, 11]; // 44
var testArray5 = [45, 4, 48, 1, 78, 38, 11]; // 77


message(bestProfit(testArray));
message(bestProfit(testArray2));
message(bestProfit(testArray3));
message(bestProfit(testArray4));
message(bestProfit(testArray5));
