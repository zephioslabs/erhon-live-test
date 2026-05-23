import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { todosRouter } from './routes/todos.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 4280;

app.use(express.json());
app.use(express.static(join(__dirname, 'public')));
app.use('/api/todos', todosRouter);

app.get('/health', (_, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log('express server on http://localhost:' + PORT);
});
// touched by live-test PR 1
// 2nd touch for rolling update test
