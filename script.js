// variables


let precioRemera = 3000;

let tieneCupon = prompt("Tenés un cupón de descuento para esta remera? Si/No");
tieneCupon = tieneCupon.toUpperCase();

function compra(precioremera, tieneCupon) {

  if (tieneCupon == "SI") {
    let cupon = prompt("Ingresá tu cupón");
    cupon = cupon.toUpperCase();

    if (cupon == "DESCUENTO") {
      let preciofinal = precioremera - 200;
      alert("Descuento aplicado. El precio final es: $" + preciofinal);

    }else{
        alert("Cupón inválido")

}
  } else if (tieneCupon == "NO"){
    alert("El precio final es $" + precioRemera);

  } else{
        alert("Solamente podés responder Si o no a esta pregunta")}
        
}

compra(precioRemera, tieneCupon);
