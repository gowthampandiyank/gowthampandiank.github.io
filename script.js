const toggleBtn = document.getElementById("theme_toggle");
const icon = document.getElementById("theme_icon");

// Load previous theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icon.className = "fa-solid fa-sun";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    icon.className = "fa-solid fa-sun";
  } else {
    localStorage.removeItem("theme");
    icon.className = "fa-solid fa-moon";
  }
});
