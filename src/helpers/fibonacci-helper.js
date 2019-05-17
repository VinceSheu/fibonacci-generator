export const generateFibonacciSequence = (numbersRequested) => {
  // base cases with the first 2 fibonacci numbers being defined as 0 and 1
  if (numbersRequested === 1) {
    return [0];
  } else if (numbersRequested === 2) {
    return [0, 1];
  } else {
    // in non-trivial cases we begin with the first 2 numbers already defined
    let returnArray = [0, 1];
    let firstNumber = returnArray[0];
    let secondNumber = returnArray[1];
    // since the first 2 numbers have already been defined, we exclude them 
    // from the remaining numbers to be generated 
    for (let i = 0; i < numbersRequested-2; i++) {
      var newSecondNumber = firstNumber + secondNumber;
      returnArray.push(newSecondNumber);
      // update our numbers to continue our fibonnaci sequence generation
      firstNumber = secondNumber;
      secondNumber = newSecondNumber;
    }
    return returnArray;
  }
}