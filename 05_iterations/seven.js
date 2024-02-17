 const myNumbers = [12,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num) =>{return num+10});
// console.log(newNums)


const newNums = myNumbers
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num=>num>=40))
console.log(newNums)

//reduce
const array1 =[1,2,3]
// const sumWithInitial = array1.reduce((acc,currVal)=>
// {
//     return (acc+currVal)
// },0);


// console.log(sumWithInitial);   
// const sumWithInitial = array1.reduce((acc,currVal)=>
//  acc+currVal,0);
//  console.log(sumWithInitial); 



 const shoppingcart = [
{
    itemName:"js course",
    price: 2999
},
{
    itemName:"python course",
    price: 3999
},
{
    itemName:"java course",
    price: 4999
},
{
    itemName:"webdev course",
    price: 7999
}

]

const priceToPay = shoppingcart.reduce((acc,item) => acc + item.price ,0 );
console.log(priceToPay);