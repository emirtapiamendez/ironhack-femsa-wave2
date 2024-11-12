#State Change Notification Across System Components

### Ensure components are notified about changes in the state of other parts without creating tight coupling.

#### Propuesta: Podríamos usar el patrón Observeador pues permite que los componentes se suscriban a cambios en otros objetos sin crear dependencias directas.


```
public interface IObserver
{
    void Update(string state);
}

public class Subject
{
    private List<IObserver> _observers = new List<IObserver>();
    private string _state;

    public void Attach(IObserver observer) => _observers.Add(observer);
    public void Detach(IObserver observer) => _observers.Remove(observer);

    public string State
    {
        get => _state;
        set
        {
            _state = value;
            NotifyObservers();
        }
    }

    private void NotifyObservers()
    {
        foreach (var observer in _observers)
        {
            observer.Update(_state);
        }
    }
}

public class ConcreteObserver : IObserver
{
    public void Update(string state)
    {
        Console.WriteLine($"Observer notified with new state: {state}");
    }
}

```