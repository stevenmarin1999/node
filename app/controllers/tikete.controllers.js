
//CODIGO PROFESOR
const Tikete=require('../models/tikete.model.js');

exports.create=(req,res)=>{
console.log("Crear");
    console.log(req.body);
    const product=new Tikete(req.body);
    product.save();
    res.send('Registro insertado');
};

exports.findAll=(req,res)=>{
    Tikete.find().then(tikete=>{
        res.status(200).send(tikete);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrió algo incorrecto "
        });

    });
    console.log("Listar");
}
exports.findOne=(req,res)=>{
   
    Tikete.findById(req.params.id).then(product=>{
        if(!product){
            return res.status(404).send({
                message:"Tikete no encontrado"
            });
        }
        res.status(200).send(product);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(404).send({
                message:"Tikete no encontrado"
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
            message:"Los datos del producto no pueden estar vacios"
        });
    }
    Tikete.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        price:req.body.price || 0,
        expiration:req.body.expiration || null
    },{new:true}).then(product=>{
        if(!product){
            return res.status(404).send({message:"Tikete no encontrado"})
        }
        res.status(200).send(product);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(404).send({
                message:"Tikete no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        })
    });

}
exports.delete=(req,res)=>{
  Tikete.findByIdAndRemove(req.params.id).then(product=>{
    if(!product){
        return res.status(404).send({message:"Tikete no encontrado"});
    }
    res.status(200).send({message:"Tikete eliminado con éxito"});
  }).catch(err=>{
    if(err.kind==='ObjectId' || err.name==='NotFound'){
        return res.status(404).send({
            message:"Tikete no encontrado"
        });
    }
    return res.status(500).send({
        message:"Ocurrio un error en el registro "+req.params.id
    })
});
}
