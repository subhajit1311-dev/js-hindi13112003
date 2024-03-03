# projects related to dom


## projectlink

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;      
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }


  });
});

```

## project 2
```javascript

 const form = document.querySelector('form');

form.addEventListener('submit',function(e){
       e.preventDefault();
      const height = parseInt(document.querySelector('#height').value);
      const weigth = parseInt(document.querySelector('#weight').value);
      const results  = document.querySelector('#results')


if(height === '' || height<0 || isNaN(height))
{
      results.innerHTML = `please give a valid height ${height}`;
}

else if(weigth === '' || weigth<0 || isNaN(weigth))
{
      results.innerHTML = `please give a valid weight ${weigth}`;
}
else{
     const bmi =  (weigth/((height*height)/10000)).toFixed(2)

     results.innerHTML = `<span>${bmi}</span>`;

}

});

```