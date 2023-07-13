

// const mongoose=require('mongoose')
// const TarifaShema = mongoose.Schema({
//     tipo_tarifa: {type: String,  required: [true, 'Tipo Tarifa es requerido']},
//     tipo_vehiculo: {type: String, required: [true, 'Tipo Vehiculo es requerido']},
//     hora_tarifa: {type: Number, required: [true, 'Hora Tarifa es requerido']},
   
// });

// module.exports=mongoose.model('tarifa',TarifaShema)


const mongoose=require('mongoose')
const TarifaShema = mongoose.Schema({
    tipo_tarifa: {type: String, },
    tipo_vehiculo: {type: String, },
    hora_tarifa: {type: Number,},
   
});

module.exports=mongoose.model('tarifa',TarifaShema)