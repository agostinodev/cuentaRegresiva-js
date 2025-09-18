

export function cuentaRegresiva(fechaUsuario, $elemento){

    const [anio, mes, dia] = fechaUsuario.split('-').map(Number);
  
 
    setInterval(() => {

        let ahoraMs = new Date().getTime();
        let fechaMs = new Date(anio, mes -1, dia).getTime();

        let diferenciaMs = fechaMs - ahoraMs;
        let dias = Math.floor(diferenciaMs/(1000 * 60 * 60 * 24));
        let horas = Math.floor(diferenciaMs%(1000 * 60 * 60 * 24)/(1000 * 60 * 60));
        let minutos = Math.floor(diferenciaMs%(1000 * 60 * 60)/(1000 * 60));
        let segundos = Math.floor(diferenciaMs%(1000 * 60)/(1000));

        /* console.log(`dias ${dias}  horas ${horas}  minutos ${minutos}  segundos ${segundos} `) */

        $elemento.textContent = `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos. `;
        
    }, 1000);


}