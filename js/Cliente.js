class Cliente{
    constructor(name, phone, email, cuit, iva, cellphone, domicilio=null, senia=[], propiedades=[], representante=null){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.cuit = cuit;
        this.iva = iva;
        this.cellphone = cellphone;
        this.domicilio = domicilio;
        this.senia = senia;
        this.propiedades = propiedades;
        this.representante = representante;
    };
}

module.exports = Cliente;
