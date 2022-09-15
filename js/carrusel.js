const fila = document.querySelector('.contendor-carrusel') ;
const peliculas = document.querySelector('.peliculas') ;
const flechaIzq = document.getElementById('#flecha-izq') ;
const flechaDer = document.querySelector('.flecha-der') ;



flechaDer.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth ;
})