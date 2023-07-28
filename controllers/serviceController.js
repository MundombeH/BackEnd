const {service: ServiceModel} = require("../models/service");

const serviceController = {

    create: async(req, res) => {

        try {
            const service = {
            
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                image:req.body.image,
            };
            const response = await ServiceModel.create(service);
           
            res.status(201).json({response, msg:"Serviço criado com sucesso"});
        
        
        } catch (error) {
            console.log(`ErroR:${error}`);
        }

    },
    getAll: async(req, res) =>{

        try{
            const services = await ServiceModel.find();

            res.json(services);
        }catch(error){
            console.log(`Erro ao pegar id coletivo:${error}`);
        }
    },
    get: async(req, res) =>{

        try{
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if(!service){
                res.status(404).json({msg:"Servico nao encontado"});
                return;
            }
            res.json(service);
        }catch(error){
            console.log(`Erro ao pegar id individual:${error}`);
        }
        },
        delete: async(req, res) => {

            try{
                const id = req.params.id;
                const service = await ServiceModel.findById(id);
    
                if(!service){

                    res
                    .status(404)
                    .json({msg:"Servico nao encontado"});
                    return;
                }
                const deleteService = await ServiceModel.findByIdAndDelete(id);

                res
                .status(200)
                .json({deleteService, msg:"Deletado com sucesso"});
            

            } catch(error){
                console.log(`Error ao deletar ${error}`);
            }
        },
        update: async(req, res) =>{

            try{
                const id = req.params.id;

                const service = {
            
                    name:req.body.name,
                    description:req.body.description,
                    price:req.body.price,
                    image:req.body.image,
                };

                    const UpdateService = await ServiceModel.findByIdAndUpdate(id, service);


                    if(!UpdateService){
                        res.status(404).json({msg:"Servico nao encontardo"});
                        return;
                    }
                    res.status(200).json({service, msg:"Sucesso ao actualizar servico"});
                } catch(error){
                    console.log(`Error ao atualizar ${error}`);
                }


 },
}
module.exports = serviceController;