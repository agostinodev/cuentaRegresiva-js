

function cuentaRegresiva(){

    
    const fecha = new Date(2026, 0,1).getTime();

    
   

   setInterval(() => {

        let ahora = new Date().getTime();
        let tiempoLimite = fecha - ahora;
        let dia = Math.floor(tiempoLimite/(1000 * 60 * 60 * 24));
        let horas = Math.floor((tiempoLimite%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        let minutos = Math.floor((tiempoLimite%(1000 * 60 * 60))/(1000 * 60));
        let segundos = Math.floor((tiempoLimite%(1000 * 60))/1000);

        console.log(`Días: ${dia} Horas: ${horas} Minutos: ${minutos} Segundos: ${segundos}`);
        
    }, 1000);


}


/* cuentaRegresiva() */