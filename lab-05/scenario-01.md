## Scenario 1: Orders Query: Retrieve orders with many items and calculate the total price (SQL)

```
SELECT Orders.OrderID, SUM(OrderDetails.Quantity * OrderDetails.UnitPrice) AS TotalPrice
FROM Orders
JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
WHERE OrderDetails.Quantity > 10
GROUP BY Orders.OrderID;
```

### Refactor

```
CREATE INDEX idx_order_orderId ON Orders(OrderID);
CREATE INDEX idx_orderdetail_orderId_quantity ON OrderDetails(OrderID, Quantity);

SELECT Orders.OrderID, SUM(OrderDetails.Quantity * OrderDetails.UnitPrice) AS TotalPrice
FROM Orders
JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID WHERE OrderDetails.Quantity > 10
GROUP BY Orders.OrderID;

```

#### Explicación

Podríamos aseguranos de que la columna `OrderID` esté indexado en ambas tablas (`Orders` y `OrderDetails`) para mejorar el rendimiento de la consulta.
