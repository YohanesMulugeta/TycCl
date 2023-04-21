class Vehicle {
  drive(): void {
    console.log('chagga chugga');
  }

  honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroohm vrooooohhm  ');
  }
}

const toyota = new Car();
toyota.drive();
toyota.honk();

// const vehicle = new Vehicle();

// vehicle.drive();
// vehicle.honk();
