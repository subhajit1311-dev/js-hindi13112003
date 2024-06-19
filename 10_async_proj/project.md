# project 1

## async projects

### solution of question 1
```javascript
//generate random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());

let intervalId;
const startChangingColor = function(){

  function changeBackgroundColor(){
  document.body.style.backgroundColor = randomColor();
  }
  if(!intervalId)
  {
    intervalId=setInterval(changeBackgroundColor,1000);
  }
  
};
const stopChangingColor = function (){
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);

```