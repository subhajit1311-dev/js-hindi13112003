// to define any datatypes in terms of store and access that data into the memory is of 
//two types 1>primitive 2>non-primitive

//primitive : call by value
// string , number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;// by default undefined value store under the userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigNumber = 47421545214124n



//reference type or non primitive : call by reference //  type of nonprimitive datatype is object except function   
//arrays , objects , Functions


// javascript mastery elements -> (i)objects (ii)browser events 

//javascript is a dynamically typed language,, because data type will automatically assigned at the time of execution


const heros = ["shaktiman","nagraj","doga"];

let myObj =
{
    name: "hitesh",
    age: 22,

}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive  ... call  by value  ), heap(non-primitive  ...call by reference)

let myYoutubename = "subhajitroyofficial"

let anothername = myYoutubename
anothername = "chaiaurcode"

 console.log(myYoutubename); 
 console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "subhajit132@oksbi"
}

let usertwo = userOne;
usertwo.email = "hithesh@google.com"
console.log(userOne.email);




