// TODO: Select all sections of the page to link them to the navigation bar 
const sections = document.querySelectorAll("section");
const nav = document.getElementById("navbar__list");

// TODO: Create navigation bar based on the sections of the page
function createNavBar() {
  for (let section of sections) {
  	listItem = document.createElement("li");
    listItem.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
    nav.appendChild(listItem);
  }
  
}
createNavBar();

/**
* Add active class to section near top of viewport
* Add active state on the link when it is clicked
* Add scroll event
*/
document.addEventListener("scroll", () =>{
	sections.forEach(section => {
    // Using getBoundingClientRect function to know if the section is in the viewport or not
	const rect = section.getBoundingClientRect();
	
	const link = document.querySelector(`a[href="#${section.id}"]`);
    // console.log(rect);
    // console.log(window.innerHeight); //top of the browser - bottom of the browser
    // console.log(rect.top); 
    if (rect.top >=0 && rect.top <= window.innerHeight) {

    	section.classList.add("your-active-class");
    	link.classList.add("active");
    }
    else{

    	section.classList.remove("your-active-class");
    	link.classList.remove("active");
    }
})

});


// TODO: When clicking an item from the navigation menu, the link should scroll to the appropriate section
const scroll = document.getElementsByClassName("menu__link");
for (let s of scroll) {
	s.addEventListener('click', function (goToSection) {
        // Stopping the default event that is occuring
        goToSection.preventDefault();
        // Change transition animation from auto to smooth
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}
	