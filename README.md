# API Notes

API REST desenvolvida durante a Aula 05 da disciplina de Frameworks Front-end.

O projeto tem como objetivo disponibilizar uma API para gerenciamento de notas, utilizando operações CRUD (Create, Read, Update e Delete).

## Tecnologias

- Node.js
- Express.js
- JavaScript
- JSON
- Postman
- Render
- Git e GitHub

## Funcionalidades

A API possui as seguintes operações:

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/notes` | Lista todas as notas |
| POST | `/api/notes` | Cria uma nova nota |
| PUT | `/api/notes/:id` | Atualiza uma nota |
| DELETE | `/api/notes/:id` | Exclui uma nota |

## Estrutura das Notas

Cada nota possui:

{
  "id": "1",
  "titulo": "Lembretes",
  "texto": "Comprar leite e pão",
  "criadoEm": "2026-04-28T10:00:00Z"
}

```json
## Testes

Os endpoints da API foram testados utilizando o Postman, verificando as operações de:

GET — Listagem de notas
POST — Criação de nota
PUT — Edição de nota
DELETE — Exclusão de nota
Deploy

A API foi publicada utilizando o Render.

API online:

https://api-notes-12qm.onrender.com/api/notes

Front-end

Esta API é consumida por uma aplicação desenvolvida em React + TypeScript.

Repositório do Front-end:

https://github.com/mocotoTonin/frontend-notes

Aplicação online:

https://frontend-notes-eosin.vercel.app/

Objetivo da Atividade

O projeto foi desenvolvido para praticar a criação e o consumo de APIs REST, utilizando operações CRUD, testes com Postman e deploy de aplicações Web.
