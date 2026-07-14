// ================================
// CRAFTTIME ROOM
// ================================

const inicio = document.getElementById("inicio");
const recomendacion = document.getElementById("recomendacion");
const autonoma = document.getElementById("autonoma");
const resultado = document.getElementById("resultado");
const recepcion = document.getElementById("recepcion");

const btnRecomendacion = document.getElementById("btnRecomendacion");
const btnAutonoma = document.getElementById("btnAutonoma");

const calcular = document.getElementById("calcular");
const ingresar = document.getElementById("ingresar");

const zonaResultado = document.getElementById("zonaResultado");
const descripcionResultado = document.getElementById("descripcionResultado");
const mensajeRecepcion = document.getElementById("mensajeRecepcion");

// ---------------------------
// Mostrar recomendación
// ---------------------------

btnRecomendacion.onclick = () => {

inicio.classList.add("oculto");
recomendacion.classList.remove("oculto");

}

// ---------------------------
// Mostrar zona autónoma
// ---------------------------

btnAutonoma.onclick = () => {

inicio.classList.add("oculto");
autonoma.classList.remove("oculto");

}

// ---------------------------
// Calcular recomendación
// ---------------------------

calcular.onclick = ()=>{

const estado=document.getElementById("p1").value;
const necesidad=document.getElementById("p2").value;
const ambiente=document.getElementById("p3").value;
const objetivo=document.getElementById("p4").value;

let zona="";
let descripcion="";

// DESCANSO

if(
estado=="Muy estresado" ||
estado=="Cansado" ||
necesidad=="Descansar"
){

zona="🛋 Zona de Descanso";

descripcion="Te recomendamos un espacio tranquilo con puffs, iluminación cálida y música relajante para disminuir el estrés.";

}

// CREATIVIDAD

else if(

necesidad=="Expresar mi creatividad" ||

ambiente=="Creativo"

){

zona="🎨 Zona Creativa";

descripcion="Este espacio te permitirá dibujar, crear y expresarte libremente para relajarte.";

}

// LECTURA

else{

zona="📚 Zona de Lectura";

descripcion="Encontrarás un ambiente silencioso ideal para leer, descansar y recuperar la concentración.";

}

recomendacion.classList.add("oculto");

resultado.classList.remove("oculto");

zonaResultado.innerHTML=zona;

descripcionResultado.innerHTML=descripcion;

}

// ---------------------------
// Entrada recomendada
// ---------------------------

ingresar.onclick=()=>{

resultado.classList.add("oculto");

recepcion.classList.remove("oculto");

mensajeRecepcion.innerHTML=

"✔ Tu ingreso ha sido registrado correctamente.<br><br>¡Disfruta tu experiencia en CraftTime Room!";

setTimeout(()=>{

recepcion.classList.add("oculto");

inicio.classList.remove("oculto");

},3000);

}

// ---------------------------
// Zona autónoma
// ---------------------------

const zonas=document.querySelectorAll(".zona");

zonas.forEach(z=>{

z.onclick=()=>{

let nombre=z.dataset.zona;

autonoma.classList.add("oculto");

recepcion.classList.remove("oculto");

mensajeRecepcion.innerHTML=

"Has elegido <b>"+nombre+"</b><br><br>✔ Entrada registrada correctamente.";

setTimeout(()=>{

recepcion.classList.add("oculto");

inicio.classList.remove("oculto");

},3000);

}

});
