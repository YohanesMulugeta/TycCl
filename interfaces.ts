// INTERFACES ARE NEW TYPES WE CREATE

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  // This will only check if the item satsfies the Reportable Interface
  console.log(item.summary());
};

printSummary(oldCivic);
