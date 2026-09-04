const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;
const FILE = 'data.json';

// Permite receber JSON
app.use(bodyParser.json());

// Libera acesso externo (CORS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type'
    );
    next();
});

// Função para ler o arquivo
function readNotes() {
    try {
        const data = fs.readFileSync(FILE);
        return JSON.parse(data);
    } catch {
        return [];
    }
}

// Função para salvar o arquivo
function saveNotes(notes) {
    fs.writeFileSync(
        FILE,
        JSON.stringify(notes, null, 2)
    );
}

// GET - Listar notas
app.get('/api/notes', (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

// POST - Criar nota
app.post('/api/notes', (req, res) => {
    const notes = readNotes();

    const novaNota = {
        id: Date.now().toString(),
        titulo: req.body.titulo,
        texto: req.body.texto,
        criadoEm: new Date().toISOString()
    };

    notes.push(novaNota);
    saveNotes(notes);

    res.status(201).json(novaNota);
});

// GET - Buscar nota por ID
app.get('/api/notes/:id', (req, res) => {
    const notes = readNotes();

    const nota = notes.find(
        n => n.id === req.params.id
    );

    if (nota) {
        res.json(nota);
    } else {
        res.status(404).json({
            erro: 'Nota não encontrada'
        });
    }
});

// PUT - Editar nota
app.put('/api/notes/:id', (req, res) => {
    const notes = readNotes();

    const index = notes.findIndex(
        n => n.id === req.params.id
    );

    if (index >= 0) {
        notes[index].titulo = req.body.titulo;
        notes[index].texto = req.body.texto;

        saveNotes(notes);

        res.json(notes[index]);
    } else {
        res.status(404).json({
            erro: 'Nota não encontrada'
        });
    }
});

// DELETE - Excluir nota
app.delete('/api/notes/:id', (req, res) => {
    const notes = readNotes();

    const novasNotas = notes.filter(
        n => n.id !== req.params.id
    );

    if (novasNotas.length === notes.length) {
        return res.status(404).json({
            erro: 'Nota não encontrada'
        });
    }

    saveNotes(novasNotas);

    res.json({
        mensagem: 'Nota removida'
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(
        `Servidor rodando em http://localhost:${PORT}`
    );
});