// switch
let role = prompt("Enter role in org; ")

switch (role.toLowerCase()) {
    case 'Manager'.toLowerCase():
        alert("Salary #21000")
        break;

    case 'Dev'.toLowerCase():
        alert("salary #16000")
        break;

    default:
        alert('enter correct role (Manager or Dev')
}

// nested if
let userName = prompt("User Name: ")
let password = prompt("Password: ")

if (userName != "" && password != "") {

    if (userName == "admin" && password == "admin123") {
        alert("Login Successful!")
    } else {
        alert("invalid details as admin")
    }
    
} else {
    alert("Wrong details, user must be an admin")
}


let qty = prompt("Enter desired quantity: ")


// if
// if statement
if (qty < 0 || isNaN(qty)) {
    alert('Invalid input! Enter a positive numnber')
} 

// if-else statement
let fNum = prompt("Enter first number for division: ")
let sNum = prompt("Enter 2nd number for division: ")
let result;

if ( sNum == 0 ) {
    alert("ERROR: Division with zero is not valid")
} else {
    result = fNum / sNum
    alert("Result: ", result)
}

// if -else-if- else
let score = prompt("Enter score to get grade")
if (score >= 70 ) {
    alert("You had A")
} else if (score >= 60 ) {
    alert("You had B")
} else if (score >= 50 ) {
    alert("You had C")
} else if (score >= 45 ) {
    alert("You had D")
} else if (score >= 40 ) {
    alert("You had E")
} else {
    alert("You had F")
}

// update to reflect modern scoring
//  70 and above A, 
// 60 and above is B, 
// 50 and above is C, 
// 45 and above D
// 40 and above E
// below 40 is F

let modernScore = prompt("Enter score to get current grade")
if (modernScore >= 70 ) {
    alert("You had A")
} else if (modernScore >= 60 ) {
    alert("You had B")
} else if (modernScore >= 50 ) {
    alert("You had C")
} else if (modernScore >= 45 ) {
    alert("You had D")
} else if (modernScore >= 40 ) {
    alert("You had E")
} else {
    alert("You had F")
}

