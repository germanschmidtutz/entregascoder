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


    // operador ternario

    arrayProductos = input_value === "TODOS"
        ? ListaProductos 
        : ListaProductos.filter( (elemento) => ( elemento.tipo.toLocaleUpperCase() === input_value ))
        Toastify({
            text: "¡ÚLTIMOS PRODUCTOS EN STOCK!",
            duration: 1000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();;

    // if largo anterior

    // if(input_value != "TODOS"){
    //     arrayProductos = arrayProductos.filter( (elemento) => {
    //         return elemento.tipo.toLocaleUpperCase() === input_value
    //     })
    // }else{
    //     arrayProductos = ListaProductos;
    // }

    localStorage.setItem("filtro", JSON.stringify(arrayProductos));

    Rellenar_tabla(arrayProductos);
}


// desesestructurar
let [prod0, prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9] = ListaProductos;


// probando
console.log(prod0);
console.log(prod1.nombre);

// for (let i = 0; i < ListaProductos.length ; i ++){

//     console.log(ListaProductos[i]);

// }


setTimeout(() => {

    Toastify({
        text: "ÚLTIMOS PRODUCTOS DISPONIBLES",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    
}, 4000);

