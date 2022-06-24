import Pago from './pagos.js';

class Senia extends Pago{
    constructor(cod, fecha, monto, fecha_vencimiento){
        super(cod, fecha, monto);
        this.fecha_vencimiento = fecha_vencimiento;
    }
}

module.exports = Senia;