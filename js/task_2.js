"use strict";


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newLiRefs = ingredients.map(text => {
  const itemRef = document.createElement('li');
  itemRef.textContent = text;

  return itemRef;
})

const ul = document.querySelector('#ingredients');
ul.append(...newLiRefs);