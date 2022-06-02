// compras

const carrito = [];


        for(let index = 0; index < ListaProductos.length; index++){
            console.log (ListaProductos[index] );
        }
            break;

        
      
   
        let id_buscada = parseFloat( prompt("Indique el id del producto que quiere comprar:"));
        Compra(id_buscada);
        break;


// producto -1 para dejarlo igual que el índice del arreglo

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



    // editado desde DOM


    



