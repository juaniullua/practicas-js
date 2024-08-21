const input_horas = document.querySelector(".input-horas");
const input_minutos = document.querySelector(".input-minutos");
const input_segundos = document.querySelector(".input-segundos");
const div_horas = document.querySelector(".horas")
const div_minutos = document.querySelector(".minutos")
const div_segundos = document.querySelector(".segundos")
const button = document.querySelector(".boton")

/*let dato_horas = input_horas.value;
let dato_minutos = input_minutos.value;
let dato_segundos = input_segundos.value;
*/
let horas_reloj = div_horas;
let minutos_reloj = div_minutos;
let segundos_reloj = div_segundos;


let s = 0; //s de segundos
let m = 0; //m de minutos
let h = 0; //h de horas
let hora = "0" + h;
let minuto = "0" + m;
let segundo = "0" + s;


horas_reloj.innerHTML = hora;
minutos_reloj.innerHTML = minuto;
segundos_reloj.innerHTML = segundo;
// 60segundos = 1minuto
// 2minutos = 1 hora
// 2 horas = 1 dia

function reloj(){ setInterval(()=>{
    if(segundo < 9){
        segundo = "0"+s;
        s++
        segundos_reloj.innerHTML = segundo;
        console.log(segundo);
    }else if(segundo >= 9 && segundo != 15){
        s = 0
        segundo++
        segundos_reloj.innerHTML = segundo;
        console.log(segundo);
    }else if(segundo == 15){
        m++
        minuto = "0"+ m;
        segundo = "00"
        minutos_reloj.innerHTML = minuto;
        console.log("hola")
    }else if(minuto <= 9){
        m= "0" + m;
        minuto++;
        horas_minuto.innerHTML = minuto;
    }else if (hora == 24){
        hora = "0"+ h
    }
    
},1000);
}
reloj()
   
    

