// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Variables
let amigos = [];
let amigoSecreto = '';
let cantidadAmigos = 0;

let listaAmigos = document.getElementById("listaAmigos");
let listaAmigoSecreto = document.getElementById("resultado");

//Deshabilitar el botón para sortear si no hay más de 1 nombre
document.getElementById('sortear').setAttribute('disabled', 'true');

//Alternativa de usar enter para agregar amigos
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

//Agrega amigos al arreglo amigos
function agregarAmigo(){


    let nombre = document.getElementById('amigo').value;

    if(!campoVacio(nombre)){

        limpiarText();

        amigos.push(nombre);
        cantidadAmigos++;

        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
        
        //A partir de 2 nombres en la lista ya es posible sortear
        if(cantidadAmigos > 1){
            document.getElementById('sortear').removeAttribute('disabled');
        }
    }else{
        alert("Por favor, ingresa un nombre válido.")
    }
    
}

//Sortea el amigo secreto y lo muestra en la página
function sortearAmigo(){

    document.getElementById("resultado").innerHTML = "";

    let index = generarNumeroAleatorio(0, amigos.length);
    amigoSecreto = amigos[index];

    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    listaAmigoSecreto.appendChild(li);

    document.getElementById("listaAmigos").innerHTML = "";

    document.getElementById('amigo').setAttribute('disabled', 'true');
    document.getElementById('agregar').setAttribute('disabled', 'true');
    document.getElementById('sortear').setAttribute('disabled', 'true');

        
}

//Retorna si el campo está vacío
function campoVacio(string){

    return string.length === 0;

}

//Limpiar cuadro de texto
function limpiarText(){
    let valorCaja = document.getElementById('amigo').value = '';
}

//Genera un numero aleatorio con rango variable
function generarNumeroAleatorio(numMin, numMax){

    let diferencia = (numMax - numMin);
    let numGenerado = parseInt(Math.floor(Math.random()*diferencia)+numMin);

    return numGenerado;

}