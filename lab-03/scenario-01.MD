## Test 1

```
TEST UserAuthentication
  ASSERT_TRUE(authenticate("validUser", "validPass"), "Should succeed with correct credentials")
  ASSERT_FALSE(authenticate("validUser", "wrongPass"), "Should fail with wrong credentials")
END TEST
```

### Refactor

```
TEST UserAuthenticationValidPass
  ASSERT_TRUE(authenticate("validUser", "validPass"), "Should succeed with correct credentials")
END TEST

TEST UserAuthenticationInvalidPass
  ASSERT_FALSE(authenticate("validUser", "wrongPass"), "Should fail with wrong credentials")
END TEST
```

#### Explicación

Se separan las pruebas ya que al ejecutar la prueba solo una sería evaluada. La primera prueba para validar correctamente la contraseña de un usuario, mientras que la segunda validar que las credenciales son incorrectas. De estas dos pruebas que fueron separadas tambien se les modificó el nombre para ser más descriptivas. La función `authenticate()` debería ser implementada como un mock o stub.
