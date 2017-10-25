var datosUsuario = [];
var numUsuario = localStorage.getItem("cantidadUsuarios");
//Asociando el boton Registar con las funciones
window.addEventListener("load", function () {
    if (localStorage.getItem("cantidadUsuarios") == null || localStorage.getItem("cantidadUsuarios") == undefined) {
        localStorage.setItem("cantidadUsuarios", 0);
        numUsuario = localStorage.getItem("cantidadUsuarios");
    }    
});

document.getElementById("btnRegistrar").addEventListener("click", function () {
    revisarRelleno(); //Esta función realiza el relleno del arreglo
    if (revisarRelleno()) {
        //alert(numeroUsuario);   
        numUsuario++;
        localStorage.setItem("cantidadUsuarios", parseInt(localStorage.getItem("cantidadUsuarios")) + 1);
        numeroUsuario = localStorage.getItem("cantidadUsuarios");

        reiniciarFormulario();
    }
});
document.getElementById("btnRellenar").addEventListener("click", function () {
    document.getElementById("txtNombre").value = "Oscar David";
    document.getElementById("txtApellido").value = "Quintanilla Rodríguez";
    document.getElementById("txtCorreo").value = "oscar.david.quintanilla@gmail.com";
    document.getElementById("txtContrasena").value = "12345678";
    document.getElementById("txtDUI").value = "12345678-9";
    document.getElementById("txtNIT").value = "1234-123456-123-1";
    document.getElementById("txtCelular").value = "12341234";
    document.getElementById("txtfecha").value = "1998-10-11";
    document.getElementById("txtDepartamento").value = "Departamento";
    document.getElementById("txtMunicipio").value = "Municipio";
    document.getElementById("txtColonia").value = "Colonia";
    document.getElementById("txtCalle").value = "Calle";
    document.getElementById("txtCasa").value = "1";
    document.getElementById("txtRespuesta").value = "Respuesta";
});


function revisarRelleno() {
    //Reguladores
    var nombre = /^[a-zA-Z][a-zA-Z]/;
    var correo = /\@/;
    var contrasena = /\w{8}/;
    var dui = /\d{8}-\d{1}/;
    var nit = /\d{4}-\d{6}-\d{3}-\d{1}/;
    var celular = /\d{8}/;
    var departamento = /[a-zA-Z]/;
    var colonia = /\w/;
    var calle = /\w/;
    var casa = /\d/;
    var respuesta = /\w/;

    datosUsuario[numUsuario] = [];

    /* 
    	0  - Nombres
    	1  - Apellidos
    	2  - Correo
    	3  - Contraseña
    	4  - DUI
    	5  - NIT
    	6  - Celular
    	7  - Fechas
    	8  - Departamento
    	9  - Municipio
    	10 - Colonia
    	11 - Calle
    	12 - Casa
    	13 - Pregunta
    	14 - Respuesta
    	15 - Cuenta nueva o no
    	16 - Efectivo
        17 - Cuentas en el banco (Arreglo con más dimesiones)
    */

    if (document.getElementById("txtNombre").value == "") {
        document.getElementById("txtNombre").style.border = "solid";
        document.getElementById("txtNombre").style.borderWidth = "1px";
        document.getElementById("txtNombre").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtNombre").style.border = "none";
        if (nombre.test(document.getElementById("txtNombre").value)) {
            datosUsuario[numUsuario][0] = document.getElementById("txtNombre").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 0 + "]", datosUsuario[numUsuario][0]);
        }
    }
    if (document.getElementById("txtApellido").value == "") {
        document.getElementById("txtApellido").style.border = "solid";
        document.getElementById("txtApellido").style.borderWidth = "1px";
        document.getElementById("txtApellido").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtApellido").style.border = "none";
        if (nombre.test(document.getElementById("txtApellido").value)) {
            datosUsuario[numUsuario][1] = document.getElementById("txtApellido").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 1 + "]", datosUsuario[numUsuario][1]);
        }
    }
    if (document.getElementById("txtCorreo").value == "") {
        document.getElementById("txtCorreo").style.border = "solid";
        document.getElementById("txtCorreo").style.borderWidth = "1px";
        document.getElementById("txtCorreo").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtCorreo").style.border = "none";
        if (correo.test(document.getElementById("txtCorreo").value)) {
            datosUsuario[numUsuario][2] = document.getElementById("txtCorreo").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 2 + "]", datosUsuario[numUsuario][2]);
        }
    }
    if (document.getElementById("txtContrasena").value == "") {
        document.getElementById("txtContrasena").style.border = "solid";
        document.getElementById("txtContrasena").style.borderWidth = "1px";
        document.getElementById("txtContrasena").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtContrasena").style.border = "none";
        if (contrasena.test(document.getElementById("txtContrasena").value)) {
            datosUsuario[numUsuario][3] = document.getElementById("txtContrasena").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 3 + "]", datosUsuario[numUsuario][3]);
        }
    }
    if (document.getElementById("txtDUI").value == "") {
        document.getElementById("txtDUI").style.border = "solid";
        document.getElementById("txtDUI").style.borderWidth = "1px";
        document.getElementById("txtDUI").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtDUI").style.border = "none";
        if (dui.test(document.getElementById("txtDUI").value)) {
            datosUsuario[numUsuario][4] = document.getElementById("txtDUI").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 4 + "]", datosUsuario[numUsuario][4]);
        }
    }
    if (document.getElementById("txtNIT").value == "") {
        document.getElementById("txtNIT").style.border = "solid";
        document.getElementById("txtNIT").style.borderWidth = "1px";
        document.getElementById("txtNIT").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtNIT").style.border = "none";
        if (nit.test(document.getElementById("txtNIT").value)) {
            datosUsuario[numUsuario][5] = document.getElementById("txtNIT").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 5 + "]", datosUsuario[numUsuario][5]);
        }
    }
    if (document.getElementById("txtCelular").value == "") {
        document.getElementById("txtCelular").style.border = "solid";
        document.getElementById("txtCelular").style.borderWidth = "1px";
        document.getElementById("txtCelular").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtCelular").style.border = "none";
        if (celular.test(document.getElementById("txtCelular").value)) {
            datosUsuario[numUsuario][6] = document.getElementById("txtCelular").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 6 + "]", datosUsuario[numUsuario][6]);
        }
    }
    if (document.getElementById("txtfecha").value == "") {
        document.getElementById("txtfecha").style.border = "solid";
        document.getElementById("txtfecha").style.borderWidth = "1px";
        document.getElementById("txtfecha").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtfecha").style.border = "none";
        //Agregar Regulador de la fecha
        datosUsuario[numUsuario][7] = document.getElementById("txtfecha").value;
        localStorage.setItem("datosUsuario[" + numUsuario + "][" + 7 + "]", datosUsuario[numUsuario][7]);
    }
    if (document.getElementById("txtDepartamento").value == "") {
        document.getElementById("txtDepartamento").style.border = "solid";
        document.getElementById("txtDepartamento").style.borderWidth = "1px";
        document.getElementById("txtDepartamento").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtDepartamento").style.border = "none";
        if (departamento.test(document.getElementById("txtDepartamento").value)) {
            datosUsuario[numUsuario][8] = document.getElementById("txtDepartamento").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 8 + "]", datosUsuario[numUsuario][8]);
        }
    }
    if (document.getElementById("txtMunicipio").value == "") {
        document.getElementById("txtMunicipio").style.border = "solid";
        document.getElementById("txtMunicipio").style.borderWidth = "1px";
        document.getElementById("txtMunicipio").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtMunicipio").style.border = "none";
        if (departamento.test(document.getElementById("txtMunicipio").value)) {
            datosUsuario[numUsuario][9] = document.getElementById("txtMunicipio").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 9 + "]", datosUsuario[numUsuario][9]);
        }
    }
    if (document.getElementById("txtColonia").value == "") {
        document.getElementById("txtColonia").style.border = "solid";
        document.getElementById("txtColonia").style.borderWidth = "1px";
        document.getElementById("txtColonia").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtColonia").style.border = "none";
        if (colonia.test(document.getElementById("txtColonia").value)) {
            datosUsuario[numUsuario][10] = document.getElementById("txtColonia").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 10 + "]", datosUsuario[numUsuario][10]);
        }
    }
    if (document.getElementById("txtCalle").value == "") {
        document.getElementById("txtCalle").style.border = "solid";
        document.getElementById("txtCalle").style.borderWidth = "1px";
        document.getElementById("txtCalle").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtCalle").style.border = "none";
        if (calle.test(document.getElementById("txtCalle").value)) {
            datosUsuario[numUsuario][11] = document.getElementById("txtCalle").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 11 + "]", datosUsuario[numUsuario][11]);
        }
    }
    if (document.getElementById("txtCasa").value == "") {
        document.getElementById("txtCasa").style.border = "solid";
        document.getElementById("txtCasa").style.borderWidth = "1px";
        document.getElementById("txtCasa").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtCasa").style.border = "none";
        if (casa.test(document.getElementById("txtCasa").value)) {
            datosUsuario[numUsuario][12] = document.getElementById("txtCasa").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 12 + "]", datosUsuario[numUsuario][12]);
        }
    }
    if (document.getElementById("pregunta").value == "") {
        document.getElementById("pregunta").style.border = "solid";
        document.getElementById("pregunta").style.borderWidth = "1px";
        document.getElementById("pregunta").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("pregunta").style.border = "none";
        datosUsuario[numUsuario][13] = document.getElementById("pregunta").value;
        localStorage.setItem("datosUsuario[" + numUsuario + "][" + 13 + "]", datosUsuario[numUsuario][13]);

    }
    if (document.getElementById("txtRespuesta").value == "") {
        document.getElementById("txtRespuesta").style.border = "solid";
        document.getElementById("txtRespuesta").style.borderWidth = "1px";
        document.getElementById("txtRespuesta").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("txtRespuesta").style.border = "none";
        if (respuesta.test(document.getElementById("txtRespuesta").value)) {
            datosUsuario[numUsuario][14] = document.getElementById("txtRespuesta").value;
            localStorage.setItem("datosUsuario[" + numUsuario + "][" + 14 + "]", datosUsuario[numUsuario][14]);
        }
    }
    localStorage.setItem("datosUsuario[" + numUsuario + "][" + 15 + "]", "nueva");
    return true;
}

function imprimir() {
    for (var i = 0; i < datosUsuario.length; i++) {
        for (var j = 0; j < 15; j++) {
            document.write(j + ": " + datosUsuario[i][j] + "======================");
        }
    }
}

function arregloLleno() {
    var bandera = true;
    for (var i = 0; i < localStorage.getItem("cantidadUsuarios"); i++) {
        console.info("i " + i);
        for (var j = 0; j < 15; j++) {
            console.info("j " + j);
            if (localStorage.getItem("datosUsuario[i][j]") != undefined) {
                bandera = false;
            }
        }
    }
    return bandera;
}

function reiniciarFormulario() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtContrasena").value = "";
    document.getElementById("txtDUI").value = "";
    document.getElementById("txtNIT").value = "";
    document.getElementById("txtCelular").value = "";
    document.getElementById("txtfecha").value = "";
    document.getElementById("txtDepartamento").value = "";
    document.getElementById("txtMunicipio").value = "";
    document.getElementById("txtColonia").value = "";
    document.getElementById("txtCalle").value = "";
    document.getElementById("txtCasa").value = "";
    document.getElementById("txtRespuesta").value = "";
}

/* LocalStorage */
