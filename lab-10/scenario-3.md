### Scenario 3 C# Snippet:

```
// Unnecessary computations in data processing
public List<int> ProcessData(List<int> data) {
    List<int> result = new List<int>();
    foreach (var d in data) {
        if (d % 2 == 0) {
            result.Add(d * 2);
        } else {
            result.Add(d * 3);
        }
    }
    return result;
}
```
### Refactor
```
public List<int> ProcessData(List<int> data) {
    return data.Select(d => d % 2 == 0 ? d * 2 : d * 3).ToList();
}
```
Podríamos reemplazar el bucle con LINQ, de esta forma evitariamos la necesidad de manejar la lista manualmente, tambien podríamos aplicar un operador ternario directamente en la expresión. De esta forma el código se hace un poco más legible y limpio.