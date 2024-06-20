// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// const promiseOne = new Promise(function(resolve,reject){
//     //do an async task
//     //db calls,crtyptography,file system
//     setTimeout(function(){
//         console.log('async task is complete');
//         resolve();
//     },1000);
// })
// promiseOne.then(function(){
//     console.log("promised consumed"); //.then consume resolve operation 
// })

// new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         console.log("async task 2")
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved");
// })

// const promiseThree =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"subhajit@gmail.com"});
//     },1000);
    
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour= new Promise(function(reject,resolve){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"hitesh",password:"123"});
        }
        else{
            reject('something went wrong');
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
})

