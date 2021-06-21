/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section'); // select the sections and making array from it
const element = document.getElementById("navbar__list"); // to define the id to get the ul
let fragment = document.createDocumentFragment();

// ----------------------------------------------------------------------------------------------------------
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
for (const section of sections) { // functions to create the list
    listItem = document.createElement('li')
    var navName = section.getAttribute('data-nav') // define the attribure to get the nav items name
    var navMenu = section.getAttribute('id')
    listItem.innerHTML = `<a class= "menu__link" id =${navMenu} href=#${navMenu}>${navName}</a>` // to make the transiction to the section
    fragment.appendChild(listItem) // to return the navbar
    console.log(fragment);

    listItem.addEventListener('click', function scrollToSection(event) {
        event.preventDefault(); // using prevent default to remove the default behavior
        section.scrollIntoView({
            behavior: "smooth",
            block: "center"
        }) // to add behavior smooth to the transition
    })


    //------------------------------------------------------------------------------------------------
    window.addEventListener('scroll', toggleActiveState);
    function toggleActiveState() {
        const options = {
            threshold: 0.7
        }; // to set the view port raito

        const observer = new IntersectionObserver(function
            (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('your-active-class');
                }
                else {
                    entry.target.classList.remove('your-active-class')
                } // to add the your active class 
            let actLink = document.getElementsByClassName('menu__link');
                actLink.addEventListener('click', function toggleNavActiveClass (event) {
                    actLink.forEach(i => {
                        if (!i.classList.contains('active-link')) {
                            i.classList.add('active-link');
                        } else {
                            i.classList.remove('active-link');
                        }

                    })
                })


            })

        }, options)

        sections.forEach(section => {
            observer.observe(section);
            observer.observe(element)
        }) // to apply the intersection observer syntax on the sections

    }

}
element.appendChild(fragment); // to return the navbar
// ---------------------------------------------------------------
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/



// ------------------------------------------------------------------------------------
// build the nav


// ------------------------------------------------------------------------------------
// Add class 'active' to section when near top of viewport






// ------------------------------------------------------------------------------------
// Scroll to anchor ID using scrollTO event
// ------------------------------------------------------------------------------------
function navSlide() {
    const menu = document.querySelector('.holdmenu'); // to define the burger menu style that i added to the html
    const navg = document.getElementById('navbar__list');
    const nLinks = document.querySelectorAll('#navbar__list li')

    menu.addEventListener('click', () => {  // func to add 
        if (navg.classList === 'navbar__active') {
            navg.classList.toggle('navbar__inactive');
        }
        else {
            navg.classList.toggle('navbar__active');
        }  // this if condtion to switch between transform of the trnslate style to show the burger meny

    });
    nLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
        console.log(index / 7); // to animate betwen the opaicty
    });
}
navSlide(); // to read the func and apply it


// ------------------------------------------------------------------------------------


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 


// Scroll to section on link click
//--------------------------------------------------------
const scrolltop = document.getElementById("scrolltop"); // to select the btton that i add in the html
const header = document.querySelector(".page__header"); // to select the header

let isScrolling = document.onscroll = () => {
    header.style.display = "block";
    clearTimeout(isScrolling)
    isScrolling = setTimeout(() => {
        header.style.display = "none";
    }, 3500); // to set time out to make the display of the header none
    if (window.scrollY > 700) {
        scrolltop.style.display = "block"
    }
    else {
        scrolltop.style.display = "none";
    } // condition to make the scroll to up btn apper and disapper when get back to the top
};
scrolltop.addEventListener("click", () => {
    document.documentElement.scrollTo(
        {
            top: 0, behavior: "smooth"
        }); // to make the scroll to top smooth
});
//--------------------------------------------------------
// Set sections as active


