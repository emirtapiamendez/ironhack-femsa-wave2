## Scenario 1: Customer Query: Find all customers from London and sort by CustomerName (SQL)

```
SELECT CustomerName
FROM Customers
WHERE City = 'London' ORDER BY CustomerName;
```

### Refactor

```
CREATE INDEX idx_costumers_city_costumer_name ON Customers(City, CustomerName);

SELECT CustomerName
FROM Customers
WHERE City = 'London'
ORDER BY CustomerName;
```

#### Explicación

Podríamos generar un índice compuesto para las columnas `Customers.City` y `Customers.CustomerName` esto para mejorar tanto el filtrado como la ordenación.
