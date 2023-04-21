class Vehicle {
  protected color: string;

  constructor(color: string) {
    this.color = color.slice(0, 1).toUpperCase() + color.slice(1).toLowerCase();
  }

  protected drive(): void {
    console.log('chagga chugga');
    this.honk();
  }

  private honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  constructor(color: string, protected brand: string) {
    super(color);
  }

  protected drive(): void {
    console.log('vroohm vrooooohhm  ');
  }

  startDrivingProcess(): void {
    this.drive();
    console.log(`A ${this.color} ${this.brand} Car Started Rolling.`);
  }
}

const toyota = new Car('white', 'Toyota');
toyota.startDrivingProcess();

// const vehicle = new Vehicle();

// vehicle.drive();
// vehicle.honk();
