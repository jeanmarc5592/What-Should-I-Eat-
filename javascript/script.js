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
var randomRECIPE = document.getElementById('random-recipe');
var randomINGREDIENTS = document.getElementById('random-ingredients');

var popupNAME = document.getElementById('name-popup');
var popupIMG = document.getElementById('img-popup');
var popupRECIPE = document.getElementById('recipe-popup');
var popupINGREDIENTS = document.getElementById('ingredients-popup');

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
    createNewItem(newDish);
    // Clearing Input Fields after submit
    form.reset();
};

var createNewItem = function(source) {
    var newItem = document.createElement('img');
    newItem.classList.add('bottom__img');
    newItem.setAttribute('src', source.image);
    myDishes.appendChild(newItem);
    return newItem;
};

var popupCreation = function(source) {
    popup.style.display = 'flex';
    popupNAME.textContent = source.name;
    popupIMG.style.backgroundImage = "url("+ source.image +")";
    popupRECIPE.textContent = source.recipe;
    popupINGREDIENTS.textContent = source.ingredients;
};


// DECLARING INIT FUNCTION
var init = function() {
    getDishes();
    // Checking the localStorage everytime when reloading the page to keep the data displayed
    if(getDishes()) {
        // Read the localStorage via getDishes function and iterate over it
        getDishes().forEach(function(item) {
            // Create a new Image and add it to 'My Dishes'
            /*var newItem = document.createElement('img');
            newItem.classList.add('bottom__img');
            newItem.setAttribute('src', item.image);
            myDishes.appendChild(newItem);
            // Opening popup with details of the individual dish
            newItem.addEventListener('click', function() {
                popupCreation(item)
            }); */
            var newImage = createNewItem(item);
            // Display the popup when clicking on the individual Image
            newImage.addEventListener('click', function() {
                popupCreation(item);
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
        event.preventDefault();
        createNewDish();
    }
});



// GENERATING A RANDOM DISH
BtnGenerate.addEventListener('click', function() {
    // Retrieving the array from localStorage
    var getAllDishes = getDishes();
    // If at least one dish is created
    if(getAllDishes) {
        // Declaring a random number
        var n = Math.floor(Math.random() * getAllDishes.length);
        // Local Variables
        var randomDish = getAllDishes[n];
        // Display the image of the random dish
        randomIMG.style.backgroundImage = "url("+ randomDish.image +")";
        // Display the name of the random dish
        randomNAME.textContent = randomDish.name;
        // OPENING THE POPUP OUT OF THE RANDOM DISH AND DISPLAY DETAILS
        randomIMG.addEventListener('click', function() {
            popupCreation(randomDish);
        });
    // If no dish is created
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








asdfasdfasdfasdfasdfasdf