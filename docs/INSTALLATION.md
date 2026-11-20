# Local installation

1. Install Node.js 20+.
2. Clone the repository and check out the development branch.
3. Run `npm test` and `npm run check`.
4. Start the API with `npm start`; check `http://127.0.0.1:3000/health`.

This only starts a health endpoint and domain-logic tests. It does not configure a database, merchant account, WooCommerce checkout, Pi Testnet, or Mainnet. Never use production credentials in local files.
