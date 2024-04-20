const number = document.querySelector('#fn');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_sum');

button.addEventListener('click', () => { 

    let inputNum = Number(number.value);

    if (number.value === "") {
        
        return alert("Please enter a valid number!");
    
    } else if (isNaN(inputNum)) {
        
        return alert("Invalid entry! Please enter a numeric value.");
    
    } else {

        let primesFun = sumOfPrimes(inputNum);
    
        display.innerHTML = `The sum of the Primes number is : ${primesFun} in ${inputNum} <hr />`;
    }
    setTimeout(() => {
        display.innerHTML= "";
        number.focus();
    }, 10000);
});

const sumOfPrimes = (num) => { 

    // Helper function to check if a number is prime or not
    const isPrime = (num) => { 

        const sqrt = Math.sqrt(num);
        for (let i = 2; i <= sqrt; i++){
            if (num % i === 0)
                return false;
        }

        return true;

    };

    // Check all numbers for primality
    let sum = 0;

    for (let i = 2; i <= num; i++){

        if (isPrime(i))
            sum += i;

    }

    return sum;
};


