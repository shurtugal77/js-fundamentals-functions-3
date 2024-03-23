const numbers = [19, 83, 291, 57, 3014, 69, 42, 670, 15]

// 1. Use .forEach and an arrow function to console log
// each item in the numbers array
numbers.forEach((currentNumber) => {
  console.log(currentNumber)
})

// 2. Use .filter and an arrow function to create a new array
// based on the numbers array, but only containing numbers less than
// three digits long
const numbersLessThanThreeDigits = numbers.filter((currentNumber) => {
  return currentNumber < 100
})
console.log(numbersLessThanThreeDigits)

// 3. Use .find and an arrow function to get the first
// even number in the array
const firstEvenNumber = numbers.find((currentNumber) => {
  return currentNumber % 2 === 0
})
console.log(firstEvenNumber)

// 4. Use .map and an arrow function to create a new array based
// on the numbers array, but each element should be halved
const halvedNumbersArray = numbers.map((currentNumber) => {
  return currentNumber / 2
})
console.log(halvedNumbersArray)

// 5. Use .forEach and an arrow function to double every number in the
// numbers array. Modify the original array, don't create a new one
numbers.forEach((currentNumber, index) => {
  numbers[index] *= 2
})
console.log(numbers)
