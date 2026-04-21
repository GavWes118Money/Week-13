// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser and provides you with an API to interact with it. Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a
//       tree-like representation. JavaScrpit can access the DOM to dynamically change the content, structuree, and style of web page.

document.title = "Web interaction";

const Title = document.getElementById("title")
const Button = document.getElementById("changeBtn")
const Button = document.getElementById("toggleImage")
const Button = document.getElementById("dark Mode")

button.addEventlistener("click", () => {
  title.textContent = "Reorganizing Properties";
  title.style.color = "blue";
})
