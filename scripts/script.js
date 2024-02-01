const pass1 = document.querySelector("#password-one");
const pass2 = document.querySelector("#password-two");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", checkSame);


function checkSame() {
	if (pass1.value !== pass2.value) {
		message.textContent = "❗️ PASSWORDS DO NOT MATCH! ❗️";
		message.style.display = "block";
		pass2.style.backgroundColor = "#fff0f3";
		pass2.value = "";
		pass2.focus();
	} else {
		message.style.display = "none";
		pass2.style.color = "#000";
	}
}



const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}