

export function cuentaRegresiva(fechaUsuario, $elemento){

    const [anio, mes, dia] = fechaUsuario.split('-').map(Number);
  
 
    const timer = setInterval(() => {

        let ahoraMs = new Date().getTime();
        let fechaMs = new Date(anio, mes -1, dia).getTime();

        

        let diferenciaMs = fechaMs - ahoraMs;
     
        let tiempo = Math.abs(diferenciaMs);


        let dias = Math.floor(tiempo/(1000 * 60 * 60 * 24));
        let horas = Math.floor(tiempo%(1000 * 60 * 60 * 24)/(1000 * 60 * 60));
        let minutos = Math.floor(tiempo%(1000 * 60 * 60)/(1000 * 60));
        let segundos = Math.floor(tiempo%(1000 * 60)/(1000));

        /* console.log(`dias ${dias}  horas ${horas}  minutos ${minutos}  segundos ${segundos} `) */

        if(diferenciaMs === 0){
            clearInterval(timer)
            $elemento.textContent = 'El tiempo ya termino.'
        }
            
        if(diferenciaMs < 0){

            $elemento.textContent = `Pasaron: ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos. `;

        }else{

            $elemento.textContent = `Faltan: ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos. `;
        }
        
        
    }, 1000);


}