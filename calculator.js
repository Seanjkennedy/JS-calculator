// pseudo

// basic functions for add, subtract, divide, multiply
// function for numbers?



// whole equation gets stored in an Array. and within that array are individual arrays for each number , seperated by each equation.





var display = "";


var equation = [];

var unjoinedNumberSection = [];

var getNumber = (id) =>  {
 
    let temp = document.getElementById(id).value;
    unjoinedNumberSection.push(temp);
    console.log(temp);
    console.log("unjoinedNumberSection", unjoinedNumberSection);

}

var joinedNumber = () => {
    var temp =unjoinedNumberSection.join("");
    joinedNumber = "";
    unjoinedNumberSection = "";
    return temp
}


// console.log(joinedNumber)



//   TO DO
//  NEED TO GET joined NUMEBR AND MATH SYMBOL INTO THE EQUATION ARRAY.  probs not working cos im not passing args correctly.


var addMathSymbol = (id, joinedNumber) => {
    equation.push(joinedNumber);
    console.log("jnumber", joinedNumber)
    // joinedNumber = "";
    // unjoinedNumberSection = "";


    console.log("equation", equation)
    let temp = document.getElementById(id).value;
    console.log("TEMP in add symbol",temp);


    if (temp === "X"){
        temp = "*";
    }
    if (temp === "÷"){
        temp = "/";
    }
    equation.push(temp);

}



while (true){

    if 



}




// html


// prob actually dont need mult args.


// function addNumbers(...args) {

//     return args.reduce((a , b) => a + b)
// }

// function subtractNumbers(...args) {

//     return args.reduce((a , b) => a - b)
// }


// function to add number to an array.  



// console.log(addNumbers(1,2,1,1,1,1,1,1,1,1))
// console.log(subtractNumbers(1,2,1,1,1,1,1,1,1,1))