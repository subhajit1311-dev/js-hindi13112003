//for

for(let index=0;index<10;index++)
{
    const ele = index;
    if(ele == 5)
    {
        console.log("5 is best number");
    }
    console.log(ele);
}

for(let i=0;i<=10;i++)
{
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`inner loop value: ${j} and outer loop value is ${i}`);
        
        
    }
}