# PI TRADE CONNECT

Integration-first commerce infrastructure for existing merchants. The repository is being built in verified, reviewable stages; it is **not yet a production payment service**.

## Current status

This initial foundation provides a dependency-free Node.js API health endpoint, exact integer-based fee arithmetic, a guarded payment-state transition model, and automated unit tests. Real Pi payment processing, the merchant portal, production database, installable checkout integration, and deployment artifacts are **not implemented yet**. No real payments can be processed by this version.

## Requirements

- Node.js 20 or newer
- npm (no third-party runtime packages are currently required)

## Run and test

```sh
npm test
npm run check
npm start
```

The API listens on `127.0.0.1:3000` by default. `GET /health` reports service availability only; it is not a payment or readiness signal.

## Payment safety

Pi payment creation/approval/completion, custody, payouts, split payments, and refunds must not be enabled without current official Pi documentation, valid developer credentials and app approval, and legal/compliance review. This code intentionally has no payment endpoint and never treats client-side claims as proof of payment. See [docs/PAYMENT_FLOW.md](docs/PAYMENT_FLOW.md).

## Architecture and roadmap

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) and [CHANGELOG.md](CHANGELOG.md). WooCommerce, Shopify, OpenCart, and other integrations will be developed as separate adapters; each platform's checkout and payment policies must be respected.

## License

GNU GPL-3.0, consistent with the repository license.
