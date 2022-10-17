function aleatorio1(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

function aleatorio2(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

function comprobar(aleatorio1, aleatorio2) {
    num1 = aleatorio1(inferior, superior);
    num2 = aleatorio2(inferior, superior);

}

function mostrar() {
    let nom = document.getElementById('nombre').value;
    let ape = document.getElementById('apellido').value;
    let ed = document.getElementById('edad').value;
    let se = document.getElementById('sexo').value;
    alert('¡Hola, ' + nom + " " + ape + "!");
    alert('edad ingresada: ' + ed + " sexo " + se);
}
if (document.getElementById('robot').checked) {

}