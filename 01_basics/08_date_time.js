//date 

let myDate = new Date()
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);*/

//let myCreatedDate = new Date(2023,0,23) // month '0' die chalu hoy javascript e
//console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());

let CreatedDate = new Date("2023-01-14") // yy-mm-dd format e thakle month 01 die chalu hoy
console.log(CreatedDate.toLocaleString());

let CreateDate = new Date("01-14-2023") // yy-mm-dd format e thakle month 01 die chalu hoy
console.log(CreateDate.toLocaleString());

let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(CreateDate.getTime());// return value 1st jan 1970(standard) to till the declare date convert that time into miliseconds

//important
console.log(Math.floor(Date.now()/1000)) //latest date ke convert kore milisecond theke second e




let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());//monday -> 1

newDate.toLocaleString('default',{
    weekday: "long",

})



