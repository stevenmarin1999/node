

// const mongoose=require('mongoose')
// const ParqueaderoShema = mongoose.Schema({
//     nit: {type: String, unique: true, required:[true, 'El Nombre es requerido']},
//     nombre: {type: String, required: [true, 'La direccion es requerido']}, 
//     direccion: {type: String, required: [true, 'El celular es requerido']}, 
//     celular: {type: String, required: [true, 'La capacidad es requerido']}, 
//     capacidad: {type: Number, required:[true, 'El horario es requerido']},
//     horario: {type: String, required: [true, 'La ubicacion es requerido']},
//     ubicacion: {type: String, required: [true, 'El nit es requerido']},
     
// });

// module.exports=mongoose.model('parqueadero',ParqueaderoShema)


const mongoose=require('mongoose')
const ParqueaderoShema = mongoose.Schema({
    nit: {type: String, unique: true, },
    nombre: {type: String, }, 
    direccion: {type: String, }, 
    celular: {type: String, }, 
    capacidad: {type: Number, },
    horario: {type: String, },
    ubicacion: {type: String, },
     
});

module.exports=mongoose.model('parqueadero',ParqueaderoShema)


