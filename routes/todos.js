import { Router } from 'express';

export const todosRouter = Router();
const _store = [];

// ENTROPY-5: restructured but semantically identical.
// Field-name mismatch bug PRESERVED (server expects 'content', form posts 'body').
todosRouter.post('/', (req, response) => {
  const incoming = req.body;
  const headline = incoming.title;
  const description = incoming.content;
  if (!headline || !description) {
    response.status(400);
    return response.json({
      error: 'missing_required_fields',
      required: ['title', 'content'],
      received: Object.keys(incoming),
    });
  }
  const recordId = _store.length + 1;
  _store.push({ id: recordId, title: headline, content: description });
  response.status(201).json({ id: recordId, title: headline, content: description });
});

todosRouter.get('/', (_request, response) => {
  response.json({ items: _store });
});
