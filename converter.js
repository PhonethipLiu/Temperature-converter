console.log("The temperature is getting hot in here!");

var check_C = document.getElementById("Checkbox_C");
var check_F = document.getElementById("Checkbox_F");
var reset = document.getElementById("btn_reset");
var convertedTemp = document.getElementById("converted_temp");

function toCelsius(value) {
    value = parseFloat(value);
    convertedTemp.innerHTML = (value - 32) / 1.8 + "&deg; C";
    console.log(toCelsius());
}

function toFahrenheit(value) {
    value = parseFloat(value);
    convertedTemp.innerHTML = (value * 1.8) * 32 + "&deg; F";
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
    console.log("event", clickEvent);
    if (check_C === true){
        return toFahrenheit(value) ;
    } else if (check_F === true) {
        return toCelsius(value);
    }
};   
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


let inputValue = document.getElementById("");
inputMessage.addEventListener("keyup", valueEnter);

function valueEnter(){
    if (event.which === 13 || event.keyCode == 13) {
        messageDisplay();
        return false;
    }
}


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


