const fila = document.querySelector('.contendor-carrusel') ;
const flechaIzq = document.querySelector('.flecha-izq') ;
const flechaDer = document.querySelector('.flecha-der') ;



flechaDer.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth ;
})

flechaIzq.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth ;
})



const filaRecomendaciones = document.querySelector('.contendor-carrusel-recomendaciones') ;
const flechaIzqRecomendaciones = document.querySelector('.flecha-izq-recomendaciones') ;
const flechaDerRecomendaciones = document.querySelector('.flecha-der-recomendaciones') ;


flechaDerRecomendaciones.addEventListener('click', () => {
    filaRecomendaciones.scrollLeft += fila.offsetWidth ;
})

flechaIzqRecomendaciones.addEventListener('click', () => {
    filaRecomendaciones.scrollLeft -= fila.offsetWidth ;
})



const filaDrama = document.querySelector('.contendor-carrusel-drama') ;
const flechaIzqDrama = document.querySelector('.flecha-izq-drama') ;
const flechaDerDrama = document.querySelector('.flecha-der-drama') ;


flechaDerDrama.addEventListener('click', () => {
    filaDrama.scrollLeft += fila.offsetWidth ;
})

flechaIzqDrama.addEventListener('click', () => {
    filaDrama.scrollLeft -= fila.offsetWidth ;
})




const filaComedia = document.querySelector('.contendor-carrusel-comedia') ;
const flechaIzqComedia = document.querySelector('.flecha-izq-comedia') ;
const flechaDerComedia = document.querySelector('.flecha-der-comedia') ;


flechaDerComedia.addEventListener('click', () => {
    filaComedia.scrollLeft += fila.offsetWidth ;
})

flechaIzqDrama.addEventListener('click', () => {
    filaComedia.scrollLeft -= fila.offsetWidth ;
})