const score = 400 // by default datatype of the score is number
//console.log(score)

const balance = new Number(100.8734) // balance er datatype ta strictly number datatype e typecasted
//console.log(balance);


//console.log(balance.toString());
//console.log(balance.toFixed(2)); // store the precision value upto the limit of 2 block

const otherName = 23.6648
//console.log(otherName.toPrecision(3));

const divk = 123.4548
//console.log(divk.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')) 

//mostly number data type used in ecommerce website for calculation purpose

//++++++++++++++++++++++    MATHS    ++++++++++++++++++++++++


/*console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.sqrt(21));
console.log(Math.pow(2,3));
console.log(Math.min(4.3,6,8));*/

console.log(Math.random()); //o to 1 er middle e value ase
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1) )+ min)
//important 