
export const lista = JSON.parse(localStorage.getItem('lista')) || [];


function actualizarLocalStorage () {
    localStorage.setItem('lista', JSON.stringify(lista));
}

export function agregarItem(descripcion, fecha){
    
    lista.push({id: Date.now(), descripcion, fecha})
    actualizarLocalStorage();
}

export function eliminarItem(id){
    const index = lista.findIndex(item => item.id === id);
    if (index !== -1) lista.splice(index, 1)
    actualizarLocalStorage();
}