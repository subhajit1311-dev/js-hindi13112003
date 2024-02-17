const myObject = 
{
    js:'javascript',
    cpp:'c++',
    java:'core java',
    swift:'swift by apple'
}

for(const key in myObject)
{
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","c++","java","py","rb"];
for(const key in programming)
{
    console.log(key);
   // console.log(programming[key]);
}

//for of loop die array er value access kora jai
//for in die array er index access kora jai

//for in loop chalie map er opr iteration kora jai na