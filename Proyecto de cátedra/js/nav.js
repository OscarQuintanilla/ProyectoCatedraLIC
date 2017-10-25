window.addEventListener("load", function () {
    
    /* Oculta todas las pantllas */
    document.getElementById("pntCuentas").style.display = "none";
    document.getElementById("pntIngresos").style.display = "none";
    document.getElementById("pntGastos").style.display = "none";
    document.getElementById("pntConfiguracion").style.display = "none";
    document.getElementById("pntEstadisticas").style.display = "none";
    
    document.getElementById("oCuentas").addEventListener("click", function () {
        document.getElementById("pntCuentas").style.display = "inline";
        document.getElementById("pntIngresos").style.display = "none";
        document.getElementById("pntGastos").style.display = "none";
        document.getElementById("pntConfiguracion").style.display = "none";
        document.getElementById("pntEstadisticas").style.display = "none";
    });
    /* Gastos */
    document.getElementById("oGastos").addEventListener("click", function () {
        document.getElementById("pntCuentas").style.display = "none";
        document.getElementById("pntIngresos").style.display = "none";
        document.getElementById("pntGastos").style.display = "inline";
        document.getElementById("pntConfiguracion").style.display = "none";
        document.getElementById("pntEstadisticas").style.display = "none";
    });
    /* Ingresos */
    document.getElementById("oIngresos").addEventListener("click", function () {
        document.getElementById("pntCuentas").style.display = "none";
        document.getElementById("pntIngresos").style.display = "inline";
        document.getElementById("pntGastos").style.display = "none";
        document.getElementById("pntConfiguracion").style.display = "none";
        document.getElementById("pntEstadisticas").style.display = "none";
    });
});
