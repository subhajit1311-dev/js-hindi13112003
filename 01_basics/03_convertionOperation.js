let score = "subhajit" // check it for i> 33 ,ii> null,iii> undefined iv> "33abc"
// number in " "-> means it is a string
//const {score} =  req.body
// we dont know the datatype of score stored in 3 rd line
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); //nan means not a number here we invesigate the value stored in ValueInNumber

// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 0;
//"subhajit" -> NaN



let isLoggedIn = 1
//console.log(typeof isLoggedIn);
//console.log(typeof(isLoggedIn));

let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(typeof booleanisLoggedIn);
//console.log(booleanisLoggedIn);

//1 -> true; 0->false;
//"" -> false;
//"subhajit" -> true

let someNumber = 33;
let stringNumber = String(someNumber)
//console.log(typeof stringNumber);
//console.log(stringNumber);

// ********************operations*******************


let value = 3
let negvalue = -value
console.log(negvalue)

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2/2);
//console.log(2**3);//2^3

let str1 = "hello"
let str2 = " subhajit"

let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((3+4) * 5 % 3)


console.log(+true);//bad practice
console.log(+"");//bad 

let num1,num2,num3
num1 = num2 = num3 = 2 + 2 // readability hampered

 let gamecounter = 100 
 gamecounter++;
 console.log(gamecounter);

 