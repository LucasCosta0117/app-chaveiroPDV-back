const cors = require("cors");
const express = require("express");
const  app = express();

app.use(cors()); // Permite requisição do mesmo domínio

app.use(express.json()) // Permite a comunicação de dados via Json

app.listen(3000, function() {
    console.log("Servidor Online!")
})