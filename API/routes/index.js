const express = require('express');
const router = express.Router();
const pacienteController = require ('../controllers/pacienteControllers')

module.exports = function(){

    //Agrega nuevos pacientes via post

    router.post('/pacientes',
        pacienteController.nuevoCliente
    );
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );
    //obtener un paciente en especifico
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente    
    );
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente    
    )

    return router;
}