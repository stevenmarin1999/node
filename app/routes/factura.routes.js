module.exports=(app)=>{
const factura=require('../controllers/factura.controllers.js')
    app.post('/factura',factura.create);
    app.get('/factura',factura.findAll);
    app.get('/factura/:id',factura.findOne)
    app.put('/factura/:id',factura.update)
    app.delete('/factura/:id',factura.delete)
};



