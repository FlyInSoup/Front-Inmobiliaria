class Contrato{
    constructor(cod, destino, estado, fechaEntrega, fechaInicio, fechaFin, fechaNotificacion, 
        interesesPorMoraDiaria, mesesActualizacion, monto, observaciones, propiedad, inquilino, garantes=[]){
        this.cod = cod;
        this.destino = destino;
        this.estado = estado;
        this.fechaEntrega = fechaEntrega;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.fechaNotificacion = fechaNotificacion;
        this.interesesPorMoraDiaria = interesesPorMoraDiaria;
        this.mesesActualizacion = mesesActualizacion;
        this.monto = monto;
        this.observaciones = observaciones;
        this.propiedad = propiedad;
        this.inquilino = inquilino;
        this.garantes = garantes;
    }
}
module.exports = Contrato;