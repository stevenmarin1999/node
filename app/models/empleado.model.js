

// const mongoose=require('mongoose')
// const EmpleadoShema = mongoose.Schema({
//     cedula: {type: Number, unique: true, required: [true, 'La cedula es requerido']},
//     nombre: {type: String, required: [true, 'Los Nombres es requerido']},
//     edad: {type: Number, required: [true, 'La edad es requerido']},
//     cargo: {type: String, required: [true, 'El cargo es requerido']},
//     celular: {type: String,  required: [true, 'El celular es requerido']},
// });

// module.exports=mongoose.model('empleado',EmpleadoShema)

const mongoose=require('mongoose')
const EmpleadoShema = mongoose.Schema({
        // _id: {type:String, trim: true,},
        cedula: {type: Number, unique: true,index:true,trim:true},
        nombre: {type: String, },
        edad: {type: Number, },
        cargo: {type: String,},
        celular: {type: String, },
},{
    // timestamps:true
});

module.exports=mongoose.model('empleado',EmpleadoShema)