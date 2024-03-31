const user = {
    username: "subhajit",
    price: 999,

    welcomeMessage: function()
    {
        //console.log(`${this.username},welcome to website `)
        //console.log(this)

    }//cuurent context ke refer kore this keyword
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this) // node er environment e run korle this keyword empty parenthesis return kore

//browser er under e global object holo window object


function chai(){
    let userName = "subhajit";
    //console.log(this);
    //console.log(this.userName);//function er under e thaka this ke access kora jai na jerom object e easily hoye jacchilo 
}
chai();



const chaI  = function(){
    let userName = "subhajit";
    //console.log(this);
    //console.log(this.userName);
}
chaI()

const Chai = () => {
    let userName = "subhajit";
    //console.log(this);
    //console.log(this.userName);
} //arrow function

Chai()


//+++++++++ARROW FUNCTION++++++++

//basic structure
const addtwo = (num1,num2) => {
    return num1+num2

}

//console.log(addtwo(3,4))

//implicit return

//const addTwo = (num1,num2) => num1+num2 


//curly braces use na korle return keyword use kora mandatory na
//but curly braces use korle return keyword use kora mandatory


//const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:  "subhajit"})


console.log(addTwo(3,4));



const myArray  = [2,5,6,7,8]
//myArray.forEach(function () {})
myArray.forEach(() => {})


//namaste js

getName();
console.log(x);

var x = 7;
function getName()
{
    console.log("namaste js")
}

//getName();
//console.log(x);


//hoisting is that kind of phenomena by which you access some function or variable before initializing it
