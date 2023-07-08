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

    menu.appendChild(
        createMenuItem(
            "maewoonbulgogi",
            "매운 불고기",
            "Thinly sliced ribeye beef marinated in specially formulated spicy house sauce"
        )
    );
    
    menu.appendChild(
        createMenuItem(
            "saeng bulgogi",
            "생불고기",
            "Thinly sliced unseasoned ribeye beef"
        )
    );

    menu.appendChild(
        createMenuItem(
            "anhshim",
            "안심",
            "Thick sliced unseasoned ribeye steak Limited to 1 order per round"
        )
    );

    menu.appendChild(
        createMenuItem(
            "chadol baegi",
            "차돌 베기",
            "Thinly sliced unseasoned beef brisket"
        )
    );

    menu.appendChild(
        createMenuItem(
            "wugyupsal",
            "우겹살",
            "Thinly sliced unseasoned beef belly"
        )
    );

    menu.appendChild(
        createMenuItem(
            "dwaeji bulgogi",
            "돼지 불고기",
            "Sliced tender pork shoulder marinated in specially formulated spicy house sauce"
        )
    );

    menu.appendChild(
        createMenuItem(
            "samgyeobsal",
            "삼겹살",
            "Sliced unseasoned prime pork belly"
        )
    );

    return menu;
}

function createMenuItem(engName,korName,description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");


    const foodImage = document.createElement("img");
    foodImage.classList.add("menu-image");
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