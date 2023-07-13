module.exports=(app)=>{
const vehiculo=require('../controllers/vehiculo.controllers.js')
    app.post('/vehiculo',vehiculo.create);
    app.get('/vehiculo',vehiculo.findAll);
    app.get('/vehiculo/:id',vehiculo.findOne)
    app.put('/vehiculo/:id',vehiculo.update)
    app.delete('/vehiculo/:placa',vehiculo.delete)
};



