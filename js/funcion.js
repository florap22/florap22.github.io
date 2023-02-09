/*botones*/ 
/*cambiar color de fondo*/ 
document.getElementById('boton_color').addEventListener('click',function(){
    document.body.style.backgroundColor = '#A68044';
})

/*volver al color que teniamos de fondo*/
document.getElementById('boton_default').addEventListener('click',function(){
    document.body.style.backgroundColor = 'white';
})

/*oculta contacto*/
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
/*oculta "sobre mi" */
function myFunction1() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
/*mas experiecias*/
function myFunction2() {
    document.getElementById("demo").innerHTML = "Buena presencia.Gestión en el pago de impuestos.Trato formal";
  }
