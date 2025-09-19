import { eliminarItem, lista } from "../utils/estado.js";
import { cuentaRegresiva } from "../utils/cuenta-regresiva.js";


export function renderizarLista(){

    const $lista = document.querySelector('.main__lista-contenedor');
    const $template = document.querySelector('.template__lista');

    $lista.innerHTML = '';

    console.log(lista);

    lista.forEach( item => {

        const $clone = $template.content.cloneNode(true);

        $clone.querySelector('.item__descripcion').textContent = item.descripcion;
        const $span = $clone.querySelector('.item__tiempo');
        const $btnEliminar = $clone.querySelector('.item__btn-eliminar');

        cuentaRegresiva(item.fecha, $span);


        $btnEliminar.addEventListener('click', () => {
            eliminarItem(item.id)
            renderizarLista()
        })


        $lista.appendChild($clone);

    });



};

