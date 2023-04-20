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

const drink = {
  color: 'brown',
  carbonated: true,
  sugarContent: 40,
  summary() {
    return `My drink has ${this.sugarContent} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  // This will only check if the item satsfies the Reportable Interface That is
  // whether the item has a sumary function that returns a string or not
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
