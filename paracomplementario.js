let titulo = document.getElementById("titulo");

// identifico a la lista
let listaProductos = document.getElementById("listaProductos");

titulo.innerHTML = "Título modificado, centrado y subrayado con JS 😎";
titulo.style.textAlign = "center";
titulo.style.textDecoration = "underline";

// nuevo arreglo y para agregar cosas con push
let productos = new Array ();
productos.push("Remera");
productos.push("Pantalón");
productos.push("Buzo");
productos.push("Zapatillas");
productos.push("Medias");




// para recorrer el arreglo e invocar a la funcion AgregarProducto
for (let i = 0; i < productos.length ; i++){

    let producto = productos [i];
    AgregarProducto(producto);
}



function AgregarProducto(item){

    // creo elemeto del tipo li
    let li = document.createElement("li");
    // crear su contenido
    li.innerHTML = item;

    // envío a la lista existente en el HTML (ya incorporada en lista)
    listaProductos.appendChild(li);
}


// modificar style de los que estén en la li, con color verde

listaProductos.style.color = "green";
