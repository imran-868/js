function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500, 600))


const user = {
    username: "imran",
    price: 199
}
//pass an object as a parameter
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

//direct object can also be passed
handleObject({
    username: "salman",
    price: 399
})

//pass an array as a parameter

const myArr = [50, 100, 150, 200]

function handleArray(anyArray){
    console.log(`${anyArray[0]} is first value and ${anyArray[3]} is the last value`)
}

handleArray(myArr);

//direct array can also be passed as a parameter

handleArray(["Imran", "lives", "in", "Bwp"])
