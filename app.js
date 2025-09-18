import { inicializarEventos } from "./src/utils/inicializar-eventos.js";



function initApp(){

    inicializarEventos()
}

document.addEventListener('DOMContentLoaded', initApp());