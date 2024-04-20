const express = require('express');

const app = express();

//Usamos a função get toda vez que queremos pedir algum dado.
//função get recebe dois parâmetros:

app.get('/', (req, res) => res.status(200).json({message: 'olá mundo, funcionando!!!'}));

//1° parâmetro '/': é a rota
//2° parâmetro (req, res) => {}: Este espera uma função de callback

//req: Essa é a Request (ou requisição), é por meio dela que recebemos os dados (envio por query, params e body);
//res: Essa é a Response (ou resposta), é por meio dela que respondemos o que nos é solicitado;



module.exports = app;