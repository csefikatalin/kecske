


  console.log("hahó");
  let pElem = document.querySelectorAll("footer p")[0]; //html elem
  pElem.innerHTML = "Cs Katalin"; //elem tartalmának megvált.
  //b.	A szöveget igazítsd középre,
  pElem.style.textAlign = "center";
  //a betűméretet állítsd be 20px-re.
  pElem.style.fontSize = "20px";

  /*A képekre kattintva (bármelyik képre kattintunk), */
  let kepTomb = document.querySelectorAll("#bal>p>img");
  console.log(kepTomb);
  kepTomb.forEach(function (elem) {
    elem.addEventListener("click", kattintas);
    /**Ha a  képek fölé mozgatva az egeret a képen jelenjen meg  a kiemel stílus!
6.	JS: Ha a képekről elviszem az egeret, akkor a stílus tűnjön el róla. 
 */
    elem.addEventListener("mouseover", function (event) {
      // event.target.className="kiemel";
      event.target.classList.add("kiemel");
    });
    elem.addEventListener("mouseout", function (event) {
      //event.target.className="";
      event.target.classList.remove("kiemel");
    });
  });


const tomb = [];

function kattintas() {
  console.log(event.target.src); //ki váltotta ki az eseményt

  tomb.push(event.target.src);
  console.log(tomb);
  /*a.	a kép elérési útját (src) mentsd el egy tömbbe (tomb.push(event.target.src))
b.	írd ki a tömb tartalmát a konzolra!*/
  //Amelyik elemre kattintottam, arról leveszem az eseménykezelőt
  event.target.removeEventListener("click", kattintas);
  //A képre kattintva a képet tüntessük el a bal oldalról (display:none;)
  event.target.style.display = "none";
  // és jelenítsük meg a csónak közepén.
  //Ehhez helyezd el az article tagben található div tárolóba a képet!
  let akktKep = "<img src='" + event.target.src + "' alt='' >";
  document.querySelectorAll("#csonak")[0].innerHTML += akktKep;
  let csonakTomb = document.querySelectorAll("#csonak img");
  csonakTomb.forEach(function (elem) {
    elem.addEventListener("mouseover", function (event) {
      // event.target.className="kiemel";
      event.target.classList.add("kiemel");
    });
    elem.addEventListener("mouseout", function (event) {
      //event.target.className="";
      event.target.classList.remove("kiemel");
    });
  });
}
