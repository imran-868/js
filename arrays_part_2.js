const some_heros = ["Thor", "Ironman", "Spiderman"]
const some_more_heros = ["Superman", "Flash", "Batman"]
//push array into another array
some_heros.push(some_more_heros)

console.log(some_heros)
console.log(some_heros[3])
console.log(some_heros[3][0])
console.log(some_heros[3][1])
console.log(some_heros[3][2])

const another_heros_list = ["Jon Snow", "Daenerys Targaryen", "Arya Stark", "Tyrion Lannister"]
const another_heros_list_more = ["Brienne of Tarth", "Samwell Tarly", "Jaime Lannister", "Eddard Ned Stark"]
console.log(another_heros_list_more)
another_heros_list.concat(another_heros_list_more)

console.log(another_heros_list)
console.log(another_heros_list_more)

//now how to properly concat the two arrays
let some_cars = ["Honda", "Toyota", "Hundai", "Suzuki"]
let some_more_cars = ["Kia", "Daihatsu", "Daewoo"]

let all_cars = some_cars.concat(some_more_cars)
console.log("Combining Arrays using concat method")
console.log(all_cars)

//using spread operator
let some_motorcycles = ["Yamaha", "Suzuki", "Honda"]
let some_more_motorcycles = ["Kawasaki", "RP", "United"]
let all_motorcycles = [...some_motorcycles, ...some_more_motorcycles]
console.log("Combining Arrays using spread operator")
console.log(all_motorcycles)

//Flattening of nested arrays into one array
let nested_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
let usable_nested_array = nested_array.flat(Infinity)
console.log("Flatened Nested Array")
console.log(usable_nested_array)

//Making array of string characters
console.log("is Imran is an array? Answer: ", Array.isArray("Imran"))
console.log("Convert Imran to an array", Array.from("Imran"))// string to array conversion
console.log("Convert an Object to Array: ", Array.from({name: "Imran"}))// this will return always an empty string "Keep in notes"

//making array of variables
marks_in_science = 100
marks_in_english = 100
makrs_in_maths = 100
console.log("Set of variables to one array")
console.log(Array.of(marks_in_english, marks_in_science, makrs_in_maths))
