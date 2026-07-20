// declaration
function add() {
    let num1 = 21
    let num2 = 22

    let result = num1 + num2
    document.write("The sum of 21 and 22: ", result)
}

function calling_add_func() {
    // invoking/calling 
    add()
}

// invoking/calling 
calling_add_func();
 
// parameeterized function
function addV2(num1, num2){
    let sum = num1 + num2
    document.write(`sum of ${num1} and ${num2}`, sum)
 }

//  arguments passed when calling
 addV2(30, 80)
 addV2(3, 8)

//  pass by reference for composite objects, arrays, etc
 let persons = ['james', 'kevin', 'brad']

 document.write("<h2> before updating (pass by ref)</h2> <br> <ul>")
 
 for (let name of persons) {
     document.write(`<li> ${name} </li>`)
}
    
document.write("</ul>", '<br>')
    
    
function changeArr(arr) {
    arr[0] = 'stuart'
    return arr
}
    
let returnArr = changeArr(persons)
document.write("<h2> After updating (pass by ref)</h2> <br> <ul>")
console.log(persons)

 //  pass by value: duplicates and operations on that copy
let guy = 'lebron'

function changeName(par) {
    par = "something else instead"
    console.log("inside the function", par)
}

changeName(guy)

console.log("outside the function",guy)

// factorial of 4: 4*3*2*1 = 24

function factorial(num) {
    if (num==0) {
        return 0
    } else if (num==1) {
        return 1
    } else {

        let result = num

        while(num>1) {
            result = result * (num - 1)
            num--
        }

        return result
    }
}

console.log(factorial(6))
console.log(factorial(1))
console.log(factorial(0))

// Objects
// let myArr = new Array(5)

let stud1 = new Object()
stud1.first_name = "samuel"
stud1.last_name = "victor"
stud1.age = 15

let stud2 = new Object()
stud2.first_name = "josh"
stud2.last_name = "ola"
stud2.age = 18
stud2.course = "web"


console.log(stud1)
console.log(stud1.last_name) // victor
console.log(stud1["last_name"]) // victor

// constructor function 
function Employee(name, role, experience) {
    this.name = name
    this.role = role
    this.experience = experience
}

employee1 = new Employee("david", 'software engineer', 5)
employee2 = new Employee("james", 'project manager', 3)
console.log(employee1)

// methods of objects
let sq = new Object()
sq.length = 5

sq.cal_area = function() {
    return this.length**2
}

console.log(sq.cal_area())


// 
function calc_diameter (rad) {

    return this.radius * 2
}

function Circle(rad) {
    this.radius = rad
    this.cal_diameter = calc_diameter
}
// userprompt
let userprompt;

let circ1 = new Circle(12)
console.log(circ1.cal_diameter())

// string object ""
let str = new String('david taylor swift')
let str1 = 'samuel chuks mary'

// methods
console.log(str.charAt(6)) // t
let newStr = str.concat(str1) // str + str1
console.log("string number of characters is: ", str.length)
console.log(newStr)
console.log(str1.split(" ", 2))

// Math
console.log(Math.floor(43.965))
console.log(Math.round(43.965))
console.log(Math.PI)

// Date
let dateObj = new Date('7-8-2021') // no parameter == current year
console.log(dateObj)

console.log(dateObj.getDate())
console.log(dateObj.getFullYear())
console.log(dateObj.getMonth())

// with gives direct access to properties/methods of the obj in context
with (dateObj) {
    console.log(getDate())
}

with (console) {
     log("hello world")
}

let myObj = new Object()
myObj.name = "Samuel"

with (myObj) {
    window.console.log(name)
}

// window
// if (confirm("Do you want to open a new page")) {
//     // window.open('https://google.com', '_blank')
//      open(
//     'https://google.com', 
//     'popupWindow', 
//     'width=600,height=400,left=200,top=300,scrollbars=yes'
//   );
// } else {
//     console.log("New page not opened!")
// }

// history
// if (confirm("Do you want to see next 2 visits?")) {
//     history.go(2) //  or go(1)
//     // or .foward()
// } 

/*
Go back one page: history.go(-1) (equivalent to history.back()).
Go forward one page: history.go(1) (equivalent to history.forward()).
Reload the current page: history.go(0) or history.go() without any parameters
*/

// navigator
document.write(navigator.appName)
document.write("<br>")
document.write("<br>")

document.write(navigator.appVersion)
document.write("<br>")
document.write("<br>")
document.write(navigator.platform)
document.write("<br>")
document.write("<br>")

// location
console.log(location.href)
console.log(location.host)
console.log(location.pathname)
console.log(location.protocol)

// location.assign("http://127.0.0.1:5500/new/cont.html")
// location.reload()
// location.replace("http://127.0.0.1:5500/new/cont.html")

