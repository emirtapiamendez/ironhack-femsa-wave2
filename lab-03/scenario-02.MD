## Escenario 2

```
TEST DataProcessing
  DATA data = fetchData()
  TRY
    processData(data)
    ASSERT_TRUE(data.processedSuccessfully, "Data should be processed successfully")
  CATCH error
    ASSERT_EQUALS("Data processing error", error.message, "Should handle processing errors")
  END TRY
END TEST
```

### Refactor

```
TEST DataShouldBeProcessedSuccesfully
   DATA data = FetchDataMock()
   processData(data)
   ASSERT_TRUE(data.processedSuccessfully, "Data should be processed successfully")
END TEST

TEST DataShouldBeProcessedWithError
   DATA data = WrongFetchDataMock()
   TRY
      processData(data)
   CATCH error
      ASSERT_EQUALS("Data processing error", error.message, "Should handle processing errors")
   END TRY
END TEST
```

#### Explicación

Se separa el escenario ya que al ejecutar la prueba solo una prueba podría ser evaluada. La primera de ellas para procesar correctamente la información y la segunda para procesar cuando ocurre una excepción. Tambien se modifican los nombres para que estos sean más descriptivos. La función `FetchData()` y `processData()` deberían ser implementadas como un mock o stub.
