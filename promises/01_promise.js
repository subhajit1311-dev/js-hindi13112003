const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //db calls ,cryptography,network
    setTimeout(function(){
        console.log('Async task is compelete')
        resolve()
    },1000)
})

promiseOne.then(function(){
console.log("promise consumed");
})

 new Promise(function(resolve,reject){
    //Do an async task
    //db calls ,cryptography,network
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    
})