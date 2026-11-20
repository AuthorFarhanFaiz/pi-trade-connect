# Payment flow and feasibility gates

## Current implementation status: NOT IMPLEMENTED

This repository version does not create, approve, complete, reconcile, refund, or settle Pi payments. It has no Pi credentials or Pi SDK dependency. Any claim that a real transaction is supported would be false.

## Required official integration lifecycle

The official Pi payment documentation must be consulted at implementation time and pinned in the implementation notes. The documented app flow involves SDK payment creation and server-side approval/completion callbacks. The server—not the browser—must be authoritative for order payment status. Callback replay, duplicate payment IDs, order/amount mismatch, timeouts, and provider outages must fail safely and be auditable.

Official reference sources supplied for the project:

- https://minepi.com/developers/
- https://github.com/pi-apps/pi-platform-docs

Verify current SDK/API versions, exact endpoints, authentication, payment DTO fields, sandbox/Mainnet permissions, and lifecycle requirements against these sources before coding. Do not copy undocumented URLs or assume old docs remain current.

## Settlement, fees and refunds

No buyer-to-merchant direct settlement, platform custody, escrow, automatic split, commission collection, or refund is implemented or asserted. Their availability and legality remain **BLOCKED pending official technical confirmation and jurisdiction-specific legal review**. A safer initial model to investigate is a merchant-owned Pi app/payment account with the merchant as the direct payee, while PI TRADE CONNECT bills separately for its software subscription. This alternative also requires confirmation that the documented flow and platform terms allow it.

Refunds must be represented as requests until an approved, funded, supported refund process exists; never label a request as a completed refund. Keep high-value transactions disabled pending limits, compliance, liquidity, operational, and security verification.
