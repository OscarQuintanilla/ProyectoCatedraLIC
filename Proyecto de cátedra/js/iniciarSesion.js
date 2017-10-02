//Variables
var nombreUsuario;
var contrasenaUsuario;
var sesionIniciada = false;
var numeroUsuario;
var cantidadCuentas = 0;
datosUsuario[numeroUsuario][16] = [];

//Enlaces
document.getElementById("btnIniciarSesion").addEventListener("click", function(){
	recogeDatosLogin();
	verificarSesion();
});
document.getElementById("btnRecuperarClave").addEventListener("click", function(){
	document.getElementById("pantallaDeInicioSesion").style.display = "none";

});
document.getElementById("btnMostrar").addEventListener("click", function(){
	for (var i = 0; i < datosUsuario.length; i++) {
		for (var j = 0; j < 13; j++) {
			document.write(datosUsuario[i][j]);
		}
	}
});
document.getElementById("btnGEfectivo").addEventListener("click", function(){
	datosUsuario[numeroUsuario][15] = document.getElementById("txtEfectivo").value;
	document.getElementById("pntEfectivo").style.display = "none";
	document.getElementById("pntCuentas").style.display = "inline";
});

document.getElementById("btnAgregarCuenta").addEventListener("click", function(){
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
document.getElementById("btnTerminar").addEventListener("click", function(){	
	document.getElementById("pntCuentas").style.display = "none";
	document.getElementById("pntMenu").style.display = "inline";
});
//Recoge los datos ingresados en  el formulario de inicio de sesión
function recogeDatosLogin(){
	nombreUsuario = document.getElementById("txtUsuario").value;
	contrasenaUsuario = document.getElementById("txtLlave").value;
}
function verificarSesion(){
	for (var i = 0; i < datosUsuario.length; i++) {
		if (nombreUsuario == datosUsuario[i][0]) {
			if (contrasenaUsuario == datosUsuario[i][3]) {
				numeroUsuario = i;
				document.getElementById("pantallaDeInicioSesion").style.display = "none";
				document.getElementById("pantallaPrincipal").style.display = "inline";
				document.getElementById("pntEfectivo").style.display = "inline";
			}
		}
	}
}
function recuperarClave(){
	document.getElementById("txtPregunta").value = datosUsuario[i][13];
}