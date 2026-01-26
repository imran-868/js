const course = {
    coursename: "Javascript",
    price: 99,
    courseInstructor: "Imran"
}


const {courseInstructor} = course// if key and desired variable are going to be same //output will be Imran because key and variable name is same
const {coursename: cname} = course// if key and desired variable are going to be different // output is javascript because we set the key name 
console.log(courseInstructor)
console.log(cname)
