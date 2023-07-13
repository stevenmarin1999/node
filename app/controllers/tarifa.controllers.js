//CODIGO PROFESOR
const Tarifa=require('../models/tarifa.model.js');

exports.create=(req,res)=>{
console.log("Crear");
    console.log(req.body);
    const cliente=new Tarifa(req.body);
    cliente.save();
    res.send('Registro insertado');
};

exports.findAll=(req,res)=>{
    Tarifa.find().then(tarifa=>{
        res.status(200).send(tarifa);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrió algo incorrecto "
        });

    });
    console.log("Listar");
}
exports.findOne=(req,res)=>{
   
    Tarifa.findById(req.params.id).then(cliente=>{
        if(!cliente){
            return res.status(404).send({
                message:"Tarifa no encontrado"
            });
        }
        res.status(200).send(cliente);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(404).send({
                message:"Tarifa no encontrado"
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
            message:"Los datos del Tarifa no pueden estar vacios"
        });
    }
    Tarifa.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        price:req.body.price || 0,
        expiration:req.body.expiration || null
    },{new:true}).then(cliente=>{
        if(!cliente){
            return res.status(404).send({message:"Tarifa no encontrado"})
        }
        res.status(200).send(cliente);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(404).send({
                message:"Tarifa no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        })
    });

}
exports.delete=(req,res)=>{
  Tarifa.findByIdAndRemove(req.params.id).then(cliente=>{
    if(!cliente){
        return res.status(404).send({message:"Tarifa no encontrado"});
    }
    res.status(200).send({message:"Tarifa eliminado con éxito"});
  }).catch(err=>{
    if(err.kind==='ObjectId' || err.name==='NotFound'){
        return res.status(404).send({
            message:"Tarifa no encontrado"
        });
    }
    return res.status(500).send({
        message:"Ocurrio un error en el registro "+req.params.id
    })
});
}





