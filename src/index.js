import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import loadAbout from "./about";
import createFooter from "./footer";
import "./styles.css";
import "typeface-roboto";
import "typeface-tinos";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  content.classList.remove(
    "home-view",
    "menu-view",
    "about-view",
    "contact-view"
  );
}

const footer = createFooter();
document.body.appendChild(footer);

const content = document.getElementById("content");
loadHome();
content.classList.add("home-view");

document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const tab = e.target.textContent;
    clearContent();

    switch (tab) {
      case "Home":
        loadHome();
        content.classList.add("home-view");
        break;
      case "Menu":
        loadMenu();
        content.classList.add("menu-view");
        break;
      case "About":
        loadAbout();
        content.classList.add("about-view");
        break;
      case "Contact":
        loadContact();
        content.classList.add("contact-view");
        break;
    }
  }
});
