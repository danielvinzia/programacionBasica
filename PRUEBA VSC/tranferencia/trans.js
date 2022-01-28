var hora = 16;
var banco_cliente = true;
var cuenta_cliente = true;
var saldo_cliente = 100000;
var banco_destino = true;
var cuenta_destino = true;
var banco_nacion = 23;
var monto = 1000000; 


if (((hora > 9) && (hora < 12)) || ((hora > 15) && (hora < 20))) {
    console.log("se puede hacer la transaccion");
    if((banco_cliente == true) && (cuenta_cliente == true)) {
        console.log("bienvenido cliente a su banco favorito");
        if ((banco_destino == true) && (cuenta_destino == true)) {
            console.log("cuanto dinero quiere tranferir a esta cuenta");
            if (banco_nacion == 233) {
                console.log("transferencia GRATUITA");
            }
            else if ((banco_nacion /= 233) && (saldo_cliente > 100)) {
                console.log("costo de la transeccion es de 100 dolares");
                saldo_cliente = saldo_cliente - 100;
            }    
            else { 
                console.log("saldo insuficiente para realizar tranferencia"); 
            }
            
            if (saldo_cliente > monto){
                saldo_cliente = saldo_cliente - monto; 
                console.log("tranferencia con exito");
                console.log ("su nuevo saldo actual es de: " + saldo_cliente);
            }
            else {
                console.log("no dispone de ese dinero para realizar una trasferencia");
                console.log ("su saldo es de: " + saldo_cliente);
            }            
        }
        else {
            console.log("el banco y el destino no coinciden");
        }
    }
    else {
        console.log("usted no es cliente en este banco");
    }
}
else {
    console.log("fuera de horario de transacciones");
}


console.log("esta es un prueba");