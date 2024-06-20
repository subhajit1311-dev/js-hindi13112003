const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //db calls,crtyptography,file system
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000);
})
promiseOne.then(function(){
    console.log("promised consumed"); //.then consume resolve operation 
})

new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("async task 2")
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree =new Promise(function(resolve,reject){
    
})