const MAX_INTENTOS = 15;

let coordenadas = [
  "a1","a2","a3","a4","a5","b1","b2","b3","b4","b5","c1","c2","c3","c4","c5","d1","d2","d3","d4","d5","e1","e2","e3","e4","e5"
];

let minas = [];

let minasEncontradas = 0;
let intentos = MAX_INTENTOS; //intentos empieza en 15

// generar tres minas random [i]
for (let i = 1; i <= 3; i++) {
  let indice = Math.floor(Math.random() * coordenadas.length);

  while (minas.includes(coordenadas[indice])) {
    //si se repite la coordenada, prueba otra
    indice = Math.floor(Math.random() * coordenadas.length);
  }
  minas.push(coordenadas[indice]); //añade coordenada mina
}

let encontrada = false;

//comprobar si hay mina
function verSiHayMina(coordenada) {
  const espacio = document.getElementById(coordenada);
  espacio.disabled = true; //desactivar boton que ya se ha tocado

  if (intentos > 0) { //en vez del while
    intentos--;
    encontrada = minas.includes(coordenada); //da TRUE o FALSE
    if (encontrada) {
          alert("encontrado");
          minasEncontradas++;
          document.getElementById("minas_encontradas").innerHTML =
            "minas encontradas: " + minasEncontradas;

          espacio.innerHTML = "*";
          espacio.style.backgroundColor = "red";

          if (minasEncontradas == 3) {
            alert("Felicidades, desactivaste las tres minas!");
            intentos = 0;
          }
    } else {
      alert("no encontrado");
    }

    document.getElementById("intentos").innerHTML =
      "intentos restantes: " + intentos;

  } else {
    alert("ya no te quedan intentos");
  }
}
