import homeImage from "./images/home.png";

function loadHomepage() {
  const content = document.getElementById("content");

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const img = document.createElement("img");
  img.src = homeImage;
  img.alt = "A woman smiling eating a salad";

  const intro = document.createElement("div");
  intro.classList.add("intro");
  intro.innerHTML = `
    <h1>Welcome to Smiling Salads!</h1>
    <p>We make the best salads to ensure the biggest smiles.</p>
  `;

  hero.appendChild(img);
  hero.appendChild(intro);
  content.appendChild(hero);
}

export default loadHomepage;
