//singleton 
const gitUsers = new Object()
//also can be defined as
const gitMoreUsers = {}
//accessing object's different type of data type values
gitUsers.name ="imran"
gitUsers.email = "imran@imran.com"
gitUsers.id = "001"
gitUsers.isLoggedIn = true

console.log(gitMoreUsers)
console.log(gitUsers)



//Objects inside an object

const regularUsers = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Imran",
            lastName: "Akram"
        }
    },
}

//accessing nested object with all values
console.log("Nested Object Complete")
console.log(regularUsers)
//accessing values from nested object
console.log("Nested Object Values")
console.log("email")
console.log(regularUsers.email)
console.log("Full Name")
console.log(regularUsers.fullName)
console.log("First Name")
console.log(regularUsers.fullName.userFullName.firstName)
console.log("Last Name")
console.log(regularUsers.fullName.userFullName.lastName)


//Combining Objecs

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

//assigning object to another object for merging
const obj3 = Object.assign(obj1, obj2)
console.log("Merged Objects into one")
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
console.log("Using Object.assign({}, obj1, obj2)")
console.log(obj4)

//Combining Objects using spread operator
const obj5 = {...obj1, ...obj2}
console.log("Combining obj1 and obj2 using spread operator")
console.log(obj5)

//accessing keys
console.log(gitUsers)
console.log("Keys")
console.log(Object.keys(gitUsers))
console.log("Values")
console.log(Object.values(gitUsers))
console.log("Entries")
console.log(Object.entries(gitUsers))


usersArr = [
    {
        id: 1,
        name: "imran",
        email: "imran@imran.com"
    },
    {
        id: 2,
        name: "Salman",
        email: "salman@salman.com"
    }

]

console.log("Accessing value that is inside an object and object is the part of an array")
console.log(usersArr[1].email)

let loginMessage =""
//finding properties of an object
console.log(gitUsers.hasOwnProperty('isLoggedIn'))
function userLogin (){ gitUsers.isLoggedIn ? loginMessage = "Logged in Successfully" : loginMessage = "Invalid user name password"}
userLogin()
console.log(loginMessage)
