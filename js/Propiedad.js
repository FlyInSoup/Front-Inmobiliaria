class Propiedad{
    constructor(cod, state, m2, description='', domicilio=null, cliente=null, tipo=null){
        this.cod = cod;
        this.state = state;
        this.m2 = m2;
        this.description = description;
        this.domicilio = domicilio;
        this.propietario = cliente;
        this.tipo = tipo;
    }
    getState(){
        return this.state;
    }
    setState(newState){
        this.state = newState;
    }
}

module.exports = Propiedad;
