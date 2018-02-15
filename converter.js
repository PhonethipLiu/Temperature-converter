console.log("The temperature is getting hot in here!");

var check_C = document.getElementById("Checkbox_C");
var check_F = document.getElementById("Checkbox_F");
var check_X = document.getElementById("Checkbox_X");
var convertedTemp = document.getElementById("converted_temp");

function toCelsius(number) {
    value = parseFloat(number);
    convertedTemp.innerHTML = (value - 32) / 1.8 + "&deg; C";
    console.log(toCelsius());
}

function toFahrenheit(number) {
    value = parseFloat(number);
    convertedTemp.innerHTML = (value * 1.8) * 32 + "&deg; F";
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
    console.log("event", clickEvent);
    if (check_C === true) {
        return toCelsius(value);
    } else if (check_F === false) {
        return toFahrenheit(value);
    }
};   
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


  //comparison
  function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    } else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
    }
}


