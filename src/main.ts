import './style.css'

const colors = ['red', 'green', 'blue']
const numbers = [10, 20, 30]
// const arrayOfStringsAndNumbers = [10, 'gavin', 42]

// const lengths = colors.map(function (color) {
//   const lengthOfColor = color.length

//   return lengthOfColor
// })

const lengths = colors.map((color) => {
  return color.length
})

const doubled = numbers.map(
  (someNumber) => `The number doubled is ${someNumber * 2}`
)

// const sentences = arrayOfStringsAndNumbers.map(function (someThing) {
//   if (someThing instanceof string){
//   return someThing.length
//   }
//   else{
//     return someThing * 2
//   }
// })

const uppercased = colors.map((color) => color.toUpperCase())

console.log(doubled)
console.log(lengths)
console.log(uppercased)

const longColors = colors.filter((color) => color.length > 3)
console.log(longColors)

// const total = numbers.reduce(function (currentTotal, currentNumber) {
//   const newTotal = currentTotal + currentNumber
//   return newTotal
// })

const total = numbers.reduce(
  (currentTotal, currentNumber) => currentTotal + currentNumber
)

console.log(total)
