// compras

const carrito = [];

alert ("Bienvenido/a");



let flag = true;

while (flag){

    let respuesta = prompt("Qué desea hacer?\n1) Ver lista de productos\n2) Comprar\n3) Salir");

switch(respuesta){

    // Mostrar productos
    case "1":
        console.log("*Precios sin IVA");
        for(let index = 0; index < ListaProductos.length; index++){
            console.log (ListaProductos[index] );
        }
            break;

        
      
    // comprar producto
    case "2":
        let id_buscada = parseFloat( prompt("Indique el id del producto que quiere comprar:"));
        Compra(id_buscada);
        break;

    case "3":
        alert("Gracias por utilizar nuestra página");
        flag = false;
        break;

    case null:
        alert("Gracias por utilizar nuestra página");
        flag = false;
        break;

    default :
        alert("No ingresó una opción válida")

        // el flag es para que corte y no siga reproduciéndose, como lo vuelve false, no vuelve a aparecer

}

}



// producto -1 para dejarlo igual que el índice del arreglo

function Compra(idproducto, preciofinal, mensaje){

    if((idproducto -1) > (ListaProductos.length -1)){
        alert("Ese producto no existe")
    }else{


    // buscando producto
    const miProducto = ListaProductos.find( (producto) => producto.id === (idproducto));

    carrito.push(miProducto);
    // sumando iva
    preciofinal = miProducto.precio + miProducto.precio /100 * 21;

    // el renglón de abajo no lo uso pero lo guardo
    // console.log(miProducto.precio);

    // bajando 1 unidad de stock
    miProducto.stock = miProducto.stock -1;

    // mensaje final
    console.log("El precio final del producto " + miProducto.nombre + " es: $" + preciofinal);

    flag=false;
    }

}




