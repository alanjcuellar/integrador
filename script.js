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
    let nombre = document.getElementById("validationDefault01");
    let apellido = document.getElementById("validationDefault02");
    let correo = document.getElementById("validationDefaultUsername");
    let cantidad = document.getElementById("validationDefault03");
    let categoria  = document.getElementById("validationDefault04");
    let info = document.getElementById("txtInfo");
    
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    cantidad.value = "";
    categoria.selectedIndex = 1;
    info.value = "Total a pagar: $";
}