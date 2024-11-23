/* 1.1 */

const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(categoryItems);

console.log(`У списку ${categoryItems.length} категорії.`);

categoryItems.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elCount = item.querySelectorAll("ul li").length;

    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${elCount}`);
})

/* 1.2 */

const ingredientsList = document.getElementById("ingredients");

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
   
ingredients.forEach((el) => {
    let ingredientsListItem = document.createElement("li");
    ingredientsListItem.textContent = el;
    ingredientsList.appendChild(ingredientsListItem);
})

/* 1.3 */

const galleryList = document.getElementById("gallery");

const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
   ];

const galleryMarkup = images
   .map(
     ({ url, alt }) =>
       `<li><img src="${url}" alt="${alt}" width="300"></li>`
   )
   .join("");
 
 // Додаємо розмітку в DOM за одну операцію
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
 
/* 1.4 */

let btnInc = document.querySelector(`[data-action="increment"]`);
let btnDec = document.querySelector(`[data-action="decrement"]`);
let val = document.querySelector("#value");

let counterValue = 0;

btnInc.addEventListener("click", ()=>{
counterValue += 1;
val.textContent = counterValue
})
btnDec.addEventListener("click", ()=>{
counterValue -= 1;
val.textContent = counterValue
})