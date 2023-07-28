const mongoose = require("mongoose");

async function main(){

try {
    // mongoose.set("strictQuery",true)

    await mongoose.connect("mongodb://127.0.0.1:27017/festas");
    
     console.log("Conectado ao banco!");  
} catch (error) {
    console.log(`ErroR:${Error}`);
    
}


}
module.exports = main;