function loadAbout() {
  const content = document.getElementById("content");

  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");
  aboutDiv.innerHTML = `
    <h2>About Smiling Salads</h2>
    <p>
      We are the happiest salad makers in the world.
    </p>
  `;

  content.appendChild(aboutDiv);
}

export default loadAbout;
