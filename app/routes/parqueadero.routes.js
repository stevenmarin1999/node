
module.exports=(app)=>{
    const parqueadero=require('../controllers/parqueadero.controllers.js')
    app.post('/parqueadero',parqueadero.create);
    app.get('/parqueadero',parqueadero.findAll);
    app.get('/parqueadero/:id',parqueadero.findOne)
    app.put('/parqueadero/:id',parqueadero.update)
    app.delete('/parqueadero/:id',parqueadero.delete)

};




//CODIGO PROFESOR
// module.exports=(app)=>{

//     const parqueadero=require('../controllers/product.controllers.js');
//     app.post('/parqueadero',parqueadero.create);
//     app.get('/parqueadero',parqueadero.findAll);
//     app.get('/parqueadero/:id',parqueadero.findOne);
//     app.put('/parqueadero/:id',parqueadero.update);
//     app.delete('/parqueadero/:id',parqueadero.delete);
// }