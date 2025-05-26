let datosCargados = false;

let cli = localStorage.getItem('lSClientes');
let art = localStorage.getItem('lSArticulos');
let prov = localStorage.getItem('lSProveedores');
let cat = localStorage.getItem('lSCategorias');
let usu = localStorage.getItem('lSUsuarios');
let comp = localStorage.getItem('lSCompras');
let vent = localStorage.getItem('lSVentas');
let timb = localStorage.getItem('lSTimbrados');
let plan = localStorage.getItem('lSPlanillas');
let tipV = localStorage.getItem('lSTiposValor');

if (cli && art && prov && cat && usu && comp && vent && timb && plan && tipV) {
    datosCargados = true;
}

let bDClientes = [
    {
        codigoCliente: 0,
        ciCliente: 44444401,
        nombreCliente: 'CLIENTE DEL SALON',
        apellidoCliente: '',
        sexoCliente: 'Masculino',
        fechaNCliente: '2001/01/01',
        direccionCliente: 'Av. Pinedo, Concepción',
        telefono: '0976506847',
        rucCliente: '44444401-7',
        nombreRazonSocial: 'CLIENTE DEL SALON',
        fechaCreacionCliente: '2024-04-21T20:00',
        fechaModificacionCliente: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigoCliente: 1,
        ciCliente: 5698969,
        nombreCliente: 'CARLOS',
        apellidoCliente: 'GÓMEZ',
        sexoCliente: 'Masculino',
        fechaNCliente: '1990/07/24',
        direccionCliente: 'Calle Boquerón 123',
        telefono: '0971772754',
        rucCliente: '5698969-5',
        nombreRazonSocial: 'GÓMEZ, CARLOS',
        fechaCreacionCliente: '2025-04-21T20:00',
        fechaModificacionCliente: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigoCliente: 2,
        ciCliente: 4789563,
        nombreCliente: 'ANA',
        apellidoCliente: 'RODRÍGUEZ',
        sexoCliente: 'Femenino',
        fechaNCliente: '1995/12/15',
        direccionCliente: 'Av. San Martín 456',
        telefono: '0976506847',
        rucCliente: '4789563-8',
        nombreRazonSocial: 'RODRÍGUEZ, ANA',
        fechaCreacionCliente: '2025-04-21T20:00',
        fechaModificacionCliente: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigoCliente: 3,
        ciCliente: 7852369,
        nombreCliente: 'MIGUEL',
        apellidoCliente: 'FERNÁNDEZ',
        sexoCliente: 'Masculino',
        fechaNCliente: '1988/08/30',
        direccionCliente: 'Calle 25 de Mayo 789',
        telefono: '0976506847',
        rucCliente: '7852369-2',
        nombreRazonSocial: 'FERNÁNDEZ, MIGUEL',
        fechaCreacionCliente: '2025-04-21T20:00',
        fechaModificacionCliente: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigoCliente: 4,
        ciCliente: 6358745,
        nombreCliente: 'SOFÍA',
        apellidoCliente: 'MARTÍNEZ',
        sexoCliente: 'Femenino',
        fechaNCliente: '1990/04/05',
        direccionCliente: 'Calle Rosas 234',
        telefono: '0976506847',
        rucCliente: '6358745-3',
        nombreRazonSocial: 'MARTÍNEZ, SOFÍA',
        fechaCreacionCliente: '2025-04-21T20:00',
        fechaModificacionCliente: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigoCliente: 5,
        ciCliente: 3652147,
        nombreCliente: 'JOSÉ',
        apellidoCliente: 'LÓPEZ',
        sexoCliente: 'Masculino',
        fechaNCliente: '1976/10/19',
        direccionCliente: 'Av. Libertador 567',
        telefono: '0976506847',
        rucCliente: '3652147-6',
        nombreRazonSocial: 'LÓPEZ, JOSÉ',
        fechaCreacionCliente: '2025-04-21T20:00',
        fechaModificacionCliente: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigoCliente: 6,
        ciCliente: 4587962,
        nombreCliente: 'LAURA',
        apellidoCliente: 'PÉREZ',
        sexoCliente: 'Femenino',
        fechaNCliente: '1983/03/28',
        direccionCliente: 'Calle Rivadavia 890',
        telefono: '0976506847',
        rucCliente: '4587962-1',
        nombreRazonSocial: 'PÉREZ, LAURA',
        fechaCreacionCliente: '2025-04-21T20:00',
        fechaModificacionCliente: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigoCliente: 7,
        ciCliente: 369852,
        nombreCliente: 'DAVID',
        apellidoCliente: 'GONZÁLEZ',
        sexoCliente: 'Masculino',
        fechaNCliente: '1992/07/11',
        direccionCliente: 'Av. Independencia 123',
        telefono: '0976506847',
        rucCliente: '369852-4',
        nombreRazonSocial: 'GONZÁLEZ, DAVID',
        fechaCreacionCliente: '2025-04-21T20:00',
        fechaModificacionCliente: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigoCliente: 8,
        ciCliente: 753951,
        nombreCliente: 'MARÍA',
        apellidoCliente: 'FERNÁNDEZ',
        sexoCliente: 'Femenino',
        fechaNCliente: '1994/09/02',
        direccionCliente: 'Calle España 456',
        telefono: '0976506847',
        rucCliente: '753951-7',
        nombreRazonSocial: 'FERNÁNDEZ, MARÍA',
        fechaCreacionCliente: '2025-04-21T20:00',
        fechaModificacionCliente: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigoCliente: 9,
        ciCliente: 123456,
        nombreCliente: 'LUIS',
        apellidoCliente: 'RAMÍREZ',
        sexoCliente: 'Masculino',
        fechaNCliente: '1998/11/24',
        direccionCliente: 'Av. Brasil 789',
        telefono: '0976506847',
        rucCliente: '123456-0',
        nombreRazonSocial: 'RAMÍREZ, LUIS',
        fechaCreacionCliente: '2025-04-21T20:00',
        fechaModificacionCliente: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    }
];

let bDArticulos = [
    {
        codigo_art: 1,
        codBarras_art: '1001',
        nombre_art: 'MARGARITA',
        descripcion_art: 'PIZZA CON SALSA DE TOMATE, MOZZARELLA Y ALBAHACA',
        categoria_art: 'PIZZAS',
        stock_art: 50,
        precio_art: 45000,
        proveedor_art: 'INGREDIENTES DEL NORTE',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 2,
        codBarras_art: '1002',
        nombre_art: 'PEPPERONI',
        descripcion_art: 'PIZZA CON SALSA DE TOMATE, MOZZARELLA Y PEPPERONI',
        categoria_art: 'PIZZAS',
        stock_art: 40,
        precio_art: 50000,
        proveedor_art: 'SUMINISTROS ALIMENTICIOS',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 3,
        codBarras_art: '1003',
        nombre_art: 'COCA-COLA 2L',
        descripcion_art: 'BEBIDA GASEOSA COCA-COLA, BOTELLA DE 2 LITROS',
        categoria_art: 'BEBIDAS',
        stock_art: 100,
        precio_art: 10000,
        proveedor_art: 'DISTRIBUIDORA BEBIDAS SA',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 4,
        codBarras_art: '1004',
        nombre_art: 'MOZZARELLA',
        descripcion_art: 'PIZZA DE MOZZARELLA',
        categoria_art: 'ENTRADAS',
        stock_art: 30,
        precio_art: 25000,
        proveedor_art: 'INGREDIENTES DEL NORTE',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 5,
        codBarras_art: '1005',
        nombre_art: 'CUATRO QUESOS',
        descripcion_art: 'PIZZA CON MOZZARELLA, PARMESANO, GORGONZOLA Y CHEDDAR',
        categoria_art: 'PIZZAS',
        stock_art: 35,
        precio_art: 55000,
        proveedor_art: 'SUMINISTROS ALIMENTICIOS',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 6,
        codBarras_art: '1006',
        nombre_art: 'KATUPYRY',
        descripcion_art: 'QUESO KATUPYRY',
        categoria_art: 'INGREDIENTES',
        stock_art: 35,
        precio_art: 130000,
        proveedor_art: 'SUMINISTROS ALIMENTICIOS',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 7,
        codBarras_art: '1007',
        nombre_art: 'HELADO DE VAINILLA',
        descripcion_art: 'POSTRE DE HELADO DE VAINILLA, 500 ML',
        categoria_art: 'POSTRES',
        stock_art: 20,
        precio_art: 15000,
        proveedor_art: 'DISTRIBUIDORA BEBIDAS SA',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 7,
        codBarras_art: '1007',
        nombre_art: 'AGUA MINERAL 500ML',
        descripcion_art: 'BOTELLA DE AGUA MINERAL SIN GAS, 500 ML',
        categoria_art: 'BEBIDAS',
        stock_art: 80,
        precio_art: 5000,
        proveedor_art: 'DISTRIBUIDORA BEBIDAS SA',
        iva_art: 'exenta',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 8,
        codBarras_art: '1008',
        nombre_art: 'HAWAIANA',
        descripcion_art: 'PIZZA CON SALSA DE TOMATE, MOZZARELLA, JAMÓN Y PIÑA',
        categoria_art: 'PIZZAS',
        stock_art: 45,
        precio_art: 48000,
        proveedor_art: 'INGREDIENTES DEL NORTE',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 9,
        codBarras_art: '1009',
        nombre_art: 'TIRAMISÚ',
        descripcion_art: 'POSTRE ITALIANO CON CAFÉ, MASCARPONE Y CACAO',
        categoria_art: 'POSTRES',
        stock_art: 15,
        precio_art: 20000,
        proveedor_art: 'SUMINISTROS ALIMENTICIOS',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 10,
        codBarras_art: '1010',
        nombre_art: 'ALITAS BBQ',
        descripcion_art: 'ALITAS DE POLLO CON SALSA BARBACOA, 8 UNIDADES',
        categoria_art: 'ENTRADAS',
        stock_art: 25,
        precio_art: 30000,
        proveedor_art: 'INGREDIENTES DEL NORTE',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 11,
        codBarras_art: '1011',
        nombre_art: 'JUGO DE NARANJA 1L',
        descripcion_art: 'JUGO NATURAL DE NARANJA, BOTELLA DE 1 LITRO',
        categoria_art: 'BEBIDAS',
        stock_art: 60,
        precio_art: 12000,
        proveedor_art: 'DISTRIBUIDORA BEBIDAS SA',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 12,
        codBarras_art: '1012',
        nombre_art: 'HARINA',
        descripcion_art: 'HARINA',
        categoria_art: 'INGREDIENTES',
        stock_art: 60,
        precio_art: 12000,
        proveedor_art: 'INGREDIENTES DEL NORTE',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 13,
        codBarras_art: '1013',
        nombre_art: 'ACEITE GIRASOL',
        descripcion_art: 'ACEITE GIRASOL',
        categoria_art: 'BEBIDAS',
        stock_art: 60,
        precio_art: 12000,
        proveedor_art: 'DISTRIBUIDORA BEBIDAS SA',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 14,
        codBarras_art: '1014',
        nombre_art: 'LEVADURA FRESCA',
        descripcion_art: 'LEVADURA FRESCA',
        categoria_art: 'INGREDIENTES',
        stock_art: 30,
        precio_art: 8000,
        proveedor_art: 'INGREDIENTES DEL NORTE',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
    {
        codigo_art: 15,
        codBarras_art: '1015',
        nombre_art: 'ORÉGANO',
        descripcion_art: 'ORÉGANO',
        categoria_art: 'INGREDIENTES',
        stock_art: 60,
        precio_art: 12000,
        proveedor_art: 'INGREDIENTES DEL NORTE',
        iva_art: '10%',
        estado_art: 'Activo',
        fecha_creacion_art: '2024-04-21T20:00',
        fecha_modificacion_art: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: 'admin'
    },
];

let bDProveedores = [
    {
        codProveedor: 1,
        nomProveedor: 'INGREDIENTES DEL NORTE',
        rucProveedor: '80089369-2',
        dirProveedor: 'Av. Pinedo 123, Concepción',
        telProveedor: '0981234567',
        correoProveedor: 'ventas@ingredientesnorte.com',
        estadoProveedor: 'Activo',
        fechaCreacionProveedor: '2024-06-10T11:00',
        fechaModificacionProveedor: '',
        usuarioCreacionProveedor: 'admin',
        usuarioModificacionProveedor: ''
    },
    {
        codProveedor: 2,
        nomProveedor: 'SUMINISTROS ALIMENTICIOS',
        rucProveedor: '80005686-1',
        dirProveedor: 'Calle Boquerón 456, Asunción',
        telProveedor: '0987654321',
        correoProveedor: 'contacto@suministrosalim.com',
        estadoProveedor: 'Activo',
        fechaCreacionProveedor: '2024-06-10T11:00',
        fechaModificacionProveedor: '',
        usuarioCreacionProveedor: 'admin',
        usuarioModificacionProveedor: ''
    },
    {
        codProveedor: 3,
        nomProveedor: 'DISTRIBUIDORA BEBIDAS SA',
        rucProveedor: '80063693-9',
        dirProveedor: 'Av. San Martín 789, Asunción',
        telProveedor: '0971123456',
        correoProveedor: 'info@distbebidassa.com',
        estadoProveedor: 'Activo',
        fechaCreacionProveedor: '2024-06-10T11:00',
        fechaModificacionProveedor: '',
        usuarioCreacionProveedor: 'admin',
        usuarioModificacionProveedor: ''
    },
    {
        codProveedor: 4,
        nomProveedor: 'PRODUCTOS FRESCOS PY',
        rucProveedor: '80046593-5',
        dirProveedor: 'Calle 25 de Mayo 234, Concepción',
        telProveedor: '0982345678',
        correoProveedor: 'ventas@frescospy.com',
        estadoProveedor: 'Activo',
        fechaCreacionProveedor: '2024-06-10T11:00',
        fechaModificacionProveedor: '',
        usuarioCreacionProveedor: 'admin',
        usuarioModificacionProveedor: ''
    },
    {
        codProveedor: 5,
        nomProveedor: 'ALMACEN GOURMET',
        rucProveedor: '6966693-2',
        dirProveedor: 'Av. Independencia 567, Asunción',
        telProveedor: '0973456789',
        correoProveedor: 'contacto@almacengourmet.com',
        estadoProveedor: 'Activo',
        fechaCreacionProveedor: '2024-06-10T11:00',
        fechaModificacionProveedor: '',
        usuarioCreacionProveedor: 'admin',
        usuarioModificacionProveedor: ''
    }
];

let bDCategorias = [
    {
        codigo: 1,
        categoria: 'PIZZAS',
        estado: 'Activo',
        fechaCreacion: '2024-04-21T20:00',
        fechaModificacion: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigo: 2,
        categoria: 'BEBIDAS',
        estado: 'Activo',
        fechaCreacion: '2024-04-21T20:00',
        fechaModificacion: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigo: 3,
        categoria: 'ENTRADAS',
        estado: 'Activo',
        fechaCreacion: '2024-04-21T20:00',
        fechaModificacion: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigo: 4,
        categoria: 'POSTRES',
        estado: 'Activo',
        fechaCreacion: '2024-04-21T20:00',
        fechaModificacion: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigo: 5,
        categoria: 'INGREDIENTES',
        estado: 'Activo',
        fechaCreacion: '2024-04-21T20:00',
        fechaModificacion: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    }
];

let bDUsuarios = [
    {
        codigo: 1,
        nombre: 'LUCAS',
        apellido: 'AGUERO',
        usuario: 'lucaguer',
        correo: 'lucasguero914@gmail.com',
        telefono: '0983198761',
        contraseña: 'lucas1234',
        rol: 'Admin',
        estado: 'Activo',
        fechaCreacion: '2025-04-21T20:00',
        fechaModificacion: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigo: 2,
        nombre: 'DIEGO JAVIER',
        apellido: 'LESME',
        usuario: 'dlesme',
        correo: 'diegolesme@gmail.com',
        telefono: '0963536365',
        contraseña: '12345678',
        rol: 'Stock',
        estado: 'Activo',
        fechaCreacion: '2024-04-21T20:00',
        fechaModificacion: '2024-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigo: 3,
        nombre: 'JOSE',
        apellido: 'LARREA',
        usuario: 'larreajose',
        correo: 'joselarrea12@gmail.com',
        telefono: '0983198761',
        contraseña: '12345678',
        rol: 'Cajero',
        estado: 'Activo',
        fechaCreacion: '2025-04-21T20:00',
        fechaModificacion: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    },
    {
        codigo: 4,
        nombre: 'MATIAS',
        apellido: 'ECHAGUE',
        usuario: 'echague',
        correo: 'matiasechague12@gmail.com',
        telefono: '0983198761',
        contraseña: '12345678',
        rol: 'Cajero',
        estado: 'Activo',
        fechaCreacion: '2025-04-21T20:00',
        fechaModificacion: '2025-04-21T20:00',
        usuarioCreacion: 'admin',
        usuarioModificacion: ''
    }
];

let bDCompras = [
    {
        codCompra: 1,
        codProveedor: 1,
        codArtCompra: [1, 2, 3],
        precioUnitCompra: [40000, 45000, 8000],
        cantArtCompra: [10, 10, 50],
        ivaArtCompra: ['10%', '10%', '10%'],
        numTimbradoCompra: '17501562',
        numFacturaCompra: '001-001-0000001',
        fechaComprobante: '2024-05-26',
        nombreRazonSocialCompra: 'INGREDIENTES DEL NORTE',
        rucCompra: '80089369-2',
        condicionCompra: 'Contado',
        estadoCompra: true,
        fechaHoraCreacionCompra: '2024-05-26T21:21',
        usuarioCreacionCompra: 'admin'
    }
];

let bDVentas = [
    {
        codVenta: 1,
        codCliente: 1,
        fechaVenta: '2024-05-26',
        codArt: [1, 3, 4],
        codBarrasArt: ['1001', '1003', '1004'],
        precioUnit: [45000, 10000, 25000],
        cantArt: [2, 1, 1],
        tipoIva: ['10%', '10%', '10%'],
        numTimbrado: '17501562',
        numSucursal: '001',
        numCaja: '001',
        numFactura: '0000001',
        nombreRazonSocial: 'GÓMEZ, CARLOS',
        ruc: '5698969-5',
        condicionVenta: 'Contado',
        metodoPago: ['Efectivo'],
        montoMetodoPago: [80000],
        numPlanilla: 1,
        estadoVenta: true,
        estadoFactura: true,
        fechaHoraCreacion: '2024-05-26T21:21',
        usuarioCreacion: 'admin'
    },
    {
        codVenta: 2,
        codCliente: 2,
        fechaVenta: '2024-05-26',
        codArt: [2, 7],
        codBarrasArt: ['1002', '1007'],
        precioUnit: [50000, 5000],
        cantArt: [1, 2],
        tipoIva: ['10%', 'exenta'],
        numTimbrado: '17501563',
        numSucursal: '001',
        numCaja: '001',
        numFactura: '0000002',
        nombreRazonSocial: 'RODRÍGUEZ, ANA',
        ruc: '4789563-8',
        condicionVenta: 'Contado',
        metodoPago: ['Tarjeta Debito'],
        montoMetodoPago: [60000],
        numPlanilla: 2,
        estadoVenta: true,
        estadoFactura: true,
        fechaHoraCreacion: '2024-05-27T10:15',
        usuarioCreacion: 'admin'
    },
    {
        codVenta: 3,
        codCliente: 3,
        fechaVenta: '2024-05-26',
        codArt: [5, 6],
        codBarrasArt: ['1005', '1006'],
        precioUnit: [55000, 15000],
        cantArt: [1, 1],
        tipoIva: ['10%', '10%'],
        numTimbrado: '17501562',
        numSucursal: '001',
        numCaja: '001',
        numFactura: '0000003',
        nombreRazonSocial: 'FERNÁNDEZ, MIGUEL',
        ruc: '7852369-2',
        condicionVenta: 'Credito',
        metodoPago: ['Transferencia'],
        montoMetodoPago: [70000],
        numPlanilla: 2,
        estadoVenta: true,
        estadoFactura: true,
        fechaHoraCreacion: '2024-05-28T14:30',
        usuarioCreacion: 'admin'
    },
    {
        codVenta: 4,
        codCliente: 4,
        fechaVenta: '2024-05-26',
        codArt: [8, 10],
        codBarrasArt: ['1008', '1010'],
        precioUnit: [48000, 30000],
        cantArt: [2, 1],
        tipoIva: ['10%', '10%'],
        numTimbrado: '17501563',
        numSucursal: '001',
        numCaja: '001',
        numFactura: '0000004',
        nombreRazonSocial: 'MARTÍNEZ, SOFÍA',
        ruc: '6358745-3',
        condicionVenta: 'Contado',
        metodoPago: ['Tarjeta Credito'],
        montoMetodoPago: [126000],
        numPlanilla: 2,
        estadoVenta: true,
        estadoFactura: true,
        fechaHoraCreacion: '2024-05-29T08:45',
        usuarioCreacion: 'admin'
    },
    {
        codVenta: 5,
        codCliente: 5,
        fechaVenta: '2024-05-26',
        codArt: [1, 9],
        codBarrasArt: ['1001', '1009'],
        precioUnit: [45000, 20000],
        cantArt: [1, 1],
        tipoIva: ['10%', '10%'],
        numTimbrado: '17501562',
        numSucursal: '001',
        numCaja: '001',
        numFactura: '0000005',
        nombreRazonSocial: 'LÓPEZ, JOSÉ',
        ruc: '3652147-6',
        condicionVenta: 'Contado',
        metodoPago: ['Efectivo'],
        montoMetodoPago: [65000],
        numPlanilla: 2,
        estadoVenta: true,
        estadoFactura: true,
        fechaHoraCreacion: '2024-05-30T17:00',
        usuarioCreacion: 'admin'
    }
];

let bDTimbrados = [
    {
        codigo: 1,
        numTimbrado: '17501562',
        inicioVigencia: '2023-05-20',
        finVigencia: '2024-05-31',
        numSucursal: '001',
        numCaja: '001',
        inicioNumFactura: '0000000',
        finNumFactura: '0001000',
        fechaHoraCreacion: '2023-05-20T07:00',
        usuarioCreacion: 'admin'
    },
    {
        codigo: 2,
        numTimbrado: '17501563',
        inicioVigencia: '2024-05-20',
        finVigencia: '2025-05-31',
        numSucursal: '001',
        numCaja: '001',
        inicioNumFactura: '0000000',
        finNumFactura: '0001000',
        fechaHoraCreacion: '2024-05-20T07:15',
        usuarioCreacion: 'admin'
    }
];

let bDPlanillas = [
    {
        codPlanilla: 0,
        numPlanilla: 1,
        fechaHoraApertura: '2024-05-20T07:00',
        fechaHoraCierre: '2024-05-20T20:00',
        fechaHoraCreacion: '2024-05-20T07:00',
        cajero: 'larreajose',
        usuarioCreacion: 'admin',
        usuarioReapertura: ''
    },
    {
        codPlanilla: 1,
        numPlanilla: 2,
        fechaHoraApertura: '2024-05-21T07:00',
        fechaHoraCierre: '2024-05-21T20:00',
        fechaHoraCreacion: '2024-05-21T07:00',
        cajero: 'echague',
        usuarioCreacion: 'admin',
        usuarioReapertura: ''
    }
];

let bDTiposValor = [
    {
        codValor: 1,
        valor: 'Efectivo',
        fechaCreacion: '2024-06-09T12:08',
        usuarioCreacion: 'admin'
    },
    {
        codValor: 2,
        valor: 'Tarjeta Debito',
        fechaCreacion: '2024-06-09T12:08',
        usuarioCreacion: 'admin'
    },
    {
        codValor: 3,
        valor: 'Tarjeta Credito',
        fechaCreacion: '2024-06-09T12:08',
        usuarioCreacion: 'admin'
    },
    {
        codValor: 4,
        valor: 'Cheque',
        fechaCreacion: '2024-06-09T12:08',
        usuarioCreacion: 'admin'
    },
    {
        codValor: 5,
        valor: 'Transferencia',
        fechaCreacion: '2024-06-09T12:08',
        usuarioCreacion: 'admin'
    }
];

if (datosCargados == false) {
    localStorage.setItem('lSClientes', JSON.stringify(bDClientes));
    localStorage.setItem('lSArticulos', JSON.stringify(bDArticulos));
    localStorage.setItem('lSProveedores', JSON.stringify(bDProveedores));
    localStorage.setItem('lSCategorias', JSON.stringify(bDCategorias));
    localStorage.setItem('lSUsuarios', JSON.stringify(bDUsuarios));
    localStorage.setItem('lSCompras', JSON.stringify(bDCompras));
    localStorage.setItem('lSVentas', JSON.stringify(bDVentas));
    localStorage.setItem('lSTimbrados', JSON.stringify(bDTimbrados));
    localStorage.setItem('lSPlanillas', JSON.stringify(bDPlanillas));
    localStorage.setItem('lSTiposValor', JSON.stringify(bDTiposValor));
}

function restablecerBD() {
    localStorage.setItem('lSClientes', JSON.stringify(bDClientes));
    localStorage.setItem('lSArticulos', JSON.stringify(bDArticulos));
    localStorage.setItem('lSProveedores', JSON.stringify(bDProveedores));
    localStorage.setItem('lSCategorias', JSON.stringify(bDCategorias));
    localStorage.setItem('lSUsuarios', JSON.stringify(bDUsuarios));
    localStorage.setItem('lSCompras', JSON.stringify(bDCompras));
    localStorage.setItem('lSVentas', JSON.stringify(bDVentas));
    localStorage.setItem('lSTimbrados', JSON.stringify(bDTimbrados));
    localStorage.setItem('lSPlanillas', JSON.stringify(bDPlanillas));
    localStorage.setItem('lSTiposValor', JSON.stringify(bDTiposValor));
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Base de datos restablecida",
        showConfirmButton: false,
        timer: 1500
    });
}

function limpiarBD() {
    localStorage.removeItem('lSClientes');
    localStorage.removeItem('lSArticulos');
    localStorage.removeItem('lSProveedores');
    localStorage.removeItem('lSCategorias');
    localStorage.removeItem('lSUsuarios');
    localStorage.removeItem('lSCompras');
    localStorage.removeItem('lSVentas');
    localStorage.removeItem('lSTimbrados');
    localStorage.removeItem('lSPlanillas');
    localStorage.removeItem('lSTiposValor');
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Base de datos limpiada",
        showConfirmButton: false,
        timer: 1500
    });
}

function mostrarBD() {
    Swal.fire({
        title: 'Seleccionar tabla',
        input: 'select',
        inputOptions: {
            'lSUsuarios': 'Usuarios',
            'lSClientes': 'Clientes',
            'lSArticulos': 'Artículos',
            'lSProveedores': 'Proveedores',
            'lSCategorias': 'Categorías',
            'lSCompras': 'Compras',
            'lSVentas': 'Ventas',
            'lSTimbrados': 'Timbrados',
            'lSPlanillas': 'Planillas',
            'lSTiposValor': 'Tipos de Valor'
        },
        
        inputPlaceholder: 'Seleccione una tabla',
        showCancelButton: true,
        confirmButtonText: 'Mostrar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
            if (!value) {
                return '¡Debes seleccionar una tabla!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const tableKey = result.value;
            const data = JSON.parse(localStorage.getItem(tableKey)) || [];
            const dataTableContainer = document.getElementById('dataTableContainer');

            if (!dataTableContainer) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se encontró el contenedor del modal. Verifica que el modal con id="dataTableContainer" esté en index.html.',
                    timer: 3000
                });
                return;
            }

            if (data.length === 0) {
                dataTableContainer.innerHTML = '<p class="text-white">No hay datos en esta tabla.</p>';
                // Mostrar el modal
                const modal = new bootstrap.Modal(document.getElementById('dataModal'));
                modal.show();
                Swal.fire({
                    icon: 'info',
                    title: 'Tabla vacía',
                    text: 'No se encontraron datos en la tabla seleccionada.',
                    timer: 1500
                });
                return;
            }

            // Generar tabla con clases de Bootstrap y tema oscuro
            let tableHTML = '<div class="table-responsive"><table class="table table-striped table-bordered bg-dark text-white"><thead><tr>';
            const firstItem = data[0];
            // Excluir 'contraseña' para lSUsuarios
            const headers = Object.keys(firstItem).filter(header => tableKey === 'lSUsuarios' ? header !== 'contraseña' : true);
            headers.forEach(header => {
                tableHTML += `<th>${header}</th>`;
            });
            tableHTML += '</tr></thead><tbody>';

            data.forEach(item => {
                tableHTML += '<tr>';
                headers.forEach(header => {
                    let value = item[header];
                    // Manejar arrays y objetos
                    if (Array.isArray(value) || typeof value === 'object') {
                        value = JSON.stringify(value);
                    }
                    tableHTML += `<td>${value}</td>`;
                });
                tableHTML += '</tr>';
            });

            tableHTML += '</tbody></table></div>';
            dataTableContainer.innerHTML = tableHTML;

            // Mostrar el modal
            const modal = new bootstrap.Modal(document.getElementById('dataModal'));
            modal.show();

            Swal.fire({
                icon: 'success',
                title: 'Datos mostrados',
                text: `Se ha mostrado la tabla ${tableKey} en el modal.`,
                timer: 1500
            });
        }
    });
}