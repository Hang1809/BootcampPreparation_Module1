//object constructor
function Student(fullname, age, gender, hobbies, email) {
    //     //properties
    this.fullname = fullname;
    this.age = age;
    this.gender = gender;
    this.hobbies = hobbies;
    this.email = email;
    //methods
    this.greeting = function () {
        return `Hello, my name is ${this.gender ? "Mr" : "Ms"}.${this.fullname}.`
    }
    // console.log(this)
}
//instance/object
let Triet = new Student("Triet", 18, true, ["football", "tennis"], "NDT@gmail.com");
let Ngan = new Student("Ngan", 18, false, ["football", "tennis"], "Ngan@gmail.com");

console.log(Triet.greeting())
console.log(Ngan.greeting())

//arrow function
// const sum= function(n1,n2){
//     return n1 + n2;
// }
const sum= (n1,n2) =>
    n1 + n2;

console.log(sum(5,6))

// let power2 = function(n){ console.log(n**2)};
let power2 = n => console.log(n**2)

