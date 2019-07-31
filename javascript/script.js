// DOM SELECTORS
var BtnGenerate = document.getElementById('generateBtn');
var BtnAdd = document.getElementById('addBtn');

var form = document.querySelector('form');
var inputName = document.querySelector('.middle__name');
var inputImg = document.querySelector('.middle__imageurl');
var inputRecipe = document.querySelector('.middle__recipe');
var inputIngredients = document.querySelector('.middle__ingredients');

var randomIMG = document.getElementById('random-img');
var randomNAME = document.getElementById('random-name');

var myDishes = document.querySelector('.bottom__grid');


// FUNCTION CONSTRUCTOR
var Dish = function(name, image, recipe, ingredients) {
    this.name = name.value;
    this.image = image.value;
    this.recipe = recipe.value;
    this.ingredients = ingredients.value;
}


// ALL DISHES SAVED IN ARRAY
var allDishes = [];


// Retrieving the array from localStorage
var getAllDishes = JSON.parse(localStorage.getItem('dishes'));


// CREATING A NEW DISH VIA INPUT
BtnAdd.addEventListener('click', function(e) {
    e.preventDefault();
    // Declaring a new Dish
    var newDish = new Dish(inputName, inputImg, inputRecipe, inputIngredients);
    // Pushing the new dish into the array
    allDishes.push(newDish);
    // Store data in localStorage
    var savedDishes = localStorage.setItem('dishes', JSON.stringify(allDishes));
    console.log(allDishes, localStorage);
    // Adding a new element to the dish collection
    // Retrieving the array from localStorage
    var getAllDishes = JSON.parse(localStorage.getItem('dishes'));
    var newElement = document.createElement('img');
    myDishes.appendChild(newElement);
    newElement.classList.add('bottom__img');
    newElement.setAttribute('src', getAllDishes.slice(-1)[0].image);
    // Storing the new element in local Storage
    var savedNewElement = localStorage.setItem('elements', JSON.stringify(newElement));
    // Resetting input fields after submit
    form.reset();
});



// GENERATING A RANDOM DISH
BtnGenerate.addEventListener('click', function() {
    // Declaring a random number
    var n = Math.floor(Math.random() * getAllDishes.length);
    // Display the image of the random dish
    randomIMG.style.backgroundImage = "url("+ getAllDishes[n].image +")";
    // Display the name of the random dish
    randomNAME.textContent = getAllDishes[n].name;
});



// TEST IMAGES 

// PANCAKES:    https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ
// BOWL:        https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ
// SOUP:        https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ
// TOAST:       https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ