/* Ez a kezdeti állapot */
const KECSKE = "kecske2.png";
const FARKAS = "farkas.png";
const KAPOSZTA = "kaposzta.png";

const balLista = [KECSKE, FARKAS, KAPOSZTA];
const csonakLista = [];
const jobbLista = [];
const balPartElem = document.querySelector("#bal>p");
const jobbPartElem = document.querySelector("#jobb>p");
const csonakElem = document.querySelector("#csonak");
let hajoElem = document.querySelector("#hajo");
let irany = true; /* true->balról jobbra, false->jobbról balra */

let balraGomb = document.getElementById("balra");
let jobbraGomb = document.getElementById("jobbra");

balraGomb.addEventListener("click", function () {
  irany = false;
  csonakElem.style.textAlign = "left";

  ellenorzes(balLista);
  ellenorzes(jobbLista);
});
jobbraGomb.addEventListener("click", function () {
  irany = true;
  csonakElem.style.textAlign = "right";

  ellenorzes(balLista);
  ellenorzes(jobbLista);
});

megjelenit();
/* Megjelenítjük a program állapotát */
function megjelenit() {
  balPartElem.innerHTML = "";
  jobbPartElem.innerHTML = "";
  csonakElem.innerHTML = ` <span id="hajo">
          <img src="kepek/csonak.png" alt="" class="csonakkep">
          </span> `;
  hajoElem = document.querySelector("#hajo");
  for (let index = 0; index < balLista.length; index++) {
    balPartElem.innerHTML += `<img class="kep" src="kepek/${balLista[index]}"  data-hely="b"   data-index="${index}" alt="">`;
  }

  for (let index = 0; index < jobbLista.length; index++) {
    jobbPartElem.innerHTML += `<img  class="kep" src="kepek/${jobbLista[index]}" data-hely="j"   data-index="${index}" alt="">`;
  }

  for (let index = 0; index < csonakLista.length; index++) {
    console.log(hajoElem);
    hajoElem.innerHTML += `<img class="kep" src="kepek/${csonakLista[index]}"  data-hely="cs"   data-index="${index}" alt="">`;
  }

  esemenyek();
}
function esemenyek() {
  const kepElemek = document.querySelectorAll(".kep");
  console.log(kepElemek);
  for (let index = 0; index < kepElemek.length; index++) {
    kepElemek[index].addEventListener("click", function (event) {
      /* kiveszem és beleteszem a megfelelő tömbbe, de csak akkor, ha még van hely! */

      let hely = event.target.dataset.hely;
      let azon = parseInt(event.target.dataset.index);
      console.log(hely, azon);
      switch (hely) {
        case "b":
          if (csonakLista.length < 1) {
            csonakLista.push(balLista[azon]);
            balLista.splice(azon, 1);
          }

          break;
        case "cs":
          if (irany) {
            jobbLista.push(csonakLista[azon]);
            csonakLista.splice(azon, 1);
          } else {
            balLista.push(csonakLista[azon]);
            csonakLista.splice(azon, 1);
          }

          break;
        case "j":
          if (csonakLista.length < 2) {
            csonakLista.push(jobbLista[azon]);
            jobbLista.splice(azon, 1);
          }
          break;

        default:
          break;
      }

      megjelenit();
    });
    kepElemek[index].addEventListener("mouseover", function (event) {
      event.target.classList.add("kiemel");
    });
    kepElemek[index].addEventListener("mouseout", function (event) {
      event.target.classList.remove("kiemel");
    });
  }
}

function ellenorzes(lista) {
  let hiba1 = lista.includes(KECSKE) && lista.includes(KAPOSZTA);
  let hiba2 = lista.includes(KECSKE) && lista.includes(FARKAS);
  if (lista.length == 2 && (hiba1 || hiba2)) {
    alert("Hiba! Itt valaki megevett valakit, vagy valamit!");
    document.body.style.pointerEvents = "none";
  }
}
