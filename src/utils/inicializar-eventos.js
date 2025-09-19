import { renderizarLista } from "../components/renderizar-lista.js";
import { agregarItem, lista } from "./estado.js";

const $btnAgregar = document.getElementById('btn-agregar');
const $inputDescripcion = document.getElementById('input__descripcion');
const $input__fecha = document.getElementById('input__fecha');


export function inicializarEventos(){


    $btnAgregar.addEventListener('click',() => {

        if(lista.length >= 5) return console.warn('Llegaste al maximo de cuantas regresivas.')
        
        let descripcion = $inputDescripcion.value.trim();
        let fecha = $input__fecha.value;

        if(!descripcion) return console.warn('La descripción es obligatoria.')
        if(!/[a-zA-Z]+/.test(descripcion)) return console.warn('La descripción no puede contener números y symbolos.');

        
        if(!fecha) return console.warn('Ingrese una fecha valida.')

        agregarItem(descripcion, fecha)
        renderizarLista()

        $inputDescripcion.value = '';
        $input__fecha.value = '';
        
        
    });

}