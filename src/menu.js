function loadMenu() {
  const content = document.getElementById("content");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  menuDiv.innerHTML = `
    <section>
      <h3>Signature Salads</h3>
      <ul>
        <li>
          <strong>The Classic Caesar</strong><br>
          Romaine lettuce, garlic croutons, shaved parmesan, creamy Caesar dressing<br>
          <em>€9.99</em>
        </li>
        <li>
          <strong>Mediterranean Delight</strong><br>
          Mixed greens, cherry tomatoes, cucumber, red onion, kalamata olives, feta cheese, lemon-oregano vinaigrette<br>
          <em>€10.99</em>
        </li>
        <li>
          <strong>Garden Goddess </strong><br>
          Spinach, arugula, carrots, radishes, sunflower seeds, avocado, green goddess dressing<br>
          <em>€9.49</em>
        </li>
      </ul>
    </section>

    <section>
      <h3>Protein Power Bowls</h3>
      <ul>
        <li>
          <strong>Southwest Quinoa Bowl </strong><br>
          Quinoa, black beans, corn, romaine, tomato, cilantro, chipotle-lime vinaigrette<br>
          <em>€11.49</em>
        </li>
        <li>
          <strong>Teriyaki Tofu Crunch</strong><br>
          Mixed greens, edamame, red cabbage, crispy wontons, marinated tofu, sesame-teriyaki glaze<br>
          <em>€10.99</em>
        </li>
        <li>
          <strong>Steakhouse Chop</strong><br>
          Chopped romaine, grilled steak, blue cheese, roasted red peppers, balsamic glaze<br>
          <em>€12.99</em>
        </li>
      </ul>
    </section>

    <section>
      <h3>Create Your Own Salad</h3>
      <p>
        <strong>Base:</strong> Romaine, Spinach, Kale, Arugula, Spring Mix<br>
        <strong>Toppings (choose 4):</strong> Tomatoes, cucumbers, red onions, corn, olives, feta, cheddar, chickpeas, apples, walnuts, egg<br>
        <strong>Protein Add-ons:</strong> Grilled Chicken (+€3), Tofu (+€2), Shrimp (+€4), Tempeh (+€3)<br>
        <strong>Dressings:</strong> Ranch, Balsamic, Honey Mustard, Tahini, Lemon-Herb<br>
        <em>Starting at €8.99</em>
      </p>
    </section>
  `;

  content.appendChild(menuDiv);
}

export default loadMenu;
