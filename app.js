const express = require("express");
const cors = require("cors");
const app = express();

port = 8080;

app.use(cors());

app.use(express.json());

//dbconnection

const conn = require("./db/conn.js");

conn();

//Routes
const routes = require("./routes/router.js");

app.use("/api",routes);

app.listen(port,function () {
    console.log(`Servidor funcionando na porta ${port}.`);
    
})

// npm run dev
