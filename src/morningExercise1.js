// Do not change this variable
const studentNames = ['Annie', 'Bob', 'Charlene', 'Davide']

// 1. Using arrow function notation, write a function called `calcListSize` which returns the size of the `studentNames` array. This function should take 0 (zero) parameters.
const calcListSize = () => studentNames.length
console.log(calcListSize())

// 2. Using arrow function notation, create a function called `isStudentEnrolled`. This function should take 1 parameter called `name`. In the function, using a for loop, write the logic to look for the student whose name has been passed in to the `name` parameter. If the student exists in the list, then return the value `true` (as a boolean, not a string). Otherwise, return `false` (boolean).
const isStudentEnrolled = (name) => {
  for (let i = 0; i < studentNames.length; i++) {
    if (studentNames[i] === name) {
      return true
    }
  }
  return false
}
console.log(isStudentEnrolled('Bob'))

// 3. Using arrow function notation, create a function called `greetStudents` which takes 2 parameters: `greeting` and `shouldShout`. The argument passed into `greeting` must be a string, and the argument passed into `shouldShout` must be a boolean. This function should use a for-loop to go through the `studentNames` array and console.log a message to each of them according to the word(s) passed into the `greeting` parameter. If the argument passed into `shouldShout` is true, then the message should be all in capital letters.
// e.g.1
// greetStudent('Hello', false) --> this will give an output of:
// Hello Annie
// Hello Bob
// Hello Charlene
// Hello Davide
//
// e.g.2
// greetStudent('Bonjour', true) --> this will give an output of:
// BONJOUR ANNIE
// BONJOUR BOB
// BONJOUR CHARLENE
// BONJOUR DAVIDE
const greetStudents = (greeting, shouldShout) => {
  if (typeof greeting !== 'string' || typeof shouldShout !== 'boolean') {
    return 'Gib mir mal den richtigen Input du Opfer'
  }

  let message = ''

  for (let i = 0; i < calcListSize(); i++) {
    message = greeting + ' ' + studentNames[i]

    if (shouldShout) {
      message = message.toUpperCase()
    }
    console.log(message)
  }
}
greetStudents('Hello', false)
