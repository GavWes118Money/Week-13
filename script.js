document.addEventListener("DOMContentLoaded", function () {
            // Get references to DOM elements
            const titleElement = document.getElementById("title");
            const buttonElement = document.getElementById("changeBtn");

            // Add a click event listener to the button
            buttonElement.addEventListener("click", function () {
                // Change the text content of the paragraph
                titleElement.textContent = "Title Sucessfully Changed!";
                // Change the color
                titleElement.style.color = "green";
            });
        });


 const image1 = "https://i.postimg.cc/5yThFDZh/Gavin-Westry-Picture.jpg";
    const image2 = "https://i.postimg.cc/4yH6M2js/20260317-053838000-i-OS.jpg";

    let showingFirst = true;

    function toggleImage() {
      const imgElement = 
document.getElementById("toggleImage");
      showingFirst = !showingFirst;
      imgElement.style.opacity = 0;
      
     setTimeout (() => {
       imgElement.src = showingFirst ? image1 : image2;
       imgElement.style.opacity = 1;
     }, 300) 
    }


const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = 'Disable Dark Mode';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update button text
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Disable Dark Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = 'Enable Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});
