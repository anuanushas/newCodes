const fruitsList = document.getElementsByClassName('fruit');

fruitsList[2].style.backgroundColor = 'yellow';

for (let i = 0; i < fruitsList.length; i++) {
    fruitsList[i].style.fontWeight = 'bold';
}
