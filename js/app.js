// console.log("ciao");

// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

//           <img class="item" src="../img/01.webp" alt="" />
//           <img class="item" src="../img/02.webp" alt="" />
//           <img class="item" src="../img/03.webp" alt="" />
//           <img class="item" src="../img/04.webp" alt="" />
//           <img class="item" src="../img/05.webp" alt="" />

//creato path per le img da inserire dentro al tag img
const imagePath = [
  "../img/01.webp",
  "../img/02.webp",
  "../img/03.webp",
  "../img/04.webp",
  "../img/05.webp",
];

const row = document.querySelector(".row");

for (let index = 0; index < imagePath.length; index++) {
  const image = `
    <div>
      <img class="item" src="${imagePath[index]}" />  
    </div>
  `;
  console.log(image);

  row.innerHTML += image;
}

// mi sto prendendo i pulsanti dal HTML
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// mi sto prendendo tutte le immagini in base alla classe item
const listItems = document.getElementsByClassName("item");

let imgIndex = 0;
let listItem = listItems[imgIndex];
listItem.classList.add("visible");

next.addEventListener("click", function () {
  listItems[imgIndex].classList.remove("visible");
  imgIndex++;
  if (imgIndex < listItems.length) {
    listItems[imgIndex].classList.add("visible");
  } else {
    imgIndex = 0;
    listItems[imgIndex].classList.add("visible");
  }
});
prev.addEventListener("click", function () {
  listItems[imgIndex].classList.remove("visible");
  imgIndex--;
  if (imgIndex > -1) {
    listItems[imgIndex].classList.add("visible");
  } else {
    imgIndex = 4;
    listItems[imgIndex].classList.add("visible");
  }
});

// next.addEventListener("click", function () {
//   listItems[imgIndex].classList.remove("visible");
//   imgIndex++;
//   listItems[imgIndex].classList.add("visible");
// });
// prev.addEventListener("click", function () {
//   listItems[imgIndex].classList.remove("visible");
//   imgIndex--;
//   listItems[imgIndex].classList.add("visible");
// });
