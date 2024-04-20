const number = document.querySelector('#fn');
const number2 = document.querySelector('#fn2');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_sum');

button.addEventListener('click', () => { 

    let inputArray = Number(number.value);
    let inputArray2 = Number(number2.value);

    if (number.value === "" && number2.value === "") {
        return alert("Please enter a valid number!");
    } else if (isNaN(inputArray)) {
        return alert("Both inputs must be numbers!");
    } else if (isNaN(inputArray2)) {
        return alert("Both inputs must be numbers!");
    } else {    
    
        let smallestFunc = smallestCommonMul([inputArray, inputArray2]);
    
        display.innerHTML = `The Smallest common multiple is : ${smallestFunc}`;
    }

    setTimeout(() => { 
        display.innerHTML = "";
    }, 10000);

});


const smallestCommonMul = (arr) => { 

    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    
   // Largest possible value for SCM
         let upperBound = 1;
        for (let i = min; i <= max; i++) {
            upperBound *= i;
    } 

    // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
      
       if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
    
};



/*function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

let smallest = smallestCommons([1,5]);
console.log(smallest);*/