module.exports=(app)=>{
const empleado=require('../controllers/empleado.controllers.js')
    app.post('/empleado',empleado.create);
    app.get('/empleado',empleado.findAll);
    app.get('/empleado/:id',empleado.findOne)
    app.put('/empleado/:id',empleado.update)
    app.delete('/empleado/:id',empleado.delete)
};



