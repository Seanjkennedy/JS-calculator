var clearDisplay = () => {

    document.getElementById("display").innerHTML = "0";
}

var equals = () => {

    var getDisplayData = document.getElementById("display").innerHTML;
    var setCalculationResult = eval(getDisplayData);
    document.getElementById("display").innerHTML = setCalculationResult;
}

var decimal = () => {

    var lastInput = document.getElementById("display").innerHTML;
    last = lastInput[lastInput.length - 1];
    if (last !== "+" && last !== "/" && last !== "*" && last !== "-" && last !== ".") {
        display.innerHTML += ".";
    }
}

var getNumber = (id) => {

    var temp = document.getElementById(id).value;
    if (display.innerHTML === "0") {
        display.innerHTML = temp;
    } 
    else {
        display.innerHTML += temp;
    }

    var elems = document.getElementsByClassName("symbol");
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
    }
}

var getSymbol = (id) => {

    var temp = document.getElementById(id);
    display.innerHTML += temp.value;

    var elems = document.getElementsByClassName("symbol");
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
    }

}

var disableSymbols = () => {

    document.getElementsByClassName("subtract button").disabled = true;

}