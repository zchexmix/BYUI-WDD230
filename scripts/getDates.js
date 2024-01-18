let modified = document.lastModified;
document.getElementById("lastmodified").innerHTML = `Last modified: ${modified}`;

const d = new Date();
let year = d.getFullYear();
document.getElementById("footer").innerHTML = `&copy; ${year} | Zach Checketts | London, England`;

const nav = document.querySelector('.navbar');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    nav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const header = document.querySelector('.header');
const darkBtn = document.querySelector('#darkmode');
const main = document.querySelector('main');
const body = document.querySelector('body');

darkBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    main.classList.toggle('dark');
    darkBtn.classList.toggle('dark');
    hambutton.classList.toggle('dark');
});


const visits = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;

if (numVisits !== 0) {
	visits.textContent = numVisits;
} else {
	visits.textContent = `You're a first time visitor! Welcome!`;

}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

