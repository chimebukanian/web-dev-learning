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

  const student = {
    firstName: "Halim",
    lastName: "Meshack",
    age: 24,
    isActive: true,
    courses: ["Hacking", "English", "Science"],
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    }
  };

  console.log("Student full name:", student.getFullName());
  console.log("Student age:", student.age);
  console.log(student.isActive ? "Student is active" : "Student is inactive");
  console.log("Second course:", student.courses[1]);

  let studentAge = null;
  studentAge = student.age;

  let parsedAge = parseInt("25");
  console.log("Parsed age:", parsedAge);

  eval('console.log("Message from eval()")');

  let favoriteCourse = askQuestion("What's your favorite course?", student.courses[0]);
  if (favoriteCourse === student.courses[0]) {
    appendContent("student-info", `<p>That matches the first course: ${favoriteCourse}</p>`);
  } else {
    appendContent("student-info", `<p>Your favorite course is ${favoriteCourse}, while the first course is ${student.courses[0]}.</p>`);
  }

  appendContent("student-info", `<p>Student: ${student.getFullName()}</p>`);
  appendContent("student-info", `<p>Age: ${studentAge}</p>`);
  appendContent("student-info", `<p>Status: ${student.isActive ? "Student is active" : "Student is inactive"}</p>`);
})();
