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

  let firstName = "Kamsi";
  let lastName = "Emenike";
  const country = "Japan";

  let greetingMessage = `Hello, ${firstName} ${lastName} from ${country}!`;
  appendContent("personal-card", `<p>${greetingMessage}</p>`);

  let age = 23;
  age++;
  appendContent("personal-card", `<p>Next year you'll be ${age} years old.</p>`);

  let favoriteFood = askQuestion("Enter your favorite food:", "Rice");
  appendContent("personal-card", `<p>Your favorite food is ${favoriteFood}.</p>`);
})();
