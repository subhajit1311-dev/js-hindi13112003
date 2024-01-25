let score = "subhajit" // check it for i> 33 ,ii> null,iii> undefined iv> "33abc"
// number in " "-> means it is a string
//const {score} =  req.body
// we dont know the datatype of score stored in 3 rd line
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//nan means not a number here we invesigate the value stored in ValueInNumber

// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 0;
//"subhajit" -> NaN



let isLoggedIn = 1
console.log(typeof isLoggedIn);
console.log(typeof(isLoggedIn));

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanisLoggedIn);
console.log(booleanisLoggedIn);

//1 -> true; 0->false;
//"" -> false;
//"subhajit" -> true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);





