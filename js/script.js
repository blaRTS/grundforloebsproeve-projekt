//Tæl op i kurven
let antal = 1;
let varer = document.querySelector("#varer");
let buyButtons = document.querySelectorAll(".productBuy");
for (let i = 0; i < buyButtons.length; i++) {
	buyButtons[i].addEventListener("click", function kurv() {
		varer.innerText = antal++;
	});
}