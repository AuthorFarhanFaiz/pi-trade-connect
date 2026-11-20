# Environment variables

The initial API has no secrets or external integrations and reads only:

- `HOST` — bind address; defaults to `127.0.0.1`.
- `PORT` — listen port; defaults to `3000`.

Do not set `HOST=0.0.0.0` on an untrusted network. Pi credentials and production secrets are not yet supported; do not invent variable names or place secrets in the repository. A validated `.env.example` will be added when a real integration is implemented.
