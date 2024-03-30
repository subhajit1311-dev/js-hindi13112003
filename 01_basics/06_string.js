const name = "subhajit"//string declaration
const repoCount = 50
//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount} `); //string interpolation


const gameName = new String('subha-jit-roy') // string declaration: constructor type
console.log(gameName[0])//access key -value pairs
console.log(gameName.__proto__);//syntax of accesing prototype 

console.log(gameName.length);

console.log(gameName.toUpperCase())//but original string  donot change in uppercase format
//because string is a primitive data type and follow call by value laws

console.log(gameName.charAt(3))// to find a character a given position

console.log(gameName.indexOf('u'))

const newstring = gameName.substring(0,4)
console.log(newstring)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)//explore more in later

const newstringOne = "    subhajit \n   "
console.log(newstringOne);
console.log(newstringOne.trim());//whitespace thakle segulo ke ignore kore

const url = "https://subhajit.com/subhajit%20roy"
console.log(url.replace('%20','-'));

console.log(url.includes('subhajit'));
console.log(gameName.split('-'))