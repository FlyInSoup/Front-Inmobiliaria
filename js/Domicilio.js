//import Localidad from './Localidad.js';

class Domicilio {
    constructor(calle, altura, piso, dpto, localidad){
        this.calle = calle;
        this.altura = altura;
        this.piso = piso;
        this.dpto = dpto;
        this.localidad = localidad;
    }
}

module.exports = Domicilio;