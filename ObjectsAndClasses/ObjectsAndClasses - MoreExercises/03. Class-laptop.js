class Laptop {
    constructor(info, quality) {
        this.producer = info.producer;
        this.age = info.age;
        this.brand = info.brand;
        this.isOn = false;
        this.quality = quality;
    }
    
    turnOn() {
        this.isOn = true;
        this.quality --;
    }

    turnOff() {
        this.isOn = false;
        this.quality --;
    }

    showInfo() {
        return JSON.stringify({
            producer: this.producer,
            age: this.age,
            brand: this.brand,
        })
    }

    get price() {
        let result = (800 - (this.age * 2) + (this.quality * 0.5));
        return result;
    }


}


let info = {producer: "Lenovo", age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)

