
function abrirVentana(){
    document.getElementById("emergente").style.display="flex";
    document.body.style.backgroundColor="rgb(36, 61, 61)";
    //new Audio("sonidos/heaven-OK.mp3").play();
}

function sonido(){
    let presentacion = new Audio("sonidos/heaven-OK.mp3");
    presentacion.play();
}