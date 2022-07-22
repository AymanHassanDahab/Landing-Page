/*
Define Global Variables
*/

// Selection of Navigation Bar Ul
const navBarList = document.querySelector("#navbar__list");
// Selection of Sections in a NodeList
const sections = document.querySelectorAll("section");


/*
Build menu 
*/

// New Anchor inside new list creation
const createNewAnchorListFuncation = function() {
    for (divison of sections) {
        // Create New List & New Anchor
        const newList = document.createElement("li");
        const newAnchor = document.createElement("a");
        // Add class to the new Anchor
        newAnchor.classList.add("menu__link");
        // newAnchor.classList.add(`${divison.getAttribute("id")}`);
        newAnchor.setAttribute("href",`#${divison.getAttribute("id")}`);
        // Add naming of the Anchor
        newAnchor.innerHTML = divison.getAttribute("data-nav");
        // make li child of ul
        navBarList.appendChild(newList);
        // make a child of li
        newList.appendChild(newAnchor);
    }
};
// Produce Lists of existed sections in HTML.
createNewAnchorListFuncation();


/*
Scroll to section on link click
*/

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function (e){
  e.preventDefault(); 
  sections.forEach( function(section) {
    // Get the distance from top of section
    const topOfSectionDistance = section.getBoundingClientRect().top;

    // Check the distance to add or remove the class
    if (topOfSectionDistance > -350 && topOfSectionDistance <= 200) {
      // adding active class to active secton
      section.classList.add('your-active-class');
      // adding active class to the sslected active section from nav bar (i couldn't make it activated via detecting the viewport)
      const activeSection = window.location.hash;
      const allAnchor = document.querySelectorAll("a").forEach(anchor => {
          if (anchor.hash == activeSection) {
            anchor.classList.add('active');
          } else {
            anchor.classList.remove('active');  
          }
        });
    } else {
        // removing active class to active secton
        section.classList.remove('your-active-class');
    }
  });
});




// I TIRED TO CREATE NEW SECTION AND IT DID CREATE ONE BUT THE NAV BAR GOT TROUBLES I COULDN'T FIX IT
/*
// Selection of page header
const pageHeader = document.querySelector(".page__header");

let sectionNumber = 5;
const newBtn = document.createElement("button");
newBtn.innerHTML = "Add New Section";
pageHeader.insertAdjacentElement("beforeend", newBtn);

newBtn.addEventListener("click", function() {
  const sectionContent = `
    <section id="section${sectionNumber}" data-nav="Section ${sectionNumber}">
      <div class="landing__container">
        <h2>Section ${sectionNumber}</h2>
        <p>Hello That's the new Sction</p>
        <p>I will update content later</p>
      </div>
    </section>`;
document.querySelector("main").insertAdjacentHTML("beforeend", sectionContent);
sectionNumber++;
createNewAnchorListFuncation();
});
*/
