import createParagraph from "./createParagraph";

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const grillImage = document.createElement("img");
  grillImage.src = "media/images/korean_bbq.png";
  grillImage.alt = "korean_bbq";

  home.appendChild(createParagraph("All-You-Can-Eat Korean BBQ!"));
  home.appendChild(createParagraph("Established and made with passion since 2005"));
  home.appendChild(grillImage);
  home.appendChild(createParagraph("Order pickup today through our website,you'll get all the neccessities to a meal just like you would at the resturant"));

  return home;
}


function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
