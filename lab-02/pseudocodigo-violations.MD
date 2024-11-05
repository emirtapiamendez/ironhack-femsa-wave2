```
class SystemManager {
  processOrder(order) {
    if (order.type == "standard") {
      verifyInventory(order);
      processStandardPayment(order);
    } else if (order.type == "express") {
      verifyInventory(order);
      processExpressPayment(order, "highPriority");
    }
    updateOrderStatus(order, "processed");
    notifyCustomer(order);
  }

  verifyInventory(order) {
    // Checks inventory levels
    if (inventory < order.quantity) {
      throw new Error("Out of stock");
    }
  }

  processStandardPayment(order) {
    // Handles standard payment processing
    if (paymentService.process(order.amount)) {
      return true;
    } else {
      throw new Error("Payment failed");
    }
  }

  processExpressPayment(order, priority) {
    // Handles express payment processing
    if (expressPaymentService.process(order.amount, priority)) {
      return true;
    } else {
      throw new Error("Express payment failed");
    }
  }

  updateOrderStatus(order, status) {
    // Updates the order status in the database
    database.updateOrderStatus(order.id, status);
  }

  notifyCustomer(order) {
    // Sends an email notification to the customer
    emailService.sendEmail(
      order.customerEmail,
      "Your order has been processed."
    );
  }
}
```

#### Violación del principio de responsabilidad única (SRP) en la clase ```SystemManager``` ya que tiene múltiples responsabilidades, como verificar, procesar distintos tipos de pagos, notificar.

#### Violación del principio abierto/cerrado (OCP) en la función processOrder ya que la funcionalidad no está abierta para extender sin modificar el código actual.

#### Violación del principio de inversión de dependencias (DIP) en la clase ```SystemManager``` porque no depende de interfaces o clases abstractas.

### Ajustes

#### Se implementan las interfaces ```IPaymentOrder```, ```IInventoryService```, ```IDatabaseService```, ```INotifyOrder```  para desacoplar las clases concretas y solventar el incumplimiento del principio de inversión de dependencias (DIP).

#### Se crean las clases necesarias para implementar los métodos de las interfaces definidas y tener la responsabilidad sobres estas clases, esto para solventar el incumplimiento del principio de responsabilidad única (SRP).

#### Se crean múltiples interfaces específicas, esto para aplicar el del principio de segregación de interfaces (ISP).

### Se generan interfaces para poder elegir diferentes objectos sin afectar funcionamiento cumpliendo con el principio de sustitución de Liskov (LSP), en la función de ```processOrder```.