const number = document.querySelector('#fn');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_sum');

button.addEventListener('click', () => { 

    let enterNumber = Number(number.value);

    if (number.value === "") {
        return alert("Please Enter a valid number");
    }else if(isNaN(enterNumber)){
        return alert("Invalid entry! Please enter a numeric value.");
    } else {

        let sumFunc = sumFibs(enterNumber);
        display.innerHTML = `The sum of the Fibonacci numbers up to ${enterNumber} is: ${sumFunc}. <hr/>`;
    }
    setTimeout(() => { 

        display.innerHTML = "";
        number.focus();
    }, 10000);

});

const sumFibs = (num) => { 

    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;

    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
};


