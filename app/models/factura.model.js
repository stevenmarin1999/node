
// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const FacturaSchema = new Schema({
//     fecha: {type: Date, required: [true, 'La fecha es requerido']},
//     subtotal: {type: Number, required: [true, 'El Subtotal es requerido']},
//     total: {type: Number, required: [true, 'El Total es requerido']},
//     iva: {type: Number, required: [true, 'El Iva es requerido']},
//     tikete: {type: Schema.Types.ObjectId, ref: 'tikete', required: true},
// });

// module.exports = mongoose.model('factura', FacturaSchema);



const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FacturaSchema = new Schema({
    fecha: {type: Date, },
    subtotal: {type: Number, },
    total: {type: Number, },
    iva: {type: Number, },
    tikete: {type: Schema.Types.ObjectId, ref: 'tikete',},
});

module.exports = mongoose.model('factura', FacturaSchema);