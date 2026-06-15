const express = require('express');
const router  = express.Router();

const vehiculos    =require('../controllers/vehiculos.controller');
const choferes     = require('../controllers/choferes.controller');
const inspecciones = require('../controllers/inspecciones.controller');
const viajes       = require('../controllers/viajes.controller');
const alertas      = require('../controllers/alertas.controller');
const consultas    = require('../controllers/consultasAvanzadas.controller');

router.get('/health', (req, res) => {
  res.json({ success: true, message: 'API funcionando', timestamp: new Date() });
});

//CRUD Vehículos
router.get('/vehiculos',          vehiculos.getAll);
router.get('/vehiculos/:id',      vehiculos.getById);
router.post('/vehiculos',         vehiculos.create);
router.put('/vehiculos/:id',      vehiculos.update);
router.delete('/vehiculos/:id',   vehiculos.remove);

//CRUD Choferes
router.get('/choferes',           choferes.getAll);
router.get('/choferes/:id',       choferes.getById);
router.post('/choferes',          choferes.create);
router.put('/choferes/:id',       choferes.update);
router.delete('/choferes/:id',    choferes.remove);

// CRUD Inspecciones
router.get('/inspecciones',       inspecciones.getAll);
router.get('/inspecciones/:id',   inspecciones.getById);
router.post('/inspecciones',      inspecciones.create);
router.put('/inspecciones/:id',   inspecciones.update);
router.delete('/inspecciones/:id',inspecciones.remove);

// CRUD Viajes
router.get('/viajes',             viajes.getAll);
router.get('/viajes/:id',         viajes.getById);
router.post('/viajes',            viajes.create);
router.put('/viajes/:id',         viajes.update);
router.delete('/viajes/:id',      viajes.remove);

//alertas
router.get('/alertas',            alertas.getAll);
router.put('/alertas/:id/resolver', alertas.resolver);

//Consultas avanzadas
router.get('/consultas/vehiculos-no-aptos',  consultas.vehiculosNoAptos);
router.get('/consultas/eficiencia-choferes', consultas.eficienciaChoferes);

module.exports = router;
