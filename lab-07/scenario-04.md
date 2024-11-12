# Efficient Management of Asynchronous Operations

### Manage multiple asynchronous operations like API calls which need to be coordinated without blocking the main application workflow.

#### Propuesta:

```
// Mediator interface
public interface IMediator
{
    Task NotifyAsync(string eventName);
}

// Concrete Mediator
public class AsyncMediator : IMediator
{
    private readonly ApiService1 _apiService1;
    private readonly ApiService2 _apiService2;

    public AsyncMediator(ApiService1 apiService1, ApiService2 apiService2)
    {
        _apiService1 = apiService1;
        _apiService2 = apiService2;
    }

    public async Task NotifyAsync(string eventName)
    {
        if (eventName == "StartOperations")
        {
            var task1 = _apiService1.MakeCallAsync();
            var task2 = _apiService2.MakeCallAsync();
            await Task.WhenAll(task1, task2);
        }
    }
}

// Service classes
public class ApiService1
{
    public async Task MakeCallAsync()
    {
        await Task.Delay(1000); // Simulate async API call
        Console.WriteLine("API Service 1 called");
    }
}

public class ApiService2
{
    public async Task MakeCallAsync()
    {
        await Task.Delay(1500); // Simulate async API call
        Console.WriteLine("API Service 2 called");
    }
}

// Client code
public class Program
{
    public static async Task Main()
    {
        var apiService1 = new ApiService1();
        var apiService2 = new ApiService2();
        var mediator = new AsyncMediator(apiService1, apiService2);

        await mediator.NotifyAsync("StartOperations");
        Console.WriteLine("All API calls completed");
    }
}

```