const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
//console.log(marvel_heros[3][1]); // third element means dc_heros array theke kono element
// access korar method but eta bad practice

//const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros); //concat use korle seta ono array return kore

const all_new_heros = [  ...marvel_heros,  ...dc_heros]

//console.log(all_new_heros);


// spread
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(100);
console.log(real_another_array);

console.log(Array.isArray("subhajit"))

console.log(Array.from("subhajit")) // any datatype to array

console.log(Array.from({name: "subhajit"})) //empty array debe o/p because eta nijei sure noi je single alphabet na single 
//acsii return korbe
// ******interesting****

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))



