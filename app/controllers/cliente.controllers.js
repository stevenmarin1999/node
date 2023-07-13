//CODIGO PROFESOR
const Cliente=require('../models/cliente.model.js');

exports.create=(req,res)=>{
console.log("Crear");
    console.log(req.body);
    const cliente=new Cliente(req.body);
    cliente.save();
    res.send('Registro insertado');
};




exports.findAll=(req,res)=>{
    Cliente.find().then(clientes=>{
        res.status(200).send(clientes);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrió algo incorrecto "
        });

    });
    console.log("Listar");
}
exports.findOne=(req,res)=>{
   
    Cliente.findById(req.params.id).then(cliente=>{
        if(!cliente){
            return res.status(404).send({
                message:"Cliente no encontrado"
            });
        }
        res.status(200).send(cliente);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(404).send({
                message:"Cliente no encontrado"
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
            message:"Los datos del Cliente no pueden estar vacios"
        });
    }
    Cliente.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        price:req.body.price || 0,
        expiration:req.body.expiration || null
    },{new:true}).then(cliente=>{
        if(!cliente){
            return res.status(404).send({message:"Cliente no encontrado"})
        }
        res.status(200).send(cliente);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(404).send({
                message:"Cliente no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        })
    });

}

//ELIMINAR
exports.delete=(req,res)=>{
  Cliente.findByIdAndRemove(req.params.id).then(cliente=>{
    if(!cliente){
        return res.status(404).send({message:"Cliente no encontrado"});
    }
    res.status(200).send({message:"Cliente eliminado con éxito"});
  }).catch(err=>{
    if(err.kind==='ObjectId' || err.name==='NotFound'){
        return res.status(404).send({
            message:"Cliente no encontrado"
        });
    }
    return res.status(500).send({
        message:"Ocurrio un error en el registro "+req.params.id
    })
});
}





