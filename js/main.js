let desp = 0;
let salto = 100  //cantidad de salto de pixeles al hacer scrooll
let numPages = 3 //numero de secciones o bloques que tiene la pagina o contenedor

window.addEventListener('wheel', (e) => {
    desp += (e.deltaY / 53) * (-salto); // El signo determina hacia que lado se genera el desplazamiento
    var contenedor = document.getElementsByClassName("page-slide");//obtener el tamaño de ancho de cada pagina del contenedor
    var limit = contenedor[0].clientWidth * numPages;//multiplica el numero de paginas por el ancho
    console.log("desplazamiento: " + desp.toString() + "|| Limite : " + limit.toString());
    if (desp <= 0) {
        if (desp >= -limit) { //evaluar si no supero el limite, como el valor de desp es negativo, limite tambien debe serlo.
            document.querySelector('.container').style.left = desp.toString() + "px";
        }
        else {
            desp = -limit  //se mantiene en el limite
        }
    }
    else {
        desp = 0; //se redefine a cero el deplazamiento para que no se siga sumando
        console.log("No hay desplazamiento")
    }
});



//Eventos para pantallas touchs


let move=0;
let start=0;


window.addEventListener('touchstart', (e) => { //manejador de evento para pantallas tactiles
    start = Math.round(e.touches[0].clientX); //fija el inicio cuando toca la pantalla
    console.log("start: " + start.toString() + " || move: " + move.toString());
    console.log("Se ejecuto touech start");
    
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
        
       


        console.log("desp: " + desp.toString() + " || move: " + move.toString());
        move = 0;
        console.log("finalizo el desplazamiento");
        

        if (desp < 0){
            desp = 0;
       }
        if (desp > limit){
           desp = limit;
       }
        
        console.log("desp: " + desp.toString() + " || move: " + move.toString());
    }
  

});




