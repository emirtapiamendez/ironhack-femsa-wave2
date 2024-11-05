## Escenario 3

```
TEST UIResponsiveness
  UI_COMPONENT uiComponent = setupUIComponent(1024)
  ASSERT_TRUE(uiComponent.adjustsToScreenSize(1024), "UI should adjust to width of 1024 pixels")
END TEST

```

### Refactor

```
@ValidResolutions({
    "1024",
    "1280"
})
TEST UIResponsivenessShouldBeAdjustSuccessfully(INTEGER resolution)
  UI_COMPONENT uiComponent = setupUIComponent(resolution)
  ASSERT_TRUE(uiComponent.adjustsToScreenSize(resolution), "UI should adjust to width of {resolution} pixels")
END TEST

@InvalidResolutions({
    "500",
    "720"
})
TEST UIResponsivenessShouldBeNotAdjustSuccessfully(INTEGER resolution)
  UI_COMPONENT uiComponent = setupUIComponent(resolution)
  ASSERT_FALSE(uiComponent.adjustsToScreenSize(resolution), "UI should not adjust to width of {resolution} pixels")
END TEST
```

#### Explicación

Este escenario lo dividí en dos pruebas, una para tener los valores válidos y en otra los inválidos. Estos valores se pasan por parámetros para poder probar distintos tipo de reoluciones. Además se les agrega un nombre un poco más descriptivo así como el mensaje del `ASSERT`.
