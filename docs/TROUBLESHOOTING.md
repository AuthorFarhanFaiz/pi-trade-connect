# Troubleshooting

- `npm test` requires Node.js 20+.
- If port 3000 is occupied, set `PORT` to an available local port.
- The API only implements `GET /health`; other paths intentionally return 404.
- `paymentsEnabled: false` is intentional. No payment endpoint or provider integration exists.
- There is no WooCommerce ZIP, Testnet configuration, or Mainnet readiness in this version.
