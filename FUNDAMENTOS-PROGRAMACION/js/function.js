
console.log("Hola Mundo");


let numero1 = 10 ;
let numero2 = 9 ;
let resultado = numero1+numero2 ;

console.log("la suma de numero1 y numero2 es:"+ resultado ) ;

/** 
document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById('demo').innerHTML = "estamos probando nuestro primer evento en js"
}


document.addEventListener("click", function () {
    console.log("hola mundo desde eventlintener")
    document.getElementById('demo').innerHTML = "estamos probando nuestro primer evento en js"
}  ) ;

*/
document.getElementById('boton').addEventListener("click", function () {
    console.log("hola mundo desde eventlintener")
    document.getElementById('demo').innerHTML = "estamos probando nuestro primer evento en js"
}  ) ;



document.getElementById("boton_color").addEventListener("click", function () {
    document.body.style.backgroundColor = "#FF0000" ;  
    
}  ) ;


document.getElementById("boton_default").addEventListener("click", function () {
    document.body.style.backgroundColor = "aquamarine" ;  
    
}  ) ;


document.getElementById("boton_ocultar").addEventListener("click", function () {
    document.getElementById('demo').style.display  = "none" ;  
    
}  ) ;



const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
    collection(i).style.backgroundColor = "yellow"; 
}






