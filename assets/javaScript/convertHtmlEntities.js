const htmlEntities = document.querySelector('#fn');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_check');

button.addEventListener('click', () => { 

    let htmlString = htmlEntities.value;

    if (htmlString === "") return alert("Please fill the input filed");

    let specialCases = convertHTML(htmlString);
   
    display.innerHTML = "Please See the Result on the console";
    console.log(specialCases);
});

const convertHTML = (string) => { 

    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&qout;",
        "'" : "&apos;"
    };

    return string.split("")
                 .map(entities => htmlEntities[entities] || entities)
                 .join("");
};



