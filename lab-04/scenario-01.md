## Scenario 1: Pseudo-Code for Authentication System

```
FUNCTION authenticateUser(username, password):
  QUERY database WITH username AND password
  IF found
    RETURN True
  ELSE
    RETURN False

```

### Refactor

```
FUNCTION authenticateUser(username, password):
  IF (NOT ValidData(username, password))
    RETURN False

  QUERY database WITH username AND EncryptData(password) AS PARAMETERS

  IF found
    RETURN True
  ELSE
    RETURN False
```

#### Explicación

Para asegurar la protección de la función `authenticateUser` se tendrá que realizar una validación de los datos de entrada (nulos, caracteres invalidos, longitud, etc...), además podríamos agregar un método de cifrado a la contraseña y una forma de realizar la consulta parametrizada a base de datos de tal manera que no sea vulnerable a inyección SQL.
