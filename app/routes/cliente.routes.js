module.exports=(app)=>{
const cliente=require('../controllers/cliente.controllers.js')
    app.post('/cliente',cliente.create);
    app.get('/cliente',cliente.findAll);
    app.get('/cliente/:id',cliente.findOne)
    app.put('/cliente/:id',cliente.update)
    app.delete('/cliente/:id',cliente.delete)
};



