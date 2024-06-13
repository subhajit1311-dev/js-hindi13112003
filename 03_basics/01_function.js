function sayMyName()
{
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("J");
    console.log("I");
    console.log("T");

}

//sayMyName();
//function execution

function addTwoNumbers(number1,number2) //parameters
{
    //let result = (number1 + number2);
    //return result;
    return number1 + number2
}
 const result = addTwoNumbers(3,4) //arguments

console.log("Result: ",result);

function loginUserMessage(username)
{
    if(username === undefined ) //!username
    {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
    
}


//console.log(loginUserMessage("subhajit")) // if we cannot pass any thing then the o/p should be undefined
// "" and undefined is false value

function calculateCarPrice(val1,val2,...num1) // ... ke rest operator o bole and spread opeartor o bole but purpose different
{
    return num1; // function er under e rest operator pass hoy ebhabe
}

console.log(calculateCarPrice(200,400,500,355,980))


const user = {
    userName: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
}
)

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));















