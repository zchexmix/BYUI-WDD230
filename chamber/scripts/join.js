
docTime = document.querySelector("#timestamp");

let timestamp = Date.now();
let current = new Date(timestamp);
docTime.textContent = `Form loaded at: ${current}`;