let inputvalue = document.getElementById("inputvalue");
let button = document.getElementById("button");
let reset = document.getElementById("reset");
let output = document.getElementById("output");

let count = 0;

inputvalue.addEventListener("input", () => {
  if (inputvalue.value.trim()) {
    button.classList.remove("disabled");
    reset.classList.remove("disabled");
  } else {
    button.classList.add("disabled");
    reset.classList.add("disabled");
  }
});

button.addEventListener("click", () => {
  count = 0;
  let input = inputvalue.value.trim();
  let vowels = "aeiouAEIOU";

  if (input) {
    for (let i = 0; i < input.length; i++) {
      let wordcheck = input[i];

      for (let i = 0; i < vowels.length; i++) {
        if (wordcheck == vowels[i]) {
          count++;
        }
      }
    }
    output.innerHTML = count;
  }
});

reset.addEventListener("click", () => {
  count = 0;
  inputvalue.value = "";
  output.innerHTML = "Enter something to check";
  button.classList.add("disabled");
  reset.classList.add("disabled");
});
