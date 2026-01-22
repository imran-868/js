const myArr =[0,1,2,3,4, true, "Imran"]

let myYoutubeName = "ia_yt_01"
console.log("myYoutubeName variable's initial value")
console.log(myYoutubeName)

//assing the the value of myYoutubeName variable value to new variable anotherName
let anotherName = myYoutubeName

console.log(" ==>> Before Changeing value of anotherName")
console.log(anotherName)

//now update the value of new variable that had value of myYoutubeName
anotherName = "ia_yt_02"

//the value of myYoutubeName is never directly changed
console.log(" ==>> The value of myYoutubeName that was assigned to anotherName variable after changing the value of the variable anotherName")
console.log(myYoutubeName)

console.log(" ==>> The value of anotherName that contained myYoutubeName variable value before and then it was changed")
console.log(anotherName)




//non-Premitive data types uses References
let userOne = {
    name: "imran",
    id: "ia"
}

let userTwo = userOne

userTwo.name = "Imran Akram"

console.log(userOne.name)











let myNewArrOne = new Array("Hero 1", "Hero 2", "Hero 3")
console.log(myNewArrOne[0])





//Array Methods
let numbersArr = new Array(2,4,6,8,10)
console.log("values in numbersArr before push")
console.log(numbersArr)
numbersArr.push(12)
console.log("values in numbersArr after push")
console.log(numbersArr)
//pop
numbersArr.pop()
//above will pop last value from array
console.log("values in numbersArr after pop")
console.log(numbersArr)
//unshift
numbersArr.unshift(2)
console.log("values in numbersArr after unshift")
console.log(numbersArr)

//shift
numbersArr.shift()
console.log("values in numbersArr after shift")
console.log(numbersArr)


//includes
console.log(numbersArr.includes(10))


//indexOf
console.log(numbersArr.indexOf(10))
// if the values doesnt not exist in array then it will return -1
console.log(numbersArr.indexOf(12))



//join
const newNumersArr = numbersArr.join()

console.log("New Array")
console.log(newNumersArr)
console.log("Existing Array")
console.log(numbersArr)

console.log("Now after join the newly created variable has all the values of existing array")
console.log(`But the type of the new variable is ${typeof(newNumersArr)} but the existing variable type was ${typeof(numbersArr)}`)




//slice
console.log("After Slice")
const numberSlice = numbersArr.slice(1,3)
console.log(numberSlice)
console.log(numbersArr)


//splice
console.log("After Splice")
const numberSplice = numbersArr.splice(1,3)
console.log(numberSplice)
console.log(numbersArr)
