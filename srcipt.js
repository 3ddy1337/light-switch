// Save element from HTML in JS veriable
const toggleBtn = document.getElementById("toggle-button");

// State
let isDark = false;

// Update the HTML to sync with state
function render() {
  if (isDark) {
    // if isDark = true
    document.body.classList.add("dark");
    document.title = "Good Night";
  } else {
    // if isDark = false
    document.body.classList.remove("dark");
    document.title = "Good Morning";
  }
}

// Event listener by click on the button
toggleBtn.addEventListener("click", () => {
  isDark = !isDark; // Commonly used to toggle a boolean variable between true and false
  render();
});
