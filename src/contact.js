import createParagraph from "./createParagraph";

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'media/images/fake_address.png'
    restaurantLocation.alt = 'Mogbang restaurant location'

    contact.appendChild(createParagraph("✆1(800)123-4567"));
    contact.appendChild(createParagraph("🍽 1768 E Hastings St,Vancouver,Los Angeles, USA"));
    contact.appendChild(restaurantLocation)

    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

  export default loadContact;