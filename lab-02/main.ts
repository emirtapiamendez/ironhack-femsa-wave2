type Order = {
  id: number;
  amount: number;
  type: "standard" | "express";
};

interface IInventoryService {
  verify(order: Order): void;
}

class InventoryService implements IInventoryService {
  verify(order: Order) {
    console.log("Verifying order", order);
  }
}

interface IPaymentOrder {
  process(order: Order): boolean;
}

class PaymentStandard implements IPaymentOrder {
  process(order: Order) {
    console.log("Processing payment of", order.id);
    return true;
  }
}

class PaymentExpress implements IPaymentOrder {
  constructor(private priority: string) {}
  process(order: Order) {
    console.log(
      `Processing payment express of ${order.id} with priority ${this.priority}`
    );
    return true;
  }
}

interface IDatabaseService {
  updateOrderStatus(orderId: number, status: string): void;
}

class DatabaseService implements IDatabaseService {
  updateOrderStatus(orderId: number, status: string) {
    console.log(`Updating order ${orderId} status to ${status}`);
  }
}

interface INotifyOrder {
  send(order: Order): void;
}

class EmailNotificationService implements INotifyOrder {
  send(order: Order): void {
    console.log("Sending email of order", order.id);
  }
}

class SystemManager {
  constructor(
    private inventoryService: IInventoryService,
    private databaseService: IDatabaseService,
    private notifyOrder: INotifyOrder
  ) {}

  processOrder(order: Order): void {
    this.inventoryService.verify(order);

    let processPayment: IPaymentOrder;

    switch (order.type) {
      case "standard":
        processPayment = new PaymentStandard();
        break;
      case "express":
        processPayment = new PaymentExpress("highPriority");
        break;
      default:
        throw new Error("Unknown order type");
    }

    processPayment.process(order);
    this.databaseService.updateOrderStatus(order.id, "processed");
    this.notifyOrder.send(order);
  }
}
