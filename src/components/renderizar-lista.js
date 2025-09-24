import { eliminarItem, lista } from "../utils/estado.js";
import { cuentaRegresiva } from "../utils/cuenta-regresiva.js";


export function renderizarLista(){

    const $lista = document.querySelector('#lista');
    const $template = document.querySelector('#template-lista');



        $lista.innerHTML = ''

        console.log(lista);

        lista.forEach( item => {

            const $clone = $template.content.cloneNode(true);

            $clone.querySelector('.evento').textContent = item.descripcion;
            const $span = $clone.querySelector('.tiempo');
            const $btnEliminar = $clone.querySelector('.btn-eliminar');

            cuentaRegresiva(item.fecha, $span);

            $btnEliminar.addEventListener('click', () => {
                eliminarItem(item.id)
                renderizarLista()
            })


            $lista.appendChild($clone);
        
        });





};

