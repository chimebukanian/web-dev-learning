// declare
// single dimensional array
let marital_status = new Array(3)

// initialize later here:
marital_status[0] = 'single'
marital_status[1] = 'married'
marital_status[2] = 'divorced'

console.log(marital_status)

// declare/initialze simultaneously
let marital_status2 = new Array('single', 'married', 'divorced')

// literal syntax: []
let marital_status3 = ['single', 'married', 'divorced']

// accessing
let married = marital_status3[1]
// console.log(married)

let sum = 0
// take 5 marks from a user and display the average of the marks
let marks = new Array(5)

for (let i = 0; i < marks.length; i++) {
    marks[i] = parseInt(prompt("Enter Mark: "))
    sum += marks[i]
}

console.log(marks)
// get averarge
let average = sum / marks.length
alert(average)

// multi dimensional array (2D)
let employees = new Array(3)

employees[0] = new Array('David', 20000)
employees[1] = new Array('philip', 21000)
employees[2] = new Array('sam', 31000)

console.log(employees[1][1])

// table display
let products = [['monitor', '300'], ['keyboard', '400']]
document.writeln(`<table border=1>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>`)
for (let i=0; i < products.length; i++) {
    document.write('<tr>')
    for (let j = 0; j < products[i].length; j++) {
        document.write('<td>' + products[i][j] + '</td>')
    }
    document.write('</tr>')
}

document.write('</table>')