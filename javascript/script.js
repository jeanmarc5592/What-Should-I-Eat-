// DOM SELECTORS
var BtnGenerate = document.getElementById('generateBtn');
var BtnAdd = document.getElementById('addBtn');
var BtnClear = document.getElementById('clearBtn');
var BtnClose = document.getElementById('closeBtn');

var form = document.querySelector('form');
var inputName = document.querySelector('.middle__name');
var inputImg = document.querySelector('.middle__imageurl');
var inputRecipe = document.querySelector('.middle__recipe');
var inputIngredients = document.querySelector('.middle__ingredients');

var randomIMG = document.getElementById('random-img');
var randomNAME = document.getElementById('random-name');
var randomIMGPopup = document.getElementById('random-img-popup');
var randomNAMEPopup = document.getElementById('random-name-popup');
var randomRECIPE = document.getElementById('random-recipe');
var randomINGREDIENTS = document.getElementById('random-ingredients');

var myDishes = document.querySelector('.bottom__grid');
var popup = document.querySelector('.popup');



// GLOBAL VARIABLES
var allDishes = [];
var newDish;




// FUNCTIONS
var getDishes = function() {
    return JSON.parse(localStorage.getItem('dishes'));
    };


var createNewDish = function() {
    // Create a new Object based on the Function Constructor, values from input-fields
    newDish = new Dish(inputName, inputImg, inputRecipe, inputIngredients);
    // Push it into the allDishes array
    allDishes.push(newDish);
    // Store the array in the localStorage
    localStorage.setItem('dishes', JSON.stringify(allDishes));
    // Create a new img, set img src and append it to the parent div
    var newItem = document.createElement('img');
    newItem.classList.add('bottom__img');
    newItem.setAttribute('src', newDish.image);
    myDishes.appendChild(newItem);
    // Clearing Input Fields after submit
    form.reset();
};


// DECLARING INIT FUNCTION
var init = function() {
    getDishes();
    // Checking the localStorage everytime when reloading the page to keep the data displayed
    if(getDishes()) {
        // Read the localStorage via getDishes and iterate over it
        getDishes().forEach(function(item) {
            // Create a new Image
            var newItem = document.createElement('img');
            // add class to it, set img src and append it to the parent div
            newItem.classList.add('bottom__img');
            newItem.setAttribute('src', item.image);
            myDishes.appendChild(newItem);
            // Opening popup with details of the individual dish
            newItem.addEventListener('click', function() {
                popup.style.display = 'flex';
                randomNAMEPopup.textContent = item.name;
                randomIMGPopup.style.backgroundImage = "url("+ item.image +")";
                randomRECIPE.textContent = item.recipe;
                randomINGREDIENTS.textContent = item.ingredients;
            });
            // Refill the allDishes array again because it's empty after reloading
            allDishes.push(item);
        });
    };
}



// ACTIVATING INIT
init();




// FUNCTION CONSTRUCTOR
var Dish = function(name, image, recipe, ingredients) {
    this.name = name.value;
    this.image = image.value;
    this.recipe = recipe.value;
    this.ingredients = ingredients.value;
};



// CREATING A NEW DISH VIA INPUT WHEN HITTING 'ADD DISH' BUTTON
BtnAdd.addEventListener('click', function(e) {
    e.preventDefault();
    createNewDish();
});



// CREATING A NEW DISH VIA INPUT WHEN HITTING ENTER
document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13) {
        createNewDish();
    }
});



// GENERATING A RANDOM DISH
BtnGenerate.addEventListener('click', function() {
    // Retrieving the array from localStorage
    var getAllDishes = getDishes();
    if(getAllDishes) {
        // Declaring a random number
        var n = Math.floor(Math.random() * getAllDishes.length);
        // Display the image of the random dish
        randomIMG.style.backgroundImage = "url("+ getAllDishes[n].image +")";
        // Display the name of the random dish
        randomNAME.textContent = getAllDishes[n].name;
        // Display the recipe of the random dish inside the popup
        randomRECIPE.textContent = getAllDishes[n].recipe;
        // Display the ingredients of the random dish inside the popup
        randomINGREDIENTS.textContent = getAllDishes[n].ingredients;
        // OPENING THE POPUP OUT OF THE RANDOM DISH AND DISPLAY DETAILS
        randomIMG.addEventListener('click', function() {
            popup.style.display = 'flex';
            randomIMGPopup.style.backgroundImage = "url("+ getAllDishes[n].image +")";
            randomNAMEPopup.textContent = getAllDishes[n].name;
        });
    } else {
        randomNAME.textContent = 'Please add at least one dish';
    }
});



// CLEARING ALL MY DISHES AT ONCE AND RELOAD PAGE
BtnClear.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});


// CLOSING THE POPUP 
BtnClose.addEventListener('click', function() {
    popup.style.display = 'none';
});



// TEST IMAGES 

// PANCAKES:    https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ
// BOWL:        https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ
// SOUP:        https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ
// TOAST:       https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ