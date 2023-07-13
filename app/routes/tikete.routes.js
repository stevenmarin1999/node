module.exports=(app)=>{
const tikete=require('../controllers/tikete.controllers.js')
    app.post('/tikete',tikete.create);
    app.get('/tikete',tikete.findAll);
    app.get('/tikete/:id',tikete.findOne)
    app.put('/tikete/:id',tikete.update)
    app.delete('/tikete/:id',tikete.delete)
};



