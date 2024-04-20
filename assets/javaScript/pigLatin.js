const word = document.querySelector('#fn');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_altering');

button.addEventListener('click', () => { 

    let texTo = word.value;

    if(word.value === "") return alert("Please Enter a Word on the Text Field!");

    let pigLatin = translatePigLatin(texTo);

    display.innerHTML = `Translation: ${pigLatin}`;

});

const translatePigLatin = (string) => { 

    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = string.match(consonantRegex);

    return myConsonants !== null ? string
                                         .replace(consonantRegex, "")
                                         .concat(myConsonants)
                                         .concat("ay")
                                         : string.concat("way");
};




/*function translatePigLatin(str) {

  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);

  return myConsonants !== null ? str.replace(consonantRegex, "")
                                   .concat(myConsonants)
                                   .concat("ay")
                                   :str.concat("way"); 
  
}

let pigLatin = translatePigLatin("consonant");
console.log(pigLatin);*/