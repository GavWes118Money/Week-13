const title = document.getElementById("title");
const button = document.getElementById("changeBtn");
const button = document.getElementById("toggleImage");
const button = document.getElementById("dark Mode");
 
button.addEventListener("click", () => {
  title.textContent = "Hello from JavaScript!";
  title.style.color = "teal";
});
