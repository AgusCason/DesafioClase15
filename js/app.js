const pelis = document.querySelector("#pelis") ;
const URL = "js/peliculas.json"//"https://jsonplaceholder.typicode.com/posts" 
  let tf = [] //Array vacío, nos permite cargar la respuesta de FETCH, nuestro "Servidor Remoto"






const retornoContenidoPelis = () => {
  return `<div class="peliculas">
            <img src="vid/continuarViendo/1.png" alt="">
          </div>`
}



function pedirDatosAlSRV() {
  fetch(URL)
        .then((response) => response.json())
        .then((data) => console.table(data))
        .catch((error) => console.log("error", error))
}