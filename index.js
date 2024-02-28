let number = Math.random()

console.log(random)

let a = prompt("enter the number a: ")
let c = prompt("enter operation")
let b = prompt("enter the number b: ")


let object = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if (number > 1){
    console.log(`The result is ${eval(`${a} ${b} ${c}`)}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    c = object[c]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}