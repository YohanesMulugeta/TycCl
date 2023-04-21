class Vehicle {
  protected drive(): void {
    console.log('chagga chugga');
  }

  protected honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  protected drive(): void {
    console.log('vroohm vrooooohhm  ');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const toyota = new Car();
toyota.startDrivingProcess();

// const vehicle = new Vehicle();

// vehicle.drive();
// vehicle.honk();
