//Variables
var nombreUsuario;
var contrasenaUsuario;
var sesionIniciada = false;
var numeroUsuario;
var cantidadCuentas = 0;


window.addEventListener("load", function () {
    var lstOpc = document.getElementsByClassName("lstOpc");
    for (var i = 0; i < lstOpc.length; i++) {
        lstOpc[i].style.display = "none";
    }
});

//Enlaces botón-función
document.getElementById("btnIniciarSesion").addEventListener("click", function () {
    recogeDatosLogin();
    verificarSesion();
});
document.getElementById("btnRecuperarClave").addEventListener("click", function () {
    document.getElementById("pantallaDeInicioSesion").style.display = "none";

});
document.getElementById("btnMostrar").addEventListener("click", function () {
    alert(localStorage.getItem("datosUsuario[0][2]"))
    /*for (var i = 0; i < datosUsuario.length; i++) {
		for (var j = 0; j < 13; j++) {
			document.write(datosUsuario[i][j]);
		}
	}*/
});
//datosUsuario[numeroUsuario][16] = [];
document.getElementById("btnAgregarCuenta").addEventListener("click", function () {
    datosUsuario[numeroUsuario][16][cantidadCuentas] = [];
    datosUsuario[numeroUsuario][16][cantidadCuentas][0] = document.getElementById("txtBanco").value;
    datosUsuario[numeroUsuario][16][cantidadCuentas][1] = document.getElementById("txtNumCuenta").value;
    datosUsuario[numeroUsuario][16][cantidadCuentas][2] = document.getElementById("txtSaldo").value;
    document.getElementById("pntCuentas").style.display = "none";
    document.getElementById("txtBanco").value = "";
    document.getElementById("txtNumCuenta").value = "";
    document.getElementById("txtSaldo").value = "";
    cantidadCuentas++;
});
document.getElementById("btnTerminar").addEventListener("click", function () {
    document.getElementById("pntCuentas").style.display = "none";
    document.getElementById("pntMenu").style.display = "inline";
});

//Recoge los datos ingresados en  el formulario de inicio de sesión
function recogeDatosLogin() {
    nombreUsuario = document.getElementById("txtUsuario").value;
    contrasenaUsuario = document.getElementById("txtLlave").value;
}

function verificarSesion() {
    for (var i = 0; i < localStorage.getItem("cantidadUsuarios"); i++) {
        if (nombreUsuario == localStorage.getItem("datosUsuario[" + i + "][" + 2 + "]")) {
           
            if (contrasenaUsuario == localStorage.getItem("datosUsuario[" + i + "][" + 3 + "]")) {
                //Guarda el identificador del usuario de manera temporal
                sessionStorage.setItem("numeroUsuario", i);
                var usuario = sessionStorage.getItem("numeroUsuario");
                //Dependiendo de la si la cuenta es nueva o no despliega las ventanas
                if (localStorage.getItem("datosUsuario[" + usuario + "][" + 15 + "]") == "nueva") {
                    document.getElementById("pantallaDeInicioSesion").style.display = "none";
                    document.getElementById("pntPrimerInicio").style.display = "inline";
                    document.getElementById("pntEfectivo").style.display = "inline";
                } else {
                    window.location = "html/pantallaPrincipal.html";
                }

            }
        }
    }
}

function recuperarClave() {
    document.getElementById("txtPregunta").value = datosUsuario[i][13];
}
//Estilos de la pantalla
