
// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const VehiculoSchema = new Schema({
//     placa: {type: String, unique: true, required: [true, 'La placa es requerido']},
//     modelo: {type: Number, required: [true, 'El Modelo es requerido']},
//     marca: {type: String, required: [true, 'La Marca es requerido']},
//     color: {type: String, required: [true, 'El color es requerido']},
//     cliente: {type: Schema.Types.ObjectId, ref: 'cliente', required: true},
// });

// module.exports = mongoose.model('vehiculo', VehiculoSchema);


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VehiculoSchema = new Schema({
    placa: {type: String, unique: true, },
    modelo: {type: Number, },
    marca: {type: String,},
    color: {type: String, },
    cliente: {type: Schema.Types.ObjectId, ref: 'cliente',},
});

module.exports = mongoose.model('vehiculo', VehiculoSchema);