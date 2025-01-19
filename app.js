/* Este bloque se puede resumir completo en la función que se coloca a continuación, realiza las mismas funciones
let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Juego del número Secreto';

let parrafo = document.querySelector ('p');
parrafo.innerHTML = 'Indique un número del 1 al 10';
*/
/*let numeroSecreto = generarNumeroSecreto();
let intentos =1;
console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto) { 
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//console.log(numeroSecreto);

function verificarIntento() { 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) { 
        asignarTextoElemento('p', `acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
     else {   
        //cuando no acierta entra acá
        if (numeroDeUsuario > numeroSecreto) { 
            asignarTextoElemento('p', 'Número es menor');    
        } else { 
            asignarTextoElemento('p', 'Número es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return

}
// document.queryselector es parecido a document.getElemntById, tan solo cambia la manera de activar el botón por el #
function limpiarCaja() { 
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value='';
}

function generarNumeroSecreto() { 
    return Math.floor(Math.random()*10)+1;

    
}

asignarTextoElemento('h1','Juego del número secreto 1.0');
asignarTextoElemento('p', 'Indica el número del 1 al 200');
}*/


let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumeroSorteados =[];
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() { 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) { 
        asignarTextoElemento('p', `acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {   
        // Cuando no acierta entra acá
        if (numeroDeUsuario > numeroSecreto) { 
            asignarTextoElemento('p', 'Número es menor');    
        } else { 
            asignarTextoElemento('p', 'Número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() { 
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() { 
    let numerogenerado = Math.floor(Math.random() * numeroMaximo) + 1; 
    console.log(numerogenerado);
    console.log(listaNumeroSorteados);
    if (listaNumeroSorteados.length == numeroMaximo) { 
        asignarTextoElemento('p', 'ya se utilizaron todos los números posibles');

    }else { 
    // Si ya completa todos los números
    //si el número generado está repetido, debe buscar otro
    if (listaNumeroSorteados.includes(numerogenerado)) {
        return generarNumeroSecreto();

    }else {
        listaNumeroSorteados.push(numerogenerado);
        return numerogenerado;
    }
}

}


function condicionesIniciales() { 
    asignarTextoElemento('h1', 'Juego del número secreto 1.0');
    asignarTextoElemento('p', `Indica el número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); //generar número secreto aleatorio
    intentos =1;
}

// El botón reiniciarJuego debe limpiar todo, desactivar nuevamente botón juego nuevo, inicializar contador
function reiniciarJuego() { 
limpiarCaja(); //función limpiar caja
condicionesIniciales(); //función para colocar nuevamente los mensajes inciales
document.querySelector('#reiniciar').setAttribute('disabled','true');

}


condicionesIniciales();
                    
                