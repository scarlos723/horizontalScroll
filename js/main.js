let desp = 0;
let jump = 50;  //cantidad de salto de pixeles al hacer scrooll con el mouse
let numPages = 4; //numero de secciones o bloques que tiene la pagina o contenedor

window.addEventListener('wheel', (e) => {
    desp += (e.deltaY / 53) * (-jump); // El signo determina hacia que lado se genera el desplazamiento
    var contenedor = document.getElementsByClassName("page-slide");//obtener el tamaño de ancho de cada pagina del contenedor
    var limit = contenedor[0].clientWidth * numPages;//grid el numero de paginas por el ancho
    
    if (desp <= 0) {
        if (desp > -limit) { //evaluar si no supero el limite, como el valor de desp es negativo, limite tambien debe serlo.
            document.querySelector('.container').style.left = desp.toString() + "px";
        }
        else {
            desp = -limit  //se mantiene en el limite
            document.querySelector('.container').style.left = desp.toString() + "px";
        }
    }
    else {
        desp = 0; //se redefine a cero el deplazamiento para que no se siga sumando
        document.querySelector('.container').style.left = desp.toString() + "px";
    }
});


//Eventos para pantallas touchs


let move=0;
let start=0;


window.addEventListener('touchstart', (e) => { //manejador de evento para pantallas tactiles
    start = Math.round(e.touches[0].clientX); //fija el inicio cuando toca la pantalla  
});

window.addEventListener('touchmove', (e1) => {
    move = Math.round(e1.touches[0].clientX);
    var despAux = -(start - move) - desp;  //desplazamiento auxiliar en tiempo real teniendo en cuenta el anterior edsplazamiento   .
    var contenedor = document.getElementsByClassName("page-slide");
    var limit = contenedor[0].clientWidth * numPages;

    console.log("despAux: " + despAux.toString() + " || ");
    if (despAux<0){
        if(despAux > -limit){
            document.querySelector('.container').style.left = despAux.toString() + "px"; //Desplazar normalmente
           
        }else{
            document.querySelector('.container').style.left = (-limit).toString() + "px"; //mantener en el limite el desplazamiento
        }
    }else{
        document.querySelector('.container').style.left = "0px"; //mantener en 0pz el desplazamiento
    }
  
});

window.addEventListener('touchend', () => {
    if (move != 0) {
    
        desp += (start - move);

        var contenedor = document.getElementsByClassName("page-slide");
        var limit = contenedor[0].clientWidth * numPages;

        move = 0;
    
        //condicionales por si el desplazaiento sobrepasa los limites establecidos
        if (desp < 0){
            desp = 0;
       }
        if (desp > limit){
           desp = limit;
       }
    }
  

});




