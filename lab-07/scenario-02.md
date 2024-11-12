# Dynamic Object Creation Based on User Input

### Implement a system to dynamically create various types of user interface elements based on user actions.

#### Propuesta: Para estre escenario podriamso utilizar patrón de diseño factory ya que permite crear diferentes tipos de objetos según la entrada del usuario, simplificando la creación dinámica de elementos de interfaz.

```
public interface IUIElement
{
    void Render();
}

public class RadioButton : IUIElement
{
    public void Render() => Console.WriteLine("Renderizando radio button");
}

public class CheckBox : IUIElement
{
    public void Render() => Console.WriteLine("Renderizando Check Box");
}

public class UIElementFactory
{
    public static IUIElement CreateElement(string elementType)
    {
        return elementType switch
        {
            "RadioButton" => new RadioButton(),
            "CheckBox" => new CheckBox(),
            _ => throw new ArgumentException("Tipo desconocido")
        };
    }
}
```
