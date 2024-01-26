
// -------- Active Nav --------- //
const ul = document.getElementById('navbuttons');
const navs = ul.getElementsByClassName('navbtn');
for (var i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}


// -------- Footer -------- //
let modified = document.lastModified;
document.getElementById("lastmodified").innerHTML = ` Last modified: ${modified}`;

const d = new Date();
let year = d.getFullYear();
document.getElementById("footer").innerHTML = `&copy; ${year} | Zach Checketts | London, England`;



// ------ Hamburger Menu Button ----- //
const nav = document.querySelector('.navbar');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    nav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const visits = document.querySelector('.visits');

if (typeof(Storage) !== "undefined") {

  var lastVisit = localStorage.getItem("lastVisit");

  if (lastVisit) {
      
      var timeDifference = Date.now() - new Date(lastVisit).getTime();
      
      var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      if (daysDifference === 0) {
          visits.textContent= ("Back so soon! Awesome!");
      } else {
          if (daysDifference === 1) {
              visits.textContent = ("You last visited 1 day ago.");
          } else {
              visits.textContent = ("You last visited " + daysDifference + " days ago.");
          }
      }
  } else {
      visits.textContent = ("Welcome! Let us know if you have any questions.");
  }

  
  localStorage.setItem("lastVisit", new Date().toISOString());
} else {
  
  visits.textContent = ("Sorry, your browser does not support localStorage.");
}
