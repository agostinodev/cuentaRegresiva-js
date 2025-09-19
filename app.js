import { renderizarLista } from "./src/components/renderizar-lista.js";
import { inicializarEventos } from "./src/utils/inicializar-eventos.js";


function initApp(){

    inicializarEventos()
    renderizarLista()
}

document.addEventListener('DOMContentLoaded', initApp);