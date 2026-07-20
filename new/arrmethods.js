let flowers = ['daisy', 'sunflower', 'rose']
// length (property)
document.writeln("<br> Number of flowers: ", flowers.length,  "<br> ")

// methods
// join() takes the item and converts them to string using a separator
document.writeln("flowers are: ", flowers.join(', '), "<br> ")

// push(): append (at end)
document.write("new flowers added! altogether is: ", flowers.push("orchid", 'lily'))
document.write("<br>")

// sort() ascending
document.write("sorted flowers alphabetically: ", flowers.sort())

// pop()
document.write("<br> removed last flower: ",  flowers.pop())

document.write("<br> the third item in my array is: ", flowers[2])
// for...in loop
document.write("<h2>For...in loop</h2>")
for (let pos in flowers) {
    document.write("<br>", flowers[pos])
}

// for...of loop
document.write("<h2>For...of loop</h2>")
for (let item of flowers) {
    document.write("<br>", item)
}