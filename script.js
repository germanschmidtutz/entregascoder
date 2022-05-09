// declaracón de variables
let orden = 1;
let nombre;


// comienzo del for

for(orden; orden <=10; orden++){

let nombre = prompt("Decime quién salió en el puesto número: " + orden);

if(isNaN(nombre)){

    console.log(orden + ": " + nombre);
}else{

    alert("Por favor, ingresá un nombre.");
    orden--;
}
}

console.log("Aquí arriba está la tabla de posiciones.");

