// test js file

'use strict'

const averageFn = (num1, num2) => {
    result = (num1 + num2)/2
    return result
}

// simple example
const userInputPrompt = window.prompt('Your password: ')

if ((typeof userInputPrompt === 'string') || (userInputPrompt === 12345)) {
    console.log('Hello World')
} else {
    const userInputNum1 = window.prompt('Number 1: ')
    const userInputNum2 = window.prompt('Number 2: ')
    const exampleResult = averageFn(userInputNum1, userInputNum2)

    console.log(exampleResult)
}

// array examples
const testArray = [1, 2, 3, 4, 5, 'hello', 'world', true, false, 'etc.']
const testArrayLength = testArray.length()

const userInputPromptArrayLength = window.prompt('Type the array length: ')

if (userInputPromptArrayLength === testArrayLength) {
    window.alert('Your answer is right!')
} else {
    window.alert('puk')
}