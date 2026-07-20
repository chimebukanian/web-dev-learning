(function () {
  function appendContent(elementId, html) {
    const target = document.getElementById(elementId);
    if (target) {
      target.insertAdjacentHTML("beforeend", html);
    }
  }

  function askQuestion(message, fallback = "") {
    try {
      return window.prompt(message) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  let item1 = 12.5;
  let item2 = 8.75;
  let item3 = 15.0;
  const TAX_RATE = 0.08;

  let subtotal = item1 + item2 + item3;
  let tax = subtotal * TAX_RATE;
  let total = subtotal + tax;

  console.log("Subtotal:", subtotal.toFixed(2));
  console.log("Tax:", tax.toFixed(2));
  console.log("Total:", total.toFixed(2));

  appendContent("shopping-summary", `<p>Subtotal: $${subtotal.toFixed(2)}</p>`);
  appendContent("shopping-summary", `<p>Tax: $${tax.toFixed(2)}</p>`);
  appendContent("shopping-summary", `<p>Total: $${total.toFixed(2)}</p>`);

  let availableItems = ["Laptop", "Phone", "Headphones"];
  let selectedItem = askQuestion("What item would you like to buy?", "Laptop");

  if (selectedItem === availableItems[0] || selectedItem === availableItems[1] || selectedItem === availableItems[2]) {
    appendContent("shopping-summary", `<p>${selectedItem} is available.</p>`);
  } else {
    appendContent("shopping-summary", `<p>${selectedItem} is not available.</p>`);
  }
})();
