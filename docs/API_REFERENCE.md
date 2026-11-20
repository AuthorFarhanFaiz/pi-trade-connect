# API reference (initial)

## `GET /health`

Local health check only. Returns HTTP 200 and JSON such as:

```json
{"status":"ok","service":"pi-trade-connect-api","paymentsEnabled":false}
```

This endpoint does not imply database, Pi Network, merchant, or payment readiness. All other routes currently return 404. There are no public payment or merchant APIs in this version.
