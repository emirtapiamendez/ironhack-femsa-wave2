# Global Configuration Management: Design a system that ensures a single, globally accessible configuration object without access conflicts

### Design a system that ensures a single, globally accessible configuration object without access conflicts.

#### Propuesta: Podríamos utilizar Singleton para crear una única instancia de un objeto accesible globalmente, asegurando que no haya conflictos de acceso.
```
 public sealed class Singleton
  {
      private static readonly Lazy<Singleton> lazy = new Lazy<Singleton>(() => new Singleton());

      public static Singleton Instance { get { return lazy.Value; } }

      private Singleton()
      {
      }
  }
```