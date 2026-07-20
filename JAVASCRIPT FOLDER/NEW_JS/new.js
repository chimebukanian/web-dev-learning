// intro
console.log("hello world from external javascript")

// variables
// INITIALIZE / ASSIGN is same
let num1;
num1  = 5
num1 = 10

// deprecated "var"
var text = "kontrolla is a web dev student at aptech lekki center"

// constants
const earthShape = 'oval' // can't reassign
// earthShape = "whatever shape "

document.writeln("<br>")
document.writeln(num1)
document.writeln(text);
document.writeln(earthShape);

let firstName = "John"; let lastName = "Doe"

// DATA TYPES
// primitive data type:
// number
let ten = 10

// string: "" or '' or `` (template string ${})
let sentence = "Hello world from js " + " " + ten
console.log(sentence)

let data = `hello ${ten} is a number
1 + 2 = ${1 + 2}
`
console.log(data)

// boolean: true or false (1 or 0)
let bool1 = true
let bool2 = false

// null
let nullVar = null

// undefined
let myVar;
let myVar1 = undefined;

console.log(myVar)

// symbol for uniqueness
let sym1 = Symbol(1)
let sym2 = Symbol(1)

// COMPOSITE DATA TYPE (collections)
// object
let myCar = {
    // properties
    name: "mercedes",
    year: 2025,

    // methods (function)
    drive: function() {
        console.log("car is being driven")
    }
}

myCar.drive()
// array
let myFruits = ["mango", "orange", "grape"]

/*
all of your multiline comments
goes in here
*/

// escape character \
// "Nigeria is the "best" country in the world"
let mySentence = "Nigeria is the \"best\" \ncountry\\nation in the world"
console.log(mySentence)

// other built in functions
// confirm("you're in aptech currently?")
console.log(parseInt("20"))
console.log(parseInt("20"))

eval("console.log(myCar)") //runs like javascrpt

isNaN("30") //false
// let inputtedName = prompt("what is your name? ")
// document.write(`<br> Hi ${inputtedName}!`)

// OPERATORS: unary, binary, ternary
// Arithmethic: (binary)
console.log(10 + 2)
console.log(10 - 2 - 2) //6
console.log(10 / 2)
console.log(10 % 2) // 0
console.log(10 * 2) // 20


// increment (+1) /decrement (-1): Unary
let myNum = 20
// post increment
console.log("myNum++: ", myNum++) // display before adding 1
console.log(myNum) // 21
// post decrement
console.log("myNum++: ", myNum--) // display before substracting 1
console.log(myNum) // 21

// pre decrement
console.log("myNum++: ", ++myNum) // display after adding 1 = 22

// pre decrement
console.log("myNum++: ", --myNum) // display after substracting 1 = 21
console.log(myNum) // 21



// relational operators
90 == 91 // equal value
90 != 91 // not equal
90 === "90" // strict equal: false (data type and value)
90 !== "90" // strict not equal: true
90 > 90
90 < 90
90 >= 90 //true
90 <= 90 //true

// Logical Operators: binary
console.log(91 > 90 && 40 < 20 && 30 == 30) // false (AND: all criteria must be met)
console.log(91 > 90 || 40 < 20) // true (OR: either works fine)
// unary
console.log(!(91 > 90 || 40 < 20)) // false //NOT: opposing

// Assignment operator =
let myNumber = 50

// myNumber = myNumber + 6
myNumber += 6 // 56
myNumber -= 6 // 56
myNumber %= 6 // 56
myNumber /= 6 // 56

// bitwise operators: &, |, ~ 
let a = 9 // 00001001
let b = 14 // 00001110

// bitwise AND
console.log(a & b)  // 00001000 = 8
// bitwise OR
console.log(a | b)  // 00001111 = 15
// bitwise NOT
console.log(~a) // 11110110 = -10
// exclusive XOR
console.log(a ^ b) // 00000111 = 7

// SPECIAL operators 
// , e.g for array, objects, etc
// ternary to choose btw options
let canDrive;
let hasLicense = true

// ternary operator For Decision making.. in this case, to know if someone should be able to drive
hasLicense ? canDrive = true : canDrive = false;

console.log("can they drive? ", canDrive)

console.log(typeof hasLicense) //do same for other data types discussed above


let result = 12 * 5 / 2 - 1

// Regular EXPression: an advanced way to work with strings search, substitute, etc
// Ftypes: 
// Literal (/pattern/flags)  
// constructor RegExp("reg_pattern", "flags")

// Methods
let myText = "hello world Hello"
// match
console.log(myText.match(/hello/gi))
// replace
console.log(myText.replace(/hello/ig, 'Hi'))
// search
console.log(myText.search(/world/))


// alternation
let text1 = "Black, white, red, green, blue, yellow.";

console.log(text1.match(/white|red|green/g))

// MetaCharacters
let text2 = "Give_ 100%!";
console.log(text2.match(/\d/g))
console.log(text2.match(/\D/g)) // opposite of digits
console.log(text2.match(/\w/g))
console.log(text2.match(/\s/g))
console.log(text2.match(/\S/g)) // anything but space


// quantifiers
// ?: zero or one occurence
let text3 = "1, 100 or 1000, 10000?";
const pattern = /10?/g;

console.log(text3.match(pattern)) // [1, 10, 10]

// +: one or more
let txt = "Hellooo World! Hello Schools!";
console.log(txt.match(/lo+/g)) // ['looo', 'lo']
// * zero or more existence
console.log(txt.match(/lo*/g)) // ['l','looo', 'l', 'lo', 'l']

//  {n} Quantifier
console.log(text3.match(/\d{4}/))
console.log(txt.match(/l{2}o{2}/g))

//  {n,m} Quantifier
console.log(text3.match(/\d{4,5}/g))

//  {n,} Quantifier
console.log(text3.match(/\d{4,}/g))

// Expression Assertions
let txt2 = "Web Tutorial";
//  ^: string begin
let pattern1 = /^web/i

console.log(pattern1.test(txt2))
// $: string end
let pattern2 = /web$/i
console.log(pattern2.test(txt2))


// \b
let txt3 = "HELLO, LOOK AT YOU!";

let result1 = txt3.search(/\bLO/)
console.log(result1)


// character classes
let txt4 = "More than 1000 times 678";
console.log(txt4.match(/[0-7]/g))
// [1, 0, 0, 0, 6, 7]
console.log(txt4.match(/[a-zA-Z]/g))

