const {Pool} = require('pg');


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'hotel',
    port: '5432'
})

const getMarcoView = async (req, res) => {
    const response = await pool.query('SELECT * FROM ver_habitaciones_con_descuento');
    console.log(response.rows);
    res.status(200).json(response.rows)
}

const getBonos_log =async (req, res) => {
    const response = await pool.query('SELECT * FROM bonos_log');
    console.log(response.rows);
    res.status(200).json(response.rows)
}

const getListado_clientes_servicio =async (req, res) => {
    const { servicioI, fecI, fecS } = req.params;
    const response = await pool.query('CALL listado_clientes_servicio($1, $2, $3, $4)',
    [servicioI, fecI,fecS, 1]);
    console.log(response.rows);
    res.status(200).json(response.rows)
}

const getAplicar_decuentos_tipos =async (req, res) => {
    const { id_paquete } = req.params;
    let response = await pool.query('CALL aplicar_descuentos_tipos_hab($1)', [id_paquete]);
    response = await pool.query('SELECT * FROM ver_habitaciones_con_descuento');
    console.log(response.rows);
    res.status(200).json(response.rows)
}

const getCambiarHabitacion =async (req, res) => {
    const { habV, habN, reg } = req.params;
    const response = await pool.query('CALL cambiar_habitacion($1, $2, $3)', [habV, habN, reg]);
    res.status(200).json(response.rows)
}

const getAvailablePaquete =async (req, res) => {
    const { fecI } = req.params;
    let response = await pool.query('CALL getavailablepaquete($1)', [fecI]);
    response = await pool.query('SELECT * FROM paqueteDisponible')
    console.log(response.rows);
    res.status(200).json(response.rows)
}


const GETChecar_Acompanantes = async (req, res) => {
    const { nombreAcom, huespedI, fec, email } = req.params;
    const response = await pool.query('CALL checar_acompanantes($1, $2, $3, $4)', [nombreAcom, huespedI, fec, email]);
    console.log(response.rows);
    res.status(200).json(response.rows)
}


const getHabitaciones = async (req, res) => {
    const response = await pool.query('SELECT * FROM habitacion');
    console.log(response.rows);
    res.status(200).json(response.rows)
}

const postHabitacion = async (req, res)=> {
    const { edificio, piso, estado_disponibilidad, id_tipo } = req.params;
    const response = await pool.query(
        'INSERT INTO habitacion(edificio, piso, estado_disponibilidad, id_tipo_hab) VALUES ($1, $2, $3, $4)',
         [edificio, piso, estado_disponibilidad, id_tipo])
    res.json({
        message: 'done',
    })
}

const getFactura = async (req, res) => {
    const response = await pool.query('SELECT * FROM factura');
    res.status(200).json(response.rows)
};

const postFactura = async (req, res)=> {
    const { fecha, importe, id_huesped, importe_final } = req.params;
    console.log(fecha, importe, id_huesped, importe_final)
    const response = await pool.query(
        'INSERT INTO factura(fecha_exped, importe, id_huesped, importe_final) VALUES ($1, $2, $3, $4)',
         [fecha, parseFloat(importe), parseInt(id_huesped), parseFloat(importe_final)])
    res.json({
        message: 'done',
    })
}

const getHuespedPaga = async (req, res) => {
    const response = await pool.query('SELECT * FROM huesped_que_paga');
    res.status(200).json(response.rows);
};

const postHuespedPaga = async (req, res)=> {
    const { nombre, fecha_nacimiento, direccion, email, rfc, tel_casa, tel_celular, ciudad, estado, pais, medio } = req.params;
    const response = await pool.query(
        'INSERT INTO huesped_que_paga(nombre, fecha_nacimiento, direccion, email, rfc, tel_casa, tel_celular, ciudad, estado, pais, medio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
         [nombre, fecha_nacimiento, direccion, email, rfc, tel_casa, tel_celular, ciudad, estado, pais, medio])
    res.json({
        message: 'done'
    })
}

const getHuespedAcompana = async (req, res) => {
    const response = await pool.query('SELECT * FROM huesped_acompana');
    res.status(200).json(response.rows);
};

const postHuespedAcompana = async (req, res)=> {
    const { nombre_acompanante, fecha_nac, email, id_huesped } = req.params;
    const response = await pool.query(
        'INSERT INTO huesped_acompana(nombre_acopmanante, fecha_nac, email, id_huesped) VALUES ($1, $2, $3, $4)',
         [nombre_acompanante, fecha_nac, email, id_huesped])
    res.json({
        message: 'done',
    })
}

const getPaquetes = async (req, res) => {
    const response = await pool.query('SELECT * FROM paquetes');
    res.status(200).json(response.rows);
};

const postQuejas = async (req, res) => {
    const { quejaI, facturaI,  queja } = req.params;
    const response = await pool.query(
        'INSERT INTO quejas(id_factura, queja) VALUES ($1, $2)',
         [facturaI,  queja])
    res.json({
        message: 'done',
        
    })
}

const getQuejas = async (req, res) => {
    const response = await pool.query('SELECT * FROM quejas');
    res.status(200).json(response.rows);
};

const getRegistro = async (req, res) => {
    const response = await pool.query('SELECT * FROM registro');
    res.status(200).json(response.rows);
};

const postRegistro = async (req, res) => {
    const { fechaI,  fechaS, id_huesped, id_empleado, id_paquete } = req.params;
    const response = await pool.query(
        'INSERT INTO registro(fecha_inicio, fecha_Salida, id_huesped, id_empleado, id_paquete) VALUES ($1, $2, $3, $4, $5)',
         [ fechaI,  fechaS, id_huesped, id_empleado, id_paquete])
    res.json({
        message: 'done',
    })
}

const getReservacion = async (req, res) => {
    const response = await pool.query('SELECT * FROM reservaciones');
    res.status(200).json(response.rows);
};

const postReservacion = async (req, res) => {
    const { num_personas,num_noches, deposito, medio, email_reservador, id_huesped, id_paquete, estado, fecha_inicio } = req.params;
    const response = await pool.query(
        'INSERT INTO reservaciones(num_personas,num_noches, deposito, medio, email_reservador, id_huesped, id_paquete, estado, fecha_inicio ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
         [ num_personas,num_noches, deposito, medio, email_reservador, id_huesped, id_paquete, estado, fecha_inicio ])
    res.json({
        message: 'done',

    })
}


const getServicio = async (req, res) => {
    const response = await pool.query('SELECT * FROM servicios');
    res.status(200).json(response.rows);
};

const postServicio= async (req, res) => {
    const { servicio, costo_por_persona, tipo, descripcion, hora_inicio, hora_fin, fecha } = req.params;
    const response = await pool.query(
        'INSERT INTO servicios(servicio, costo_por_persona, tipo, descripcion, hora_inicio, hora_fin, fecha ) VALUES ($1, $2, $3, $4, $5, $6, $7)',
         [ servicio, costo_por_persona, tipo, descripcion, hora_inicio, hora_fin, fecha ])
    res.json({
        message: 'done',
    })
}

const getTipo = async (req, res) => {
    const response = await pool.query('SELECT * FROM tipos_habitacion');
    res.status(200).json(response.rows);
};

const postTipo = async (req, res) => {
    const {precio, tipo_cama, numero_camas, nombre} = req.params;
    const response = await pool.query(
        'INSERT INTO tipos_habitacion(precio, tipo_cama, numero_camas, nombre ) VALUES ($1, $2, $3, $4)',
         [ precio, tipo_cama, numero_camas, nombre ])
    res.json({
        message: 'done',
    })
}

const getDepartamento = async (req, res) => {
    const response = await pool.query('SELECT * FROM departamento');
    res.status(200).json(response.rows);
};

const postDepartamento = async (req, res) => {
    const {nombre, id_super} = req.params;
    const response = await pool.query(
        'INSERT INTO departamento(nombre, id_super) VALUES ($1, $2)',
         [ nombre, id_super ])
    res.json({
        message: 'done',
    })
}

const getEmpleados = async (req, res) => {
    const response = await pool.query('SELECT * FROM empleados');
    res.status(200).json(response.rows);
};

const postEmpleados = async (req, res) => {
    const {nombre_completo, salario, sexo, id_departamento} = req.params;
    const response = await pool.query(
        'INSERT INTO empleados(nombre_completo, salario, sexo, id_departamento) VALUES ($1, $2, $3, $4)',
         [ nombre_completo, salario, sexo, id_departamento ])
    res.json({
        message: 'done',
    })
}
const getHabitaciones_por_registro = async (req, res) => {
    const response = await pool.query('SELECT * FROM habitaciones_por_registro');
    res.status(200).json(response.rows);
};

const posthabitaciones_por_registro =  async (req, res) => {
    const {numero_habitacion,id_registro} = req.params;
    const response = await pool.query(
        'INSERT INTO habitaciones_por_registro(numero_habitacion,id_registro) VALUES ($1, $2)',
         [numero_habitacion,id_registro])
    res.json({
        message: 'done',
    })
}

const getHabitaciones_por_reservacion = async (req, res) => {
    const response = await pool.query('SELECT * FROM habitaciones_por_reservacion');
    res.status(200).json(response.rows);
};

const postHabitaciones_por_reservacion = async (req, res) => {
    const {numero_habitacion, id_reservacion} = req.params;
    const response = await pool.query(
        'INSERT INTO habitaciones_por_reservacion(numero_habitacion, id_reservacion) VALUES ($1, $2)',
         [ numero_habitacion, id_reservacion])
    res.json({
        message: 'done',
    })
} 


const getHuesped_por_habitacion = async (req, res) => {
    const response = await pool.query('SELECT * FROM huepsed_por_habitacion');
    res.status(200).json(response.rows);
};

const postHuesped_por_habitacion = async (req, res) => {
    const {numero_habitacion, id_huesped, id_registro} = req.params;
    const response = await pool.query('INSERT INTO huepsed_por_habitacion(numero_habitacion, id_huepsed, id_registro) VALUES ($1, $2, $3)',
         [ numero_habitacion, id_huesped, 1 ])
    res.json({
        message: 'done',
    })
}

const getQuejas_por_departamento = async (req, res) => {
    const response = await pool.query('SELECT * FROM quejas_por_departamento');
    res.status(200).json(response.rows);
};

const postQuejas_por_departamento = async (req, res) => {
    const {id_departamento, id_queja} = req.params;
    console.log(req.params)
    const response = await pool.query(
        'INSERT INTO quejas_por_departamento(id_departamento, id_queja) VALUES ($1, $2)',
         [ id_departamento, id_queja ])
    res.json({
        message: 'done',
    })
}

const getSatisfaccion = async (req, res) => {
    const response = await pool.query('SELECT * FROM satisfaccion');
    res.status(200).json(response.rows);
};

const postSatisfaccion= async (req, res) => {
    const {id_factura, valor, id_depto} = req.params;
    const response = await pool.query(
        'INSERT INTO satisfaccion(id_factura, valor, id_depto) VALUES ($1, $2, $3)',
         [ id_factura, valor, id_depto ])
    res.json({
        message: 'done',
    })
}

const getServicios_por_habitacion = async (req, res) => {
    const response = await pool.query('SELECT * FROM servicios_por_habitacion');
    res.status(200).json(response.rows);
};

const postServicios_por_habitacion = async (req, res) => {
    const {numero_habitacion, id_servicio, importe, fecha} = req.params;
    const response = await pool.query(
        'INSERT INTO servicios_por_habitacion(numero_habitacion, id_servicio, importe, fecha) VALUES ($1, $2, $3, $4)',
         [ numero_habitacion, id_servicio, importe, fecha ])
    res.json({
        message: 'done',
    })
}

const getServicios_por_paquete = async (req, res) => {
    const response = await pool.query('SELECT * FROM servicios_por_paquete');
    res.status(200).json(response.rows);
};

const postServicios_por_paquete = async (req, res) => {
    const {id_paquete, id_servicio} = req.params;
    const response = await pool.query(
        'INSERT INTO servicios_por_paquete(id_paquete, id_servicio) VALUES ($1, $2)',
         [ id_paquete, id_servicio ])
    res.json({
        message: 'done',
    })
}

const query1 = async (req, res) => {
    const response = await pool.query(
        'SELECT * FROM factura WHERE id_factura = $1',
        [req.params.id]
    );
    res.status(200).json(response.rows)
};

const query2 = async (req, res) => {
    const response = await pool.query(
        'SELECT COUNT(*) AS disponibles, nombre FROM habitacion INNER JOIN tipos_habitacion ON habitacion.id_tipo_hab=tipos_habitacion.id_tipo GROUP BY id_tipo'
    );
    res.status(200).json(response.rows)
};

const query3 = async (req, res) => {
    const response = await pool.query(
        'SELECT numero_habitacion, COUNT(*) AS huespedes FROM huepsed_por_habitacion WHERE numero_habitacion IN (SELECT numero_habitacion FROM habitaciones_por_registro WHERE id_registro IN ( SELECT id_registro FROM registro WHERE fecha_inicio BETWEEN $1 AND $2 AND fecha_salida BETWEEN $1 AND $2  )) GROUP BY numero_habitacion', 
        [req.params.inicio, req.params.salida ]
    );
    res.status(200).json(response.rows)
};

const query4 = async (req, res) => {
    const response = await pool.query(
        'SELECT COUNT(*) FROM habitacion INNER JOIN (SELECT * FROM registro INNER JOIN habitaciones_por_registro ON registro.id_registro=habitaciones_por_registro.id_registro ) AS temp ON habitacion.numero_habitacion = temp.numero_habitacion WHERE fecha_inicio BETWEEN $1 AND $2 AND fecha_salida BETWEEN $1 AND $2', 
        [req.params.inicio, req.params.salida ]
    );
    res.status(200).json(response.rows)
};

const query5 = async (req, res) => {
    const response = await pool.query(
        'SELECT nombre, COUNT(*) AS cantidad, tipo_cama, numero_camas  FROM habitacion INNER JOIN tipos_habitacion ON habitacion.id_tipo_hab=tipos_habitacion.id_tipo WHERE estado_disponibilidad = true GROUP BY id_tipo'
    );
    res.status(200).json(response.rows)
};

const query5ById = async (req, res) => {
    const response = await pool.query(
        'SELECT nombre, COUNT(*) AS cantidad, tipo_cama, numero_camas  FROM habitacion INNER JOIN tipos_habitacion ON habitacion.id_tipo_hab=tipos_habitacion.id_tipo WHERE estado_disponibilidad = true AND id_tipo = $1 GROUP BY id_tipo',
        [req.params.id]
    );
    res.status(200).json(response.rows)
};

const query6 = async (req, res) => {
    const response = await pool.query(
        'SELECT MAX(fecha_salida-fecha_inicio), id_registro FROM registro WHERE fecha_inicio BETWEEN $1 AND $2 GROUP BY id_registro ORDER BY max DESC',
        [req.params.inicio, req.params.salida ]
    );
    res.status(200).json(response.rows)
};

const query7 = async (req, res) => {
    const response = await pool.query(
        'SELECT COUNT(*), nombre FROM empleados INNER JOIN departamento ON empleados.id_departamento=departamento.id_departamento GROUP BY departamento.id_departamento'
    );
    res.status(200).json(response.rows)
}

const query8 = async (req, res) => {
    const response = await pool.query(
        'SELECT id, SUM(tres) AS bono, nombre_completo FROM (SELECT empleados.id_empleado as id, 380*COUNT(*) AS tres, nombre_completo FROM empleados INNER JOIN registro ON registro.id_empleado=empleados.id_empleado WHERE fecha_salida-fecha_inicio >= 3 AND fecha_salida-fecha_inicio < 5  GROUP BY empleados.id_empleado UNION SELECT empleados.id_empleado as id, 500*COUNT(*) AS tres, nombre_completo FROM empleados INNER JOIN registro ON registro.id_empleado=empleados.id_empleado WHERE fecha_salida-fecha_inicio >= 5 AND fecha_salida-fecha_inicio < 10 GROUP BY empleados.id_empleado UNION SELECT empleados.id_empleado as id, 1500*COUNT(*) AS tres, nombre_completo FROM empleados INNER JOIN registro ON registro.id_empleado=empleados.id_empleado WHERE fecha_salida-fecha_inicio >= 10 GROUP BY empleados.id_empleado) as temp GROUP BY id, nombre_completo;'
    );
    res.status(200).json(response.rows)
}

const query9 = async (req, res) => {
    const response = await pool.query(
        'SELECT SUM(suma) FROM (SELECT SUM((fecha_salida-fecha_inicio)*precio) as suma FROM registro INNER JOIN (SELECT * FROM habitaciones_por_registro INNER JOIN (SELECT * FROM habitacion INNER JOIN tipos_habitacion ON habitacion.id_tipo_hab = tipos_habitacion.id_tipo ) AS temp ON temp.numero_habitacion=habitaciones_por_registro.numero_habitacion ) AS temp2 ON temp2.id_registro = registro.id_registro WHERE fecha_inicio BETWEEN $1 AND $2 UNION SELECT SUM(importe) as suma FROM servicios_por_habitacion WHERE fecha BETWEEN $1 AND $2) AS ganancias',
        [req.params.inicio, req.params.salida]
    );
    res.status(200).json(response.rows)
}

const query10 = async (req, res) => {
    const response = await pool.query(
        'SELECT temp.servicio, SUM(importe) as suma FROM (SELECT servicios.servicio, servicios_por_habitacion.* FROM servicios_por_habitacion INNER JOIN servicios ON servicios_por_habitacion.id_servicio = servicios.id_servicio) AS temp  WHERE fecha BETWEEN $1 AND $2 GROUP BY temp.servicio',
        [req.params.inicio, req.params.salida]
    );
    res.status(200).json(response.rows)
}

const query11 = async (req, res) => {
    const response = await pool.query(
        'SELECT COUNT(*) AS num_quejas, nombre FROM departamento INNER JOIN (SELECT * FROM quejas_por_departamento INNER JOIN ( SELECT * FROM quejas INNER JOIN factura ON quejas.id_factura = factura.id_factura) AS temp ON temp.id_queja=quejas_por_departamento.id_queja) AS temp2 ON departamento.id_departamento = temp2.id_departamento  GROUP BY departamento.id_departamento' );
    res.status(200).json(response.rows)
};

const query12 = async (req, res) => {
    const response = await pool.query(
        'SELECT medio, COUNT(*) AS cuenta, SUM(profit) AS ganancia FROM huesped_que_paga INNER JOIN  (SELECT registro.id_huesped, (registro.fecha_salida-registro.fecha_inicio)*precio as profit FROM registro INNER JOIN (SELECT * FROM habitaciones_por_registro INNER JOIN (SELECT * FROM habitacion INNER JOIN tipos_habitacion ON habitacion.id_tipo_hab = tipos_habitacion.id_tipo ) AS temp ON temp.numero_habitacion=habitaciones_por_registro.numero_habitacion) AS temp2 ON temp2.id_registro = registro.id_registro WHERE fecha_inicio BETWEEN $1 AND $2) AS temp3 ON temp3.id_huesped = huesped_que_paga.id_huepsed GROUP BY medio',
        [req.params.inicio, req.params.salida]
    );
    res.status(200).json(response.rows)
}

const query13 = async (req, res) => {
    const response = await pool.query(
        'SELECT nombre, max as valor FROM departamento INNER JOIN (SELECT MAX(promedio), temp.id_depto FROM ( SELECT satisfaccion.id_depto ,AVG(valor) AS promedio FROM satisfaccion GROUP BY satisfaccion.id_depto ) AS temp GROUP BY temp.id_depto ) as temp2 ON departamento.id_departamento = temp2.id_depto ORDER BY valor DESC;'
    );
    res.status(200).json(response.rows)
}

module.exports = {
    getHabitaciones,
    postHabitacion,
    query1,
    query2,
    query3,
    query4,
    query5,
    query5ById,
    query6,
    query7,
    query8,
    query9,
    query10,
    query11,
    query12,
    query13,
    getFactura,
    postFactura,
    getMarcoView,
    getBonos_log,
    getListado_clientes_servicio,
    getAplicar_decuentos_tipos,
    getAvailablePaquete,
    getCambiarHabitacion,
    getHuesped_por_habitacion,
    getDepartamento,
    getEmpleados,
    getHabitaciones_por_registro,
    getHabitaciones_por_reservacion,
    getHuespedAcompana,
    getPaquetes,
    getQuejas,
    getQuejas_por_departamento,
    getRegistro,
    getReservacion,
    getSatisfaccion,
    getServicio,
    getServicios_por_habitacion,
    getServicios_por_paquete,
    getTipo,getHuespedPaga,
    GETChecar_Acompanantes,
    postDepartamento, postEmpleados, postFactura, postHabitacion, postHabitaciones_por_reservacion,
    postHuespedAcompana,  postHuespedPaga, postHuesped_por_habitacion, postQuejas, postQuejas_por_departamento,
    postRegistro, postReservacion, postSatisfaccion, postServicio, postServicios_por_habitacion, postServicios_por_paquete,
    postTipo, posthabitaciones_por_registro
}
