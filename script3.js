//Factorialize a Number
function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  
  factorialize(5);
  console.log(factorialize(5))
  console.log(factorialize(10))
  console.log(factorialize(20))
  console.log(factorialize(0))