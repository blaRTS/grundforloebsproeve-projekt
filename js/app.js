const fotoArray = [
  "opskrift0",
  "opskrift1",
  "opskrift2",
  "opskrift3",
  "opskrift4",
  "opskrift5",
];
const titleArray = [
  "Oreme-Muffins",
  "Orme-Gremolota",
  "Orme-Boller",
  "Bille-Hummus",
  "Snegleknas",
  "Larver med bulgur",
];
const textArray = [
  "Lorem ipsum dolor sit amet, consectetur elit,  eiusmod inci et ...",
  "Lorem ipsum dolor sit amet, consectetur elit,  eiusmod inci et ...",
  "Lorem ipsum dolor sit amet, consectetur elit,  eiusmod inci et ...",
  "Lorem ipsum dolor sit amet, consectetur elit,  eiusmod inci et ...",
  "Lorem ipsum dolor sit amet, consectetur elit,  eiusmod inci et ...",
  "Lorem ipsum dolor sit amet, consectetur elit,  eiusmod inci et ...",
];
const bigImg = document.querySelectorAll(".bigImg");
const title = document.querySelectorAll(".caption__bold");
const tekst = document.querySelectorAll(".caption__text");

let index = 0;
let nyFoto;
const arrows = document.querySelectorAll("#gallery i");
for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", change);
}
function change(e) {
  for (let i = 0; i < bigImg.length; i++) {
    if (e.target.getAttribute("id") === "next") {
      if (index < fotoArray.length - 1) {
        index++;
      } else {
        index = 0;
      }
    } else {
      if (index > 0) {
        index--;
      } else {
        index = fotoArray.length - 1;
      }
    }
    nyFoto = "images/" + fotoArray[index] + ".jpg";
    bigImg[i].setAttribute("src", nyFoto);
    title[i].textContent = titleArray[index];
    tekst[i].textContent = textArray[index];
  }
}

//Tæl op i kurven
let antal = 1;
const varer = document.querySelector("#varer");
const buttons = document.querySelectorAll(".productBuy");
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function kurv() {
		varer.textContent = antal++;
	});
}
