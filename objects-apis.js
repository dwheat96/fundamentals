/*
 * Objects, Interfaces, and API's
 */

let dog = {
    name: "Cerberus",
    color: "black",
    breed: "Hellhound",
    size: "incomprehensible",
    Bark: function(typeOfBark){
        console.log("Bork!");
    },
};




function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "tom",
    num: 10,
}


x(y);

console.log(y);



