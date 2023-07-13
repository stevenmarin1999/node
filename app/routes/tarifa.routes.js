module.exports=(app)=>{
const tarifa=require('../controllers/tarifa.controllers.js')
    app.post('/tarifa',tarifa.create);
    app.get('/tarifa',tarifa.findAll);
    app.get('/tarifa/:id',tarifa.findOne)
    app.put('/tarifa/:id',tarifa.update)
    app.delete('/tarifa/:id',tarifa.delete)
};



