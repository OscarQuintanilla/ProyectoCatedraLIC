var usuario = sessionStorage.getItem("numeroUsuario");
var cantidadCuentas = localStorage.getItem("cantidadCuentasBanco");
window.addEventListener("load", function () {

    /* Click en Guardar */
    document.getElementById("btnGEfectivo").addEventListener("click", function () {
        var efectivo = document.getElementById("txtEfectivo").value;
        guardarEfectivo(efectivo);
        document.getElementById("pntCuentas").style.display = "inline";
        document.getElementById("pntEfectivo").style.display = "none";
        
    });

    /* Asegura la variable */
    if (localStorage.getItem("cantidadCuentasBanco") == null || localStorage.getItem("cantidadCuentasBanco") == undefined) {
        localStorage.setItem("cantidadCuentasBanco", 0);
        cantidadCuentas = localStorage.getItem("cantidadCuentasBanco");
    }

    /* Click en Agregar Cuenta */
    document.getElementById("btnAgregarCuenta").addEventListener("click", function () {
        agregarCuentaBanco();
        limpiarFormulario();
        
    });
    
    /* Click en botón Terminar */
    document.getElementById("btnTerminar").addEventListener("click", function(){
        localStorage.setItem("datosUsuario[" + usuario + "][" + 15 + "]", "iniciada");
        window.location = "html/pantallaPrincipal.html";
    });

});

function guardarEfectivo(cantidad) {
    localStorage.setItem("datosUsuario[" + usuario + "][" + 16 + "]", cantidad);
}

function agregarCuentaBanco() {

    /*
    
    0 - Dueno
    1 - Banco
    2 - Numero Cuenta
    3 - Saldo Actual
    
    */

    var dueno = localStorage.getItem("datosUsuario[" + usuario + "][" + 0 + "]") + " " + localStorage.getItem("datosUsuario[" + usuario + "][" + 1 + "]");
    var banco = document.getElementById("txtBanco").value;
    var numCuenta = document.getElementById("txtNumCuenta").value;
    var saldo = document.getElementById("txtSaldo").value;

    localStorage.setItem("datosUsuario[" + usuario + "][" + 17 + "][" + cantidadCuentas + "][0]", dueno);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 17 + "][" + cantidadCuentas + "][1]", banco);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 17 + "][" + cantidadCuentas + "][2]", numCuenta);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 17 + "][" + cantidadCuentas + "][3]", saldo);

    cantidadCuentas++;

}

function limpiarFormulario() {

    document.getElementById("txtBanco").value = "";
    document.getElementById("txtNumCuenta").value = "";
    document.getElementById("txtSaldo").value = "";

}
