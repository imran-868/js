//singleton will be discussed in next files
//Object.create be discussed in next files
//object literals be discussed in next files
//in users object fitst entry name is key and after : is the value of that key and can be accessed by key individually
//Symbole Type variable that is always unique
const someSym = Symbol("sym1")
//defining an object with string number Symbol boolean and array
const users = {
    name: "Imran",
    "full name": "Imran Akram",//this value cannot be access using dot
    age: 42,
    someSym: "sym2",//if you want to use it as symbol use [someSym]
    [someSym]: "sym3",
    location: "Bwp",
    email: "imran@imran.com",
    isLoggedIn: false,
    lastLoginDays: ["Moday", "Saturday"]
}

//Accessing Object Values using dot notation
console.log("Name: ",users.name)
//Accessing Object Values using [] notation
console.log("Location; ", users["location"])
console.log("Full Name: ", users["full name"])//this can only be access using square brackets, not by dot operator
//accessing object values using literals and ${} method
console.log(`Accessing Symbol Type Variable where the type of users.someSym is ${typeof(users.someSym)} : `, users.someSym)
console.log(`Accessing Symbol Type Variable where the type of users[someSym] is ${typeof(users[someSym])} : `, users[someSym])


//overwrite any value inside the object
users.email = "imran_akram@imran.com"
//printing an object in console
console.log(users)


//Freezing an object so the values cannot be overwritten inside the object
// Object.freeze(users)
users.name = "Malik Imran"
console.log("This is after freezing the object")
console.log(users)


//function in an object
users.function_in_object = function () {console.log(`Hello ${this.name} `)} 
//calling function thats inside an object
users.function_in_object();


console.log("Function Called thas the part of an object")
console.log(users)
console.log(users.function_in_object())




