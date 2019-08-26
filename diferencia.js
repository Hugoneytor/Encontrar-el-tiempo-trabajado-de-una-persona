export default class Diferencia{
    constructor(div){
        this._div = div;
        this._diferenciaHoras = 0;
        this._diferenciaMinutos = 0;
        this._diferenciaSegundos = 0;
    }

    imprimirDiferencia(resta){
        this._diferencia = (resta.hs - resta.horas);
        this._diferenciaMinutos = (resta.ms - resta.minutos);
        this._diferenciaSegundos = (resta.ss - resta.segundos);

        
        this._div.textContent = `El total de horas trabajadas es de ${this._diferencia} horas, ${this._diferenciaMinutos} minutos y ${this._diferenciaSegundos} segundos `
        
    }
}