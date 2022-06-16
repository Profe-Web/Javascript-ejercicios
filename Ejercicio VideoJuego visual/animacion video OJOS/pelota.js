// VIDEOJUEGO -- Versión troglodita

//Arrancar
document.querySelector(".pelota").style.animationPlayState = "running";
document.querySelector(".pelotaBis").style.animationPlayState = "running";
document.querySelector(".pelota2").style.animationPlayState = "running";
document.querySelector(".pelota2Bis").style.animationPlayState = "running";
document.querySelector(".pelota3").style.animationPlayState = "running";
document.querySelector(".pelota4").style.animationPlayState = "running";
document.querySelector(".pelota4Bis").style.animationPlayState = "running";
document.querySelector(".pelota5").style.animationPlayState = "running";
document.querySelector(".pelota5Bis").style.animationPlayState = "running";
//Query es para class o elementos (p, div, li, etc)
//getElementById es para todo lo que tenga id. Es más rápido

//audios
let ay1 = new Audio("sonidos/ouch-ok.mp3");
let ay2 = new Audio("sonidos/woah-OK.mp3");
let ay3 = new Audio("sonidos/ouchmp3-14591.mp3");
let ay4 = new Audio("sonidos/ouch-sound-effect-30-11844.mp3");

let puntos = 0;
let time = 30;

//onClick
function pelotazoSTOP() {
  ay1.play();
  puntos = puntos + 5;
  document.querySelector(".pelota").style.visibility = "hidden";
  document.getElementById("puntos").innerHTML = puntos;
}

function pelotazoSTOPbis() {
  ay1.play();
  puntos = puntos + 5;
  document.querySelector(".pelotaBis").style.visibility = "hidden";
  document.getElementById("puntos").innerHTML = puntos;
}

function pelotazoSTOP2() {
  ay2.play();
  puntos = puntos + 5;
  document.querySelector(".pelota2").style.visibility = "hidden";
  document.getElementById("puntos").innerHTML = puntos;
}

function pelotazoSTOP2bis() {
  ay2.play();
  puntos = puntos + 5;
  document.querySelector(".pelota2Bis").style.visibility = "hidden";
  document.getElementById("puntos").innerHTML = puntos;
}

function pelotazoSTOP3() {
  ay3.play();
  puntos = puntos + 20;
  document.querySelector(".pelota3").style.visibility = "hidden";
  document.getElementById("puntos").innerHTML = puntos;
}

function pelotazoSTOP4() {
  ay4.play();
  puntos = puntos + 5;
  document.querySelector(".pelota4").style.visibility = "hidden";
  document.getElementById("puntos").innerHTML = puntos;
}

function pelotazoSTOP4bis() {
  ay4.play();
  puntos = puntos + 5;
  document.querySelector(".pelota4Bis").style.visibility = "hidden";
  document.getElementById("puntos").innerHTML = puntos;
}

function pelotazoSTOP5() {
  ay1.play();
  puntos = puntos + 10;
  document.querySelector(".pelota5").style.visibility = "hidden";
  document.getElementById("puntos").innerHTML = puntos;
}

function pelotazoSTOP5bis() {
  ay1.play();
  puntos = puntos + 10;
  document.querySelector(".pelota5Bis").style.visibility = "hidden";
  document.getElementById("puntos").innerHTML = puntos;
}

//Contador
setInterval(function () {
  time--;
  if (time >= 0) {
    document.getElementById("cuentaAtras").innerHTML = time;
  } else ventanaFinal()
}, 1000);

//FINAL
function ventanaFinal(){
  alert("SE TE ACABÓ EL TIEMPO! Has logrado " + puntos + " puntos")
} 


/* function ventanaFinal(){
  setTimeout(function(){
    window.open("final.html");
  }
, 31000)}  */
