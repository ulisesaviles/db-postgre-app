const { Router } = require('express');


const router = Router();


const { 
    getHabitaciones, postHabitacion, query2, query3, query4, query5,query5ById, query6, query7, query8, query9, query10, query12, query13,
    getFactura, postFactura, getMarcoView, getProcedure, query1, query11
} = require('../controllers/index.controller')


// id debe ser un entero
router.get('/query1/:id', query1);

/*[
{
"id_factura": 1,
"fecha_exped": "2021-06-27T07:00:00.000Z",
"importe": 233318.72,
"id_huesped": 14,
"importe_final": 198320.912
}
] */
router.get('/query2', query2);
/*[
{
"disponibles": "27",
"nombre": "King Size"
},
{
"disponibles": "27",
"nombre": "Matrimonial doble"
},
{
"disponibles": "23",
"nombre": "Queen size triple"
},
{
"disponibles": "25",
"nombre": "King Size doble"
},
{
"disponibles": "24",
"nombre": "indidivual doble"
},
{
"disponibles": "32",
"nombre": "King Size triple"
},
{
"disponibles": "24",
"nombre": "individual solo"
},
{
"disponibles": "26",
"nombre": "Queen Size"
},
{
"disponibles": "25",
"nombre": "Queen size doble"
},
{
"disponibles": "23",
"nombre": "Matrimonial"
}
] */
// inicio y salida deben de ser fechas en formato string, es decir: '2020-12-30', año-mes-dia
router.get('/query3/:inicio/:salida', query3);
/*[
{
"numero_habitacion": 12,
"huespedes": "1"
},
{
"numero_habitacion": 14,
"huespedes": "1"
},
{
"numero_habitacion": 18,
"huespedes": "1"
},
{
"numero_habitacion": 24,
"huespedes": "1"
},
{
"numero_habitacion": 25,
"huespedes": "1"
},
{
"numero_habitacion": 28,
"huespedes": "1"
}
] */
router.get('/query4/:inicio/:salida', query4);
/*[
{
"count": "10"
}
] */
router.get('/query5', query5);
/*
[
{
"nombre": "Queen size doble",
"cantidad": "16",
"tipo_cama": "Queen",
"numero_camas": 2
},
{
"nombre": "Matrimonial",
"cantidad": "10",
"tipo_cama": "Matrimonial",
"numero_camas": 1
},
{
"nombre": "King Size",
"cantidad": "14",
"tipo_cama": "King",
"numero_camas": 1
},
{
"nombre": "Matrimonial doble",
"cantidad": "14",
"tipo_cama": "Matrimonial",
"numero_camas": 2
},
{
"nombre": "Queen size triple",
"cantidad": "11",
"tipo_cama": "Queen",
"numero_camas": 3
},
{
"nombre": "King Size doble",
"cantidad": "11",
"tipo_cama": "King",
"numero_camas": 2
},
{
"nombre": "indidivual doble",
"cantidad": "13",
"tipo_cama": "Individual",
"numero_camas": 2
},
{
"nombre": "King Size triple",
"cantidad": "8",
"tipo_cama": "King",
"numero_camas": 3
},
{
"nombre": "individual solo",
"cantidad": "16",
"tipo_cama": "Individual",
"numero_camas": 1
},
{
"nombre": "Queen Size",
"cantidad": "12",
"tipo_cama": "Queen",
"numero_camas": 1
}
] */
router.get('/query5/:id', query5ById);
/*[
{
"nombre": "Queen size triple",
"cantidad": "11",
"tipo_cama": "Queen",
"numero_camas": 3
}
] */
router.get('/query6/:inicio/:salida', query6);
/*
[
{
"max": 36,
"id_registro": 3
},
{
"max": 23,
"id_registro": 2
},
{
"max": 17,
"id_registro": 9
},
{
"max": 16,
"id_registro": 4
},
{
"max": 10,
"id_registro": 5
},
{
"max": 10,
"id_registro": 8
},
{
"max": 6,
"id_registro": 7
},
{
"max": 2,
"id_registro": 6
}
] */
router.get('/query7', query7);
/*
[
{
"count": "2",
"nombre": "Marketing"
},
{
"count": "1",
"nombre": "Telefonía"
},
{
"count": "2",
"nombre": "Alimentos_y_bebidas"
},
{
"count": "1",
"nombre": "Compra_y_almacenes"
},
{
"count": "2",
"nombre": "Seguridad"
},
{
"count": "1",
"nombre": "Administración"
},
{
"count": "2",
"nombre": "Recepción"
},
{
"count": "2",
"nombre": "Mantenimiento"
},
{
"count": "2",
"nombre": "Recursos_Humanos"
}
] */
router.get('/query8', query8);
/*
[
{
"id": 13,
"bono": "6880",
"nombre_completo": "Cristal Olivárez Cordova"
},
{
"id": 2,
"bono": "9500",
"nombre_completo": "Arquelao Acevedo Sepúlveda"
}
] */
router.get('/query9/:inicio/:salida', query9);
/*
[
{
"sum": 1157983.69
}
] */
router.get('/query10/:inicio/:salida', query10);
/*
[
{
"servicio": "bar",
"suma": 830
},
{
"servicio": "campo de golf",
"suma": 200
},
{
"servicio": "discoteque",
"suma": 50
},
{
"servicio": "gimnasio",
"suma": 0
},
{
"servicio": "parques de entretenimiento",
"suma": 1200
},
{
"servicio": "restaurante",
"suma": 674.05
},
{
"servicio": "salon de eventos",
"suma": 0
},
{
"servicio": "servicio de alimentos al cuarto",
"suma": 720
},
{
"servicio": "spa",
"suma": 180
},
{
"servicio": "zonas historicas",
"suma": 800
}
]
*/
router.get('/query11', query11);
/*
[
{
"num_quejas": "1",
"nombre": "Marketing"
},
{
"num_quejas": "5",
"nombre": "Alimentos_y_bebidas"
},
{
"num_quejas": "3",
"nombre": "Seguridad"
},
{
"num_quejas": "1",
"nombre": "Administración"
},
{
"num_quejas": "2",
"nombre": "Recepción"
},
{
"num_quejas": "1",
"nombre": "Mantenimiento"
}
]
*/
router.get('/query12/:inicio/:salida', query12);
/*
[
{
"medio": " Internet",
"cuenta": "4",
"ganancia": 499053.58
},
{
"medio": " Presencial",
"cuenta": "6",
"ganancia": 654276.0599999999
}
] */
router.get('/query13', query13);
/*
[
{
"nombre": "Telefonía",
"valor": "8.5333333333333333"
},
{
"nombre": "Recursos_Humanos",
"valor": "8.5333333333333333"
},
{
"nombre": "Alimentos_y_bebidas",
"valor": "8.5333333333333333"
},
{
"nombre": "Administración",
"valor": "8.4000000000000000"
},
{
"nombre": "Marketing",
"valor": "8.2000000000000000"
},
{
"nombre": "Compra_y_almacenes",
"valor": "8.1333333333333333"
},
{
"nombre": "Seguridad",
"valor": "8.1333333333333333"
},
{
"nombre": "Recepción",
"valor": "8.0666666666666667"
},
{
"nombre": "Mantenimiento",
"valor": "7.9333333333333333"
}
] */


// no requeridas por ahora
router.get('/habitacion', getHabitaciones );
router.post('/habitacion', postHabitacion);
router.get('/marco', getMarcoView);
router.get('/procedure', getProcedure);
router.get('/factura', getFactura );
/*router.get('/users/:id', getUserById)
router.delete('/users/:id', deleteUserById)
router.put('/users/:id', updateUser)*/


module.exports = router;

