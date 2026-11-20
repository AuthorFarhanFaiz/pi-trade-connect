# Deployment status

There is no production deployment configuration. The included API is health-only and intended for local development. Do not deploy it as a commerce or payment service.

A production plan must add a supported database, migration/rollback process, HTTPS termination, secret manager, least-privilege service identities, monitoring, alerting, backup/restore drills, incident response, and security review. Mainnet is never enabled automatically; production deployment requires explicit owner authorization.
