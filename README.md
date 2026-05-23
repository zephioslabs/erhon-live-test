# erhon-live-test

Minimal Express todo app used as live test fixture for Erhon's
end-to-end pipeline (explorer → bug capture → patch → validation
→ PR feedback).

## Run locally

```bash
npm install
npm start        # listens on http://localhost:4280
```

## What's inside

- `server.js` — Express bootstrap
- `routes/todos.js` — todo create/list API at `/api/todos`
- `public/index.html` — minimal form UI

## Health

```bash
curl http://localhost:4280/health
# {"ok":true}
```
