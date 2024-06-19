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

# project 2
```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div>
    <table>
    <tr>
      <th>key</th>
      <th>keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' '?'space':e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
  </table>
  </div>`;
});

```