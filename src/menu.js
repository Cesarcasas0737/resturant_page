function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "bulgogi",
            "불고기",
            "Thinly sliced ribeye beef marinated in specially formulated house sauce"
        )
    );

    return menu;
}

function createMenuItem(engName,korName,description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");


    const foodImage = document.createElement("img");
    foodImage.src = `media/images/${engName.toLowerCase()}.png`;
    foodImage.alt = `${engName}`;
    menuItem.appendChild(foodImage);


    const foodTextBox = document.createElement("div");
    foodTextBox.classList.add("food-text-box");
    

    const engFoodName = document.createElement("p");
    engFoodName.textContent = engName;

    const korFoodName = document.createElement("h2");
    korFoodName.textContent = korName;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    foodTextBox.appendChild(engFoodName);
    foodTextBox.appendChild(korFoodName);
    foodTextBox.appendChild(foodDescription);

    menuItem.appendChild(foodTextBox);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;