console.log("hola manola");
let btnResumen = document.getElementById("btnRes");
// console.log(btnResumen);
btnResumen.addEventListener("click", generaResumen);
let btnLimpiar = document.getElementById("btnBorrar");
// console.log(btnResumen);
btnLimpiar.addEventListener("click", limpiarCampos);

function generaResumen() {
    let cantidad = Number(document.getElementById("validationDefault03").value);
    let categoria = document.getElementById("validationDefault04");
    console.log(cantidad);
    console.log(categoria.options[categoria.selectedIndex].text);
    console.log(categoria.options);
    categoria = categoria.options[categoria.selectedIndex].text;
    let valorTicket = 200
    if (isNaN(cantidad) || categoria === "" || cantidad === 0) {
        alert("no se ingresaron todos los datos requeridos");
    }
    else {

        let txtInfo = document.getElementById("txtInfo");
        switch (categoria) {
            case "Estudiante":
                valorTicket = (cantidad * valorTicket) * 0.2;
                break;
            case "Trainee":
                valorTicket = (cantidad * valorTicket) * 0.5;
                break;
            case "Junior":
                valorTicket = (cantidad * valorTicket) * 0.85;
                break;
            default:
                break;
        }
        txtInfo.value = "Total a pagar: $" + valorTicket;
    }
}

function limpiarCampos(){
    let nombre = document.getElementById();
    let apellido = document.getElementById();
    let correo = document.getElementById();
    let cantidad = document.getElementById();
    let categoria  = document.getElementById();
    let info = document.getElementById();
    
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    cantidad.value = "";
    categoria.selectedIndex = 1;
    info.value = "Total a pagar: $";
let}