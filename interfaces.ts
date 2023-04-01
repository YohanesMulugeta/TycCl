const oldCivic = { name: 'civic', made: 2000, broken: true };

function printVehivcle(vehicle: {
  name: string;
  made: number;
  broken: boolean;
}): void {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.made}`);
  console.log(`Broken? ${vehicle.broken}`);
}

printVehivcle(oldCivic);
