"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
    .map( categories =>
            console.log(`Категория: ${categories.children[0].textContent}
             \nКоличество элементов: ${categories.children[1].children.length}`)
  )
        



