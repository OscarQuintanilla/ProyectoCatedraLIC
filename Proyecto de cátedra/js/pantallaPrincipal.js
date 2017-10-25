var usuario = sessionStorage.getItem("numeroUsuario");
var cantidadCuentasBanco = localStorage.getItem("cantidadCuentasBanco");
var cantidadTarjetas = localStorage.getItem("cantidadTarjetas");
var cantidadUsuarios = localStorage.getItem("cantidadUsuarios");
var paso = false;
var respaldo, impresion;
window.addEventListener("load", function () {

    /* Guarda la cabecera de la tabla */
    inicial = document.getElementById("tblCuentas").innerHTM;
    backup = document.getElementById("tblCuentas").innerHTM;

    if (localStorage.getItem("cantidadTarjetas") == null || localStorage.getItem("cantidadTarjetas") == undefined) {
        localStorage.setItem("cantidadTarjetas", 0);
        cantidadCuentas = localStorage.getItem("cantidadTarjetas");
    }

    /* Imprime la cantidad de efectivo */
    document.getElementById("artEfectivo").innerHTML = "<h2>Efectivo disponible: $" + localStorage.getItem("datosUsuario[" + usuario + "][" + 16 + "]") + "</h2>";

    /* Crea la tabla de cuentas de banco */
    rellenarTabla();
    rellenarTarjetas();

    /* Click de Guardar Cuenta que crea una nueva cuenta de banco */
    document.getElementById("btnAgregarCuenta").addEventListener("click", function () {
        agregarCuentaBanco();
    });
    /* Click de Guardar Cuenta que crea una nueva tarjeta */
    document.getElementById("btnAgregarTarjeta").addEventListener("click", function () {
        agregarTarjeta();
    });

    /* Ingresos */
    document.getElementById("btnIngreso").addEventListener("click", function () {
        agregarIngreso();
    });
});

function rellenarTabla() {
    inicial = document.getElementById("tblCuentas").innerHTML;
    /*for (var i = 1; i < cantidadCuentasBanco; i++) {
    /*for (var i = 1; i < cantidadCuentasBanco; i++) {
        
        
    }*/
    var t = 1
    while (localStorage.getItem("datosUsuario[0][17][" + t + "][2]") == true) {
        t++;
    }


    var i = 0;
    while (i < cantidadCuentasBanco) {
        var inner = document.getElementById("tblCuentas").innerHTML;
        document.getElementById("tblCuentas").innerHTML = "<tr><th>Banco</th><th>Número de Cuenta</th><th>Saldo Actual</th></tr>";
        for (var j = 0; j < cantidadCuentasBanco; j++) {
            document.getElementById("tblCuentas").innerHTML = (document.getElementById("tblCuentas").innerHTML) + "<tr><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][17][" + j + "][1]") + "</th><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][17][" + j + "][2]") + "</th><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][17][" + j + "][3]") + "</th></tr>";


        }





        i++
    }
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
    var saldo = document.getElementById("txtSaldoActual").value;


    localStorage.setItem("datosUsuario[" + usuario + "][" + 17 + "][" + cantidadCuentasBanco + "][0]", dueno);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 17 + "][" + cantidadCuentasBanco + "][1]", banco);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 17 + "][" + cantidadCuentasBanco + "][2]", numCuenta);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 17 + "][" + cantidadCuentasBanco + "][3]", saldo);

    cantidadCuentasBanco++;

    localStorage.setItem("cantidadCuentasBanco", cantidadCuentasBanco);

    document.getElementById("tblCuentas").innerHTM = "<tr><th>Banco</th><th>Número de Cuenta</th><th>Saldo Actual</th></tr>";
    rellenarTabla();

}

function agregarTarjeta() {

    /*
    
    0 - Dueno
    1 - Banco
    2 - Numero Cuenta
    3 - Saldo Actual
    
    */

    var dueno = localStorage.getItem("datosUsuario[" + usuario + "][" + 0 + "]") + " " + localStorage.getItem("datosUsuario[" + usuario + "][" + 1 + "]");
    var banco = document.getElementById("txtTarBanco").value;
    var numCuenta = document.getElementById("txtTarNumCuenta").value;
    var saldo = document.getElementById("txtTarSaldoActual").value;
    
    var interes = document.getElementById("txtTarInteres").value;
    var vencimiento = document.getElementById("txtTarVencimiento").value;


    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][0]", dueno);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][1]", banco);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][2]", numCuenta);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][3]", saldo);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][4]", interes);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][5]", vencimiento);

    cantidadCuentasBanco++;

    localStorage.setItem("cantidadCuentasBanco", cantidadCuentasBanco);

    document.getElementById("tblTarjetas").innerHTM = "<tr><th>Banco</th><th>Número de Cuenta</th><th>Saldo Actual</th></tr>";
    rellenarTarjetas();
    
    
    /*
    
    0 - Dueno
    1 - Banco
    2 - Numero Cuenta
    3 - Saldo Actual
    
    
    

    var dueno = localStorage.getItem("datosUsuario[" + usuario + "][" + 0 + "]") + " " + localStorage.getItem("datosUsuario[" + usuario + "][" + 1 + "]");
    var banco = document.getElementById("txtTarBanco").value;
    var numCuenta = document.getElementById("txtTarNumCuenta").value;
    var saldo = document.getElementById("txtTarSaldoActual").value;
    var interes = document.getElementById("txtTarInteres").value;
    var vencimiento = document.getElementById("txtTarVencimiento").value;



    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][0]", dueno);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][1]", banco);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][2]", numCuenta);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][3]", saldo);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][4]", interes);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 18 + "][" + cantidadTarjetas + "][5]", vencimiento);

    
    cantidadTarjetas++;

    document.getElementById("tblTarjetas").innerHTM = "<tr><th>Banco</th><th>Número de Cuenta</th><th>Saldo Actual</th></tr>";
    rellenarTarjetas();*/

}

function rellenarTarjetas() {
    inicial = document.getElementById("tblTarjetas").innerHTML;

    var t = 1
    while (localStorage.getItem("datosUsuario[0][18][" + t + "][2]") == true) {
        t++;
    }
            document.getElementById("tblTarjetas").innerHTML = (document.getElementById("tblTarjetas").innerHTML) + "<tr><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][18][" + 0 + "][0]") + "</th><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][18][" + 0 + "][1]") + "</th><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][18][" + 0 + "][2]") + "</th><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][18][" + 0 + "][3]") + "</th><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][18][" + 0 + "][4]") + "</th><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][18][" + 0 + "][5]") + "</th></tr>";


}
/* Seccion de Ingresos */
var cantidadIngresos = localStorage.getItem("numIngresos");

function agregarIngreso() {
    var j = 0;
    while (localStorage.getItem("datosUsuario[" + usuario + "][18][" + j + "][2]") != null) {
        //Es la cantidad de ingresos que existen
        j++;
    };
    localStorage.setItem("numingresos", j);
    cantidadIngresos = localStorage.getItem("numIngresos");

    var fecha = document.getElementById("txtIngresoFecha").value;
    var motivo = document.getElementById("txtMotivo").value;
    var monto = document.getElementById("txtMonto").value;
    var metodo = document.getElementById("opcMetodo").value;

    localStorage.setItem("datosUsuario[" + usuario + "][" + 19 + "][" + cantidadIngresos + "][0]", fecha);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 19 + "][" + cantidadIngresos + "][1]", motivo);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 19 + "][" + cantidadIngresos + "][2]", monto);
    localStorage.setItem("datosUsuario[" + usuario + "][" + 19 + "][" + cantidadIngresos + "][3]", metodo);

    tablaIngresos();
    localStorage.setItem("numIngresos", cantidadIngresos++);

}

function tablaIngresos() {
        var inner = document.getElementById("tblIngresos").innerHTML;
            document.getElementById("tblIngresos").innerHTML = (document.getElementById("tblIngresos").innerHTML) + "<tr><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][19][" + 0 + "][0]") + "</th><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][19][" + 0 + "][1]") + "</th><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][19][" + 0 + "][2]") + "</th><th>" +
                localStorage.getItem("datosUsuario[" + usuario + "][19][" + 0 + "][3]") + "</th></tr>";

}
