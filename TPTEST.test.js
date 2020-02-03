const funciones=require('./TP.js');
const vendodoras=funciones.vendodoras
const ventas=funciones.ventas
const precios=funciones.precios
const sucursales=funciones.sucursales
const precioMaquina=funciones.precioMaquina
const cantidadVentasComponente=funciones.cantidadVentasComponente
const componenteMasVendido=funciones.componenteMasVendid
const ventaPromedio=funciones.ventaPromedio
const obtenerIdVenta=funciones.obtenerIdVenta
const agregaVentas=funciones.agregaVentas

test ('Debe sumar precio de componentes', () => { //1
    expect(precioMaquina("Monitor GPRS 3000", "Motherboard ASUS 1500", "HDD Toyiva", "RAM Quinston")).toBe(520)
});

test ('Debe devolver cantidad de veces que se vendió el componente', () => {//2
    expect(cantidadVentasComponente("Monitor ASC 543")).toBe(3)
});

test ('Debe devolver componente más vendido', () => {//4
    expect(componenteMasVendido()).toMatch("")
});

test('Devolver promedio de ventas' ,()=>{//7
    expect(ventaPromedio()).toBe(353)
});

test ('cargar datos',()=>{ //8
    expect(typeof obtenerIdVenta()).toBe('number') 
});

test('Agregar array dentro de array',()=>{ //9
    expect(agregaVentas( 23, 4, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'])).toStrictEqual(ventas[6])
});
