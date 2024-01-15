
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