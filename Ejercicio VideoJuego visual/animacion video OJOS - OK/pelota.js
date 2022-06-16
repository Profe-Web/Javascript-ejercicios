// DATOS
const ojos = ["iris", "bn", "rayo", "amarillo", "irisPeque"];
const audios = ["ouch-ok","woah-OK","ouchmp3-14591","ouch-sound-effect-30-11844","ouch-ok"];

const puntuacion = [5, 5, 20, 5, 10];

let puntos = 0;

function generarVista() { //generar divs
  const mainDiv = document.getElementById("main");
  ojos.forEach(function (item, i) {//recorrer items
    const grupoDiv = document.createElement("div");//crear div grupo
    grupoDiv.classList.add("grupo");//añadir clase grupo

    const ojoDiv1 = document.createElement("div");//crear ojo1
    ojoDiv1.classList.add("ojo");
    ojoDiv1.id = item + 1;
    ojoDiv1.addEventListener("click", function () {
      tocarOjo(item + 1, puntuacion[i], audios[i]);
    });
    ojoDiv1.style.animationPlayState = "running";

    const ojoDiv2 = document.createElement("div");//crear ojo2
    ojoDiv2.classList.add("ojo");
    ojoDiv2.id = item + 2;
    ojoDiv2.addEventListener("click", function () {
      tocarOjo(item + 2, puntuacion[i], audios[i]);
    });
    ojoDiv2.style.animationPlayState = "running";

    grupoDiv.appendChild(ojoDiv1);//añadir ojo1
    grupoDiv.appendChild(ojoDiv2);//añadir ojo2
    mainDiv.appendChild(grupoDiv);//añadir grupo
  });
}

function tocarOjo(ojo, puntuacion, audio) {
  document.getElementById(ojo).style.visibility = "hidden";
  puntos += puntuacion;
  new Audio("sonidos/" + audio + ".mp3").play();
  document.getElementById("puntos").innerHTML = puntos;
}

generarVista();
