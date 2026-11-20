# Architecture (initial foundation)

## Stack choice

The API foundation uses Node.js built-in HTTP modules and ECMAScript modules, avoiding unnecessary dependencies in the first increment. Node's built-in test runner makes its small pure-logic modules reproducibly testable without a dependency install. This is a starting point, not a claim that the platform is production-complete.

## Intended modular monolith

- `apps/api`: versioned HTTP API and application services.
- `apps/web`: merchant and buyer interfaces (not implemented).
- `packages/payment-core`: exact amount arithmetic and payment domain rules.
- `integrations/woocommerce`: independently installable WordPress/WooCommerce adapter (not implemented).
- `database/migrations`: durable relational schema (not implemented).

Provider-specific behavior must be isolated behind an adapter. Do not couple order management to one commerce platform. No payment/custody capability is currently wired.

## Trust boundaries

Browser and plugin payloads are untrusted. Payment amount, currency, merchant ownership, order mapping, and final status must be reconstructed and verified server-side. The current health-only API does not accept payment commands.

## Current limitations

There is no database, identity service, merchant portal, web application, authorization layer, Pi SDK, Pi server integration, webhook processor, WooCommerce plugin, deployment setup, or production monitoring. Do not expose this version to the public internet as a payment service.
