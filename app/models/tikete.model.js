
// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const TiketeSchema = new Schema({
//     codigo_tikete: {type: String, unique: true, required: [true, 'Codigo Tikete es requerido']},
//     hora_entrada: {type:Date, required: [true, 'Hora Entrada es requerido']},
//     hora_salida: {type: Date, required: [true, 'Hora Salida es requerido']},
//     tipo_reserva: {type: String, required: [true, 'Tipo Reserva es requerido']},
//     vehiculo: {type: Schema.Types.ObjectId, ref: 'vehiculo', required: true},
//     empleado: {type: Schema.Types.ObjectId, ref: 'empleado', required: true},
//     parqueadero: {type: Schema.Types.ObjectId, ref: 'parqueadero', required: true},
//     tarifa: {type: Schema.Types.ObjectId, ref: 'tarifa', required: true},
// });

// module.exports = mongoose.model('tikete', TiketeSchema);



const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TiketeSchema = new Schema({
    codigo_tikete: {type: String, unique: true,},
    hora_entrada: {type:Date, },
    hora_salida: {type: Date, },
    vehiculo: {type: Schema.Types.ObjectId, ref: 'vehiculo', },
    empleado: {type: Schema.Types.ObjectId, ref: 'empleado', },
    parqueadero: {type: Schema.Types.ObjectId, ref: 'parqueadero', },
    tarifa: {type: Schema.Types.ObjectId, ref: 'tarifa', },
});

module.exports = mongoose.model('tikete', TiketeSchema);