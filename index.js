

//importamos los modulos
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser") // sirve para manipular las respuestas


const app = express();
app.use(bodyParser.urlencoded({extended:true})) // le damos la codificación
app.use(bodyParser.json())
app.use(cors())

//bd
const dbConfig = require("./Config/database.Config.js")
const mongoose=require("mongoose")
mongoose.Promise=global.Promise;
require('./app/routes/parqueadero.routes.js')(app);
require('./app/routes/cliente.routes.js')(app);
require('./app/routes/vehiculo.routes.js')(app);
require('./app/routes/empleado.routes.js')(app);
require('./app/routes/tarifa.routes.js')(app);
require('./app/routes/tikete.routes.js')(app);
require('./app/routes/factura.routes.js')(app);
// require('./app/controllers/rutas.js')(app);
mongoose.connect(dbConfig.url,dbConfig.options).then(()=>{
    console.log("Conexión a la base de datos")
}).catch(err=>{
    console.log("Conexion incorrecta a la base de datos")
    process.exit()
})

let port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.json({
        "message":"Este es un JSON"
    })
})

// no sirve con conexion del movil
app.listen(port, ()=> {
    console.log("Server is listening on port " + port)
})






// const express= require('express')
// const app=express();
// const cors = require("cors")
// const bodyParser = require("body-parser") // sirve para manipular las respuestas


// app.use(bodyParser.urlencoded({extended:true})) // le damos la codificación
// app.use(bodyParser.json())

// app.use(cors())


// const port = process.env.PORT || 3000;

// //mongoose.Promise=global.Promise;
// require('./app/routes/cliente.routes.js')(app);
// const mongoose = require('mongoose');


// //CORREO GMAIL
// // const user='jhonalejobustos';
// // const password='RhHgCdhyr167NsZc';
// // const dbname='parqueadero';
// // const uri=`mongodb+srv://${user}:${password}@cluster0.0nnzml2.mongodb.net/${dbname}?retryWrites=true&w=majority`;


// //CORREO HOTMAIL
// const user='jhonalejoplay';
// const password='NPuTQOXqXmgnuFNx';
// const dbname='parqueadero';
// const uri=`mongodb+srv://${user}:${password}@cluster0.whx6yjv.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// mongoose.connect(uri,
//     {
//     useNewUrlParser: true, useUnifiedTopology: true
// })

//     .then(() => console.log('Bases de datos conectada'))
//     .catch(e => console.log(e))
