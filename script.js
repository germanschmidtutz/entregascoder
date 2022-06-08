let arrayProductos = ListaProductos;

function Rellenar_tabla (array){

    // encontrando la tabla
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    //por cada producto que recorre crea un tr
    for (const producto of array){

        // creando un tr
        const tr = document.createElement("tr");

        // haciendo el inner necesario
        tr.innerHTML = `<td><img src='${producto.imagen}'></td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>`

        tbody.appendChild(tr);
    }

}


const storage = JSON.parse(localStorage.getItem("filtro")); 

if(storage){
    arrayProductos = storage;
}



Rellenar_tabla(arrayProductos)


// traer a los radio del html
const input_radio = document.getElementsByClassName("radio");

// recorrer los radio

for (let i = 0; i < input_radio.length ; i ++){
    input_radio[i].addEventListener("click", FiltrarTabla);

}


function FiltrarTabla(evento){
    // console.log(evento.target.value);

    let input_value = evento.target.value.toUpperCase();



    if(input_value != "TODOS"){
        arrayProductos = arrayProductos.filter( (elemento) => {
            return elemento.tipo.toLocaleUpperCase() === input_value
        })
    }else{
        arrayProductos = ListaProductos;
    }

    localStorage.setItem("filtro", JSON.stringify(arrayProductos));

    Rellenar_tabla(arrayProductos);
}