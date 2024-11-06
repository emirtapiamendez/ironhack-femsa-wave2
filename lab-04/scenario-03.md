## Scenario 3: Secure Data Communication Plan

```
PLAN secureDataCommunication:
  IMPLEMENT SSL/TLS for all data in transit
  USE encrypted storage solutions for data at rest
  ENSURE all data exchanges comply with HTTPS protocols

```

### Refactor

```
PLAN secureDataCommunication:
  IMPLEMENT SSL/TLS for all data in transit
  USE encrypted storage solutions for data at rest
  ENSURE all data exchanges comply with HTTPS protocols
  IMPLEMENT RATE LIMIT TO PREVENT MULTIPLE REQUESTS
```

#### Explicación
Para reducir múltples llamados desde una ip especifica podríamos implementar la estrategia de rate limit, así como la implementación de protocolos TLS.