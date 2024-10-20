
// Ejemplos de interacciones.
//No podemos conectar con la página Amazan, por politicas de seguridad, solo se podría.
// Nota: loa resultados se ven direntamente de la consola que refleja en las herramientas de desarrollo. 
console.log(document.body);
console.log(document.links[0]);
console.log(document.images);
// Acceder a los elementos HTML
// Obtener las clases del primer elemento con la clase 'cajaPrincipal'
const clasesCaja = document.querySelector('.cajaPrincipal').classList;
console.log(clasesCaja);

// Obtener el nombre de la clase del mismo elemento
const nombreClaseCaja = document.querySelector('.cajaPrincipal').className;
console.log(nombreClaseCaja);

const contenedorTarjetas = document.getElementsByClassName('.cajaPrincipal01');
console.log(contenedorTarjetas); 

const contenedorSecundario = document.getElementsByClassName('.cajaPrincipal'); 
console.log(contenedorSecundario); 

// Seleccionar elementos por ID 
const informacionDePrductos = document.getElementById('informacioP'); 
console.log(informacionDePrductos); 

// Seleccionar elementos con "QuerySelector"
const enlacePaginaReferencia = document.querySelector('a')
console.log(enlacePaginaReferencia); 

// Selecciona elemento con "QuerySelectorAll"
const tarjetas = document.querySelectorAll('.cajaPrincipal');
console.log(tarjetas[1]);

//Modificar el contenido  
document.querySelector('.titulo').textContent="Prueba de Amazon (cambio de contenido)"
const imagen = document.querySelector('.imagen1')
imagen.src="https://img.freepik.com/premium-photo/modern-office-desk-with-big-computer-screen-ai-generated_206846-5386.jpg"

//Modificar al estilo  
const tituloColor = document.querySelector('.titulo')
tituloColor.style.color="green"; 

//Agregar elementos 
/*const buscador01 = document.querySelector('.cajaPrincipal')
const button = document.createElement("button")
button.innerText="Comprar"
buscador01.appendChild(button);*/

//Eliminar elementos 
/*const buscador02 = document.querySelector('button')
buscador02.remove(buscador02); */

//Eventos 
const botonesCompras = document.querySelectorAll('.botonCompras'); 
//Evento "click"
// Recorrer cada botón y agregar el evento 'click'
botonesCompras.forEach((botones) => {
    botones.addEventListener('click', function() {
        alert("Debe iniciar sesion o registrarse");
        window.location.href = 'inicioSesion.html'; 
    });
});

const botonInicioSesion = document.querySelector('.botonInicioSesion'); 
    botonInicioSesion.addEventListener('click', function(){
        window.location.href = 'inicioSesion.html';
})
//Evento "mouseout"
const tarjetasProductos = document.querySelectorAll('.cajaPrincipal'); 
tarjetasProductos.forEach((tarjetaP) => {
    tarjetaP.addEventListener('mouseenter', function () {
        tarjetaP.style.backgroundColor = "#EBEBEB";
        tarjetaP.style.boxShadow = "0 10px 10px rgba(0, 0, 0, 0.2)";
    });
});

tarjetasProductos.forEach((tarjetaP) => {
    tarjetaP.addEventListener('mouseout', function () {
        tarjetaP.style.backgroundColor = "";
        tarjetaP.style.boxShadow = "none";
    });
});

const botonesCompras02 = document.querySelectorAll('.botonCompras');
botonesCompras02.forEach((boton)=>{
    boton.addEventListener('mouseenter', function (){
        boton.style.backgroundColor = "#FFECA1"; 
    })
})

botonesCompras02.forEach((boton)=>{
    boton.addEventListener('mouseout', function (){
        boton.style.backgroundColor = ""; 
    })
})

const botonSesion = document.querySelectorAll('.botonInicioSesion');
botonSesion .forEach((botonS)=>{
    botonS.addEventListener('mouseenter', function (){
        botonS.style.backgroundColor = "#FFECA1"; 
    })
})

botonSesion.forEach((botonS)=>{
    botonS.addEventListener('mouseout', function (){
        botonS.style.backgroundColor = ""; 
    })
})

// Seleccionar el input de correo
// Seleccionar los elementos de entrada// Seleccionar los elementos de entrada
const correoUsuario = document.getElementById('correoUsuario');
const contraseñaUsuario = document.getElementById('contraseñaUsuario');
const botonEntrar = document.getElementById('botonEntrar');

// Evento "input"
function validarInput(input) {
    if (input.value === "") {
        input.style.border = "2px red solid"; 
    } else {
        input.style.border = ""; 
    }
}

botonEntrar.addEventListener('click', function() {
    const isCorreoValido = validarInput(correoUsuario);
    const isContraseñaValida = validarInput(contraseñaUsuario);

    if (isCorreoValido && isContraseñaValida) {
        alert("Formulario listo para ser enviado."); 
    } else {
        alert("Por favor, complete los campos requeridos."); 
    }
});

// Evento submit 
formInicioSesion.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let esValido = true;

    if (correoUsuario.value === "") {
        correoUsuario.style.border = "2px red solid";
        esValido = false;
    } else {
        correoUsuario.style.border = "";
    }

    if (contraseñaUsuario.value === "") {
        contraseñaUsuario.style.border = "2px red solid";
        esValido = false;
    } else {
        contraseñaUsuario.style.border = "";
    }

    if (esValido) {
        console.log("Formulario enviado...."); 
    } else {
        console.log("No se acepta campos vacíos");
    }
});

//Evento keypress
const miFormulario = document.getElementById('formInicioSesion');

formInicioSesion.addEventListener('keypress', (e) => {
    if (e.key === "1") {
        e.preventDefault(); 
        formInicioSesion.submit(); 
    }
});

//Promesas 
// Simulación de compras 
function obtenerProducto(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Obteniendo producto con ID: ${id}`);
        resolve();
      }, 1000);
    });
  }
  
function verificarDisponibilidad(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Verificando disponibilidad del producto con ID: ${id}`);
        resolve();
      }, 1000);
    });
}
  
function realizarCompra(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Realizando compra del producto con ID: ${id}`);
        resolve();
      }, 1000);
    });
}
  
// Consumo de las promesas
obtenerFigura(1)
    .then(() => verificarDisponibilidad(2378))
    .then(() => realizarCompra(2378))
    .then(() => {
      console.log("Compra realizada con éxito y con promesas");
    })
    .catch((error) => {
      console.error("Error durante el proceso de compra con promesas:", error);
});
  
// Soluciónn para el problema "callback hell": async - await
//Se replica la simulación de la compra de un producto 
// Función sincrona que funciona como asincrona
async function comprarProducto(id) {
    try {
      await obtenerFigura(id);
      await verificarDisponibilidad(id);
      await realizarCompra(id);
      console.log("Compra realizada con éxito y con async - await");
    } catch (error) {
      console.error("Error durante el proceso de compra con async - await:", error);
    }
}
//Llamada a la funcion async
comprarFigura(1);


