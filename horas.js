export default class Horas{
    constructor(horas,minutos,segundos, hs, ms, ss){
        this._horas = horas;
        this._minutos = minutos;
        this._segundos = segundos;
        this._hs = hs; 
        this._ms =ms;
        this._ss = ss;
    }

    get horas(){
        return this._horas;
    }
    get minutos(){
        return this._minutos;
    }
    get segundos(){
        return this._segundos;
    }
    get hs(){
        return this._hs;
    }
    get ms(){
        return this._ms;
    }
    get ss(){
        return this._ss;
    }
}