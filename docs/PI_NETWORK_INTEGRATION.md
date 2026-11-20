# Pi Network integration status

**Status: BLOCKED / NOT IMPLEMENTED.** The current repository does not include the Pi SDK, payment API client, Pi credentials, Testnet integration, or app registration. No Pi payment can be made through this code.

Before implementation, verify directly from the official Pi developer documentation the current SDK release, authentication scopes, server API endpoints and payloads, approval/completion lifecycle, sandbox setup, Mainnet access and app review. Record the date/version of verification in this document and add automated sandbox tests using credentials supplied through a secret manager.

Never assume that payment completion implies a merchant payout, platform commission, escrow capability, or refund API. Confirm payment destination and allowed application-to-user flows from the official documentation and legal advisers. Mainnet must remain disabled absent explicit app approval, legal review, production secrets, risk controls, and owner authorization.
