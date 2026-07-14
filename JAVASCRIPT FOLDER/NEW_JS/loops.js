/* practices:
1.  print from 20 - 0 using any loop
2. using switch: capture day of the week and display if it's a week day or weekend, 
    default should display "invalid day, enter a day from Monday - Friday"
*/




// continue
// 10 - 20; skip 15
for (let i = 10; i <= 20; i++) {
    if (i == 15) {
        continue;
    }
    console.log(i)
}
// break
// 10 - 20; stop at 15

for (let i = 10; i <= 20; i++){
    if (i == 16 ) {
        break;
    }
    console.log(i)
}

// do while
let answer;
do {
    answer = prompt("Nigeria's capital is? ")

} while (answer.toLowerCase() != "abuja")
document.writeln(`<br> correct! answer is ${answer}! <br>`)


// while loop
// 1 + 2 + 3...+ 10

let sum = 0;
let i = 0

while (i <= 10) {
    sum = sum + i
    i++;
}

console.log(sum)

// for loop
let forSum = 0;

for (let x = 0; x <= 10; x++) {
    forSum = forSum + x
    document.write(forSum, "<br>")
}

// multiples of a number taken via prompt() imput from user.. 
// using for / while loop (start from 1 and stops at 10)
// display on the documenmt on each step of the way

let userNum = prompt("Get multiple of a number, input: ")

for (let j = 1; j <= 10; j++) {

   document.writeln(`${userNum} * ${j} = ${userNum * j} <br>`)
   
}

let y = 1;

while (y <= 10 ) {
    document.writeln(`${userNum} * ${y} = ${userNum * y} <br>`)
    y++;
}