const express = require('express');
const app = express();

const port = 3001;
let list = [];

app.use(express.json());

app.get('/visualizar', (req, res) => {
    res.send(list);
}) // Responde com a lista de usuários

app.post('/cadastrar', (req, res) => {
    const { nome, idade } = req.body;
    const id = list.length;
    list.push({ id, nome, idade });
    res.send(`Usuário cadastrado: Nome: ${nome}, Idade: ${idade}`);
}) //cadastra um usuario

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;
    try{
        list[id - 1] = {id, nome, idade};
        res.send(`Usuario atualizado!\n\nID: ${id}\nNovo nome: ${nome} \nNova idade ${idade}`)
    } catch(err) {
        res.send("Usuario não atualizado");
    }
});

app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params; 
    if (list[id - 1]) {
        list.slice(id - 1, 1);
        res.send('usuario deletado')
    } else {
        res.status(408).send('usuario não encontrado');
    }

}) 

app.listen(port, () => {
    console.log(`entrada ${port}`);
}) // Inicia o servido
