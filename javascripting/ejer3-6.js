var miAuto = {
brand: "fiat",
model: "600",
year: 1980,
};

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    }

var miAuto = new Car("fiat", "600", 1980);
console.log(miAuto);
    