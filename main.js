import Horas from './horas.js';
import Diferencia from './diferencia.js';

class Main{
    constructor(){
        let diferencia = new Diferencia(document.querySelector("#texto"));
        document.querySelector("#btnCalcular").addEventListener('click', ()=>{
            let horas = Number(document.querySelector("#horasEntrada").value);
            let minutos = Number(document.querySelector("#minutosEntrada").value);
            let segundos = Number(document.querySelector("#segundosEntrada").value);

            let hs = Number(document.querySelector("#horasSalida").value);
            let ms = Number(document.querySelector("#minutosSalida").value);
            let ss = Number(document.querySelector("#segundosSalida").value);

            let resta = new Horas(horas,minutos,segundos,hs,ms,ss);
            diferencia.imprimirDiferencia(resta);
        });
    }
}

let m = new Main();