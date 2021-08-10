var clearDisplay = () => {

    document.getElementById("display").innerHTML = "0"; //resets display to 0
}

var equals = () => {

    var getDisplayData = document.getElementById("display").innerHTML;
    var setCalculationResult = eval(getDisplayData);  // the equation in the display is calculated
    document.getElementById("display").innerHTML = setCalculationResult;  //result sent back to display
}

var decimal = () => {

    var lastInput = document.getElementById("display").innerHTML;
        
    // prevent adding decimals following a symbol 
    last = lastInput[lastInput.length - 1];
    if (last !== "+" && last !== "/" && last !== "*" && last !== "-" && last !== ".") {
        display.innerHTML += ".";
    }
}

var getNumber = (id) => {

    var temp = document.getElementById(id).value;

    // prevents leading zeros
    if (display.innerHTML === "0") {
        display.innerHTML = temp;
    } 
    else {
        display.innerHTML += temp;
    }

    // re-enables the symbol buttons
    var elems = document.getElementsByClassName("symbol");
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
    }
}

var getSymbol = (id) => {

    var temp = document.getElementById(id);
    display.innerHTML += temp.value;

    // disables the symbol buttons
    var elems = document.getElementsByClassName("symbol");
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
    }

}