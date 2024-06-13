//object declaration have two types 1>literals 2>constructor
// singletone -> constructor use korle object singletone type er hoy 


//Object.create // constructor method 

//object literals -> object declaration er type

const mySym = Symbol("key1") //symbol declaration

//object declaration
const JsUser = {
    name: "Hitesh",
    "full name": "subhajit",
    [mySym]: "mykey1", //important object er vitore key object hesebe thakle declaration er type 
    age: 18,
    location: "jaipur",
    email: "hitesh@56gmail.com",
    lastLoginDays: ["Monday","saturday"]
    
} // key and value dutoi define korte hoy in object

//object accessing 
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);

//console.log(JsUser[mySym]); // symbol -> "" e thake na because eta string

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello js user`);
} 
JsUser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
} 

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());


