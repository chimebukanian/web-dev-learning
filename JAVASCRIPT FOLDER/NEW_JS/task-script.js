// multiples of a number taken via prompt() input from user.
// using for / while loop (start from 1 and stops at 10)
// display on the document on each step of the way

let num = prompt("Enter a number to get the multiples: ")
for (let i = 1; i <= 10; i++) {
    document.write((num + " x " + i + " = " + num * i + "<br>"))
}

let y = 1
while (y <= 10) {
    document.writeln(`${num} x ${y} = ${num * y}<br>`)
    y++;
}
