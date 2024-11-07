## Scenario 4: User Data Aggregation: Summarize the number of active users by location (NoSQL)

```
db.users.aggregate([
  { $match: { status: "active" } },
  { $group: { _id: "$location", totalUsers: { $sum: 1 } } },
]);
```

### Refactor

```
db.users.createIndex({ status: 1 });

db.users.aggregate([
    { $match: { status: "active" } },
    { $group: { _id: "$location", totalUsers: { $sum: 1 } } },
```

#### Explicación

Podríamos generar un índiceo para el campo `status` para optimizar la busqueda y ordenamiento.
