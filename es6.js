const numbers = [1,2,3,4,5]

function doubleNumbers(numbers){
  const double = [];

  for(number of numbers){
    let dNu = number * 2;
    double.push(dNu)
  }
  return double;
}

const two = doubleNumbers(numbers)
console.log(two)