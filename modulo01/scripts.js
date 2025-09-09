const express = require('express');
// console.log(express);

const server = express();

server.use(express.json());

// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request body = {nome: 'Nodejs, tipo: 'Backend'}

// localhost:3000/curso
// server.get('/curso', (req, res) => {
//     // console.log('ACESSOU A ROTA!');
//     // return res.send('ola');

//     return res.json({curso: 'Nodejs'});
// });

// QUERY PARAMS
// localhost:3000/curso
// server.get('/curso', (req, res) => {

//     const nome = req.query.nome;

//     return res.json({curso: `Aprendendo ${nome}`});
// });


// ROUTE PARAMS
// localhost:3000/curso/2
// server.get('/curso/:id', (req, res) => {
//     const id = req.params.id;

//     return res.json({curso: `Curso ${id}`});
// });

// ROUTE PARAMS
// const cursos = ['NodeJs', 'Javascript', 'React Native'];

// // localhost:3000/curso/2
// server.get('/curso/:index', (req, res) => {
//     const { index } = req.params;

//     return res.json(cursos[index]);
// });

// CRUD => Create, Read, Update, Delete

const cursos = ['NodeJs', 'Javascript', 'React Native'];


// Middleware Global
server.use((req, res, next) => {
    console.log("RESQUISIÇÃO CHAMADA");

    return next();
});

function checkCursos(req, res, next){
    if(!req.body.name){
        return res.status(400).json({ error: "Nome do curso é obrigatório" });
    }

    return next();
}

function checkIndexCurso(req, res, next){
    const index = cursos[req.params.index];
    if(!index){
        return res.status(400).json({ error: "O curso não existe" });
    }

    return next();
}


// localhost:3000/curso/2
server.get('/cursos/:index', checkIndexCurso, (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

// Criando 

server.post('/cursos', checkCursos, (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

// Lendo

server.get('/cursos', checkIndexCurso, (req, res) => {
    return res.json(cursos);
});

// Atualizando

server.put('/cursos/:index', checkCursos, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});


// Deletando 

server.delete('/cursos/:index', checkIndexCurso, (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.json(cursos);
});

server.listen(3000);