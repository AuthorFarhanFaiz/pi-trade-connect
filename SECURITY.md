# Security Policy

## Current scope

This repository is an early development foundation and is **not suitable for production payments or deployment with customer data**. The API currently exposes only a basic health endpoint. Authentication, authorization, persistent storage, CSRF/CORS policy, production rate limiting, monitoring, and payment-provider integration are not implemented.

## Reporting a vulnerability

Do not include secrets, wallet credentials, or personal data in public reports. Contact the repository owner privately through GitHub's security reporting feature if enabled, or use a private channel provided by the owner.

## Payment safety invariants

- Never ask for or store Pi wallet passphrases or private keys.
- Never trust browser-provided payment status, amount, or transaction identity.
- Do not mark an order paid until the server has verified completion through the official provider flow.
- Do not implement custody, escrow, split payments, or payouts without verified technical support and legal authorization.
- Keep production credentials outside source control and logs.

## Before production

Complete a threat model and independent security review; add maintained authentication, authorization, secure session management, abuse controls, durable audit logging, database backups, dependency and secret scanning, and operational incident response. Mainnet activation requires explicit owner authorization and the relevant Pi approvals.
