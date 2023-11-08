fetch("http://localhost:3000/menu")
    .then(res => res.json())
    .then((data) => {
        renderFirstImage(data[0]);
        for (let item of data) {
            renderName(item);
        }
    })

function renderName(foodObject) {
    let menuContainer = document.querySelector("#menu-items");

    let menuItem = document.createElement("span");
    menuItem.textContent = foodObject.name;

    menuItem.addEventListener("click", () => {
        renderFirstImage(foodObject);

    });

    menuContainer.append(menuItem);
}

function renderFirstImage(foodObject) {

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

    let finalLikes = numberToAdd + currentNumber;
    numberHolder.textContent = finalLikes;

    form.reset()

    // let updatedCart = {
    //     number_in_bag : finalLikes
    // }

    // fetch("http://localhost:3000/menu", {
    //     method: "PATCH",
    //     headers: {
    //         "content-type" : "application/json"
    //     },
    //     body: JSON.stringify(updatedCart)
    // })
    //     .then(res => res.json())
    //     .then(data => {

    //     });

})

