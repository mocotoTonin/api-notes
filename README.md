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

```json
{
  "id": "1",
  "titulo": "Lembretes",
  "texto": "Comprar leite e pão",
  "criadoEm": "2026-04-28T10:00:00Z"
}
