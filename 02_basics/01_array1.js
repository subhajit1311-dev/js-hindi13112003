//array

const myArr = [0,1,2,3,4,5]
//array is an object where we store multiple elements in a single variable

//console.log(myArr[0]);
//array follows shallow copy because it follows call by reference methods properties shares the same reference

const myHeros = ["shaktiman","naagraj","hulk"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr2[0]);
//console.log(myHeros[0]);

//ARRAY METHODS

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9) // element array er front side part die insert hoy but bad practice because er jonno 
//sob element ke shift korte hoy next place e
//console.log(myArr);

//console.log(myArr);
myArr.shift()
//console.log(myArr);

//console.log(myArr.includes(9)) // datatype of this operation is boolean
//console.log(myArr.indexOf(3))

const newArr = myArr.join()
// naturally join changed the array into a string and 

console.log(myArr)

console.log(newArr)
console.log(typeof newArr)

//slice,splice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ",myArr);


const myn2 = myArr.splice(1,3)
//console.log("c " , myArr);
//console.log(myn2);

//splice e main array manipulate hoye jai but slice e main array manipulate hoy na and the element remove o hoy na
//till range is given in splice


