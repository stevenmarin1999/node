

// const mongoose=require('mongoose')
// const ClienteShema = mongoose.Schema({
//     cedula: {type: Number, unique: true, required: [true, 'La cedulae es requerido']},
//     nombres: {type: String, required: [true, 'Los Nombres es requerido']},
//     apellidos: {type: String, required: [true, 'El apellido es requerido']},
//     celular: {type: String, required: [true, 'El correo es requerido']},
//     direccion: {type: String, required: [true, 'La direccion es requerido']},
// });

// module.exports=mongoose.model('cliente',ClienteShema)


const mongoose=require('mongoose')
const ClienteShema = mongoose.Schema({
    cedula: {type: Number, unique: true,},
    nombres: {type: String},
    apellidos: {type: String, },
    celular: {type: String,},
    direccion: {type: String, },
});

module.exports=mongoose.model('cliente',ClienteShema)