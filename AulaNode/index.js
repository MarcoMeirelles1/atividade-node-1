const express = require('express');
const app = express();

const port = 3001;
let list = [];

app.use(express.json());

app.get('/visualizar', (req, res) => {
    res.send(list);
}); // Responde com a lista de usuários

app.post('/cadastrar', (req, res) => {
    const { nome, idade } = req.body;
    list.push({ nome, idade });
    res.send(`Usuário cadastrado: Nome: ${nome}, Idade: ${idade}`);
});


app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params; // Obtém o nome do usuário a ser deletado
    const index = parseInt(id,10) // Encontra o índice do usuário
    list.splice(index,1)
    res.send(`usuario deletado ${JSON.stringify(list)}`)
}); // Deleta um usuário pelo nome

app.listen(port, () => {
    console.log(`Exemplo de Maricon na porta ${port}`);
}); // Inicia o servidor
