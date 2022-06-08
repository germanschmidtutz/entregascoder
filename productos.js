

const ListaProductos =[];



// clase para crear remeras
class Productos{

    constructor(nombre, precio, imagen, tipo){

        this.nombre = nombre;  
        this.precio= precio;
        this.imagen = imagen;
        this.tipo = tipo;
        ListaProductos.push(this);

    }

    
}

// productos con nombre, precio, imagen y tipo

let producto0 = new Productos ("Remera Roja", 4000, "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw76b44e3e/products/LU_INSS210037/LU_INSS210037-1.JPG", "remera");

let producto1 = new Productos ("Pantalón Negro", 8000, "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw630edaa6/original/90_A81832-1A00908_1D040_10_SlimFitBlackJeans-Jeans-versace-online-store_0_2.jpg?sw=748&sh=1050&sm=fit", "pantalon");

let producto2 = new Productos ("Campera Blanca", 15000, "https://http2.mlstatic.com/D_NQ_NP_695907-MLA40999809773_032020-O.jpg", "campera");

let producto3 = new Productos ("Campera Celeste", 17000, "https://www.weekendpesca.com/wp-content/uploads/2019/12/COLUMBIA-SWITCHBACK-II-MUJER-CELESTE-RL2149-485-600x600.jpg", "campera");

let producto4 = new Productos ("Pantalon Gris", 5000, "https://media.revistagq.com/photos/606490eaa0750e3c87b2af9d/master/w_1600%2Cc_limit/hm%2520pantalon%2520chandal.jpeg", "pantalon");

let producto5 = new Productos ("Remera Azul", 4500, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/685/943/products/e87ab1ea-c5a9-41e6-a7a6-034a8274aaa8-82959f76c126f119d616393610890755-1024-1024.jpeg", "remera");

let producto6 = new Productos ("Campera Negra", 20000, "http://d2r9epyceweg5n.cloudfront.net/stores/066/927/products/campera-california-negra1-645a99dd14e35fe6fb15121967129215-640-0.jpg", "campera");

let producto7 = new Productos ("Remera Blanca", 2900, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCs5FP-J3K_F_U_iPNAQFj7xhadFVRW8-QA&usqp=CAU", "remera");

let producto8 = new Productos ("Remera Verde", 2000, "https://sastreriamilitar.mil.ar/img/p/1/1/5/115-large_default.jpg", "remera");

let producto9 = new Productos ("Pantalón verde", 9000, "https://static3.mujerhoy.com/www/multimedia/202104/05/media/cortadas/pantalon-verde-zara-que-queda-bien-con-todo-hace-mas-delgada-joven-combina-con-todos-los-colores-arrasa-influencers-instagram-1%20(1)-kgjH-U1301045528388V6H-624x936@MujerHoy.jpg", "pantalon");






