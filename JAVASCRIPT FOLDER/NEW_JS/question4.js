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

  function askConfirm(message, fallback = false) {
    try {
      return window.confirm(message);
    } catch (error) {
      return fallback;
    }
  }

  let name = askQuestion("Enter your name:", "User");
  let userAge = parseInt(askQuestion("Enter your age:", "18"), 10) || 18;
  let favoriteColor = askQuestion("Enter your favorite color:", "Blue");

  const currentYear = 2026;
  let birthYear = currentYear - userAge;

  let userInfo = {
    name: name,
    age: userAge,
    favoriteColor: favoriteColor,
    birthYear: birthYear
  };

  let welcomeMessage = `Welcome, ${name}! You are ${userAge} years old and your favorite color is ${favoriteColor}.`;
  appendContent("user-info-card", `<p>${welcomeMessage}</p>`);
  appendContent("user-info-card", `<p>Your birth year is ${birthYear}.</p>`);
  appendContent("user-info-card", `<p>User info: ${userInfo.name}, ${userInfo.age}, ${userInfo.favoriteColor}, ${userInfo.birthYear}</p>`);

  console.log("Welcome message:", welcomeMessage);
  console.log("User info:", userInfo);

  let likesJavaScript = askConfirm("Do you like JavaScript?", false);
  appendContent("user-info-card", `<p>Do you like JavaScript? ${likesJavaScript}</p>`);
  console.log("Likes JavaScript:", likesJavaScript);

  const userCard = document.getElementById("user-info-card");
  if (userCard) {
    userCard.setAttribute("data-name", name);
  }
})();
