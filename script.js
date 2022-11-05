const precioTicket= 200;
function resumir(){
    var cantidadTicket = document.getElementById('inputCantidad').value;
    var descuento = (document.getElementById('inputCategoria').value) / 100;
    var precio = (cantidadTicket * (precioTicket - (precioTicket * descuento)));

    document.getElementById('compraTotal').value = 'Total a pagar: $' + precio;
}