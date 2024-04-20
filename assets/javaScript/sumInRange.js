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
    
        let sumAllFunc = sumAll([inputArray, inputArray2]);
    
        display.innerHTML = `The Sum is: ${sumAllFunc}`;
    }

    setTimeout(() => { 
        display.innerHTML = "";
    }, 10000);

});

const sumAll = (arr) => { 

    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;

    for (let i = min; i <= max; i++){

        sumBetween += i;
    }

    return sumBetween;
};




/*function sumAll(arr) {
   let max = Math.max(arr[0], arr[1]);
   let min = Math.min(arr[0], arr[1]);
   let sumBetween = 0;
  for(let i = min; i <= max; i++){
     sumBetween += i;
  }
  return sumBetween;
}

let add = sumAll([1, 4]);
console.log(add);*/