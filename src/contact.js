function loadContact() {
  const content = document.getElementById("content");

  const contactDiv = document.createElement("div");
  contactDiv.innerHTML = `
    <h2>Contact Us</h2>
    <p>Phone: 904 700 700</p>
    <p>Email: smiles@salads.net</p>
  `;

  content.appendChild(contactDiv);
}

export default loadContact;
