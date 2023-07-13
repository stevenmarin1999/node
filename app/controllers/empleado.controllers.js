//CODIGO PROFESOR
const Empleado=require('../models/empleado.model.js');

exports.create=(req,res)=>{
console.log("Crear");
    console.log(req.body);
    const cliente=new Empleado(req.body);
    cliente.save();
    res.send('Registro insertado');
};



// exports.create=(req,res)=>{
//     if(Object.keys(req.body).legth===0){
//         return res.status(404).send({
//             message:"Los datos no pueden estar vacios"
//         });
//     }

// const user = new Empleado({
//     _id:req.body._id,
//     cedula:req.body.cedula,
//     nombre:req.body.nombre,
//     edad:req.body.edad,
//     cargo:req.body.cargo,
//     celular:req.body.celular || null

// })

// user.save().then(data=>{
//     res.status(200).send(data)
    
// }).catch(err=>{
//     res.status(200).send({
//         message:err.message || "Ha ocurrido un errror"
//     })

// })

// console.log("crear User")

// }





exports.findAll=(req,res)=>{
    Empleado.find().then(empleado=>{
        res.status(200).send(empleado);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrió algo incorrecto "
        });

    });
    console.log("Listar");
}
exports.findOne=(req,res)=>{
   
    Empleado.findById(req.params.id).then(cliente=>{
        if(!cliente){
            return res.status(404).send({
                message:"Empleado no encontrado"
            });
        }
        res.status(200).send(cliente);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(404).send({
                message:"Empleado no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        })
    })
    console.log("Listar uno");

}
exports.update=(req,res)=>{
    if(Object.keys(req.body).length===0){
        return res.status(400).send({
            message:"Los datos del Empleado no pueden estar vacios"
        });
    }
    Empleado.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        price:req.body.price || 0,
        expiration:req.body.expiration || null
    },{new:true}).then(cliente=>{
        if(!cliente){
            return res.status(404).send({message:"Empleado no encontrado"})
        }
        res.status(200).send(cliente);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(404).send({
                message:"Empleado no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        })
    });

}
exports.delete=(req,res)=>{
  Empleado.findByIdAndRemove(req.params.id).then(cliente=>{
    if(!cliente){
        return res.status(404).send({message:"Empleado no encontrado"});
    }
    res.status(200).send({message:"Empleado eliminado con éxito"});
  }).catch(err=>{
    if(err.kind==='ObjectId' || err.name==='NotFound'){
        return res.status(404).send({
            message:"Empleado no encontrado"
        });
    }
    return res.status(500).send({
        message:"Ocurrio un error en el registro "+req.params.id
    })
});
}





