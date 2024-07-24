const button = document.getElementById("result") as HTMLButtonElement;

button.addEventListener("click", function (event) {
    event.preventDefault();
    const btnClick = document.getElementById("input") as HTMLInputElement;
    const outputAns = document.getElementById("table") as HTMLParagraphElement;
    outputAns.innerHTML = "";
    const inputValue = parseInt(btnClick.value); // Convert the input value to a number
    if (!isNaN(inputValue)) {
        for (let i = 1; i <= 10; i++) {
            outputAns.innerHTML += `${inputValue} x ${i} = ${inputValue * i}<br>`;
        }
    } else {
        outputAns.innerHTML = "Please enter a valid number.";
    }
});
