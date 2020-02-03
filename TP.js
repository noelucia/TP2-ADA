const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
 [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500']],
 [ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500']],
 [ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva']],
 [ 100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200']],
 [ 100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200']],
 [ 100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston']]
]

const precios = [
 [ 'Monitor GPRS 3000', 200 ],
 [ 'Motherboard ASUS 1500', 120 ],
 [ 'Monitor ASC 543', 250 ],
 [ 'Motherboard ASUS 1200', 100 ],
 [ 'Motherboard MZI', 30 ],
 [ 'HDD Toyiva', 90 ],
 [ 'HDD Wezter Dishital', 75 ],
 [ 'RAM Quinston', 110 ],
 [ 'RAM Quinston Fury', 230 ]
];

const sucursales = ['Centro', 'Caballito'];


//1.precioMaquina(componentes): recibe un array de componentes y devuelve el precio de 
//la máquina que se puede armar con esos componentes, que es la suma de los precios
// de cada componente incluido.

/* FUNCIÓN 1*/
const precioMaquina = ([Monitor, Motherboard, HDD, RAM]) => {
    let maquina = 0;
    for (let i = 0; i < precios.length; i++)  {
        if (precios[i][0] == Monitor || precios[i][0] == Motherboard || precios[i][0] == HDD || precios[i][0] == RAM) {
            maquina += precios[i][1];
        }
    }
    return maquina;
}
/* FUNCIÓN 2 */
const cantidadVentasComponente = (componente) => {
    let cantidadVendida = 0;
    for (let i=0; i< ventas.length; i++) {
        for (let j=0; j<ventas[i][6].length; j++ ) {
            if (componente == ventas[i][6][j]) {
                cantidadVendida ++;
            }
        }
    }
    return cantidadVendida;
}
/* FUNCIÓN 4 */
const componenteMasVendido = () => {
    let mf = 1;
    let masVendido = 0;
    let item;
    for (let i = 0; i < ventas.length; i++) {
        for (let j = i; j < ventas.length; j++) {
            if (ventas[i] == ventas[j]) masVendido++;
            if (mf < masVendido) {
                mf = masVendido;
                item = ventas[i];
            }
        }
        masVendido = 0;
    }
    alert(item + " ( " + mf + " veces ) ");
}

//Contraer
//7.ventaPromedio(): Debe retornar el importe promedio por venta,  // primero hago un loop en ventas y otro en ventas
//como un número entero sin decimales redondeado siempre para abajo.
//const ventaPromedio=()=>{  // tengo que hacer dos loops uno en el venta mas grandre para encontrar el array y ahi hacer otro loop en el array mas chiquito
    //for (let i = 0; i < ventas.length; i++){ //y despues tengo que hacer un looop en el array de precio y comparar las posiciones y las sumas para recien tener el precio por posicion
    //} //y despues voy a tener que hacer una division del resultado anterior 
//}
const ventaPromedio=()=> {
    let suma = 0;
    for (let i = 0; i<ventas.length; i++) {
       suma = suma + precioMaquina(ventas[i][6]);
    } 
    return  Math.floor(suma / ventas.length)
}
console.log(ventaPromedio()); // 353


//8.obtenerIdVenta(): Tiene que retornar un número aleatorio entre 100000000 y 999999999
const obtenerIdVenta=()=>{
    let id=Math.floor(Math.random) * (999999999-100000000)+100000000 // math.random es para que tire un numero random , entonces porngo lo limites minimo, maximo y minimo
    return id  
}
console.log(obtenerIdVenta());
//9.agregarVenta(dia, mes, anio, vendedora, sucursal, componentes): 
//recibe por parámetro todos los datos de una venta, y los agrega en el array de ventas. 
//Al igual que las ventas que ya están previamente creadas, 
//además de estos datos necesitamos agregar el primer dato que es un identificador de la venta. 
//Para agregar este dato, tenemos que usar la función desarrollada en el punto anterior obtenerIdVenta

const agregaVentas=(dia, mes, anio, vendedora, sucursal, componentes=[])=>{
    let venta=[];
    let id=obtenerIdVenta();
    venta.push(id);
    if(typeof dia!="number" && typeof mes!="number" && typeof anio!="number"){
        throw "La fecha tiene que estar ingresada con numeros"
    }
    else if (vendedoras.indexOf(vendedora)==-1){
        throw "La vendedora no esta en nuestros registros"
    }
    else if (sucursal.indexOf(sucursal)==-1){
        throw "La sucursal no existe"
    }
    venta.push(dia, mes, anio, vendedora, sucursal, componentes) 
    ventas.push(venta);
    return venta 
}

module.exports={
    vendedoras,
    ventas,
    precios,
    sucursales,
    precioMaquina,
    cantidadVentasComponente,
    componenteMasVendido,
    ventaPromedio,
    obtenerIdVenta,
    agregaVentas,
}


//REDUCE : Permite reducir todos los elementos de mi array en uno solo, sumar

//const miReduce= miArray.reduce((acumulador,elemento)=>{//esto solo trabaja con array, estoy haciendo loop por el array que pongo antes del reduce
   // return acumulador + elemento; //lo que le sumo siempre va a ser el primero del array 
//},0);//aca estoy aclarando que el acumulador empieza en cero 
