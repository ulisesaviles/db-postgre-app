const { Router } = require('express');


const router = Router();


const { 
    getHabitaciones, postHabitacion, query2, query3, query4, query5,query5ById, query6, query7, query8, query9, query10, query12, query13,
    getFactura, postFactura, getMarcoView, getProcedure, query1, query11
} = require('../controllers/index.controller')


// id debe ser un entero
router.get('/query1/:id', query1);
router.get('/query2', query2);
// inicio y salida deben de ser fechas en formato string, es decir: '2020-12-30', año-mes-dia
router.get('/query3/:inicio/:salida', query3);
router.get('/query4/:inicio/:salida', query4);
router.get('/query5', query5);
router.get('/query5/:id', query5ById);
router.get('/query6/:inicio/:salida', query6);
router.get('/query7', query7);
router.get('/query8', query8);
router.get('/query9/:inicio/:salida', query9);
router.get('/query10/:inicio/:salida', query10);
router.get('/query11', query11);
router.get('/query12/:inicio/:salida', query12);
router.get('/query13', query13);


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

