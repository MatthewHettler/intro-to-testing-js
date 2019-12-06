// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!"
//     }
//     if (input === "Pat") {
//         return "Hello, Pat!"
//     }
//     else {
//         return "Hello, Jane!"
//     }
// }

//======== REFACTORED CODE ========//

function sayHello(input) {
    if (input === false){
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!"
    }
}

//=================================//

function isFive(input) {
    if (input === 5) {
        return true;
    } else {
        return false;
    }
}

//=================================//

function isEven(input) {
    return parseInt(input) % 2 === 0;
}

//=================================//
