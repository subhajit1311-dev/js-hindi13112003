const user ={
    username: "subhajit",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function()
    {
        //console.log("got user deatils from database");
        //console.log(`Username:${this.username}`);
        console.log(this);
    }

};
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

//const promiseOne = new Promise()
//const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this;

}
const userOne = new User("hitesh",12,true);
const userTwo = new User("subhajit",18,true);//new na use korle userOne and userTwo same reference ke point kore jar jonno problem hoy

console.log(userOne);
console.log(userTwo);

//new  
//i>create new object
//ii>constructor called
//iii>this keyword e value inject hoy
//iv> function er under e peye jai

