let modified = document.lastModified;
document.getElementById("lastmodified").innerHTML = `Last modified: ${modified}`;

const d = new Date();
let year = d.getFullYear();
document.getElementById("footer").innerHTML = `&copy; ${year} | Zach Checketts | London, England`;