const title = document.getElementById("title");
const button = document.getElementById("changeBtn");
const toggleButton = document.getElementById("toggleImage");
const dark Mode = document.getElementById("dark Mode");
 
button.addEventListener("click", () => {
  title.textContent = "Hello from JavaScript!";
  title.style.color = "teal";
});
