// BONUS 1 LINE //
let selectedFoodItem = null;

fetch("http://localhost:3000/menu")
    .then(res => res.json())
    .then((data) => {
        renderImage(data[0]);
        for (let item of data) {
            renderName(item);
        }
    })

function renderName(foodObject) {
    let menuContainer = document.querySelector("#menu-items");

    let menuItem = document.createElement("span");
    menuItem.textContent = foodObject.name;

    menuItem.addEventListener("click", () => {
        // BONUS 1 LINE //
        selectedFoodItem = foodObject;

        renderImage(foodObject);

    });

    menuContainer.append(menuItem);
}

function renderImage(foodObject) {

    let image = document.getElementById("dish-image");
    image.src = foodObject.image;

    let name = document.getElementById("dish-name");
    name.textContent = foodObject.name;

    let description = document.getElementById("dish-description");
    description.textContent = foodObject.description;

    let price = document.getElementById("dish-price");
    price.textContent = foodObject.price;

    let cartNumber = document.getElementById("number-in-cart");
    cartNumber.textContent = foodObject["number_in_bag"];
    
}




let form = document.querySelector("#cart-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let numberToAdd = parseInt(e.target["cart-amount"].value);

    let numberHolder = document.querySelector("#number-in-cart");
    let currentNumber = parseInt(numberHolder.textContent);

    let finalCount = numberToAdd + currentNumber;
    numberHolder.textContent = finalCount;

    // BONUS 1 LINE //
    selectedFoodItem["number_in_bag"] = finalCount;

    form.reset()

    // BONUS 1 LINE //
    fetch(`http://localhost:3000/menu/${selectedFoodItem.id}`, {
        method: "PATCH",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(selectedFoodItem)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });

});

