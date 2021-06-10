

let inputvalue = document.getElementById("inputvalue");
let button = document.getElementById("button");
let reset = document.getElementById("reset");
let output = document.getElementById("output");


var counter = 0;

button.addEventListener('click', function () {

    var input = String(inputvalue.value);

    for (let i = 0; i < input.length; i++) {

        var value = input[i];

        switch (value) {
            case "a": counter++;
                break;
            case "e": counter++;
                break;
            case "i": counter++;
                break;
            case "o": counter++;
                break;
            case "u": counter++;
                break;
            case "A": counter++;
                break;
            case "E": counter++;
                break;
            case "I": counter++;
                break;
            case "O": counter++;
                break;
            case "U": counter++;
                break;
        }

    }
    output.innerHTML = counter;
    inputvalue.value = "";

})

reset.addEventListener('click', function () {
    counter = 0;
    output.innerHTML = counter;
    inputvalue.value = "";
})