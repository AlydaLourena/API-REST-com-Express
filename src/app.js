const express = require('express');

const app = express();

//O app.use() serve para “instalar” algumas coisas que queremos em nossas APIs
app.use(express.json());

//Usamos a função get toda vez que queremos pedir algum dado.
//função get recebe dois parâmetros:

//app.get('/', (req, res) => res.status(200).json({message: 'olá mundo, funcionando!!!'}));

//1° parâmetro '/': é a rota
//2° parâmetro (req, res) => {}: Este espera uma função de callback

//req: Essa é a Request (ou requisição), é por meio dela que recebemos os dados (envio por query, params e body);
//res: Essa é a Response (ou resposta), é por meio dela que respondemos o que nos é solicitado;


//Listando times por meio do método GET
const teams = [
    {
        id: 1,
        name: 'São Paulo Futebol Clube',
        initials: 'SPF',
    },
    {
        id: 2,
        name: 'Clube Atlético Mineiro',
        initials: 'CAM',
    },
];

//Agora, você vai criar um endpoint do tipo GET com a rota /teams
app.get('/teams', (req, res) => res.status(200).json({ teams }));


//Cadastrando times por meio do método POST
app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);

    res.status(201).json({ team: newTeam });
});

//Editando times por meio do método PUT
app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;

    const updateTeam = teams.find((team) => team.id === Number(id));

    if (!updateTeam) {
        return res.status(404).json({ message: 'Team not found' });
    }

    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam });
});

//Deletando times por meio do método DELETE
app.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    const arrayPosition = teams.findIndex((team) => team.id === Number(id));
    teams.splice(arrayPosition, 1);

    res.status(200).end();
});


module.exports = app;