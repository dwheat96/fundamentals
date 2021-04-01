  /*
   *  Conditionals, Functions, Scope, and Loops.
   */

  // Equals
  let equals = 1 === 1;
  console.log(equals)

  //  Greater Than
  let greaterThan = 5 > 1;

  // Less Than
  let lessThan = 2 < 10;

  // Greater Than or Equals to
  let greaterThanEq = 5 >= 5;

  // Less Than or Equals to
  let lessThanEq = 4 <= 9;

  // Not Equals
  let notEquals = 5 !== 2;

  /*
   * Operators Example
   */

let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;


function compareStorePrices (storeA, StoreB) {
  let storeAisLower = storeA < storeB;
  if (storeAIsLower) {
    console.log("Store A has a lower Price.")
  } else if (storeB < storeA) {
    console.log("Store B has a lower price.")
  } else {
    console.log("Their prices are the same.")
  }
}

compareStorePrices(10, 100);


function squareNum (number) {
  let squared = number * number;
  return squared;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);

/*
 * scope
 */

  //global scope
  let x = 10;

  //function scope
  function addNumber(n, m, x){
    //console.log(x);
    let b;
    if (1===1) {
      let b = 8;
      //block scope
    }
    return n + m;
  }

  addNumbers(2, 3, 8);
  //continue.log(x);


/*
 * Arrays
 */

  // position     0  1  2  3  4[0    1    2    3]   5  6
  let ourArray = [1, 2, 3, 4, ['a', 'b', 'c', 'd'], 6, 7];
 // console.log(ourArray[0])

  let arrLen = ourArray.length
  //  counter,   comparison, incrementer
  for(let i = 0; i<arrLen; i++){
    console.log("i is equal to: " +i);
    console.log(ourArray[i]);     console.log("j is equal to: "+i);
  }

  while (x < 10) {
    console.log('Ran');
    x = x + 1;
  }