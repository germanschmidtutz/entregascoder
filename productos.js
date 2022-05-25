

const ListaProductos =[];



// clase para crear remeras
class Productos{

    constructor(nombre, precio, stock, id){

        this.nombre = nombre;  
        this.precio= precio;
        this.stock = stock;
        this.id = id;
        ListaProductos.push(this);

    }

    
}

// productos con nombre, precio, stock e id
let remeraRoja = new Productos ("Remera Roja", 4000, 100, 1);

let pantalonNegro = new Productos ("Pantalón Negro", 8000, 75, 2);

let camperaBlanca = new Productos ("Campera Blanca", 15000, 50, 3);






