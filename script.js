
// array de personas vacío
const personas = [];
// se consulta la cant de personas
let cantPersonas = prompt("¿Cuántas personas desea cargar?");


if (isNaN(cantPersonas)){
    alert("No escribiste un número")
}else{
   
    // for para pedir los nombres de la cantidad de las personas indicadas
    for (let i = 1; i <= cantPersonas; i++){
        personas.push(prompt("Decime el nombre de la persona número " + i));
    }
  
    // se da la lista
       alert ("Esta es la lista de personas: \n" + personas.join(", "));
    }






