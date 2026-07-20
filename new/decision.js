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


// if
// if statement
let qty = prompt("Enter desired quantity: ")


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
if (score >= 60 ) {
    alert("You had A")
} else if (score >= 35 && score < 60 ) { //multiple else if as needed
    alert("You had B")
} else {
    alert("failed course")
}

// PRACTICE: update to reflect modern scoring
//  70 and above A, 
// 60 and above is B, 
// 50 and above is C, 
// 45 and above D
// 40 and above E
// below 40 is F

