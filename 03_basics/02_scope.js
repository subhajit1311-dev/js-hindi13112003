//var c=2992;//global scope
if(true)
{
    //if else a loop er under e thakle seta holo block scope
    let a = 10
    const b = 20
    //var c = 30 // var use korle tar effect outside scope eo hoye jai
}

//console.log(a);
//console.log(b);
//console.log(c);

// for(let i=0; i<Array.length;i++)
// {
//     const element  = array[i];
// }
// terminal e node er through je scope define hoy dev console e same bhabe scope define hoy na
//

//clousure parar jonnoo dom lagbe 

function One()
{
    const username = "subhajit";

    function two()
    {
        const website = "youtube"
        console.log(username);

    }
    //console.log(website);
    two();

}
One();

if(true)
{
    const username = "subhajit"
    if(username === "subhajit")
    {
        const website = "youtube"
        console.log(username + website)

    }
    //console.log(website);

}
//console.log(username)

//+++++++++++++++++++++++++++interesting problem ++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1;

}


console.log(addtwo(5)) // ei khetre problem asbe because function initialize e hoy ni je take addtwo variable hold korte parbe
const addtwo = function(num) {
    return num + 2
    
}












