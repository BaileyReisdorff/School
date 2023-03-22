class Musician {
  constructor(name, instrument) {
    this.name = name;
    this.instrument = instrument;
  }

  describe() {
    return `${this.name} plays ${this.instrument}`;
  }
}

class Band {
  constructor(name) {
    this.name = name;
    this.musicians = [];
  }

  addMusician(musician) {
    if (musician instanceof Musician) {
      this.musicians.push(musician);
    } else {
      throw new Error(
        `You can only add an instance of Musician. Argument is not a musician: ${musician}`
      );
    }
  }

  describe() {
    return `${this.name} has ${this.musicians.length} musicians.`;
  }
}

class Menu {
  constructor() {
    this.bands = [];
    this.selectedBand = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createBand();
          break;
        case "2":
          this.viewBand();
          break;
        case "3":
          this.deleteBand();
          break;
        case "4":
          this.displayBands();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert("Later Gator!");
  }

  showMainMenuOptions() {
    return prompt(`
            0) exit
            1) create new band
            2) view band
            3) delete band
            4) display all bands
        `);
  }

  showBandMenuOptions(bandInfo) {
    return prompt(`
        0) back
        1) create musician
        2) delete musician
        -------------------
        ${bandInfo}
        `);
  }

  displayBands() {
    let bandString = "";
    for (let i = 0; i < this.bands.length; i++) {
      bandString += i + ") " + this.bands[i].name + "\n";
    }
    // alert(bandString);
    let index = prompt(`Enter index of band to view: \n\n${bandString}`);
    this.viewBand(index);
  }

  createBand() {
    let name = prompt("Enter new band name: ");
    this.bands.push(new Band(name));
  }

  viewBand(viewIndex) {
    let index = 0;
    if (!viewIndex) {
        let bandName = prompt("Enter the band name you wish to view: ");
        for (let i = 0; i < this.bands.length; i++) {
          if (this.bands[i].name == bandName) {
            index = i;
          }
        }
    } else {
        index = viewIndex;
    }
    
    if (index > -1 && index < this.bands.length) {
      this.selectedBand = this.bands[index];
      let description = "Band Name: " + this.selectedBand.name + "\n";

      for (let i = 0; i < this.selectedBand.musicians.length; i++) {
        description +=
          i +
          ") " +
          this.selectedBand.musicians[i].name +
          " - " +
          this.selectedBand.musicians[i].instrument +
          "\n";
      }

      let selection = this.showBandMenuOptions(description);
      switch (selection) {
        case "1":
          this.createMusician();
          break;
        case "2":
          this.deleteMusician();
      }
    }
  }

  deleteBand() {
    let bandName = prompt("Enter the band name you wish to delete: ");
    let index = 0;
    for (let i = 0; i < this.bands.length; i++) {
      if (this.bands[i].name == bandName) {
        index = i;
      }
    }
    // let index = prompt("Enter the index of the team that you wish to delete: ");
    if (index > -1 && index < this.bands.length) {
      this.bands.splice(index, 1);
    }
  }

  createMusician() {
    let name = prompt("Enter name for new musician: ");
    let instrument = prompt("Enter instrument for new musican: ");
    this.selectedBand.addMusician(new Musician(name, instrument));
  }

  deleteMusician() {
    let index = prompt(
      "Enter the index of the musician that you wish to delete: "
    );
    if (index > -1 && index < this.selectedBand.musicians.length) {
      this.selectedBand.musicians.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
