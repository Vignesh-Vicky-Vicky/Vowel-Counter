

let inputvalue = document.getElementById("inputvalue");
let button = document.getElementById("button");
let reset = document.getElementById("reset");
let output = document.getElementById("output");


let count = 0;

button.addEventListener('click', () => {
    
    count = 0;

    let input = inputvalue.value;
    let vowels = 'aeiouAEIOU';

    for (let i = 0; i < input.length; i++) {

        let wordcheck = input[i];

            for(let i = 0; i<vowels.length; i++){
                if(wordcheck == vowels[i]){
                    count++;
                }
            }

    }
    output.innerHTML = count;

})

reset.addEventListener('click', () =>{
    count = 0;
    inputvalue.value= '';
    output.innerHTML = count;
})

