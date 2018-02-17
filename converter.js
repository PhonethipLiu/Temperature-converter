console.log("The temperature is getting hot in here!");

// variables to target DOM elements by id
var C = document.getElementById("C");
var F = document.getElementById("F");
var reset = document.getElementById("btn_reset");
var tempOutput = document.getElementById("temp_output"); // output field
var tempInput = document.getElementById("temp_input")
// *** Get a reference to the button element in the DOM
var button = document.getElementById("converter");

//  *** Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
tempInput.addEventListener("keyup", valueEnter);

// *** function Convert temp to celsius
function toCelsius() {
    let convertC = (tempInput.value - 32) * (5/9);
    tempOutput.innerHTML = `${convertC.toFixed()} &#176;C`; 
    if (convertC > 32) {
        tempOutput.style.color = "red";
    } else if (convertC < 0) {
        tempOutput.style.color = "blue";
    } else {
        tempOutput.style.color = "rgb(113, 143, 113)";
    }
};
    
// *** function to convert temp to Fahrenheit
function toFahrenheit() {
    let convertF = (tempInput.value / (5/9)) + 32;
    tempOutput.innerHTML = `${convertF.toFixed()} &#176;F`;
    if (convertF > 90) {
        tempOutput.style.color = "red";
    } else if (convertF < 32) {
        tempOutput.style.color = "blue";
    } else {
        tempOutput.style.color = "rgb(113, 143, 113)";
    }
};

// *** This function should determine which conversion should happen based on which radio button is selected.
function determineConverter (clickEvent) {
    console.log("event", clickEvent);

    if (C.checked === true){
        event.preventDefault();
        toFahrenheit();
        console.log("checked C");
    } else if (F.checked === true) {
        event.preventDefault();
        toCelsius();
        console.log("checked F")
    }
};   

function valueEnter(){
    if (event.which === 13 || event.keyCode == 13) {
        determineConverter();
        return false;
    }
};

// clear button
resetBtn = () => {
    tempInput.value = "";
    tempOutput.innerHTML = "";
};
reset.addEventListener("click", resetBtn);

  



