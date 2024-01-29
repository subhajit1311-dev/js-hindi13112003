//immediately invoked function expressions (IIFE)
//function executed immediately and function cannot be influenced by any global variables

(function chai(){
    //named iife 
    console.log(`db connected`);
})(); //semicolon must
//first parenthesis ta function define kore and second parenthesis execution er jonno nuse kora hoy
//*******iife immediately execute hoa charao mainly use kora hoy global scope e kichu declaration thakle
//sei pollution remove korar jonno

( (name) => {

console.log(`db connected two ${name}`);

})('HITESH')



