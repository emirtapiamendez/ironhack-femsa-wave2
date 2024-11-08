# Simulated CI/CD Pipeline Configuration

## Ventajas y desventajas

#### Build

- Ventajas: La imagen que se genera es la misma en cualquier entorno, por lo que el código se ejecutará igual en local,dev, qa y producción, también se puede automatizar la generación de imágenes y de esta forma utilizar la última versión del código de un proyecto.

- Desventajas: En algunos casos las imágenes que se genaran pueden ocupar mucho espacio de almacenamiento.

#### Test

- Ventajas: Se automatiza todo el proceso de pruebas en un entorno lo más similar al productivo y facilita el uso de servicios
- Desventajas: Ejecutar muchas pruebas para múltiples servicios en contenedores puede consumir de muchos recursos.

#### Deploy

- Ventajas: Si hay un problema, se puede revertir a una versión anterior de la imagen rápidamente.
- Desventajas: Las imágenes grandes pueden demorar demasiado en ser desplegadas.

## Mejoras

#### Build:
Podemos usar una imagen base ligera (`alpine`), para reducir el tamaño.

#### Test:
Ejecutar pruebas en paralelo en diferentes contenedores o en diferentes etapas del pipeline.

#### Deploy:
Podríamos dividir las imagenes en múltiples contenedores para distribuir servicios especificos.

