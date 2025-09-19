
export const lista = [];

console.log(lista)

export function agregarItem(descripcion, fecha){
    lista.push({id: Date.now(), descripcion, fecha})
}

export function eliminarItem(id){
    const index = lista.findIndex(item => item.id === id);
    if (index !== -1) lista.splice(index, 1)
}