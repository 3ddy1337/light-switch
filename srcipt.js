const toggleBtn = document.getElementById("toggleBtn");
const pageTitle = document.getElementById("pageTitle");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  toggleBtn.classList.toggle("dark-mode-btn");
  if (document.body.classList.contains("dark-mode")) {
    pageTitle.textContent = "Good Night";
  } else {
    pageTitle.textContent = "Good Morning";
  }
});
