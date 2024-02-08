// Dark Mode
(function () {
    window.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    });

    const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
    const setting = localStorage.getItem("color-schema") || "auto";
    if (setting === "dark" || (prefersDark && setting !== "light")) {
    document.documentElement.classList.toggle("dark", true);
    }
})();


document.addEventListener("DOMContentLoaded", function () {
  // Your loading logic here...

  // Simulating a loading process with setTimeout
    setTimeout(function () {
    // Replace the following line with the actual link to the other HTML file
    window.location.href = "index.html";
  }, 3000); // Change 3000 to the duration of your loading animation in milliseconds
});

