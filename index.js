/* create a faulty calculator

+ ---> -
* ---> +
- ---> /
/ --> **

every 10% times 
*/

let random = Math.random()
let a = prompt("Enter first Number:")
let b = prompt("Enter Second Number:")
let c = prompt("Enter Opration:")

let obj = {
  "+": "-",
  "*": "+",
  "-":"/",
  "/":"**",
}
c = obj[c]
if(random > 0.1){
  alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
  c = obj[c]
  alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}