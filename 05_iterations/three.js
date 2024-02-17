// const arr = [1,2,3,4,5]

// for(const num of arr){
//    // console.log(num);
// } //for of loop -> inside e const iterator of object 
//ase ekane object mane jar opor loop lagate hobe seta array ba string ba js object o hote pare

// const greetings = "hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

//Maps
const map = new Map()
map.set('IN',"India")
map.set('usa',"united states of america");
map.set('FR','france');
console.log(map) //mape duplicate key value pair store hoy na  

for(const [key, value] of map)
{
   // console.log(key,':-',value);
}

//for of loop e object iterable noy
const myObject = {
    'game1': 'NFS',
    'game2' : 'spiderman'
    //game1: 'NFS',
    //game2 : 'spiderman'

}
for(const [key,value] of myObject){
    console.log(key,':-',value);
}
