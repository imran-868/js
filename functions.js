//login user message function
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter the user name")
        return
    }
        return `${username} has just logged in`
     
}

//if a value is passed to the function
console.log(loginUserMessage())



//if no value is passed to the function, it will return undefined
// console.log(loginUserMessage())
//this will print undefinded has just logged in,if it is not handled in the function


//addition functionality
//add two numbers
function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
    return number1 + number2
    //after return this area is unreachable
    console.log("This code will not be printed because its after the return statement")
}

addTwoNumbers(10, 5)

const result = addTwoNumbers(15, 10)
console.log("Result is : ", result)



