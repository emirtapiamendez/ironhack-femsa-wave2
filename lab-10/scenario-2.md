### Scenario 2 Java Snippet:

```
// Redundant database queries
public class ProductLoader {
    public List<Product> loadProducts() {
        List<Product> products = new ArrayList<>();
        for (int id = 1; id <= 100; id++) {
            products.add(database.getProductById(id));
        }
        return products;
    }
}
```

### Refactor

```
public class ProductLoader {
    public List<Product> loadProducts(List<Int> ids) {
        return database.getProductsByIds(ids);
    }
}

```

Se pueden utilizar consultas en lote `getProductsByIds` para reducir llamadas a la base de datos tambien podemos modificar el método para ahora recibir una lista de id como parámetro, de esta forma evitamos tener menor interacciones en bd