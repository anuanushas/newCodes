const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';

const fruits = document.querySelectorAll('.fruit');

fruits.forEach((fruit, index) => {
  if (index % 2 === 1) { 
    fruit.style.backgroundColor = 'red';
    fruit.style.color = 'white';
  }
});
