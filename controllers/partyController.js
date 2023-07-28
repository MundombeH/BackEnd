const partyModel = require("../models/party");
const checkpartyBudget = (budget, services)=>{

    const priceSum = services.reduce((Sum, service) => Sum + service.price, 0) 

    console.log(priceSum, budget);
    if(priceSum > budget){
        return false;
    }
    return true;
};
const partyController = {

    create: async(req, res) => {

        
            const party ={
                title: req.body.title,
                author: req.body.author,
                description:req.body.description,
                budget:req.body.budget,
                image:req.body.image,
                services:req.body.services,
            }

            // validacao do budget if < valor dos servicos != novo sewrvico
                if(party.services && !checkpartyBudget(party.budget, party.services)){
                    res.status(406).json({msg:"Orcamento insuficiente"});
                    return;
                }
                const response = await partyModel.create(party);
                res.status(201).json({response, msg:"Festa Criada com suceso!"})
            },
    
         getAll: async(req, res)=>{

            try{
                const parties = await partyModel.find();
                res.json(parties);
         } catch (error) {
            console.log(`ErroR ao mostrar todas as festas${error}`);

        }

    },
    get: async(req, res)=>{
        try {
            const id = req.params.id;
            const party = await partyModel.findById(id);

            if(!party){
                res.status(404).json({party, msg:"Festa nao encontrada!"});
                return;
            }
            res.json(party);
        } catch (error) {
            console.log(`ErroR ao mostar festa pessoal`)
            
        }
    },
    delete: async(req, res)=>{

        try {
            const id = req.params.id;
            const party = await partyModel.findById(id);

            if(!party){
                res.status(404).json({party, msg:"Festa nao encontrada!"});
                return;
            }
            const deleteParty = await partyModel.FindByIdAndDelete(id);

            res.status(200).json({deleteParty, msg:"Festa excluida com sucesso"});

        } catch (error) {
            console.log(`ErroR ao deletar a festa solicitada  ${error}`);
        }
    },
    update: async(req, res)=>{
        try{
            const id = req.params.id;
            const party ={

                title: req.body.title,
                author: req.body.author,
                description:req.body.description,
                budget:req.body.budget,
                image:req.body.image,
                services:req.body.services,
            };

            if(party.services && !checkpartyBudget(party.budget, party.services)){
                res.status(406).json({msg:"Orcamento insuficiente"});
                return;
            }
            const updateParty = await partyModel.findByIdAndUpdate(id, party);
            
            if(!updateParty){
                res.status(404).json({updateParty, msg:"Festa nao encontrada!"});
                return;
            }
          
            res.status(200).json({updateParty, msg:"Festa atualizada com sucesso!"});
        }catch(error){
            console.log(`ErroR ao autualizar a festa ${error}`);
        }
    }
};
module.exports = partyController;