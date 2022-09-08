const pelisDrama = document.querySelector("#pelisDrama") ;
const pelisComedia = document.querySelector("#pelisComedia") ;
const pelisTendencia = document.querySelector("#pelisTendencia") ;
const pelisRecomendaciones = document.querySelector("#pelisRecomendaciones") ;

const Drama = "https://aguscason.github.io/DesafioClase15/js/drama.json" 
const Comedia = "https://aguscason.github.io/DesafioClase15/js/comedia.json" 
const Recomendado = "https://aguscason.github.io/DesafioClase15/js/recomendado.json" 
const Tendencia = "https://aguscason.github.io/DesafioClase15/js/tendencia.json" 
  let prjs = [] 
  let contenidoHTML = "" ;





const retornoContenidoPelis = (pelicula) => {
  const {id, titulo, poster} = pelicula ;
  return `<div class="peliculas">
            <img id="${pelicula.id}" src="${pelicula.poster}" alt="${pelicula.titulo}" title="${pelicula.titulo}">
          </div>`
}



const cargarContenido = async () => {
   await fetch(Drama)
        .then((response) => response.json())
        .then((data) => {
          prjs = data ;
          prjs.forEach(pelicula => {
            contenidoHTML += retornoContenidoPelis(pelicula) ;
          });
          pelisDrama.innerHTML = contenidoHTML ;
        })
}

const cargarContenidoRecomendado = async () => {
  await fetch(Recomendado)
       .then((response) => response.json())
       .then((data) => {
         prjs = data ;
         prjs.forEach(pelicula => {
           contenidoHTML += retornoContenidoPelis(pelicula) ;
         });
         pelisRecomendaciones.innerHTML = contenidoHTML ;
       })
}

const cargarContenidoComedia = async () => {
  await fetch(Comedia)
       .then((response) => response.json())
       .then((data) => {
         prjs = data ;
         prjs.forEach(pelicula => {
           contenidoHTML += retornoContenidoPelis(pelicula) ;
         });
         pelisComedia.innerHTML = contenidoHTML ;
       })
}

const cargarContenidoTendencia = async () => {
  await fetch(Tendencia)
       .then((response) => response.json())
       .then((data) => {
         prjs = data ;
         prjs.forEach(pelicula => {
           contenidoHTML += retornoContenidoPelis(pelicula) ;
         });
         pelisTendencia.innerHTML = contenidoHTML ;
       })
}


cargarContenidoTendencia() ;
cargarContenidoRecomendado () ;
cargarContenido () ;
cargarContenidoComedia () ;

