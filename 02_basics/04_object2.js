//const tinderUser = new Object()
// it is a singletone object
const tinderUser = {


}// it is not a singletone object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn  = false;


//console.log(tinderUser);

const regularUser = {
    email: "subhajit@040gmail.com",
    fullname:{
        userfullname: {
            firstname: "subhajit",
            lastname: "roy"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({} , obj1, obj2)//{} -> target object .... and obj1 & obj2 is source object 
//we merge the source objects and  store it into the target object ... 

//console.log(obj3);


//spread
const obj3 = {...obj1,...obj2}
console.log(obj3);


//database 
const users = [
    {

    },
    {

    },
    {
    
    }
]
users[1].email
console.log(tinderUser);


// database usecases
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'));








