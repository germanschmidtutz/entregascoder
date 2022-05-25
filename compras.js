// compras

const carrito = [];

alert ("Bienvenido/a");



let flag = true;

while (flag){

    let respuesta = prompt("Qué desea hacer?\n1) Ver lista de productos\n2) Comprar\n3) Salir");

switch(respuesta){

    // Mostrar productos
    case "1":

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

function Compra(idproducto){

    if((idproducto -1) > (ListaProductos.length -1)){
        alert("Ese producto no existe")
    }else{
    carrito.push(ListaProductos[(idproducto - 1)])

    console.log("Su compra: ")
    console.log (carrito);
    flag=false;
    }

}

// para sumar el iva
function SumarIva(producto){

    return preciofinal = producto + producto /100 *21;

}


